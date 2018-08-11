import React from 'react';
import './button.css';

const LinkButton = props => {
    return(
        <a className={`btn btn-block btn-lg btn-social ${props.btnType} button-link`}>
            <span className={`fa ${props.faType}`}></span> {props.btnLabel}
        </a>
    );
};

export default LinkButton;