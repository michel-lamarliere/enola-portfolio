import classes from './Loading.module.scss'
import BeatLoader from 'react-spinners/BeatLoader';

function Loading(props) {
    return (
        <div className={classes.loading}>
            <BeatLoader color={'#EB6A7D'} size={25}/>
        </div>
    )
};

export default Loading;