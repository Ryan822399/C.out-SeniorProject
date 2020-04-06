import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Line} from 'react-chartjs-2'
import "chartjs-plugin-lineheight-annotation";
import { withCookies } from 'react-cookie';
import ProgressTabs from '../../components/ProgressTabs/ProgressTabs';
import GraphButton from '../../components/GraphButton/GraphButton';
import {Spinner} from 'react-bootstrap'
import PropTypes from 'prop-types'

import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router-dom';


class Graphs extends Component {

    constructor(props){
        super(props);
        this.state = {
          currTab: "first",
          token: this.props.cookies.get('tws-token'),
          workouts: [],
          groupWorkouts: [],
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
            },
            groupData: {
              labels: ["1","2", "3", "4"],
              datasets: [
                {
                  label: "Group Workout #1",
                  backgroundColor: "rgba(255, 0, 255, 0.75)",
                  data: [10,15,20,25]
                }
              ]
            },
            value: '',
            workoutTitles: [],
            title: '',
            description: '',
            weight: '',
            date: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


  handleChange = event => {
    this.setState( {value: event.target.value} )  
   }

  handleSubmit(event){
    alert("This is a test alert: " + this.state.value);
    this.state.data.update();
    event.preventDefault();
  }

  updateTitle = title =>  {
    this.setState({
      title: title
    });
}

  updateDesc = desc =>  {
    this.setState({
        description: desc
    });
  }

  updateWeight = weight =>  {
    this.setState({
        weight: weight
    });
  }

  updateDate = date =>  {
    this.setState({
        date: date
    });
  }

  formSubmitted = () => {
    let postBody = {
      title: this.state.title,
      description: this.state.description,
      weight: this.state.weight,
      date: this.state.date
    }
    
    if(this.state.currTab == "first")
    {
      fetch(`${process.env.REACT_APP_API_URL}/api/workouts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${this.state.token}`
        },
        body: JSON.stringify(postBody)
      }).then( resp => resp.json())
      .then( res => this.props.editedWorkout(res))
      .catch( error => console.log(error))
      console.log(postBody.title);
      console.log(postBody.description);
      console.log(postBody.weight);
      console.log(postBody.date);
    }


        //IMPLEMENT ONCE GROUP WORKOUT TABLE IS CREATED AND POST IS WORKING
    else if(this.state.currTab == "second")
    {
      fetch(`${process.env.REACT_APP_API_URL}/api/groupworkout/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${this.state.token}`
        },
        body: JSON.stringify(postBody)
      }).then( resp => resp.json())
      .then( res => this.props.editedWorkout(res))
      .catch( error => console.log(error))
    }

  }

//WIP Delete tab
//  deleteForm = () => {
//    let fromDelete = {
//      title: this.state.title,
//      description: this.state.description,
//      weight: this.state.weight,
//      date: this.state.date
//    }

//    if(this.state.currTab == "first")
//    {
//      fetch(`${process.env.REACT_APP_API_URL}/api/workouts/`, {
//        method: 'DELETE',
//        headers: {
//          'Content-Type': 'application/json',
//          'Authorization': `Token ${this.state.token}`
//        },
//        body: JSON.stringify(postBody)
//      }).then( resp => resp.json())
//      .then( res => this.props.editedWorkout(res))
//      .catch( error => console.log(error))
//      console.log(postBody.title);
//      console.log(postBody.description);
//      console.log(postBody.weight);
//      console.log(postBody.date);
//    }


   
//    else if(this.state.currTab == "second")
//    {
//      fetch(`${process.env.REACT_APP_API_URL}/api/groupworkout/`, {
//        method: 'DELETE',
//        headers: {
//          'Content-Type': 'application/json',
//          'Authorization': `Token ${this.state.token}`
//        },
//        body: JSON.stringify(postBody)
//      }).then( resp => resp.json())
//      .then( res => this.props.editedWorkout(res))
//      .catch( error => console.log(error))
//    }


// }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/workouts/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`,

      }
    }).then( resp => resp.json())
    .then( resp => this.setState({workouts: resp}))
  //  .then (resp => this.setState({workoutTitle: }))
    .catch( error => console.log(error))

  //  UNCOMMENT ONCE GROUPWORKOUT TABLE IS WORKING
    fetch(`${process.env.REACT_APP_API_URL}/api/groupworkout/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`,

      }
    }).then( resp => resp.json())
    .then( resp => this.setState({groupWorkouts: resp}))
  //  .then (resp => this.setState({workoutTitle: }))
    .catch( error => console.log(error))
    console.log("I am here!!!")
   }



  changeTabs = tab =>  {
      this.setState({currTab: tab});
  }

    setGradientColor = (canvas, color) => {
        const context = canvas.getContext('2d');
        const gradient = context.createLinearGradient(0, 0, 200, 400);
      //  gradient.addColorStop(0, color);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
        return gradient;
    }


    loadWorkoutSelector(){
      if(this.state.currTab == "first")
      {
        var filterIndex;
        var seenTitles = [];
        for(filterIndex = 0; filterIndex < this.state.workouts.length; filterIndex++)
        {
          var workoutTitle = this.state.workouts[filterIndex].title;
          seenTitles[filterIndex] = workoutTitle;
        }
  
        const distinctTitles = Array.from(new Set(seenTitles));
        this.state.workoutTitles = distinctTitles
        return(<h3>Choose a Workout</h3>)

      }
      else if(this.state.currTab == "second")
      {
        var filterIndex;
        var seenTitles = [];
        for(filterIndex = 0; filterIndex < this.state.groupWorkouts.length; filterIndex++)
        {
          var workoutTitle = this.state.groupWorkouts[filterIndex].title;
          seenTitles[filterIndex] = workoutTitle;
        }
  
        const distinctTitles = Array.from(new Set(seenTitles));
        this.state.workoutTitles = distinctTitles
        return(<h3>Choose a Workout</h3>)
      }

    }

    


    getChartData = canvas => {

        //Obtains the data from workouts
       // const data = this.state.data;
       let data;
       //Selects My Progress Tab
        if(this.state.currTab == "first")
        {
           data = this.state.data;

          //Initialize all filtration variables and arrays
        var chosenWorkout = this.state.value; //Change here to determine which workout to show
        console.log(chosenWorkout)
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
            console.log("I am here")
            console.log(filteredDataWeight[counter])
          }
        }

        console.log("filtered dates")
        console.log(filteredDataDate)
        //Stores filtered data into state
        this.state.data.labels = filteredDataDate
      //  data.datasets.data = filteredDataWeight
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

        
        //Selects Group Progress Tab
        else if(this.state.currTab=="second")
        {
          data = this.state.groupData;

          var chosenWorkout = this.state.value;
          var filterIndex;
          var groupFilteredDataWeight = [];
          var groupfilteredDataDate = [];
          var groupCounter = 0;

          for(filterIndex = 0; filterIndex < this.state.groupWorkouts.length; filterIndex++)
          {
            var workoutTitle = this.state.groupWorkouts[filterIndex].title;
            
            if(chosenWorkout == workoutTitle)
            {
              groupFilteredDataWeight[groupCounter] = this.state.groupWorkouts[filterIndex].weight;
              groupfilteredDataDate[groupCounter] = this.state.groupWorkouts[filterIndex].date;
              groupCounter++;
            }
          }

          this.state.groupData.labels = groupfilteredDataDate;
          if(data.datasets){
            let colors = ["rgba(255, 0, 255, 0.75", "rgba(0, 0, 255, 0.75)"];
            data.datasets.forEach((set, i) => {
              set.backgroundColor = this.setGradientColor(canvas, colors[i]);
              set.borderColor = "white";
              set.borderWidth = 2;
              set.label = chosenWorkout;
              set.data = groupFilteredDataWeight
            })
          }
          return data;
        }


        


    }

  render() {
    let content;
    if(this.state.currTab == "first")
    {
      content = this.state.data;
    }
    else if(this.state.currTab == "second")
    {
      content = this.state.groupData;
    }
    console.log("William")
    console.log(this.state.workouts)
    console.log("Group Workouts")
    console.log(this.state.groupWorkouts)
    function Color() {
      let styles = {
        color: 'black',
      };
    }
    
    
    return (

        //If a set of elements exist, render it
    <div>
    <div style={styles.progress}>
    <ProgressTabs changeTabs={this.changeTabs} act={this.state.currTab}/>
    </div>
      {this.state.workouts[0] ? (
        <div style = {{position: "relative", width: 700, height: 550}}>



          <div dropdown>
            {this.loadWorkoutSelector()}

            <form onSubmit={this.handleSubmit}>
              <label>
                Workout Titles: 
                <select value={this.state.value} onChange={this.handleChange}>
                  {this.state.workoutTitles.map(workoutTitles => (
                    <option key = {workoutTitles} value ={workoutTitles}>
                      {workoutTitles}
                    </option>
                  ))}
                </select>
              </label>
              </form>
            </div>

          <div style={styles.forbutton}>
            <GraphButton  formSubmitted={this.formSubmitted}
            updateDesc={this.updateDesc}
            updateTitle={this.updateTitle}
            updateWeight={this.updateWeight}
            updateDate={this.updateDate}
            post={this.state.newPost}/>
          </div>


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
      : (
      
      <div style={styles.spinners}> <Spinner  animation="border" variant="success" />
            <div style={styles.forbutton}>
            <GraphButton  formSubmitted={this.formSubmitted}
            updateDesc={this.updateDesc}
            updateTitle={this.updateTitle}
            updateWeight={this.updateWeight}
            updateDate={this.updateDate}
            post={this.state.newPost}/>
          </div> </div>)
      }
    </div>
    )
  }
}
const styles = {
    progress: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}

export default withCookies(Graphs);
