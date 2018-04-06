import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Welcome = ({ user }) => (
  <div align="center">
    <h1>{ user && `${capitalizeFirstLetter(user.username)}, ` }Welcome {user && 'back'} to Nightlife Crawler!</h1>
    <h3>
      Look what's going on and meet nice people!
    </h3>
    <br />
    <br />
    <Link to="/about"><Button bsSize="large" bsStyle="success">Take me to the action!</Button></Link>
  </div>
);

export default Welcome;
