import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars1.githubusercontent.com/u/63437424?s=460&u=ea913ee2009d9a79453a548ab8fcafc0d7392cf2&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">DHANYA KUNHIKRISHNAN</h2>
            <p className="subtitle">"A Cadet Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("contact-me")}>contact me</p>
            </div>
        </div>
    );
};