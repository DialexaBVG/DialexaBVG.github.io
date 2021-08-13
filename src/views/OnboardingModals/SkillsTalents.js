import React from 'react';
import Onboardingstepper from '../../views/Onboardingstepper.js'
import {Typography, TextField } from '@material-ui/core/';
import {Autocomplete} from '@material-ui/lab/';
import '../../assets/fonts/font.css';
import Divider from '@material-ui/core/Divider';



class SkillsTalents extends React.Component {

        render() {
            const higherEducation= require('./Universities.json');
         
        return (
            <div class="Modal" >
            
            <div class="Boxes" style={{ 
                position: 'absolute',
                  bottom: '-290px' ,
                  marginLeft: '20px'
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
                color: '#121212'
            }}>Do you have a unique skill/talent?</p>
            <TextField id="standard-outlined" label="Try 'Dancing'" variant="outlined" style={{
                width: '100%',
                marginLeft: '70px',
                
            }}/>
        
            </div>  
            
            <Divider variant="middle" style={{
                width: '100%',
                position: 'absolute',
                left: '10%',
                top: '60%',
                bottom: '-60%',
                height: '2px'
            }}/>
            <div class="Box2" style={{
                    marginTop: '50px',
                    bottom: '-190%',
                    width: '100%',
                    left: '5px'
            }}>
                    <p style={{
                         
                textAlign: 'left',
                marginLeft: '50px',
                fontFamily: 'Mulish, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                marginTop : '120px',
                color: '#121212'
            }}>Do you have a skill you want to improve?</p>
             <TextField id="standard-outlined" label="Try 'Singing'" variant="outlined" style={{
                width: '100%',
                marginLeft: '70px',
                
            }}/>
            </div>
            </div>
            </div>
        );
    }
}

export default SkillsTalents;