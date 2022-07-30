import { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';
import styles from './Rating.module.css';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
      return (
        <span
          key={index}
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => displayRating(index + 1)}
          onMouseLeave={() => displayRating(rating)}
          onClick={() => onClick(index + 1)}
        >
          <StarIcon
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(index + 1, e)
            }
            tabIndex={isEditable ? 0 : -1}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const displayRating = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r: JSX.Element, index: number) => (
        <span key={index}>{r}</span>
      ))}
    </div>
  );
};
