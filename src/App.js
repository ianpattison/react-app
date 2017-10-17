import React, {
  Component
}
from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Airplanes from './components/Airplanes';
import AddAirplane from './components/AddAirplane';
import './App.css';

class App extends Component {


  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {

    this.setState({
      airplanes: [
        {
          aid: uuid.v4(),
          title: '747',
          category: 'Heavy'
        },
        {
          aid: uuid.v4(),
          title: 'A320',
          category: 'Medium'
        },
        {
          aid: uuid.v4(),
          title: 'DHC-8',
          category: 'Light'
        }
]
    });


    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'eCommerce Shopping Cart',
          category: 'Web Development'
        }
]
    });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  handleAddAirplane(airplane) {
    let airplanes = this.state.airplanes;
    airplanes.push(airplane);
    this.setState({
      airplanes: airplanes
    });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }

  handleDeleteAirplane(aid) {
    let airplanes = this.state.airplanes;
    let index = airplanes.findIndex(x => x.aid === aid);
    airplanes.splice(index, 1);
    this.setState({
      airplanes: airplanes
    });
  }

  render() {
    return ( < div className = "App" >
      < div className = "container" >
            < div className = "row" >
            < div className = "col-md-6" >
      < Projects projects = {
        this.state.projects
      }
      onDelete = {
        this.handleDeleteProject.bind(this)
      }
      />

      < AddProject addProject = {
        this.handleAddProject.bind(this)
      }
      />
</div>
    < div className = "col-md-6" >
      


      < Airplanes airplanes = {
        this.state.airplanes
      }
      onDelete = {
        this.handleDeleteAirplane.bind(this)
      }
      />

      < AddAirplane addAirplane = {
        this.handleAddAirplane.bind(this)
      }
      />
</div>
</div>


</div>
      < /div>
    );
  }
}

export default App;