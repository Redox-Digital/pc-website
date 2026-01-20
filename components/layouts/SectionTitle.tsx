import css from './SectionTitle.module.scss';

type SectionTitleProps = {
  title: string | React.ReactNode;
  surtitle?: string;
  alignLeft?: boolean;
  className?: string;
  children?: string | React.ReactNode;
};

export default function SectionTitle({
  title,
  surtitle,
  alignLeft,
  className,
  children,
}: SectionTitleProps) {
  return (
    <div className={`${css.titles} ${alignLeft && css.left} ${className}`}>
      {surtitle && <p className={css.surtitle}>{surtitle}</p>}
      <h2>{title}</h2>
      {typeof children === 'string' ? <p className={css.description}>{children}</p> : children}
    </div>
  );
}
