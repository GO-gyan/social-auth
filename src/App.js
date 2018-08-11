import React from 'react';
import NavBar from './common/NavBar';
import SocialLogin from './social/SocialLogin';
import Footer from './common/Footer';

const App = () => {
return (
    <div>
        <NavBar />
        <SocialLogin />
        <Footer />
    </div>
    );
};

export default App;