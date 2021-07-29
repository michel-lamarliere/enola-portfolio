import classes from './PortfolioImage.module.scss';
import placeholderImg from '../../assets/img/placeholder-img.jpg';
import Loading from '../UI/Loading';

function PortfolioImage(props) {
    return (
        <div className={classes.container}>
            <img src={props.main_image} alt="Project" className={classes.image}/>
            <div className={`${classes.overlay} ${props.className}`}>{props.overlay_text}</div>
        </div>
    )
}

export const PortfolioImageLoading = () => {
    return (
        <div className={classes.container}>
            <img src={placeholderImg} alt="Loading Project" className={`${classes.image} ${classes.placeholder}`}/>
            <div className={classes.overlay}></div>
        </div>
    )
}

export default PortfolioImage;