import React from 'react'
import Button from '@material-ui/core/Button'
import './ThankYou.css';
import {Route, Link } from 'react-router-dom';
import battle from '../../assets/mainpage/wireBattle.png';


class ThankYou extends React.Component {

    render() {
        const higherEducation= require('./Universities.json');
     
    return (
        <div class="Modal" style={{ 
            marginBottom: '10%;'
        }}>
            
        
        <div class="Box1">
            <img alt="Battle" src={battle} style={{
                width: '300px',
                marginTop: '300px'
            }}></img>
        <h4 style={{
                 fontFamily: "TiemposHeadline",
                 fontWeight: "lighter",
                 marginTop: "50px",
                 fontSize: '50px', 
                 lineHeight: '0px',
            }}> 
                Thank you!
            </h4>
            {/* <p style={{
                textAlign: 'left',
                marginLeft: '165px',
                fontFamily: '"Noto Sans", sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                color: '#121212',
                textAlign: 'center',
                width: '55%',
                marginTop: '-05%'
            }}>You can update your answers in Profile Settings whenever you need.</p>
     */}    

        <Link to="/game">
           <button class="Thanks" variant="contained" color="primary" style={{
                border: '',
                marginTop: '0px',
                color: 'white',
                width: '180px',
            height: '40px'
            }}> 
                CONTINUE
            </button>
            </Link>
            
        </div>  
         

        </div>
        );
        }
        }


        export default ThankYou;