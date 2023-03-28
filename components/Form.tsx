

const Form = () => {
    return (
        <form action="https://submit-form.com/O4fDebWI" method="post">
            <label htmlFor="last">NOM*</label>
            <input type="text" id="last" name="last" required />
            <label htmlFor="first">PRÉNOM*</label>
            <input type="text" id="first" name="first" required />
            <label htmlFor="society">SOCIÉTÉ</label>
            <input type="text" id="society" name="society" />
            <label htmlFor="email">EMAIL*</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">TÉLÉPHONE</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="type">TYPE DE CLIENT</label>
            <select id="type" name="type">
                <option value="particulier">Particulier</option>
                <option value="professionnel">Professionnel</option>
            </select>
            <label htmlFor="message">MESSAGE*</label>
            <textarea id="message" name="message" placeholder="Votre message ici..." required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;

