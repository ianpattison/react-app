import React, { Component } from 'react';
import uuid from 'uuid';

class AddAirplane extends Component {
  constructor(){
    super();
    this.state={
      newAirplane: {}
    }
  }
  
  static defaultProps = {  
    categories: ['light', 'medum', 'heavy']
  }



handleSubmit(e){ 
  if(this.refs.title.value === ''){ 
    
    alert('title is required');
  } else {
    this.setState({newAirplane: { 
      id:uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function (){ 
      this.props.addAirplane(this.state.newAirplane); 
      
    });
    
  }

  e.preventDefault();
}
  render() {

    let categoryOptions = this.props.categories.map( 
      category => {return <option key={category} value={category}>{category}</option> });
    
    
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}> 
     
            <div>
              <label>title</label><br />
              <input type="text" ref="title" /> 
            </div>
            <div> 
              <label>Category</label><br /> 
              <select ref="category"> 
                {categoryOptions}
              </select>
            </div>  
 <br />
      <input type="submit" value="submit" />
       
          </form>
        </div>
    );
  }
}

export default AddAirplane;