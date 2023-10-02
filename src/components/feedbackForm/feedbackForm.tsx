import classes from './feedback.module.scss';
import email from 'emailjs-com';
import {useState} from "react";
const FeedbackForm = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();
        email.sendForm('service_v3xn07g', 'template_crdj7nb', e.target, 'xeQO5uZMRe8zsC7ds')
            .then((result) => {
                e.preventDefault();
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    }
    const [value, setValue] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const handleClear = (e: any) =>  {
        e.preventDefault()
        setPhone('');
        setName('')
        setValue('')
    }
    const handlePhone = (e: any) => setPhone(e.target.value)
    const handleName = (e: any) => setName(e.target.value)
    const handleChange = (e: any) => setValue(e.target.value)

    return (
        <div id={"feedbackForm"} className={classes.feedbackForm}>
            <h1>Заказать обратный звонок</h1>
            <form onSubmit={sendEmail} className={classes.form}>
                <input type={"text"} name={"fromName"} placeholder={"Имя"} value={name} onChange={handleName}/>
                <input onChange={handlePhone} type={"tel"}
                       name={"fromPhone"}
                       pattern={"[+]{1}[7]{1}\\s[(]{1}[0-9]{3}[)]{1}\\s[0-9]{3}\\s[0-9]{4}"}
                       maxLength={17}
                       required
                       placeholder={'+7 (999) 999 9999'} value={phone}
                />
                <input type={"text"} name={"message"} placeholder={"Ваш вопрос"} value={value} onChange={handleChange}/>
                <button type={"submit"} onClick={handleClear}>Отправить</button>
            </form>
            <p>Закажите обратный звонок от АФТ, для консультации по вашим вопросам.

                - Бесплатная консультация

                Не стесняйтесь обращаться к нам с Вашими вопросами, наша команда с радостью поможет Вам.</p>
        </div>
    );
};

export default FeedbackForm;