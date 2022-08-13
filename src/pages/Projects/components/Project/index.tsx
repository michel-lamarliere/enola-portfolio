import React, {useEffect, useRef, useState} from 'react';


import classes from './styles.module.scss';
import {format} from "date-fns";
import {fr} from "date-fns/locale";

interface Props {
  name: string;
  description: string;
  date: string;
  pro: boolean;
  images: string[];
}

const Project: React.FC<Props> = (props) => {
  const carouselRef = useRef<null | HTMLDivElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(100)

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth)
    }

    setCarouselWidth(carouselRef.current!.offsetWidth)

    carouselRef.current?.scrollBy({left: -30000})
  }, [carouselRef.current?.offsetWidth])

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.header__item}>{props.name}</div>
        {props.pro &&
          <div className={classes.header__item}>PROJET PRO</div>
        }
      </div>
      <button
        className={`${classes.button} ${classes['button--left']}`}
        onClick={() => {
          if (carouselRef.current) {
            carouselRef.current.scrollBy({
              left: -carouselWidth,
              behavior: 'smooth'
            })
          }
        }}
      >{'<'}</button>
      <button
        className={`${classes.button} ${classes['button--right']}`}
        onClick={() => {
          if (carouselRef.current) {
            carouselRef.current.scrollBy({
              left: carouselWidth,
              behavior: 'smooth'
            })
          }
        }}
      >{'>'}</button>
      <div ref={carouselRef} className={classes.carousel} id={'carousel'}>
        {/*<button><img src={} alt={'gauche'}/></button>*/}
        {/*<button><img src={} alt={'droite'}/></button>*/}
        {props.images.map((image, index) => (
          <img className={classes.carousel__item}
               src={`${process.env.REACT_APP_BACKEND_URL}${image}`}
               alt={props.name}/>
        ))}
      </div>
      <div className={classes.footer}>
        <div className={classes.footer__description}>{props.description}</div>
        <div
          className={classes.footer__date}>{format(new Date(props.date), 'MMMM y', {locale: fr})}
        </div>

      </div>
    </div>
  )
}

export default Project;
