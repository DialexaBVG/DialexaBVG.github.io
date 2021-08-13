import React from 'react';
import Onboardingstepper from '../../views/Onboardingstepper.js'
import {Typography, TextField } from '@material-ui/core/';
import {Autocomplete} from '@material-ui/lab/';
import '../../assets/fonts/font.css';
import Divider from '@material-ui/core/Divider';



class HometownBackground extends React.Component {

        render() {
            const higherEducation= require('./Universities.json');
         
        return (
            <div class="Modal" >
            
            <div class="Boxes" style={{ 
                position: 'absolute',
                  bottom: '-380px' 
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
                marginTop: '50px',
                color: '#121212'
            }}>Where's your hometown?</p>
            <TextField id="standard-outlined" label="Try 'Dallas, TX'" variant="outlined" style={{
                width: '90%',
                marginLeft: '70px',
                
            }}/>
        
            </div>  
            <Divider variant="middle" style={{
                width: '95%',
                position: 'absolute',
                left: '05%',
                top: '39%',
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
                marginTop: '110px',
                fontFamily: 'Mulish, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                
                color: '#121212'
            }}>If you went, where did you go for higher education?</p>
             <Autocomplete
                    id="combo-box"
                    options={higherEducation}
                    getOptionLabel={(option) => option.title}
                    style={{ width: '90%',
                        marginLeft: '65px' }}
                    // InputLabelProps={}
                    renderInput={(params) => <TextField {...params} label="Search" variant="filled" />}
                    textalign="center"
                    />
                     <p style={{
                         
                textAlign: 'left',
                marginLeft: '50px',
                fontFamily: 'Mulish, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                marginTop : '70px',
                color: '#121212'
            }}>What degree did you graduate with?</p>
             <TextField id="standard-outlined" label="Try 'Industrial Design'" variant="outlined" style={{
                width: '90%',
                marginLeft: '70px',
                
            }}/>
            </div>
            </div>
            </div>
        );
    }
}

export default HometownBackground;