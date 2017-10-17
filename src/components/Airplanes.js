import React, { Component } from 'react';
import AirplaneItem from './AirplaneItem';

class Airplanes extends Component {
 deleteAirplane(aid){
   this.props.onDelete(aid);
 }
  render() {
     let airplaneItems;  
  if(this.props.airplanes){ 
    airplaneItems = this.props.airplanes.map(airplane => {
      return (   
      <AirplaneItem onDelete={this.deleteAirplane.bind(this)} key={airplane.title} airplane={airplane} />
      
      );
    });
    
  }
    return (
      <div className="Airplanes">
      
      <h3> Latest Airplanes </h3>
      {airplaneItems}
      </div>
    );
  }
}


export default Airplanes;