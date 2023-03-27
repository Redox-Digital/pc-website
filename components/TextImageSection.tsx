import style from "@/styles/components/TextImageSection.module.scss";

type Props = {
  title: string;
  surtitle: string;
  children: string | JSX.Element;
  imgPath: string;
  light?: boolean;
};

export default function TextImageSection({
  title,
  surtitle,
  children,
  light,
  imgPath,
}: Props) {
  return (
    <section className={`${style.txtImgSection} ${light ? "light" : ""}`}>
      <div className={style.txtImgSection__surtitle}>
        <h5 className={light ? "color-accent" : ""}>{surtitle}</h5>
      </div>
      <div
        className={style.txtImgSection__image}
        style={{ backgroundImage: `url(${imgPath})` }}
      ></div>
      <div className={style.txtImgSection__content}>
        <h5 className={light ? "color-accent" : ""}>{surtitle}</h5>
        <h2 className="all-caps">{title}</h2>
        <div className={style.txtImgSection__texts}>{children}</div>
      </div>
    </section>
  );
}
