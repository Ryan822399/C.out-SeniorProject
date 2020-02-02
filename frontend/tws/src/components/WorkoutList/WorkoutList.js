import React from 'react';
var FontAwesome = require('react-fontawesome');


function WorkoutList(props) {

  const workoutClicked = workout => evt => {
    props.workoutClicked(workout);
  };

  const editClicked = workout => {
    props.editClicked(workout);
  }

  const removeClicked = workout => {
    console.log('DELETING');
    console.log(props);
    fetch(`${process.env.REACT_APP_API_URL}/api/workouts/${workout.id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${props.token}`
      }
    }).then( resp => this.props.workoutDeleted(workout))
    .catch( error => console.log(error))
  };

  const newWorkout = () => {
    props.newWorkout();
  }

  return (
    <div>
     { props.workouts.map( workout => {
      return (
        <div key={workout.id} className="workout-item">
          <h3  onClick={workoutClicked(workout)}>
            {workout.title}
          </h3>
          <FontAwesome name="edit" onClick={() => editClicked(workout)}/>
          <FontAwesome name="trash" onClick={() => removeClicked(workout)}/>
        </div>
      )
      })}
      <button onClick={newWorkout}> Add New </button>
    </div>
  )
}

export default WorkoutList;
