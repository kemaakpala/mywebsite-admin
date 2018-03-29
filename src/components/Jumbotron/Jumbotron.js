import React from 'react'
import classes from './Jumbotron.css'
import JumbotronImage from '../../assets/JumbotronImage.png'
import Button from '../UI/Button/Button'

const jumbotron = (props) => {
    console.log(props);
    return (
    <div className={classes.Jumbotron}>
        <div className={classes.JumbotronBlock}>
            <div className={classes.JumbotronContent}>
                <h1 className={classes.Title1}>{props.content.greeting}</h1>
                <p className={classes.JumbotronDescription}>{props.content.description}</p>
                <ul className={classes.SocialList}>
                    <li><i className="fab fa-linkedin  fa-lg"></i></li>
                    <li><i className="fab fa-twitter  fa-lg"></i></li>
                    <li><i className="fab fa-github  fa-lg"></i></li>
                    <li><i className="fab fa-free-code-camp  fa-lg"></i></li>
                </ul>
            </div>
            <img className={classes.JumbotronImage} src={JumbotronImage} alt={props.content.AltText}/>
            <div className={classes.JumbotronActions}>
                <Button><i className="fas fa-edit"></i> Edit</Button>
                <Button><i className="fas fa-save"></i> Save</Button>
                <Button><i className="fas fa-trash-alt"></i> Delete</Button>
            </div>
        </div>
    </div>
)}

export default jumbotron