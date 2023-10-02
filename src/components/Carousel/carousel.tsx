import React, {useRef, useState} from 'react';
import classes from './carousel.module.scss';
import cl from 'classnames';
interface carouselProps {
    nameProject: string;
    infoProject: string;
    info: Array<Object>;
    setInfo: (type: Array<string>) => void;
    width: number;
}
const Carousel = ({info, nameProject, infoProject, setInfo, width}: carouselProps) => {
    const Project = [
        {
            id: 1,
            // @ts-ignore
            name: info[0].name,
            // @ts-ignore
            info: info[0].info,
        },
        {
            id: 2,
            // @ts-ignore
            name: info[1].name,
            // @ts-ignore
            info: info[1].info,
        },
        {
            id: 3,
            // @ts-ignore
            name: info[2].name,
            // @ts-ignore
            info: info[2].info,
        },
        {
            id: 4,
            // @ts-ignore
            name: info[3].name,
            // @ts-ignore
            info: info[3].info,
        },
        {
            id: 5,
            // @ts-ignore
            name: info[4].name,
            // @ts-ignore
            info: info[4].info,
        }
    ]
    const carousel = useRef(null);
    const [point, setPoint] = useState((width <= 990) ? [
        { id: 1, value: 1, active: true},
        { id: 2, value: 2, active: false},
        { id: 3, value: 3, active: false},
        { id: 4, value: 4, active: false},
        { id: 5, value: 5, active: false}
    ] : [
            { id: 1, value: 1, active: true},
            { id: 2, value: 2, active: false},
            { id: 3, value: 3, active: false},
            { id: 4, value: 4, active: false},
        ]
    )
    const [position, setPosition] = useState(0);
    const setPositions = (position: number) => {
        setPosition(position);
        //@ts-ignore
        carousel.current.childNodes.forEach((element: any) => {
            element.style = `transform: translate(${position}px)`;
        })
    }
    const positionHandler = (element: any) => {
        if (width >= 1280) {
            if (Number(element.target.value) === 1) {
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
                //element.target.style = 'background-color: red';
                setPositions(0);
            } else if (Number(element.target.value) === 2) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
                setPositions(-407);
            } else if (Number(element.target.value) === 3) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false}])
                setPositions(-814);
            } else if (Number(element.target.value) === 4) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true}])
                setPositions(-1228);
            }
        }
        else if (width === 1256 || width >= 1000) {
            if (Number(element.target.value) === 1) {
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
                setPositions(0);
            } else if (Number(element.target.value) === 2) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
                setPositions(-347);
            } else if (Number(element.target.value) === 3) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false}])
                setPositions(-694);
            } else if (Number(element.target.value) === 4) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true}])
                setPositions(-1388);
            }
        }
        else if (width <= 680) {
            if (Number(element.target.value) === 1) {
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
                //element.target.style = 'background-color: red';
                setPositions(0);
            } else if (Number(element.target.value) === 2) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
                setPositions(-240);
            } else if (Number(element.target.value) === 3) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
                setPositions(-480);
            } else if (Number(element.target.value) === 4) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true},
                    {id: 5, value: 5, active: false}])
                setPositions(-720);
            } else if (Number(element.target.value) === 5) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: true}])
                setPositions(-960);
            }
        }
        else if (width === 768 || width > 680) {
            if (Number(element.target.value) === 1) {
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
                //element.target.style = 'background-color: red';
                setPositions(0);
            } else if (Number(element.target.value) === 2) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
                setPositions(-347);
            } else if (Number(element.target.value) === 3) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
                setPositions(-694);
            } else if (Number(element.target.value) === 4) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true},
                    {id: 5, value: 5, active: false}])
                setPositions(-1041);
            } else if (Number(element.target.value) === 5) {
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: true}])
                setPositions(-1388);
            }
        }
    }
    const prevHandler = (width: number) => {
        if (width >= 1280) {
            if (position === -407) {
                setPositions(0);
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
            } else if (position === -814) {
                setPositions(-407);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
            } else if (position === -1228) {
                setPositions(-814);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false}])
            }
        }
        else if (width === 1256 || width >= 1000) {
            if (position === -347) {
                setPositions(0);
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
            } else if (position === -694) {
                setPositions(-347);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
            } else if (position === -1388) {
                setPositions(-694);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false}])
            }
        }
        else if (width === 768 || width > 680) {
            if (position === -347) {
                setPositions(0);
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -694) {
                setPositions(-347);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -1041) {
                setPositions(-694);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            }
            else if (position === -1388) {
                setPositions(-1041);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true},
                    {id: 5, value: 5, active: false}])
            }
        }
        else if (width <= 680) {
            if (position === -240) {
                setPositions(0);
                setPoint([{id: 1, value: 1, active: true},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -480) {
                setPositions(-240);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -720) {
                setPositions(-480);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            }
            else if (position === -960) {
                setPositions(-720);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true},
                    {id: 5, value: 5, active: false}])
            }
        }
    }
    const nextHandler = (width: number) => {
        if (width >= 1280) {
            if (position === 0) {
                setPositions(-407);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
            } else if (position === -407) {
                setPositions(-814);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false}])
            } else if (position === -814) {
                setPositions(-1228);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true}])
            }
        }
        else if (width === 1256 || width >= 990) {
            if (position === 0) {
                setPositions(-347);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false}])
            } else if (position === -347) {
                setPositions(-694);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false}])
            } else if (position === -694) {
                setPositions(-1388);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true}])
            }
        }
        else if (width === 768 || width > 680) {
            if (position === 0) {
                setPositions(-347);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -347) {
                setPositions(-694);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -694) {
                setPositions(-1041);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true},
                    {id: 5, value: 5, active: false}])
            } else if (position === -1041) {
                setPositions(-1388);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: true}])
            }
        }
        else if (width <= 680) {
            if (position === 0) {
                setPositions(-240);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: true},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -240) {
                setPositions(-480);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: true},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: false}])
            } else if (position === -480) {
                setPositions(-720);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: true},
                    {id: 5, value: 5, active: false}])
            } else if (position === -720) {
                setPositions(-960);
                setPoint([{id: 1, value: 1, active: false},
                    {id: 2, value: 2, active: false},
                    {id: 3, value: 3, active: false},
                    {id: 4, value: 4, active: false},
                    {id: 5, value: 5, active: true}])
            }
        }
    }
    const getBtnId = (e: any) => {
        window.scrollTo({top: 600})
        let index = Number(e.target.value);
        if (index === 0) {
            nameProject = Project[0].name;
            setInfo([Project[0].name, Project[0].info]);
            //@ts-ignore
            info.name = Project[0].name;
        }
        else if (index === 1) {
            setInfo([Project[1].name, Project[1].info])
            nameProject = Project[1].name;
            //@ts-ignore
            info.name = Project[1].name;
        }
        else if (index === 2) {
            setInfo([Project[2].name, Project[2].info])
            nameProject = Project[2].name;
            //@ts-ignore
            info.name = Project[2].name;
        }
        else if (index === 3) {
            setInfo([Project[3].name, Project[3].info])
            nameProject = Project[3].name;
            //@ts-ignore
            info.name = Project[3].name;
        }
        else if (index === 4) {
            setInfo([Project[4].name, Project[4].info])
            nameProject = Project[4].name;
            //@ts-ignore
            info.name = Project[4].name;
        }
    }
    return (
        <div className={classes.Carousel}>
            <div className={classes.Carousel__slide} ref={carousel}>
                {info.map((item, i) => {
                    return (
                      <div
                          id={"type"}
                          className={
                          classes.Carousel__item
                      }
                      >
                          <h1
                              id={
                              //@ts-ignore
                                  classes.nameActive
                              }
                          >
                              {
                                  //@ts-ignore
                                  item.name
                              }
                          </h1>
                          <p
                              id={
                                  classes.pActive
                              }
                          >
                              {
                                  //@ts-ignore
                                  item.info
                              }
                          </p>
                          <button className={
                              classes.moreActive} onClick={getBtnId} value={i}>&#8594;</button><button  onClick={getBtnId} className={classes.moreName} value={i}>Подробнее</button>
                      </div>
                    );
                })}
            </div>
            <button className={cl(classes.Carousel__button, classes.Carousel__button_prev)} onClick={() => prevHandler(width)}>&larr;</button>
            <button className={cl(classes.Carousel__button, classes.Carousel__button_next)} onClick={() => nextHandler(width)}>&rarr;</button>
            <div className={classes.contentBtn}>
                {point.map(item => {
                    return (<button key={item.id} className={item.active ? classes.btnActive : classes.btn} value={item.value} onClick={positionHandler}></button>);
                })}
            </div>
        </div>
    );
};
//TODO edit text for info project in more
export default Carousel;