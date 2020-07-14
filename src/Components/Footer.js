import React from "react";

const Footer = (props) => {
    return (
        <footer className="App-footer">
            <p>{props.text}</p>
            <p>{props.secondText}</p>
            <img
                width="200"
                alt="logo"
                backgroundcolor="white"
                src="https://nobo.life/img/nobo/logo/logo-popup-250x150.png"
            />
        </footer>
    );
};

export default Footer;