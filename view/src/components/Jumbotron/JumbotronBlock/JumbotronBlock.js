import React from 'react'
import classes from './JumbotronBlock.css'
import Button from '../../UI/Button/Button'

const JumbotronBlock = (props) =>  { 
    const {id, title, description, socialLinks, image} = props
    return (
    
    <div className={classes.JumbotronBlock}>
        <div className={classes.JumbotronContent}>
            <h1 className={classes.Title1}>{title}</h1>
            <p className={classes.JumbotronDescription}>{description}</p>
            <ul className={classes.SocialList}>
                {socialLinks.map((link) => (
                    <li><a href={link.url}><i className={link.icon}></i></a></li>
                ))}
            </ul>
        </div>
        <div className={classes.JumbotronImgContainer}>
            <img className={classes.JumbotronImg} src={image} alt={title}/>
        </div>
        <div className={classes.JumbotronActions}>
            <Button id={`edit_${id}`}><i className="fas fa-edit"></i> Edit</Button>
            <Button id={`save_${id['$oid']}`}><i className="fas fa-save"></i> Save</Button>
            <Button id={`delete_${id['$oid']}`}><i className="fas fa-trash-alt"></i> Delete</Button>
        </div>
    </div>
)}

export default JumbotronBlock