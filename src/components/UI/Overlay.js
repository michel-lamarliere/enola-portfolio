import ReactDOM from 'react-dom';
import classes from './Overlay.module.scss';

export function Backdrop() {
    return (
        <div className={classes.overlay}></div>
    )
};

function Overlay() {

    return (   
        <> 
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlay-root'))}
        </>
    )
}

export default Overlay;
