import { Link } from 'react-router-dom';

import Portfolio from '../pages/Portfolio';
import classes from './PortfolioImage.module.scss';

function PortfolioImage(props) {
    return (
        <div className={classes.image} style={{ backgroundImage: `url('${props.url}')` }}>
            <Link className={classes.image_overlay}>
                <div className={classes.image_overlay_text}>{props.text}</div>
            </Link>
        </div>
    )
}

export default PortfolioImage;