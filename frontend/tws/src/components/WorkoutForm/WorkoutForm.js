import React, {Component} from 'react';
var FontAwesome = require('react-fontawesome');


class WorkoutForm extends Component {

  state = {
    editedWorkout: this.props.workout
  }

  cancelClicked = () => {
    this.props.cancelForm();
  }

 inputChanged = event => {
   let workout = this.state.editedWorkout;
   workout[event.target.name] = event.target.value;
   this.setState({editedWorkout: workout});
 }

 saveClicked = () => {
   console.log('saving');
   fetch(`${process.env.REACT_APP_API_URL}/api/workouts/`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Token ${this.state.token}`
     },
     body: JSON.stringify(this.state.editedWorkout)
   }).then( resp => resp.json())
   .then( res => this.props.newWorkout(res))
   .catch( error => console.log(error))
 }

 updateClicked = () => {
   console.log('updating');
   fetch(`${process.env.REACT_APP_API_URL}/api/workouts/${this.props.workout.id}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Token ${this.state.token}`
     },
     body: JSON.stringify(this.state.editedWorkout)
   }).then( resp => resp.json())
   .then( res => this.props.editedWorkout(res))
   .catch( error => console.log(error))
 }

  render() {

    const wor = this.props.workout;

    const isDisabled= this.state.editedWorkout.title.length === 0 ||
        this.state.editedWorkout.description.length === 0;

    return (
      <React.Fragment>
        <span>Title</span> <br/>
        <input type="text" name="title" value={this.props.workout.title}
          onChange={this.inputChanged}/><br/>
        <span>Description</span><br/>
        <textarea name="description" value={this.props.workout.description}
          onChange={this.inputChanged}/><br/>
        { this.props.workout.id ?
            <button disabled={isDisabled} onClick={this.udpateClicked}>Update</button>
          : <button disabled={isDisabled} onClick={this.saveClicked}>Save</button>
        } &nbsp;
        <button onClick={this.cancelClicked}>Cancel</button>


      </React.Fragment>
    )
  }
}

export default WorkoutForm;
