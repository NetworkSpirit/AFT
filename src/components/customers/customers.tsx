import React from 'react';
import classes from './customers.module.scss';
import Customers from '../../img/customers.png';
const CustomersBlock = () => {
    return (
        <div id={""} className={classes.content}>
            <img src={Customers} alt={"customers"}/>
            <div className={classes.infoContent}>
                <h1 className={classes.customersName}>Крупнейшие заказчики</h1>
                <div className={classes.bigCustomers}>
                    <li>Порт Бронка</li>
                    <li>Ростелеком</li>
                    <li>Газпром межрегионгаз</li>
                    <li>Правительство Санкт-Петербурга</li>
                </div>
                <h1 className={classes.nameBank}>Банки партнёры</h1>
                <div className={classes.customersBank}>
                    <li>ПСКБ</li>
                    <li>Сбербанк</li>
                    <li>Банк “Россия”</li>
                </div>
            </div>
        </div>
    );
};

export default CustomersBlock;