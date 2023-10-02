import React, {useState} from 'react';
import classes from './project.module.scss'
import '@fontsource/open-sans';
import icon from '../../img/icon/pseudo.svg'
import iconHover from '../../img/icon/pseudo-hover.svg'
interface SettingProps {
    nameProject: string;
    infoProject: string;
    imgProject: string;
    setModal: (type: boolean) => void;
    setInfo: (type: Array<string>) => void;
}
const Project = ({nameProject, infoProject, imgProject, setModal, setInfo}: SettingProps) => {
    const [, setModalActive] = useState(false)
    const [isHover, setHover] = useState(true);
    const setFunc = () => {
        setModal(true);
        setModalActive(true);
        setInfo([nameProject, infoProject]);
        window.scrollTo({top: 600})
    }
    return (
        <div id="project" className={classes.project}>
            <h1>{nameProject}</h1>
            <p>{infoProject}</p>
            <img className={classes.imgProject} src={imgProject} alt=""></img>
            <div className={classes.dildo} onClick={() => setFunc()}>
                <img className={classes.moreInfo} onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}
                     src={!isHover ? icon : iconHover}
                     alt={'icon'}/>
                <button>Подробнее</button>
            </div>
        </div>
    );
};

export default Project;