import React from 'react'
import './Jumbotron.css'
import JumbotronImage from '../../assets/JumbotronImage.png'

const jumbotron = () => (
    <div className="Jumbotron">
        <div className="JumbotronBlock">
            <div className="JumbotronContent">
                <h1 className="Title1">Patrick Here</h1>
                <p className="JumbotronDescription">Welcome to my website. I'm a fullstack developer with 5 years worth of experience. I love Keeping It Clean and Simple, I find this is always true with code as well as design. Hit me up, via any one of my social links and lets get started on building wonderful projects together, I'm looking forward to working with you.</p>
                <ul className="SocialList">
                    <li><i className="fab fa-linkedin  fa-lg"></i></li>
                    <li><i className="fab fa-twitter  fa-lg"></i></li>
                    <li><i className="fab fa-github  fa-lg"></i></li>
                    <li><i className="fab fa-free-code-camp  fa-lg"></i></li>
                </ul>
            </div>
            <img className="JumbotronImage" src={JumbotronImage} alt="imagename"/>
        </div>
    </div>
)

export default jumbotron