import style from '@/styles/components/Form.module.scss';
import bStyle from '@/styles/components/Button.module.scss';

const Form = () => {
    return (
        // <form action="/api/form" method="post">
        // C'est triste mais c'est mieux comme ça :'(
            <form action="https://submit-form.com/NW3KnoNd" method="post" className={style.form}>
                <label className={style.title}>Formulaire de Contact</label>
                <label htmlFor="last" className={style.label}>NOM*</label>
                <input type="text" id="last" name="last" required className={style.input}/>
                <label htmlFor="first" className={style.label}>PRÉNOM*</label>
                <input type="text" id="first" name="first" required className={style.input}/>
                <label htmlFor="society" className={style.label}>SOCIÉTÉ</label>
                <input type="text" id="society" name="society" className={style.input}/>
                <label htmlFor="email" className={style.label}>EMAIL*</label>
                <input type="email" id="email" name="email" required className={style.input}/>
                <label htmlFor="phone" className={style.label}>TÉLÉPHONE</label>
                <input type="tel" id="phone" name="phone" className={style.input}/>
                <label htmlFor="type" className={style.label}>TYPE DE CLIENT</label>
                <select id="type" name="type" className={style.input}>
                    <option value="particulier">Particulier</option>
                    <option value="collectif">Collectif</option>
                    <option value="entreprise">Entreprise</option>
                </select>
                <label htmlFor="message" className={style.label}>MESSAGE*</label>
                <textarea id="message" name="message" required className={style.input} placeholder="Message"></textarea>
                <button type="submit" className={bStyle.btn}>Envoyer</button>
            </form>
    );
};

export default Form;
