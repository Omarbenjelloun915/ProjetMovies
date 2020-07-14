import React from "react";

const Footer = (props) => {
    return (
        <footer className="App-footer">
            <p>{props.text}</p>
            <p>{props.secondText}</p>
        </footer>
    );
};

export default Footer;