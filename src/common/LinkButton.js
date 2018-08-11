import React from 'react';
import { Button } from 'react-bootstrap';
import './button.css';

class LinkButton extends React.Component {
    handleClick = event => {
        console.log(event);
    }
    render() {
        const {btnType, faType, btnLabel} = this.props;
        return(
            <Button className={`btn btn-block btn-lg btn-social ${btnType} button-link`} onClick={this.handleClick}>
                <span className={`fa ${faType}`}></span> {btnLabel}
            </Button>
        );
    }
}

export default LinkButton;