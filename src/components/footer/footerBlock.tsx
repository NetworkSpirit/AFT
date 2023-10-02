import React from 'react';
import classes from './footer.module.scss'
// @ts-ignore
import pdf from './brew.docx';
// @ts-ignore
import linkPolit from './polit.docx';
// @ts-ignore
import linkPol from './pol.docx';
//@ts-ignore
import linkSogl from './sogl.docx';
const FooterBlock = () => {
    return (
        <footer id={"info"} className={classes.footer}>
            <div className={classes.textContent}>
                <text className={classes.textInfo}>ООО "АФТ"</text>
                <p className={classes.textINN}>ИНН 784216453498, ОГРН1137847383497</p>
            </div>
            <button><a href={pdf} download="Бриф" rel="noreferrer">Скачать бриф</a></button>
            <div className={classes.line}></div>

            <a href={linkPolit}>Политика конфиденциальности</a>
            <a href={linkPol}>Пользовательское соглашение</a>
            <a className={classes.sogl} href={linkSogl}>Согласие на обработку персональных данных</a>
        </footer>
    );
};

export default FooterBlock;