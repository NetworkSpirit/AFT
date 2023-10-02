import React, {useState} from 'react';
import './modalView.scss'
import icon from '../../img/iconForProject.svg';
import Carousel from "../Carousel/carousel";
import close from "../../img/icon/close.svg";
type props = {
    active: boolean;
    setActive: (type: boolean) => void;
    nameProject: string;
    infoProject: string;
    moreInfo: Array<object>
    width: number
}
const ModalView = ({active, setActive, nameProject, infoProject, moreInfo, width}: props) => {
    const infoProjectArr = [
        {
            id: 1,
            info: "Платежный шлюз - универсальное и многофункциональное решение, разработанное компанией АФТ " +
                "для решения задач различных клиентов. Благодаря платежному шлюзу поставщики и их клиенты могут " +
                "выстраивать быстрые и удобные способы оплаты. Используя платежный шлюз поставщики получают доступ " +
                "к мультиэквайрингу и не зависят от одного банка и его ставок. Интеграции и поддержка шлюза полностью " +
                "на стороне АФТ и тем самым снижает трудозатраты поставщиков. Пользователи получают расширенный перечень" +
                " способов оплаты на платежной странице поставщика. Платежный шлюз сертифицирован по международному " +
                "стандарту PSI DSS, что говорит о безопасности его использования для пользователя."
        },
        {
            id: 2,
            info: "Парковочный бот - собственная разработка и флагман компании АФТ. Бот создан для оплаты парковочной " +
                "сессии на территории Санкт-Петербурга. Чат-Бот работает по линейной модели и помогает пользователям " +
                "быстро оплатить парковку в СПб. Бот запоминает ваше авто и нет необходимости каждый раз вводить " +
                "данные авто. В бот можно отправить геопозицию, так он определит вашу парковочную зону. Систему " +
                "быстрых платежей обеспечивает Сбербанк. На текущий момент более 60 тысяч пользователей " +
                "используют чат-бот. Ежемесячно пользователи совершают около 40 тысяч операций на более чем 4,5 млн. " +
                "рублей. Аудитория бота растет ежедневно. В ближайшее время в функционал бота добавится " +
                "поминутная оплата, гараж, роботизированные ответы и многое другое."
        },
        {
            id: 3,
            info: "Чат-Бот МРГ - помощник потребителей для взаимодействия с Газпром межрегионгаз. " +
                "Потребители могут получить доступ к своим начислениям и платежам в социальной сети Вконтакте. " +
                "Для них открыт быстрый и простой функционал для отправки обращений в адрес МРГ. " +
                "Потребители могут передавать показания приборов учета, смотреть начисления и отказаться" +
                " от бумажной квитанции. Функционал бота будет расширяться и поможет потребителям более эффективно" +
                " управлять своим начислениям."
        },
        {
            id: 4,
            info: "Платан - международный проект компании АФТ совместно с банком ПСКБ. В рамках данного проекта " +
                "разработан и реализован простой и удобный функционал по переводам денежных средств от пользователя" +
                " к пользователю. Компанией АФТ поддерживается протокол безопасных и быстрых переводов. " +
                "На текущий момент переводы можно совершить из РФ в КНР и обратно. Поддерживаемая валюта - Китайский" +
                " юань и Российский рубль. Для совершения перевода пользователю необходимо " +
                "знать только номер карты получателя."
        },
        {
            id: 5,
            info: "ДомаКУ - новая разработка компании АФТ совместно со Сбербанком. В рамках данного проекта разработан" +
                " функционал для Управляющих компаний и потребителей ЖКУ. ДомаКУ реализованы на платформе" +
                " кроссплатформенного мессенджера Telegram и социальной сети Вконтакте. Потребители регистрируются " +
                "в ДомаКУ и получают доступ к своим начислениям за ЖКУ, а также " +
                "к возвожности их оплаты, передачи показаний, создания запроса" +
                " в свою управляющую компанию и выгрузку электронного образа квитанции." +
                " Функционал будет расширяться как для пользователей, так и для УК."
        }
    ];
    // @ts-ignore
    const [info, setInfo] = useState(["", ""]);
    const Scroll = () => {
        let width = window.innerWidth;
        if (width > 990) {
            if (nameProject === "Платежный шлюз") {
                window.scrollTo({top: 1000});
            } else if (nameProject === "Парковочный бот") {
                window.scrollTo({top: 1000});
            } else if (nameProject === "Чат-Бот “Мой Газ”") {
                window.scrollTo({top: 1800});
            } else if (nameProject === "Платан") {
                window.scrollTo({top: 1800});
            } else if (nameProject === "Чат-Бот “ДомКУ”") {
                window.scrollTo({top: 2700})
            }
        }
        if (width < 990 && width > 681) {
            if (nameProject === "Платежный шлюз") {
                window.scrollTo({top: 600});
            } else if (nameProject === "Парковочный бот") {
                window.scrollTo({top: 1300});
            } else if (nameProject === "Чат-Бот “Мой Газ”") {
                window.scrollTo({top: 1900});
            } else if (nameProject === "Платан") {
                window.scrollTo({top: 2600});
            } else if (nameProject === "Чат-Бот “ДомКУ”") {
                window.scrollTo({top: 3200})
            }
        }
        else if (width < 681 && width > 490) {
            if (nameProject === "Платежный шлюз") {
                window.scrollTo({top: 800});
            } else if (nameProject === "Парковочный бот") {
                window.scrollTo({top: 1600});
            } else if (nameProject === "Чат-Бот “Мой Газ”") {
                window.scrollTo({top: 1900});
            } else if (nameProject === "Платан") {
                window.scrollTo({top: 2300});
            } else if (nameProject === "Чат-Бот “ДомКУ”") {
                window.scrollTo({top: 2900})
            }
        }
        else if (width < 490 && width > 320) {
            if (nameProject === "Платежный шлюз") {
                window.scrollTo({top: 400});
            } else if (nameProject === "Парковочный бот") {
                window.scrollTo({top: 1000});
            } else if (nameProject === "Чат-Бот “Мой Газ”") {
                window.scrollTo({top: 1400});
            } else if (nameProject === "Платан") {
                window.scrollTo({top: 1900});
            } else if (nameProject === "Чат-Бот “ДомКУ”") {
                window.scrollTo({top: 2200})
            }
        }
        else if (width < 320) {
            if (nameProject === "Платежный шлюз") {
                window.scrollTo({top: 500});
            } else if (nameProject === "Парковочный бот") {
                window.scrollTo({top: 1000});
            } else if (nameProject === "Чат-Бот “Мой Газ”") {
                window.scrollTo({top: 1400});
            } else if (nameProject === "Платан") {
                window.scrollTo({top: 1900});
            } else if (nameProject === "Чат-Бот “ДомКУ”") {
                window.scrollTo({top: 2200})
            }
        }
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false); setInfo(["",""]); Scroll()
        }}>
            <img src={close} alt={""} className={"close"} onClick={() => setActive(false)}/>
            <div className={"modalContent"} onClick={e => (e.stopPropagation())}>
                <img src={icon} alt={"iconForProject"} className={"icon"}/>
                <h1>{
                    (info[0] === "") ? nameProject : info[0]
                }</h1>
                <p>{
                    (info[1] === "") ? infoProject : info[1]
                }</p>
                <button className={"orderProject"} onClick={() => setActive(false)}><a href={"#feedbackForm"}>Заказать проект</a></button>
                <h1>Смотрите также</h1>
                <Carousel info={moreInfo} nameProject={nameProject} infoProject={infoProject}
                          setInfo={setInfo} width={width}/>
            </div>
        </div>
    );
};
export default ModalView;