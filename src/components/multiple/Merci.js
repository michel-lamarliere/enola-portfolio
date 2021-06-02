import classes from './Merci.module.scss'

function MerciDiv() {
    return (
        <div className={classes.merci}>
            <div className={classes.merci_title}>MERCI</div>
            <div className={classes.merci_text}>pour votre visite !</div>
        </div>
    )
}

export default MerciDiv;