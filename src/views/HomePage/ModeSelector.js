import React from 'react';
import '../../assets/fonts/font.css';
import Button from '@material-ui/core/Button'
import MainPageUnderline from '../../assets/mainpage/MainPageUnderline.png';
import wireRobot from '../../assets/mainpage/catorgories/wireRobot.png';
import wireHead from '../../assets/mainpage/catorgories/wireHead.png';
import wireNew from '../../assets/mainpage/catorgories/wireNew.png';
import wireDice from '../../assets/mainpage/catorgories/wireDice.png';
import wireMethod from '../../assets/mainpage/catorgories/wireMethod.png';
import wireHands from '../../assets/mainpage/catorgories/wireHands.png';
import NavBar from '../../components/NavBar/NavBar.js';
import { Link } from 'react-router-dom';
import comingSoon from '../../assets/mainpage/comingSoon.png';
    
    
    
    function ModeSelector() {
        return (
            <div>
                <NavBar/>
            <div class="header" style={{
                 height: '10em',
                 margin: '0',
                 position: 'absolute',
                 top: '170px',
                 left: '50%',
                 marginRight: '-50%',
                 transform: 'translate(-50%, -50%)'
            }}>
            <h4 style={{
                 fontFamily: "TiemposHeadline",
                 fontWeight: "lighter",
                 fontSize: '36px', 
                //  textAlign: 'center',
                //  lineHeight: '38px',
            }}> 
                Choose Your Category
            </h4>
            
            <img src={MainPageUnderline} alt="Underline" style={{
                    marginLeft: '30%',
                    position: 'absolute', 
                    top: '65%'
            }}/>
            </div>
            <div class = "game selectors 1" style={{
                position: 'absolute', 
                 display:'flex', 
                flexDirection: 'row', 
                flexWrap: 'nowrap',
                justifyContent:'flex-start',
                top: '350px',
                left: '49.75%',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }}>
           <div class = "gameone">
            <Link to="/play">
           <button class="learn" style = {{
            backgroundColor: 'white',
            color: 'black',
            position: 'aboslute',
            width: '196px',
            height: '195px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
            
           }} > 
           
           <img src={wireDice} alt="wireDice" style = {{
               height: '75px',
           }}/>
           <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                margin: '5px'
            }}>
                RANDOM
            </h5>
                
           
           </button>
           </Link>
           
           </div>
           <div class="gametwo">
           <button class="timed" style = {{
                backgroundColor: 'white',
             color: 'black',
             marginLeft: '50px',
             marginRight: '50px',
            position: 'aboslute',
            width: '196px',
            height: '195px',
            left: '25%',
            top: '251px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
           }} > 
            <img src={wireHead} alt="wireHead" style={{
                height: '75px',
                marginTop: '30px'
            }}>
                
            </img>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                marginTop: '5px',
                color: '#00000066',
                marginBottom: '10px'
            }}>
                NEW HIRES
            </h5>
            <img src={comingSoon} alt="comingsoon" style={{
                height: '30px',
            }}/>
           
           </button>
           </div>
           <div class="gamethree">
            <button class="battle" style = {{
                backgroundColor: 'white',
             color: 'black',
            position: 'aboslute',
            width: '196px',
            height: '195px',
            left: '25',
            top: '251px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
           }} > 
            <img src={wireNew} alt="wireNew" style={{
            
            height: '75px',
            marginTop: '30px'
            
            
            }}/>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                marginTop: '5px',
                color: '#00000066',
                marginBottom: '10px'
            }}>
                WHO YOU DON'T KNOW
            </h5>
            <img src={comingSoon} alt="comingsoon" style={{
                height: '30px',
            }}/>

           </button>
           </div>
           
           
           
           





           </div>


           {/* ROW TWOO */}

           <div class = "game selectors 1" style={{
                position: 'absolute', 
                 display:'flex', 
                flexDirection: 'row', 
                flexWrap: 'nowrap',
                justifyContent:'flex-start',
                top: '600px',
                left: '49.75%',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }}>
           <div class = "gameone">
        
           <button class="learn" style = {{
            backgroundColor: 'white',
            color: 'black',
            position: 'aboslute',
            width: '196px',
            height: '195px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
            
           }} > 
           
           <img src={wireRobot} alt="wireRobot" style = {{
               height: '75px',
               marginTop: '30px'
           }}/>
           <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                color: '#00000066',
                marginTop: '5px',
                marginBottom: '10px'
            }}>
                DIALEXA HQ
            </h5>
            <img src={comingSoon} alt="comingsoon" style={{
                height: '30px',
            }}/>
                
           
           </button>
         
           
           </div>
           <div class="gametwo">
           <button class="timed" style = {{
                backgroundColor: 'white',
             color: 'black',
             marginLeft: '50px',
             marginRight: '50px',
            position: 'aboslute',
            width: '196px',
            height: '195px',
            left: '25%',
            top: '251px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
           }} > 
            <img src={wireMethod} alt="wireMethod" style={{
                height: '75px',
                marginTop: '30px'
            }}>
            </img>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                color: '#00000066',
                marginTop: '5px',
                marginBottom: '10px'
            }}>
                DEPARTMENTS
            </h5>
            <img src={comingSoon} alt="comingsoon" style={{
                height: '30px',
            }}/>
           
           </button>
           </div>
           <div class="gamethree">
            <button class="battle" style = {{
                backgroundColor: 'white',
             color: 'black',
            position: 'aboslute',
            width: '196px',
            height: '195px',
            left: '25',
            top: '251px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
           }} > 
            <img src={wireHands} alt="wireHands" style={{
            
            height: '75px',
            marginTop: '30px'
            
            
            }}/>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                color: '#00000066',
                marginTop: '5px',
                marginBottom: '10px'
            }}>
                TEAMS
            </h5>
            <img src={comingSoon} alt="comingsoon" style={{
                height: '30px',
            }}/>

           </button>
           </div>
           
           
           
           





           </div>





           <div class = "nextbutton" style= {{
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center', 
                marginTop: '-120px'
           }}>
            {/* <Button style={{
            backgroundColor: '#DAB773',
             color: 'white',
            position: 'aboslute',
            width: '180px',
            marginRight: '10px',
            height: '40px',
            marginTop: '800px',
           
            
            }}>Next</Button> */}
            </div>
            {/* <div class="text" style= {{
                          position: 'absolute', 
                          display:'flex', 
                         flexDirection: 'row', 
                         flexWrap: 'nowrap',
                         justifyContent:'flex-start',
                         top: '450px',
                         left: '49.75%',
                         marginRight: '-50%',
                         transform: 'translate(-50%, -50%)',
                         userSelect: 'none'
            }}>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                position: 'absolute',
                top: '-85px',
                left: '-283px'
            }}>
                DIALEXA HQ
            </h5>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                width: 'auto',
                height: 'auto',
                position: 'absolute',
                textAlign: 'center',
                top: '-85px',
                left: '-38px',
                whiteSpace: 'nowrap'
            }}>
                NEW HIRES
            </h5>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                position: 'absolute',
                top: '-85px',
                left: '180px',
                whiteSpace: 'nowrap'
            }}>
                WHO YOU DON'T KNOW
            </h5>
            
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                position: 'absolute',
                top: '160px',
                left: '-45px'
            }}>
                DEPARTMENTS
            </h5>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '14px',
                position: 'absolute',
                top: '160px',
                left: '225px'
            }}>
                TEAMS
            </h5>

            </div> */}



             </div>



        );







    }

export default ModeSelector;