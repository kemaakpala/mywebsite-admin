import React, {Fragment} from 'react'
import Button from '../Button/Button'
import classes from './Modal.css'

const modal = (props) => {

    let modal = null
    if (props.showModal){

        modal = (
            <div className={classes.Modal}>
                <div className={classes.ModalBackDrop} onClick={props.overlayCloseModal}></div>
                <div className={classes.ModalBox}>
                <Button classes={`${classes.CloseModal} ${classes.Danger}`} clicked={props.closeModal}><i className="fas fa-times fa-lg"></i></Button>
                    <div className={classes.ModalHeader}>
                        <h1 className={classes.Title}> {props.content.title}</h1>
                    </div>
                    <div className={classes.ModalText}>
                        <p> {props.content.text}</p>
                    </div>
                    <div className={classes.ModalActions}>
                        <Button classes={classes.BkgSuccess} clicked={props.saveAction}>Save</Button>
                        <Button classes={classes.BkgDanger} clicked={props.cancelAction}>Cancel</Button>
                    </div>
                </div>
            </div>
        )
    }
    
    return  (<Fragment>{modal}</Fragment>)
}

export default modal