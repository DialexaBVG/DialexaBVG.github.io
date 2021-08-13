import React from 'react';
import Onboardingstepper from '../../views/Onboardingstepper.js'
import { Checkbox, FormControlLabel } from '@material-ui/core/';
import {Autocomplete} from '@material-ui/lab/';
import '../../assets/fonts/font.css';
import Divider from '@material-ui/core/Divider';



class FavoriteMusic extends React.Component {

        render() {
            const higherEducation= require('./Universities.json');
         
        return (
            <div class="Modal" >
        
            
            <div class="Box1">
                
            <p style={{
                marginLeft: '50px',
                fontFamily: 'Mulish, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                marginTop: '300px',
                color: '#121212',
                textAlign: 'left'
            }}>What's your favorite playlist while working?</p>
           
        
            </div>  
            <div class="Checkboxes" >

            <ul class="columns" data-columns="2" style={{
                textAlign: 'left',
                marginTop: '40px',
                marginLeft: '100px'
            }}>
                <li>
                <FormControlLabel
            control={<Checkbox  name="Country" color="#D6B064"/>}
            label="Yeehaw Beats (Country)"
                 />
                </li>
                <li>
                <FormControlLabel
            control={<Checkbox  name="Country" color="#D6B064"/>}
            label="Hip-Hop (I'm a Rap God)"
                 />
                </li>
                <li>
                <FormControlLabel
            control={<Checkbox  name="DadTunes" color="#D6B064"/>}
            label="Dad Tunes (Classic 60s-80s)"
                 />
                </li>

                <li>
                 <FormControlLabel
            control={<Checkbox  name="R&B" color="#D6B064"/>}
            label="R&B"
                 />
                 </li>
                <li>
                <FormControlLabel
            control={<Checkbox  name="TodayBangers" color="#D6B064"/>}
            label="Today's Top Bangerz"
                 />
                     </li>
                     <li>
                     <FormControlLabel
            control={<Checkbox  name="Indie" color="#D6B064"/>}
            label="Indie"
                 />
                 </li>
                 <li>
                 <FormControlLabel
            control={<Checkbox  name="Electric" color="#D6B064"/>}
            label="Electric"
                 />
                 </li>
                 <li>
                 <FormControlLabel
            control={<Checkbox  name="Latin" color="#D6B064"/>}
            label="Latin"
                 />
                 </li>
                 <li>
                 <FormControlLabel
            control={<Checkbox  name="Chill Lo-fi" color="#D6B064"/>}
            label="Chill Lo-fi"
                 />
                 </li>
                 <li>
                 <FormControlLabel
            control={<Checkbox  name="Silence" color="#D6B064"/>}
            label="The Sound of Silence"
                 />
                 </li>
            </ul>


            </div>

            </div>
        
            
        );
    }
}

export default FavoriteMusic;