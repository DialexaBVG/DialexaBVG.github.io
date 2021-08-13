import React from 'react';
import Onboardingstepper from '../../views/Onboardingstepper.js'
import {Typography, TextField } from '@material-ui/core/';
import {Autocomplete} from '@material-ui/lab/';
import '../../assets/fonts/font.css';
import Divider from '@material-ui/core/Divider';



class SurvivorTV extends React.Component {

        render() {
            const higherEducation= require('./Universities.json');
         
        return (
            <div class="Modal" >
            
            <div class="Boxes" style={{ 
                position: 'absolute',
                  bottom: '-320px' ,
                  marginLeft: '0px'
                   }} >
            <div class="Box1">
                
            <p style={{
                textAlign: 'left',
                marginLeft: '50px',
                fontFamily: 'Mulish, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                marginTop: '90px',
                color: '#121212',
                paddingRight: '20px'
            }}>What is one thing you would take if you were a contestant on Survivor?</p>
            <TextField id="standard-outlined" label="Try 'Hammock'" variant="outlined" style={{
                width: '80%',
                marginLeft: '0px',
                
                
            }}/>
        
            </div>  
            
            <Divider variant="middle" style={{
                width: '80%',
                position: 'absolute',
                left: '7%',
                top: '66%',
                bottom: '-90%',
                height: '2px'
            }}/>
            <div class="Box2" style={{
                    marginTop: '50px',
                    bottom: '-190%',
                    width: '80%',
                    left: '5px'
            }}>
                    <p style={{
                         
                textAlign: 'left',
                marginLeft: '50px',
                width: '120%',
                fontFamily: 'Mulish, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                marginTop : '120px',
                color: '#121212'
            }}>What TV or movie series are you a die hard fan of?</p>
             <TextField id="standard-outlined" label="Try 'Parks and Recreation'" variant="outlined" style={{
                width: '100%',
                marginLeft: '70px',
                
            }}/>
            </div>
            </div>
            </div>
        );
    }
}

export default SurvivorTV;