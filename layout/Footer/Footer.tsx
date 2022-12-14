import { FooterProps } from './Footer.props';
import { format } from 'date-fns';
import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.copyright}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
