import { PtagProps } from './Ptag.props';
import cn from 'classnames';
import styles from './Ptag.module.css';

export const Ptag = ({
  size = 'normal',
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.normal]: size === 'normal',
        [styles.large]: size === 'large',
        [styles.small]: size === 'small'
      })}
      {...props}
    >
      {children}
    </p>
  );
};
