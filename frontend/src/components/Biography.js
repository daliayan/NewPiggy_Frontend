import React from 'react';
import squid from '../images/squid-game.jpg';

const Biography = () => {
  return (
    <header className="bio-page">
      <p>
        My name is Dalia and I brought my piggy bank idea to life. I recently binge-watched Squid Games on Netflix, right before I was due to start this React/Redux phase five project.
        I decided to create my own piggy bank inspired by the show where users can create their own bank and add money to increase their funds.
      </p>
      <img src={squid} className='squid-game' alt='' />
    </header>
  );
}

export default Biography;