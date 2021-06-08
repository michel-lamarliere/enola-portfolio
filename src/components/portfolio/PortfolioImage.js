import classes from './PortfolioImage.module.scss';

function PortfolioImage(props) {
    return (
        <div className={classes.container}>
            <img src={props.main_image} alt="test" className={classes.image}/>
            <div className={classes.overlay}>{props.overlay_text}</div>
        </div>
    )
}

export default PortfolioImage;