import css from './SectionTitle.module.scss';

type SectionTitleProps = {
  title: string | React.ReactNode;
  surtitle?: string;
  children?: string | React.ReactNode;
};

export default function SectionTitle({ title, surtitle, children }: SectionTitleProps) {
  return (
    <div className={css.titles}>
      {surtitle && <p className={css.surtitle}>{surtitle}</p>}
      <h2>{title}</h2>
      {typeof children === 'string' ? <p className={css.description}>{children}</p> : children}
    </div>
  );
}
