import style from "@/styles/components/ContactCTA.module.scss";
import Button from "./Button";


export default function ContactCTA() {
    return (
        <section className={`${style.contactCTA} light`} style={{ backgroundImage: 'url(https://picsum.photos/800/300)' }}>
            <h3>Un projet en tête ?</h3>
            <p>N’hésitez pas à nous contacter pour discuter de vos projets</p>
            <Button to="/contact">Contact</Button>
        </section>
    )
}