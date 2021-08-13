import { Paper } from '@material-ui/core';
import React from 'react';
import './Paper.css';
import Onboardingstepper from '../../views/Onboardingstepper.js'
import BVGLogoWithShadow from '../../assets/BVGLogoShadow.svg';



class PaperComponent extends React.Component {
        render() {
            const centering = {
                // position: 'absolute', left: '50%', top: '50%',
                // transform: 'translate(-50%, -50%)'
            };
        return (
            <div className="title">
      <img className="pic" src={BVGLogoWithShadow} alt="Main Logo"/>
            <div class="vertical-center">
            <Paper id="LoginModal" style={{
                
            }}>
                <div class="interior-modal">
                <Onboardingstepper />
                </div>
            </Paper>
            
            </div>
            </div>
        );
    }
}

export default PaperComponent;