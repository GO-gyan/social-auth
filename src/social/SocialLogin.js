import React from 'react';
import LinkButton from '../common/LinkButton';
import { Grid, Row } from 'react-bootstrap';

import './social.css';
import authService from '../services/authService';
import { Redirect } from 'react-router-dom';

class SocialLogin extends React.Component {
    state = {
        socials: [
            {
                id:1,
                btnType: 'btn-twitter',
                faType: 'fa-twitter',
                btnLabel: 'Sign in with Twitter',
                target: 'TWITTER'
            },
            {
                id:2,
                btnType: 'btn-facebook',
                faType: 'fa-facebook',
                btnLabel: 'Sign in with Facebook',
                target: 'FACEBOOK'
            },
            {
                id:3,
                btnType: 'btn-google',
                faType: 'fa-google',
                btnLabel: 'Sign in with Google',
                target: 'GOOGLE'
            },
            {
                id:4,
                btnType: 'btn-linkedin',
                faType: 'fa-linkedin',
                btnLabel: 'Sign in with LinkedIn',
                target: 'LINKEDIN'
            },
            {
                id:5,
                btnType: 'btn-github',
                faType: 'fa-github',
                btnLabel: 'Sign in with GitHub',
                target: 'GITHUB'
            },
        ],
        loggedIn: authService.isAuthenticated()
    };

    handleLogin = (target) => {
        authService.signIn(() => {
            this.setState({
              loggedIn: authService.isAuthenticated()
            });
        });
    }

    render() {
        const socialButtons = this.state.socials.map(social =>(
            <Row key={social.id}>
                <LinkButton {...social} handleLogin={this.handleLogin}/>
            </Row>
            )
        )
        const { loggedIn } = this.state;
        const { target } = this.props.location.state || {
            target: { pathname: "/home" }
          };
          if (loggedIn) {
            return <Redirect to={target} />;
          }
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