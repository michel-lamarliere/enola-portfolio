import ReactDOM from 'react-dom';
import classes from './Overlay.module.scss';

import { useOpennedUpdate } from '../../store/ModalContext';

export function Backdrop() {
    const openned = useOpennedUpdate();

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
