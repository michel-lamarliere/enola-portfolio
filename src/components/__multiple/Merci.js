import classes from './Merci.module.scss'

function MerciDiv(props) {
    return (
        <div className={[classes.merci, props.className].join(' ')}>
            <div className={classes.merci_title}>MERCI</div>
            <div className={classes.merci_text}>pour votre visite !</div>
        </div>
    )
}

export default MerciDiv;