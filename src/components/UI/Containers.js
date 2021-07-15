import classes from './Containers.module.scss';

export function CenteredContainer(props) {
    return (
        <div className={[classes.centered, props.extraClass].join(' ')}>
            {props.children}
        </div>
    )
}

export function LargeContainer(props) {
    return (
        <div className={classes.large}>
            {props.children}
        </div>
    )
}