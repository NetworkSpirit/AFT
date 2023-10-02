import React, {useState} from 'react';
import {ReactComponent as Logo} from "../../logo.svg";
import classes from './header.module.scss';

interface props {
    width: number;
    setActive: (type: boolean) => void;
    active: boolean;
}
const HeaderBlock = ({width, setActive, active}: props) => {
    return (
        <header className={classes.header}>
            { /*@ts-ignore */}
            <Logo className={classes.img} src={"../../logo.svg"} alt="logo"></Logo>
            {(width < 990) ?
            <div>
                <nav>
                    <div className={classes.burger} onClick={() => setActive(!active)}>
                        <span/>
                    </div>
                </nav>
            </div> :
            <div>
                <a href={"#aboutUs"}>О нас</a>
                <a href={"#project"}>Проекты</a>
                <a href={"#info"}>Правовая информация</a>
                <a href={"#contact"}>Контакты</a>
            </div>
        }
        </header>
    );
};

export default HeaderBlock;