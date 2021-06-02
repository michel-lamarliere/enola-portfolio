import { LargeContainer } from '../layout/Containers';
import PortfolioImage from '../portfolioPage/PortfolioImage';
import classes from './Portfolio.module.scss'
import hopo from '../../assets/img/hopo.png';

function Portfolio() {
    return (
        <LargeContainer >
            <div className={classes.portfolio}>
                <PortfolioImage  url={hopo} text={'Hopo'}/>
                <PortfolioImage  url={hopo} text={'Hopo'}/>
                <PortfolioImage  url={hopo} text={'Hopo'}/>
            </div>
        </LargeContainer >
    )
}

export default Portfolio;