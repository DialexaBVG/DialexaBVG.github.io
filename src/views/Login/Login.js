import React from 'react';
import Firebase from 'firebase';
import firebaseConfig from '../../services/config';
import GoogleButton from '../../components/GoogleButton.js';
import {authentication} from '../../helpers/authentication.js';
import BVGLogoWithShadow from '../../assets/BVGLogoShadow.svg';
import { Box } from "@material-ui/core";
import './Login.css';
import bearGif from '../../assets/beargif.gif';
import gorillaGif from '../../assets/gorilla.gif';
import {Route, Link } from 'react-router-dom';
import '../../assets/fonts/font.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        if (!Firebase.apps.length) {
            Firebase.initializeApp(firebaseConfig);
        }
    }

    render() {
        return (
                    <React.Fragment>
                        <Box 
                            display="flex"
                            justifyContent="center"
                            alignItems="flex-end"
                            minHeight="40vh">
                            <img width="40%"src={BVGLogoWithShadow} alt="Main Logo"/>                
                        </Box>
                        <br></br>
                        <Route
                            path="/"
                            exact
                            render={() => (
                                <Link to="/onboard" className="loginButton">
                                <GoogleButton className="goog" type="button" onClick={() => {
                                    authentication();   
                                }}> Log in with Google
                                </GoogleButton>
                                </Link>
                            )} 
                        />
                              
                        <div className="gif">
                            <img src={bearGif} onmouseover={bearGif} onmouseout={bearGif} id="beargif" alt="bear"/>
                            <img src={gorillaGif} onmouseover={gorillaGif} onmouseout={gorillaGif} id="gorillagif" alt="gorilla"/>
                        </div>
                    </React.Fragment>
        );
    }
}

export default App;