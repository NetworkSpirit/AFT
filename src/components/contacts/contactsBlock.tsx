import React from 'react';
import classes from './contactsBlock.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import city from '../../img/iconContacts/city.svg';
import instagram from '../../img/iconContacts/instagram.svg';
import phone from '../../img/iconContacts/phone.svg';
import telegram from '../../img/iconContacts/telegram.svg';
import time from '../../img/iconContacts/time.svg';
import vk from '../../img/iconContacts/vk.svg';
const ContactsBlock = () => {
    let center = [59.853460, 30.344336];
    return (
        <div id={"contact"} className={classes.contentBlock}>
            <h1>Наши контакты</h1>
            <div className={classes.contacts}>
                <img src={city} alt={'city'}/><text className={classes.cityText}>196135, город Санкт-Петербург,
                ул Типанова, д. 23 стр. 1
            </text>
                <img className={classes.imgTime} src={time} alt={'time'}/><text className={classes.timeText}>Режим работы с 09:00-21:00
            </text>
                <img className={classes.imgPhone} src={phone} alt={'phone'}/><text className={classes.textPhone}><a href={"tel:+79215961639"}>+7 921 596 1639
            </a><br/>
                Обратный звонок</text>
            </div>
            <a href="https://t.me/a_proskuryakov"><img className={classes.socialMedia} src={telegram} alt={'telegram'}/></a>
            <a href="https://vk.com/id818111005"><img className={classes.socialMedia} src={vk} alt={'vk'}/></a>
            <a><img className={classes.socialMedia} src={instagram} alt={'instagram'}/></a>
            <div className={classes.content}>
                <YMaps>
                    <Map defaultState={{ center: center, zoom: 15, }} className={classes.map} width={"100%"} height={"100%"}>
                        <Placemark geometry = {center}
                                   options={{ iconLayout: "default#image",
                                       iconImageSize: [50, 50] }}/>
                    </Map>
                </YMaps>
            </div>
        </div>
    );
};

export default ContactsBlock;