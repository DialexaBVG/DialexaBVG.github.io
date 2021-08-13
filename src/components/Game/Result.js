import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import trophy from '../../assets/trophy.svg';
import BVGLogoWithShadow from '../../assets/BVGLogoShadow.svg';
import Bear from '../../assets/triBear.svg';
import Gorilla from '../../assets/triGorilla.svg';

function Result(props) {
  return (
    <div className="title">
      <img width="400px"src={BVGLogoWithShadow} alt="Main Logo"/>
    <div className="result">
    <img className="bear" src={Bear} alt="Bear"/>
        <div className="resultBox">
        <img alt="Trophy" src={trophy} style={{
                height: '200px',
                marginTop: '150px'
            }}></img>
        <h4 style={{
                 fontFamily: "TiemposHeadline",
                 fontWeight: "lighter",
                 marginTop: "50px",
                 fontSize: '50px', 
                 lineHeight: '0px',
            }}> 
                Thanks for Playing!
            </h4>
        <p>You answered {props.quizResult} of 5 questions correct!</p>
        <br></br>
        <Link to="/game">
            <button class="Thanks" variant="contained" color="primary" style={{
                border: '',
                marginTop: '0px',
                color: 'white',
                width: '180px',
                height: '40px',
                
            }}> 
            HOME
            </button>
        </Link>
        </div>
        <img className="gorilla" src={Gorilla} alt="Gorilla"/>
    </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
