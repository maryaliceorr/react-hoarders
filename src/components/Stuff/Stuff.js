import React from 'react';

import './Stuff.css';

// addClick = () => {
//   this.props.addToMyStuff(this.props.stuffInfo.id);
// }

class Stuff extends React.Component {
  render () {
    const {stuffInfo} = this.props;
    // const image = require(`${stuffInfo.itemImage}`);

    return (
      <div className="Stuff">
        <h3>{stuffInfo.itemName}</h3>
        <img src={stuffInfo.itemImage} alt={stuffInfo.itemName}/>
        <p>{stuffInfo.itemDescription}</p>
        <button
        // onClick={this.addClick}
        >Add to My Stuff
        </button>
      </div>
    );
  }
}

export default Stuff;