import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Grid>
                <Row>
                    <Col>
                        <p>&copy; Copyright 2018. All Rights Reserved with 
                            <a href="https://gobindathakur.com" target="_blank"> Gobinda Thakur</a>.
                        </p>
                    </Col>
                </Row>
            </Grid>
        </footer>
    )
};

export default Footer;