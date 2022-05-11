import React from "react";
import "./UserCard.css";

const UserCard = () => {
    return (
        <div className="userCard">
            <div className="left-content">
                <div className="user-image"></div>
                <h5 className="name">Victor</h5>
                <p className="email">
                    victorldleon@gmail.com
                </p>
            </div>
            <div className="right-content">
                <p className="english-level">
                    INGLES: <span>C1</span>
                </p>
                <div className="skills-container">
                    <div className="skill">react</div>
                    <div className="skill">angular</div>
                    <div className="skill">vuejs</div>
                </div>
                <a href="#" className="cv-link">CV</a>
            </div>
        </div>
    );
}
export default UserCard;