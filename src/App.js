import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './common/NavBar';
import SocialLogin from './social/SocialLogin';
import Footer from './common/Footer';
import Home from './home/Home';
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => (
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" component={SocialLogin} exact />
                <PrivateRoutes path="/home" component={Home} />
            </Switch>
            <Footer />
        </div>
    </Router>
)

export default App;