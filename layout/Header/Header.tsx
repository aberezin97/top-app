import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      Header
    </div>
  );
};
