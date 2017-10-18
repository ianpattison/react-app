import React, { Component } from 'react';

class AirplaneItem extends Component {
deleteAirplane(aid){
this.props.onDelete(aid); 
  
}
  render() {
    return (
      <li className="Airplane">
   <strong>{this.props.airplane.title}</strong>: - {this.props.airplane.category} <a href="#" onClick={this.deleteAirplane.bind(this, this.props.airplane.aid)} >x</a>
      </li>
    );
  }
}

export default AirplaneItem;