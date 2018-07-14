import React from 'react';

import stuffRequests from '../../firebaseRequests/stuff';
import Stuff from '../Stuff/Stuff';

import './AllStuff.css';

class AllStuff extends React.Component {

  state = {
    stuff: [],
  }

  componentDidMount () {
    stuffRequests
      .getStuff()
      .then((stuff) => {
        this.setState({stuff});
      })
      .catch((err) => {
        console.error('error with stuff get request', err);
      });
  }

  render () {
    const stuffComponents = this.state.stuff.map((stuff) => {
      return(
        <Stuff
        key={stuff.id}
        stuffInfo={stuff}
        />
      );
    });
    return (
      <div className="AllStuff">
        <h2>AllStuff</h2>
        <div>
          {stuffComponents}
        </div>
      </div>
    );
  }
}

export default AllStuff;