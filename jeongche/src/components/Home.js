import React from "react";
import './Home.css'
import styled from 'styled-components'
import earrings from '../images/YorEarrings.jpg'
import showcase from '../images/Testing.gif'
import bugFlower from '../images/BugFlowerEarrings.jpg'
import bugFlower2 from '../images/BugsFlowers2.jpg'
import justEarrings from '../images/NormalEarrings.jpg'


// const Background = styled.div`
// background-image: url(${flowers});
// background-repeat:no-repeat;
// border-radius: 50%;
// `

const Home = () => {
  return (
    <div className="homePage">

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


      <div className="types">
        <img src={bugFlower} alt="Earrings that contain both a bug and a flower" />
        <img src={bugFlower2} alt="Earrings that contain both a bug and a flower" />
        <img src={justEarrings} alt="Earrings made that do not fit a certain theme" />
      </div>

      <div className="homeText">
        <p>
          Take your pick! We have pieces with bugs in them, flowers, both or maybe you  don't want either. Thats fine there
          are some who fit no major theme but to be stylish and for your enjoyment
        </p>
      </div>

    </div>
  );

};

export default Home;