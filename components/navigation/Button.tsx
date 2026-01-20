import Link from 'next/link';
import css from './Button.module.scss';

type Props = {
  href?: string;
  big?: boolean;
  small?: boolean;
  secondary?: boolean;
  outline?: boolean;
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
  small,
  secondary,
  outline,
  className,
  blank,
  title,
  type,
  onClick,
}: Props) {
  const getClassnames = () =>
    `${css.btn} ${secondary && css.secondary} ${big && css.big} ${small && css.small} ${
      outline && css.outline
    } ${className}`;

  return href ? (
    <Link
      href={href}
      className={getClassnames()}
      target={blank ? '_blank' : ''}
      onClick={onClick}
      title={title}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={getClassnames()}
      onClick={onClick ? onClick : () => null}
      title={title}
      disabled={!href && !onClick}
    >
      {children}
    </button>
  );
}
