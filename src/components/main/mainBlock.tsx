import React, {useState} from 'react';
import people from "../../people.png";
import logoMain from "../../logoMain.png";
import classes from './main.module.scss';
import Project from "../project/project";
import FeedbackForm from "../feedbackForm/feedbackForm";
import Customers from "../customers/customers";
import ContactsBlock from "../contacts/contactsBlock";
import plat from '../../img/plat.jpg';
import park from '../../img/parking.jpg';
import myGaz from '../../img/mrg.png';
import platan from '../../img/platan.jpg';
import chat from '../../img/dom_ky.jpg';
import ModalView from "../modalView/modalView";
const MainBlock = () => {
    const [project, setProject] = useState( [
        {id: 1,
            name: 'Платежный шлюз',
            info: 'Благодаря платежному шлюзу поставщики ' +
                'и их клиенты могут выстраивать быстрые и удобные способы оплаты. ' +
                'Используя платежный шлюз поставщики получают доступ к мультиэквайрингу ' +
                'и не зависят от одного банка и его ставок. ',
            img: plat},
        {id: 2,
            name: 'Парковочный бот',
            info: 'Бот создан для оплаты парковочной сессии' +
                ' на территории Санкт-Петербурга. Чат-Бот работает по линейной модели ' +
                'и помогает пользователям быстро оплатить парковку в СПб максимально удобным способом.',
            img: park},
        {id: 3,
            name: 'Чат-Бот “Мой Газ”',
            info: 'Потребители могут передавать показания приборов учета, ' +
                'смотреть начисления и просматривать электронную квитанцию квитанцию. Функционал бота будет ' +
                'расширяться и поможет потребителям более эффективно управлять своим начислениям, ' +
                'требуемых для оплат в Газпром Межрегионгаз.',
            img: myGaz},
        {id: 4,
            name: 'Платан',
            info: 'В рамках данного проекта разработан и реализован простой и удобный ' +
                'функционал по переводам денежных средств от пользователя к пользователю. Компанией АФТ ' +
                'поддерживается протокол безопасных и быстрых переводов. На данный момент' +
                ' система работает между Россией и КНР.',
            img: platan},
        {id: 5, name: 'Чат-Бот “ДомКУ”',
            info: 'Потребители регистрируются в ДомКУ и получают ' +
                'доступ к своим начислениям за ЖКУ, а также к возможности их оплаты, передачи ' +
                'показаний, создания запроса в свою управляющую компанию и выгрузку электронного образа квитанции. ',
            img: chat}

    ])
    const [isModal, setModal] = useState(false);
    const [info, setInfo] = useState(["", ""]);
    return (
        <main id={"aboutUs"} className={classes.main}>
            <img className={classes.lol} src={people} alt=""/>
            <img className={classes.name} src={logoMain} alt="" />
            <p className={classes.info}>Мы - финтех компания, основанная в 2020 году. Наша миссия, сделать сложные финансовые инструменты простыми и доступными в использовании</p>
            <button className={classes.btn}><a href={"#feedbackForm"}>Заказать консультацию</a></button>
            <h1 className={classes.project}>Наши проекты</h1>
            {project.map(proj => <Project key={proj.id}
                                          nameProject={proj.name} infoProject={proj.info} imgProject={proj.img}
                                          setModal={setModal} setInfo={setInfo}/>)}
            <Customers/>
            <FeedbackForm/>
            <ContactsBlock/>
            <ModalView active={isModal} setActive={setModal} nameProject={info[0]} infoProject={info[1]}
                       moreInfo={project} width={window.innerWidth} />
        </main>
    );
};

export default MainBlock;