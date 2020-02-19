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
    

    // getWeight = () => {
    //     fetch(`${process.env.REACT_APP_API_URL}/api/workouts/`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Token ${this.state.token}`
    //       }
    //     }).then( resp => resp.json())
    //     .then( res => this.props.updateWorkout(res))
    //     .catch( error => console.log(error))
    //   }

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

    updateState = () => {
   //   workouts = res.weight;
  //    console.log(workouts)
  
    }


    getChartData = canvas => {

        //Obtains the data from workouts
        const data = this.state.data;


        var j;
        var dataWeight = [];    

        //Inserts Date values into an array
        for(j = 0; j < this.state.workouts.length; j++)
        {
          const testWeight2 = this.state.workouts[j].weight;
          dataWeight[j] = this.state.workouts[j].weight;
        }

        var dataDate = [];
        var k;
         for(k = 0; k <  this.state.workouts.length; k++)
         {
           var dateString = this.state.workouts[k].date.toString();
           dataDate[k] = dateString;
         }
 

        this.state.data.labels = dataDate
        if(data.datasets){
            let colors = ["rgba(255, 0, 255, 0.75", "rgba(0, 0, 255, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
                set.data = dataWeight;
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
        
        
    <div>
      {this.state.workouts[0] ? (

        <div style = {{position: "relative", width: 700, height: 550}}>
            <h3>Alternating Bicep Curls</h3>
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
      : (<h3>Rendering Lost</h3>) 
      }
    </div>
    )
  }
}

export default withCookies(Graphs);

