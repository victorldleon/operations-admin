import React from "react";
import "./UserCard.css";

const UserCard = props => {
    return (
        <div className="userCard">
            <div className="left-content">
                <div className="user-image"></div>
                <h5 className="name">{props.user.name}</h5>
                <p className="email">
                    {props.user.email}
                </p>
            </div>
            <div className="right-content">
                <p className="english-level">
                    Ingles: <span>{props.user.englishLevel}</span>
                </p>
                <div className="skills-container">
                    <div className="skill">{props.user.skills}</div>
                </div>
                <a href="../../../logo.svg" className="cv-link" download>CV</a>
            </div>
        </div>
    );
}
export default UserCard;