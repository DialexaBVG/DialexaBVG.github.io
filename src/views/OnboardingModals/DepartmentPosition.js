import React from 'react';
import Onboardingstepper from '../../views/Onboardingstepper.js'
import {Typography, TextField } from '@material-ui/core/';
import {Autocomplete} from '@material-ui/lab/';
import '../../assets/fonts/font.css';
import Divider from '@material-ui/core/Divider';



class DepartmentPosition extends React.Component {

        render() {
            const department = [
             {title: 'Engagement Management' },
                {title: 'Quality'},
                {title: 'Machine Learning'},
                {title: 'Engineering'},
                {title: 'Research & Design'},
                {title: 'Technology Strategy'},
                {title: 'Finance Data'},
                {title: 'Account Management'},
                {title: 'Marketing'},
                {title: 'Operations'},
               {title:  'Sales'},
                {title: 'HR '},
                {title: 'Talent Acquisition'},
               {title:  'Strategy' }
            ];
            const position = [
                {title: 'Founder' },
                   {title: 'Senior Partner'},
                   {title: 'Vice President'},
                   {title: 'Partner'},
                   {title: 'Prinicipal'},
                   {title: 'Senior Associate'},
                   {title: 'Manager'},
                   {title: 'Associate'},
                   {title: 'Contractor'},
                   {title: 'Intern'},
               ];
        return (
            <div class="Modal" >
            <div class="header" >
            <h4 style={{
                 fontFamily: "TiemposHeadline",
                 fontWeight: "lighter",
                 marginTop: "-1.8em",
                 fontSize: '30px', 
                 lineHeight: '38px',
            }}> 
                Help us build your profile!
            </h4>
            </div>
            <div class="Boxes" style={{ 
                marginTop: '50px'
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
                color: '#121212'
            }}>What's your department?</p>
                <Autocomplete
                    id="combo-box"
                    options={department}
                    getOptionLabel={(option) => option.title}
                    style={{ width: '80%',
                        marginLeft: '75px' }}
                    renderInput={(params) => <TextField {...params} label="Search" variant="filled" />}
                    textalign="center"
                    
                />
            </div>  
            <Divider variant="middle" style={{
                position: 'absolute', 
                width: '85%',
                left: '05%',
                bottom: '-60%'
            }}/>
            <div class="Box2" style={{
                    position: 'absolute',
                    marginTop: '50px',
                    bottom: '-190%',
                    width: '100%',
                    left: '25px'
            }}>
            <p style={{
                textAlign: 'left',
                marginLeft: '30px',
                fontFamily: 'Mulish, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontSize: '24px',
                lineHeight: '38px',
                color: '#121212'
            }}>What's your position?</p>
             <Autocomplete
                    id="combo-box"
                    options={position}
                    getOptionLabel={(option) => option.title}
                    style={{ width: '80%',
                        marginLeft: '50px' }}
                    renderInput={(params) => <TextField {...params} label="Search" variant="filled" />}
                    textalign="center"
                    />
            </div>
            </div>
            </div>
        );
    }
}

export default DepartmentPosition;