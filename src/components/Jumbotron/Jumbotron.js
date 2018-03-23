import React from 'react'
import './Jumbotron.css'

const jumbotron = () => (
    <div className="JumbotronBlock">
        <div className="JumbotronContent">
            <div className="JumbotronHeader">
                <h1>Patrick Here</h1>
            </div>
            <p className="JumbotronDescription">Welcome to my website. I'm a fullstack developer with 5 years worth of experience. I love Keeping It Clean and Simple, I find this is always true with code as well as design. Hit me up, via any one of my social links and lets get started on building wonderful projects together, I'm looking forward to working with you.</p>
            <ul>
                <li>facebook</li>
                <li>twitter</li>
                <li>github</li>
                <li>freeCodeCamp</li>
            </ul>
        </div>
        <div className="JumbotronImage">
            <img src="http://via.placeholder.com/405x405" alt="imagename"/>
        </div>
    </div>
)

export default jumbotron