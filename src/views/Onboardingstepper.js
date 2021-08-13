import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { Redirect, Route } from 'react-router-dom';
import PaperComponent from '../components/Onboarding/PaperComponent.js';
import CalendarTime from './OnboardingModals/CalendarTime.js';
import HometownBackground from './OnboardingModals/HometownBackground.js'
import SkillsTalents from './OnboardingModals/SkillsTalents.js';
import SurvivorTV from './OnboardingModals/SurvivorTV.js'
import FavoriteMusic from './OnboardingModals/FavoriteMusic.js'
import ThankYou from './OnboardingModals/ThankYou.js'
import { ReactComponent as BackwardsButton }  from '../assets/onboarding/BackwardsButton.svg';
import { ReactComponent as ForwardButton }  from '../assets/onboarding/ForwardButton.svg';
import { ReactComponent as FadedBackwardsButton }  from '../assets/onboarding/FadedBackwardsButton.svg';
import DepartmentPosition from './OnboardingModals/DepartmentPosition.js';
import NavigatorOne from '../assets/onboarding/NavigatorOne.png';
import NavigatorTwo from '../assets/onboarding/NavigatorTwo.png';
import NavigatorThree from '../assets/onboarding/NavigatorThree.png';
import NavigatorFour from '../assets/onboarding/NavigatorFour.png';
import NavigatorFive from '../assets/onboarding/NavigatorFive.png';
import NavigatorSix from '../assets/onboarding/NavigatorSix.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  } 
}));

function getSteps() {
  return ['Department/Position', 'Date Started', 'Hometown/School', 'Skills/Talent', 'TV', 'Playlist'];
}

function getStepContent(step) { //import view for each question
  switch (step) {
    case 0:
      return <DepartmentPosition/>;
    case 1:
      return <CalendarTime/>;
    case 2:
      return <HometownBackground/>;
    case 3: 
      return <SkillsTalents/>;
    case 4: 
      return <SurvivorTV/>;
    case 5: 
      return <FavoriteMusic/>;
    case 6: 
      return <ThankYou/>;
    default:
      return '';
  }
}



export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepMandatory = (step) => {
    return step === 0;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (isStepMandatory(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // handleSkip();


 function Navigator(steps) {
    switch (steps) {
      case 0:
       return NavigatorOne;
      case 1:
        return NavigatorTwo;
      case 2:
        return NavigatorThree;
      case 3: 
        return NavigatorFour;
      case 4: 
        return NavigatorFive;
      case 5: 
        return NavigatorSix;
      default:
        return '';
    }
  }

  return (
    
    <div className={classes.root}>
      {/* <PaperComponent/> */}
          <div className='topLabel'>
            <Typography style= {{ 
              alignItems: 'center', 
              textAlign: 'center',
              position: 'absolute', left: '50%', top: '25%',
              width: '100%',
              transform: 'translate(-50%, -50%)',
            }} 
            className={classes.instructions}>{getStepContent(activeStep)}</Typography>
      </div>
      <div>
        {activeStep === steps.length ? (
          <div>
          </div>
        ) : (
            <div>
              {activeStep !== 0 && (
              <BackwardsButton children={BackwardsButton} style={{
                position: 'absolute', left: '46%', top: '90%',
                width: '6.6%',
                transform: 'translate(-50%, -50%)'
              }} disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </BackwardsButton>)}
              {activeStep === 0 && (
                <ForwardButton style={{
                  position: 'absolute', left: '50%', top: '90%',
                  width: '6.6%',
                  transform: 'translate(-50%, -50%)'
                }}
  
                  onClick={handleNext}
                  className={classes.button}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </ForwardButton>)}
              {!isStepMandatory(activeStep) && (
                <Typography
                style={{
                  position: 'absolute', left: '50%', top: '83%',
                  width: '6.6%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'Mulish', 
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: '38px', 
                  alignItems: 'center', 
                  textAlign: 'center', 
                  textDecorationLine: 'underline', 
                  color: '#949494'
                }}
                
                  onClick={handleSkip}
                  className={classes.button}
                >
                  SKIP
                  <style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
</style>
                </Typography>
              )}
              {activeStep !== 0 && (
              <ForwardButton style={{
                position: 'absolute', left: '54%', top: '90%',
                width: '6.6%',
                transform: 'translate(-50%, -50%)'
              }}

                onClick={handleNext}
                className={classes.button}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </ForwardButton>)}
            </div>
        )}
      </div>
      <div style={{boxShadow: 'none'}}>
      {activeStep < 6 && (<img src={Navigator(activeStep)} alt="navigationcounter" style={{
        boxShadow: 'none !important',
        position: 'absolute',
        left: '45.3%', 
        top:'107%',
        filter: 'none',
        outline: 'none !important',
        webkitBoxShadow: 'none !important',
        textShadow: 'none !important',
        border: 'none !important',
        dropShadow: 'none !important'
       }}/>)}
       </div>
    </div>
  );
}
