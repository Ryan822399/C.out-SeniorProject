import React, {Component} from 'react';
var FontAwesome = require('react-fontawesome');


class WorkoutDetails extends Component {

  state = {
    highlighted: -1
  }

  highlightRate = high => evt => {
    this.setState({highlighted: high});
  };

  //post and put need a content type to fetch from RESTapi
  rateClicked = stars => evt => {
    fetch(`${process.env.REACT_APP_API_URL}/api/workouts/${this.props.workout.id}/rate_workout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`
      },
      body: JSON.stringify({
        stars: stars + 1
      })
    }).then( resp => resp.json())
    .then( res => this.getDetails())
    .catch( error => console.log(error))
  }

  getDetails = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/workouts/${this.props.workout.id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( res => this.props.updateWorkout(res))
    .catch( error => console.log(error))
  }

  render() {

    const wor = this.props.workout;

    return (
      <React.Fragment>
      { wor ? (
        <div>
          <h3>{wor.title}</h3>
          <FontAwesome name="star" className={wor.avg_rating > 0 ? 'orange' : ''}/>
          <FontAwesome name="star" className={wor.avg_rating > 1 ? 'orange' : ''}/>
          <FontAwesome name="star" className={wor.avg_rating > 2 ? 'orange' : ''}/>
          <FontAwesome name="star" className={wor.avg_rating > 3 ? 'orange' : ''}/>
          <FontAwesome name="star" className={wor.avg_rating > 4 ? 'orange' : ''}/>
          ({wor.no_of_ratings})
          <p>{wor.description}</p>

          <div className="rate-container">
            <h2>Rate This Workout Plan</h2>
            { [...Array(5)].map( (e, i) => {
              return <FontAwesome key={i} name="star"
                  className={this.state.highlighted > i - 1 ? 'purple' : ''}
                  onMouseEnter={this.highlightRate(i)}
                  onMouseLeave={this.highlightRate(-1)}
                  onClick={this.rateClicked(i)}
              />
            })}
          </div>
        </div>
      ) : null}
      </React.Fragment>
    )
  }
}

export default WorkoutDetails;
