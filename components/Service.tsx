import Image from "next/image";
import Button from "./Button";
import style from "@/styles/components/Service.module.scss";

type Props = {
  title: string;
  slug: string;
  children: string | JSX.Element;
};

export default function Service({ title, children, slug }: Props) {
  return (
    <div id={slug} className={style.service}>
      <div className={style.service__title}>
        <Image
          height="120"
          width="120"
          src={`/pictograms/client_${slug}.png`}
          alt={""}
        ></Image>
        <h5>{title}</h5>
      </div>
      <small>{children}</small>
      <Button to={`/services/${slug}`}>En savoir plus</Button>
    </div>
  );
}
