const Form = () => {
    return (
        <form action="/api/form" method="post">
            <label>NOM*</label>
            <input type="text" id="last" name="last" required/>
            <label >PRÉNOM*</label>
            <input type="text" id="first" name="first" required/>
            <label >SOCIÉTÉ</label>
            <input type="text" id="society" name="society" />
            <label >EMAIL*</label>
            <input type="email" id="email" name="email" required/>
            <label >TÉLÉPHONE</label>
            <input type="tel" id="phone" name="phone" />
            <label >TYPE DE CLIENT</label>
            <select id="type" name="type">
                <option value="particulier">Particulier</option>
                <option value="professionnel">Professionnel</option>
            </select>
            <label >MESSAGE*</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;