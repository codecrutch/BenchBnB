import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <p>
          Hello fellow bench lover, {currentUser.username}
        </p>
        <button onClick="logout">Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/signup'>Signup</Link>
        <br/>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default Greeting;
