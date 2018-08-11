import React from 'react';
import LinkButton from '../common/LinkButton';
import { Grid, Row } from 'react-bootstrap';

import './social.css';

class SocialLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socials: [
                {
                    id:1,
                    btnType: 'btn-twitter',
                    faType: 'fa-twitter',
                    btnLabel: 'Sign in with Twitter'
                },
                {
                    id:2,
                    btnType: 'btn-facebook',
                    faType: 'fa-facebook',
                    btnLabel: 'Sign in with Facebook'
                },
                {
                    id:3,
                    btnType: 'btn-google',
                    faType: 'fa-google',
                    btnLabel: 'Sign in with Google'
                },
                {
                    id:4,
                    btnType: 'btn-linkedin',
                    faType: 'fa-linkedin',
                    btnLabel: 'Sign in with LinkedIn'
                },
                {
                    id:5,
                    btnType: 'btn-github',
                    faType: 'fa-github',
                    btnLabel: 'Sign in with GitHub'
                },
            ]
        };
    }

    render() {
        const socialButtons = this.state.socials.map(social => {
            return(
                <Row key={social.id}>
                    <LinkButton {...social} />
                </Row>
            );
        });
        return(
            <Grid>
                <div className="form-signin signIn">
                    <div className="social-box">
                        <h3 className="heading-desc">
                            Login to your dashboard
                        </h3>
                        {socialButtons}
                    </div>
                </div>
            </Grid>
        )
    }
}

export default SocialLogin;