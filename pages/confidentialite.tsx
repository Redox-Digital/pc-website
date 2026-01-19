import Button from '@/components/navigation/Button';
import Hero from '@/components/layouts/Hero';
import { deleteAllCookies } from '@/components/helpers/CookiesHelper';
import css from './Confidentialite.module.scss';
import Head from 'next/head';

type Props = {
  handleCookiePolicy: (answer: boolean) => void;
};

export default function Confidentialite({ handleCookiePolicy }: Props) {
  const refuseCookies = () => {
    deleteAllCookies();
    handleCookiePolicy(false);
  };

  return (
    <>
      <Head>
        <title>Protection des données & mentions légales | Paris & Comtesse SA</title>
      </Head>
      <Hero
        title="Confidentialité"
        subtitle="Déclaration de protection des données & mentions légales"
        imgUrl="/layouts/about-company-2.webp"
      />
      <main className={css.lpd}>
        <section className="light">
          <p>
            Vous trouverez sur cette page toutes les informations concernant les traitements de vos
            données sur notre site internet. Vous pouvez à tout moment{' '}
            <a href="#lpd-cookies">refuser l&rsquo;utilisation de cookies tiers</a>, ce choix
            n&rsquo;impactera pas votre expérience sur notre site.
          </p>
          <p>
            <b>Table des matières</b>
          </p>
          <ul>
            <li>
              <a href="#ml">Mentions légales</a>

              <ol>
                <li>
                  <a href="#ml-responsabilite">Responsabilité</a>
                </li>
                <li>
                  <a href="#ml-liens">Renvois et liens</a>
                </li>
                <li>
                  <a href="#ml-auteur">Droits d&rsquo;auteur</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#lpd">Protection des données</a>

              <ol>
                <li>
                  <a href="#lpd-responsabilite">Responsabilité</a>
                </li>
                <li>
                  <a href="#lpd-donnees">Données collectées</a>
                </li>
                <li>
                  <a href="#lpd-securite">Sécurité des données</a>
                </li>
                <li>
                  <a href="#lpd-traitement">Traitement des données collectées</a>
                </li>
                <li>
                  <a href="#lpd-cookies">Cookies & services d&rsquo;analyse</a>
                </li>
              </ol>
            </li>
          </ul>
        </section>

        <section className="light">
          <hr />
          <h2 id="ml">Mentions légales</h2>
          <h3 id="ml-responsabilite">1. Responsabilité</h3>
          <p>
            L&rsquo;exactitude des contenus publiés a été vérifiée avec le plus grand soin.
            Toutefois, aucune garantie ne peut être donnée quant à l&rsquo;exactitude, la précision,
            l&rsquo;actualité, la fiabilité et l&rsquo;exhaustivité du contenu des présentes
            informations.
          </p>
          <p>
            Paris & Comtesse SA se réserve expressément le droit de modifier, de supprimer ou de ne
            pas publier temporairement tout ou partie des contenus, et ce à tout moment et sans
            préavis.
          </p>
          <p>
            Paris & Comtesse SA ne saurait être tenu pour responsable des dommages matériels ou
            immatériels qui pourraient être causés par l&rsquo;accès aux informations diffusées ou
            par leur utilisation ou non-utilisation, par le mauvais usage de la connexion ou par des
            problèmes techniques.
          </p>
        </section>
        <section className="light">
          {' '}
          <h3 id="ml-liens">2. Renvois et liens</h3>
          <p>
            Les éventuels renvois ou liens vers des sites Internet de tiers ne relèvent pas de la
            responsabilité de Paris & Comtesse SA et de ses responsables de contenu. L&rsquo;accès
            et l&rsquo;utilisation de sites Internet de tiers se font aux risques et périls de
            l&rsquo;utilisateur ou de l&rsquo;utilisatrice. Les contenus d&rsquo;information, les
            offres, les prestations de service, etc. des sites Internet de tiers auxquels il est
            fait référence sont entièrement sous la responsabilité du tiers concerné. Paris &
            Comtesse SA et ses responsables de contenu déclarent explicitement qu&rsquo;ils
            n&rsquo;ont aucune influence sur le contenu, les offres, etc. des sites auxquels ils
            renvoient. Nous déclinons toute responsabilité pour les sites web de tiers.
          </p>
        </section>
        <section className="light">
          <h3 id="ml-auteur">3. Droits d&rsquo;auteur</h3>
          <p>
            Toutes les photos publiées sont soumises aux droits d&rsquo;auteur de Paris & Comtesse
            SA ou de Redox Digital Sàrl. En cas d&rsquo;intérêt pour une photo, il est nécessaire de
            demander l&rsquo;autorisation écrite de l&rsquo;auteur concerné. Les noms de sociétés
            mentionnés ou utilisés sont la propriété des sociétés citées et font l&rsquo;objet de
            droits d&rsquo;auteur des sociétés mentionnées.
          </p>

          <h5>Crédits photographiques</h5>
          <a href="https://pc-sa.ch" target="_blank" rel="noopener noreferrer">
            Paris & Comtesse SA
          </a>
          <a href="https://redoxdigital.ch" target="_blank" rel="noopener noreferrer">
            Redox Digital Sàrl
          </a>

          <Button className={css.btn} href={'/'}>
            Retour à l&rsquo;accueil
          </Button>
        </section>

        <section className="light">
          <hr />
          <h2 id="lpd">Protection des données</h2>
          <h3 id="lpd-responsabilite">1. Responsabilité</h3>
          <p>
            La responsabilité pour les données collectées et traitées sur le site pc-sa.ch, selon
            l&rsquo;art. 19 de la loi sur la protection des données RS 235.1, incombe à :
          </p>
          <p>
            <b>Paris & Comtesse SA</b>
            <br />
            Baconnnière 55
            <br />
            CH-2017 Boudry
            <br />
            Téléphone : <span id="phone" />
            <br />
            E-Mail : <span id="mail" />
          </p>
        </section>

        <section className="light">
          <h3 id="lpd-donnees">2. Données collectées</h3>
          <p>Les données collectées sur le site web pc-sa.ch sont les suivantes :</p>
          <p>
            a){' '}
            <a href="#lpd-traitement-formulaire">Saisie des données par le formulaire de contact</a>
            <br />
            b) <a href="#lpd-traitement-technique">Saisie automatique des données techniques</a>
            <br />
            c){' '}
            <a href="#lpd-cookies">
              Saisie des données anonymes à des fins d&rsquo;analyses et de statistiques (Google
              Analytics)
            </a>
          </p>
          <p>
            Vous pouvez toutefois refuser cette dernière par l&rsquo;intermédiaire du pop-up
            apparaissant lors de votre première visite sur le site, ou bimestriellement.
          </p>
        </section>

        <section className="light">
          <h3 id="lpd-securite">3. Sécurité des données</h3>
          <p>
            Toutes les transmissions de données du site pc-sa.ch s&rsquo;effectuent au moyen du
            cryptage SSL (https) conformément à l&rsquo;état actuel des possibilités techniques.
            Ceci est valable aussi bien pour la consultation de pages que pour la transmission de
            données de formulaires.
          </p>
        </section>

        <section className="light">
          <h3 id="lpd-traitement">4. Traitement des données collectées</h3>
          <h4 id="lpd-traitement-formulaire">a) Saisie des données par le formulaire de contact</h4>
          <p>
            Les données suivantes sont collectées par le formulaire de contact et sont nécessaires
            pour le traitement de votre demande :
          </p>
          <ul>
            <li>Nom & prénom</li>
            <li>Téléphone</li>
            <li>Adresse e-mail</li>
            <li>Le but de votre prise de contact</li>
            <li>Communication/message</li>
          </ul>
          <p>
            En envoyant le formulaire de contact, un courriel automatique est généré à partir des
            données saisies et envoyé à notre bureau.
          </p>
          <p>
            Les données collectées ne sont utilisées qu&rsquo;à des fins de traitement ultérieur de
            la demande. Les données envoyées par le visiteur ne sont pas transmises à des tiers et
            sont uniquement stockées à des fins d&rsquo;archivage.
          </p>

          <h4 id="lpd-traitement-technique">b) Saisie automatique des données techniques</h4>
          <p>
            Des données techniques sont saisies par le système de l&rsquo;exploitant du site
            (hébergeur). La saisie de ces données est automatique et elle sert uniquement à
            surveiller la fonctionnalité technique et la disponibilité du site pc-sa.ch.
          </p>
          <p>Les données techniques suivantes sont saisies :</p>
          <ul>
            <li>adresse IP publique du visiteur</li>
            <li>date et heure de l&rsquo;accès</li>
            <li>système d&rsquo;exploitation utilisé</li>
            <li>navigateur utilisé</li>
            <li>pages consultées</li>
          </ul>
          <p>
            Les données techniques collectées sont évaluées statistiquement et anonymement par
            l&rsquo;hébergeur, dans la mesure où la surveillance technique ou les dispositions
            légales l&rsquo;exigent. Ces données ainsi que toutes les données de notre site web
            pc-sa.ch sont enregistrées chez notre hébergeur web Infomaniak Network SA, Rue Eugène
            Marziano 25, 1227 Les Acacias, dont vous trouverez la déclaration de protection des
            données{' '}
            <a
              href="https://https://www.infomaniak.com/fr/cgv/reglement-general-protection-donnees"
              target="_blank"
              rel="noopener noreferrer"
            >
              ici
            </a>
            .
          </p>
        </section>

        <section className="light">
          <h3 id="lpd-cookies">5. Cookies et services d&rsquo;analyse</h3>
          <p>
            Pour le site web monentreprise.ch, nous utilisons des cookies (également de tiers). Les
            cookies sont notamment de petits fichiers textuels qui sont enregistrés sur les
            terminaux des visiteurs du site – par exemple sur les smartphones et autres ordinateurs.
            L’utilisation des cookies a pour but d’évaluer l’utilisation du site web, de maintenir
            son fonctionnement et de l’améliorer en permanence. Les cookies restent enregistrés
            après la fin d’une session de navigation et peuvent être consultés lors d’une nouvelle
            visite du site. Si vous ne le souhaitez pas, vous devez configurer votre navigateur
            Internet de manière à ce qu’il refuse les cookies.
          </p>
          <p>
            Les cookies peuvent être désactivés en partie ou en totalité à tout moment dans les
            paramètres du navigateur. Si vous décidez de refuser l’utilisation de cookies, cela peut
            éventuellement avoir une influence sur votre utilisation du site web.
          </p>
          <h4>Services de tiers</h4>
          <p>
            Le site web monentreprise.ch utilise Google Analytics, un service d’analyse web de
            Google Ireland Limited. Si le responsable du traitement des données sur ce site web est
            situé en dehors de l’Espace économique européen ou de la Suisse, le traitement des
            données Google Analytics est effectué par Google LLC. Google LLC et Google Ireland
            Limited sont ci-après dénommés « Google ».
          </p>
          <p>
            Les statistiques obtenues nous permettent d’améliorer notre offre et de la rendre plus
            intéressante pour vous en tant qu’utilisateur. Ce site utilise en outre Google Analytics
            pour une analyse des flux de visiteurs sur tous les appareils, qui est effectuée via un
            ID utilisateur. Si vous disposez d’un compte d’utilisateur Google, vous pouvez
            désactiver l’analyse de votre utilisation sur tous les appareils dans les paramètres de
            ce compte sous « Mes données », « Données personnelles ».
          </p>
          <p>
            La base juridique de l’utilisation de Google Analytics est l’art. 6, alinéa 1, phrase 1,
            lettre f du RGPD. L’adresse IP transmise par votre navigateur dans le cadre de Google
            Analytics n’est pas recoupée avec d’autres données de Google. Nous attirons votre
            attention sur le fait que sur ce site Internet, Google Analytics a été complété par le
            code « _anonymizeIp() ; » afin de garantir une saisie anonyme des adresses IP. Les
            adresses IP sont ainsi traitées sous forme abrégée, ce qui permet d’exclure tout lien
            avec des personnes. Dans la mesure où les données collectées vous concernant présentent
            un lien avec une personne, celui-ci est immédiatement exclu et les données personnelles
            sont ainsi immédiatement supprimées.
          </p>
          <p>
            Ce n’est que dans des cas exceptionnels que l’adresse IP complète est transmise à un
            serveur de Google aux États-Unis et y est raccourcie. Google utilisera ces informations
            pour le compte de l’exploitant de ce site web afin d’évaluer votre utilisation du site
            web, de compiler des rapports sur les activités du site web et de fournir à l’exploitant
            du site web d’autres services liés à l’utilisation du site web et d’Internet. Pour les
            cas exceptionnels où les données personnelles sont transférées aux États-Unis, Google
            s’est soumis au{' '}
            <a
              href="https://www.privacyshield.gov/EU-US-Framework"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Shield UE-US
            </a>
            .
          </p>
          <p>
            Google Analytics utilise des cookies. Les informations générées par le cookie concernant
            votre utilisation de ce site web sont généralement transmises à un serveur de Google aux
            États-Unis et y sont enregistrées.{' '}
            <b>
              Vous pouvez refuser ce traitement des données en cliquant sur ce lien:{' '}
              <a onClick={refuseCookies}>
                Refuser le traitement de mes données à des fins d’analyses et de statistiques
              </a>
              .
            </b>
          </p>

          <Button className={css.btn} href={'/'}>
            Retour à l&rsquo;accueil
          </Button>
        </section>
      </main>
    </>
  );
}
