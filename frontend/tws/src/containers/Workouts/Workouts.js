import React, {Component} from 'react';
import { withCookies } from 'react-cookie';
import './Workouts.css';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import WorkoutDetails from '../../components/WorkoutDetails/WorkoutDetails';
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm';
var FontAwesome = require('react-fontawesome');

class Workouts extends Component {
  state = {
    workouts: [],
    selectedWorkout: null,
    editedWorkout: null
  }

  componentDidMount() {
    if(this.props.token) {
      fetch(`${process.env.REACT_APP_API_URL}/api/workouts/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.props.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({workouts: res}))
      .catch( error => console.log(error))
    } else {
      window.location.href = '/';
    }
  }

   loadWorkout = workout => {
     this.setState({selectedWorkout: workout, editedWorkout: null});
   };

  workoutDeleted = selWorkout => {
    //remove from list if match found
    const workouts = this.state.workouts.filter(workout => workout.id !== selWorkout.id)
    this.setState({workouts: workouts, selectedWorkout: null})
  };

  editClicked = selWorkout => {
    this.setState({editedWorkout: selWorkout});
  }

  newWorkout = () => {
    this.setState({editedWorkout: {title: '', description: ''}});
  }

  addWorkout = workout => {
    this.setState({workouts: [...this.state.workouts, workout]})
  }

  cancelForm  = () => {
    this.setState({editedWorkout: null});
  }

  render() {
    console.log(this.state.workouts)

    return (
      <div className="App">
        <h1>
          <FontAwesome name="heartbeat" />
          <span>TWS</span>
        </h1>
        <div className="layout">

          <WorkoutList workouts={this.state.workouts}
            workoutClicked={this.loadWorkout}
            workoutDeleted={this.workoutDeleted}
            editClicked={this.editClicked}
            newWorkout={this.newWorkout}
            token={this.props.token}
          />
          <div>
            {!this.state.editedWorkout ?
              <WorkoutDetails workout={this.state.selectedWorkout}
              token={this.props.token}
              updateWorkout={this.loadWorkout}/>
             : <WorkoutForm newWorkout={this.addWorkout}
             workout={this.state.editedWorkout}
             token={this.props.token}
             cancelForm={this.cancelForm}/> }

          </div>
        </div>
      </div>
    );
  }


}

export default Workouts;
