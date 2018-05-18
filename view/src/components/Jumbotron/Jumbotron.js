import React from 'react'
import classes from './Jumbotron.css'
//import JumbotronImage from '../../assets/JumbotronImage.png'
import JumbotronBlock from "./JumbotronBlock/JumbotronBlock";
import jumbotronData from "../../jumbotronData"

const jumbotron = (props) => {
    console.log(props)
    return (
        <div className={classes.Jumbotron}>
        {
            jumbotronData.map((data)=>{
            
            if(!data.isActive){
                return null
            }
            return (
                 <JumbotronBlock 
                    id={data._id['$oid']}
                    title={data.title}
                    description={data.description}
                    socialLinks = {data.socialLinks}
                 />
            )})
        }
    
        
    </div>
)}

export default jumbotron