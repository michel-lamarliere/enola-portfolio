import classes from './LastProjects.module.scss';

function LastProjects(props) {
    return (
        <div className={classes.images_container}>
            <img src={props.main_image} alt="test" className={classes.images_img}/>
            <div className={classes.images_img_overlay}>{props.overlay_text}</div>
        </div>
    )
}

export default LastProjects;