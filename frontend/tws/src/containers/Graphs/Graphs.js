import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Line} from 'react-chartjs-2'
import "chartjs-plugin-lineheight-annotation";
import { withCookies } from 'react-cookie';

import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router-dom';


class Graphs extends Component {

    
        

        state = {
          token: this.props.cookies.get('tws-token'),
          workouts: [],

            data: {
               // labels: ["1", "2", "3", "4", "5"]
                labels:["2020-02-08", "2020-02-09", "2020-02-11", "2020-02-14"],
                datasets: [
                    {
                        label: "Workout #1",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        pointHoberBackgroundColor: 'white',
                    //    data: [4, 5, 1, 12, 20, 2, 16],
                        data: [10, 15, 20, 25]
                    }
                    // {
                    //     label: "Workout #2",
                    //     backgroundColor: "rgba(0, 255, 0, 255)",
                    //     data: [14, 18, 5, 0, 22, 1, 13]
                    // }
                ]
            }
        }
    

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/workouts/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`,
        
      }
    }).then( resp => resp.json())
    .then( resp => this.setState({workouts: resp}))
    .catch( error => console.log(error))
  }

  

  

    setGradientColor = (canvas, color) => {
        const context = canvas.getContext('2d');
        const gradient = context.createLinearGradient(0, 0, 200, 400);
      //  gradient.addColorStop(0, color);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
        return gradient;
    }


    getChartData = canvas => {

        //Obtains the data from workouts
        const data = this.state.data;
       

        //Initialize all filtration variables and arrays
        var chosenWorkout = "Alternating Bicep Curls"; //Change here to determine which workout to show
        var filterIndex;
        var filteredDataWeight = [];
        var filteredDataDate = [];
        var counter = 0;

        //Filters the data by looking for the specific workout title
        for(filterIndex = 0; filterIndex < this.state.workouts.length; filterIndex++)
        {
          var workoutTitle = this.state.workouts[filterIndex].title;

          if(chosenWorkout == workoutTitle)
          {
            filteredDataWeight[counter] = this.state.workouts[filterIndex].weight;
            filteredDataDate[counter] = this.state.workouts[filterIndex].date;
            counter++;
          }
        }
        

        //Stores filtered data into state
        this.state.data.labels = filteredDataDate
        if(data.datasets){
            let colors = ["rgba(255, 0, 255, 0.75", "rgba(0, 0, 255, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
                set.label = chosenWorkout;
                set.data = filteredDataWeight;
            });
        }
        return data;
    }

  render() {
    console.log("William")
    console.log(this.state.workouts)
    function Color() {
      let styles = {
        color: 'black',
      };
    }
    return (
        
        //If a set of elements exist, render it
    <div>
      {this.state.workouts[0] ? (

        <div style = {{position: "relative", width: 700, height: 550}}>
            <Line
                options ={{
                    title:{
                        display: true,
                        text: 'Workout Routine',
                        fontSize: 25,
                        fontColor: 'white'
                    },
                    label:{
                        display: true,
                        fontColor: 'white'
                    },
                    responsive: true,
                    lineHeightAnnotation: {
                        always: false,
                        hover: true,
                        color: 'white',
                      //  noDash: true
                    }
                }}
                data = {this.getChartData}
            />
        </div>
      ) 
      : (<h3>No Data Detected</h3>) 
      }
    </div>
    )
  }
}

export default withCookies(Graphs);
