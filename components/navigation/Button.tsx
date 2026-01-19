import Link from 'next/link';
import css from './Button.module.scss';

type Props = {
  href: string;
  big?: boolean;
  secondary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
  children?: string | React.ReactNode;
  blank?: boolean;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  big,
  secondary,
  outline,
  disabled,
  className,
  blank,
  title,
  type,
  onClick,
}: Props) {
  return href ? (
    <Link
      href={href}
      className={`${css.btn} ${secondary && css.secondary} ${big && css.big} ${
        outline && css.outline
      } ${className}`}
      target={blank ? '_blank' : ''}
      onClick={onClick}
      title={title}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={`${css.btn} ${big && css.big} ${outline && css.outline}
       ${className}`}
      onClick={onClick ? onClick : () => null}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
