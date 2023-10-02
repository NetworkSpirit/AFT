import React from 'react';
import classes from './burger.module.scss';
interface props {
    header: string;
    items: Array<object>;
    active: boolean;
    setActive: (type: boolean) => void;
}
const Burger = ({header, items, active, setActive}: props) => {
    return (
        <div className={active ? classes.menuActive : classes.menu}>
             <div className={classes.menuContent}>
                 <ul>
                     {items.map(item => {
                         return <li><a className={classes.info} onClick={() => {setActive(!active)}} href={
                             //@ts-ignore
                             item.href}>{
                             //@ts-ignore
                             item.value}</a></li>
                     })}</ul>
             </div>
        </div>
    );
};

export default Burger;