import React from 'react';
import '../../assets/fonts/font.css';
import MainPageUnderline from '../../assets/mainpage/MainPageUnderline.png';
import wireBear from '../../assets/mainpage/wireBear.png';
import wireGorilla from '../../assets/mainpage/wireGorilla.png';
import wireBattle from '../../assets/mainpage/greyBattle.png';
import comingSoon from '../../assets/mainpage/comingSoon.png';
import NavBar from '../../components/NavBar/NavBar.js';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
    
    
    function GameSelector() {
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
                Pick Your Game
            </h4>
            
            <img src={MainPageUnderline} alt="Underline" style={{
                    marginLeft: '20%',
                    position: 'absolute', 
                    top: '65%'
            }}/>
            </div>
            <div class = "game selectors" style={{
                position: 'absolute', 
                 display:'flex', 
                flexDirection: 'row', 
                flexWrap: 'nowrap',
                justifyContent:'flex-start',
                top: '450px',
                left: '49.75%',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }}>
           <div class = "gameone">
           <Route
                path="/game"
                exact
                render={() => (
                    <Link to="/mode">
                            <button class="learn" style = {{
            backgroundColor: 'white',
            color: 'black',
            position: 'aboslute',
            width: '278px',
            height: '347px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
            
           }} > 
           
           <img src={wireBear} alt="wirebear" style = {{
               height: '130px',
            //    marginTop: '-60px',
               marginBottom: '10px'
           }}/>
           <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '24px',
                margin: '10px'
            }}>
                LEARN
            </h5>

                
           
           </button>
                    </Link>
                )} 
            />
           
           
           </div>
           <div class="gametwo">
           <button class="timed" style = {{
                backgroundColor: 'white',
             color: 'black',
             marginLeft: '50px',
             marginRight: '50px',
            position: 'aboslute',
            width: '278px',
            height: '347px',
            left: '25%',
            top: '251px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
           }} > 
            <img src={wireGorilla} alt="wireGorilla" style={{
                height: '130px',
                marginTop: '50px'
            }}>
            </img>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '24px',
                color: '#00000066',
                marginBottom: '20px',
                marginTop: '10px'
            }}>
                TIMED
            </h5>
            <img src={comingSoon} alt="comingsoon" style={{
                height: '50px',
            }}/>
           
           </button>
           </div>
           <div class="gamethree">
            <button class="battle" style = {{
                backgroundColor: 'white',
             color: 'black',
            position: 'aboslute',
            width: '278px',
            height: '347px',
            left: '25',
            top: '251px',
            
            boxShadow: '0px 0px 10px #D2C4A8'
           }} > 
            <img src={wireBattle} alt="wirebattle" style={{
            
            height: '120px',
            marginTop: '50px'
            
            
            }}/>
            <h5 style={{
                fontFamily: 'Barlow',
                fontSize: '24px',
                color: '#00000066',
                margin: '20px'
            }}>
                BATTLE
            </h5>
            <img src={comingSoon} alt="comingsoon" style={{
                height: '50px',
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
            height: '40px',
            marginTop: '800px',
           
            
            }}>NEXT</Button> */}
            </div>
            <div class="text" style= {{
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
            
            

            </div>



             </div>



        );







    }

export default GameSelector;