import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({
  size = 'normal',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.normal]: size === 'normal',
        [styles.large]: size === 'large',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.gray]: color === 'gray',
        [styles.primary]: color === 'primary'
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
