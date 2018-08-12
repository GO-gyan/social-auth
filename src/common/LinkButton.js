import React from 'react';
import { Button } from 'react-bootstrap';
import './button.css';
import authService from '../services/authService';
import { Redirect } from 'react-router-dom';

class LinkButton extends React.Component {
    handleClick = event => {
        this.props.handleLogin(event.target.name);
    }
    render() {
        const {btnType, faType, btnLabel, target} = this.props;
        return(
            <Button name={target} className={`btn btn-block btn-lg btn-social ${btnType} button-link`} onClick={this.handleClick}>
                <span className={`fa ${faType}`}></span> {btnLabel}
            </Button>
        );
    }
}

export default LinkButton;