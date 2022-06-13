import React from "react";
import './Home.css'
import styled from 'styled-components'
import earrings from '../images/YorEarrings.jpg'
import showcase from '../images/Testing.gif'


// const Background = styled.div`
// background-image: url(${flowers});
// background-repeat:no-repeat;
// border-radius: 50%;
// `

const Home = () => {
  return (
    <div className="current">

      <div className="newProduct">
        <h1>pLaCeHoLdEr</h1>
        <span class="btn">Shop Now</span>
      </div>

      <div className="earrings">
        <img className="showcase" src={showcase} alt="Showcase" />
        <img src={earrings} alt="Earrings" />

      </div>
    </div>
  );

};

export default Home;