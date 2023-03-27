import Service from "./Service";
import style from "@/styles/components/ServicesSection.module.scss";

export default function ServicesSection() {
  return (
    <section
      className={style.services}
      style={{ backgroundImage: `url(./layouts/bg-careers.svg)` }}
    >
      <h2>Nos services</h2>
      <div className={style.services__holder}>
        <Service slug="particuliers" title={"Particuliers"}>
          Conception et réalisation de projets d’aménagement intérieur et
          extérieur, décoration d’intérieur
        </Service>
        <Service slug="collectivites" title={"Collectivités"}>
          Conception et réalisation de projets d’aménagement extérieur, gestion
          de projets publics pour les communes, écoles, crèches, homes, etc.
        </Service>
        <Service slug="entreprises" title={"Entreprises"}>
          Tôlerie industrielle, fabrication de structures métalliques
          sur-mesure, mise aux normes de structures existantes
        </Service>
      </div>
      <div className={style.services__nav}>
        <a href="#particuliers">1</a>
        <a href="#collectivites">2</a>
        <a href="#entreprises">3</a>
      </div>
    </section>
  );
}
