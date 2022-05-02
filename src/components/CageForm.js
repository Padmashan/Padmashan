import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import TimePicker from 'react-time-picker';
import moment from "moment";
import firebase from "../database/firebase";




/*
class PageComponent extends React.Component{
 
  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({
      Temperature_C: 'Temperature_C',
      Intensity: 'Intensity',
      Temperature_F: 'Temperature_F',
      Humidity:'Humidity',
      Gas:'Gas',
      gasState:'gasState',
      Alcohol:'Alcohol',
      alcoholState:'alcoholState',
      Water_Level:'Water_Level',
      Measured_Weight:'Measured_Weight',
      Food_state:'Food_state',
      Gate_state:'Gate_state',
      Light:'Light',

    });
  };
 
    render(){
        return(
           <div>
            <h1>{Math.random()}</h1>
            <button onClick={this.handleRefresh}>Refresh component</button>
          </div>
        )  
    }
}
 
*/

const CageForm = () => {
  const ref = firebase.firestore().collection('Cage');

 const [timeFood, setTimeFood] = useState();
 const [timeGate, setTimeGate] = useState();
 const [Motion_State, setMotion_State] = useState('...');
 const [Intensity, setIntensity] = useState('...');
 const [Temperature_C, setTemperature_C] = useState('...');
 const [Temperature_F, setTemperature_F] = useState('...');
 const [Humidity, setHumidity] = useState('...');
 const [Gas, setGas] = useState('...');
 const [GasState , setGasState] = useState('...');
 const [Alcohol , setAlcohol] = useState('...');
 const [alcoholState , setAlcoholState] = useState('...');
 const [Water_Level , setWater_Level] = useState('...');
 const [Measured_Weight  , setMeasured_Weight] = useState('...');
 const [Food_state  , setFood] = useState('...');
 const [Gate_state  , setGate] = useState('...');
 const [Light , setLight] = useState('...');

 const getData = () => {
  console.log('QuerySnapshot ');
  ref.onSnapshot(QuerySnapshot => {
    QuerySnapshot.forEach(doc => {
      console.log('doc ',doc.data());
      
      setMotion_State(doc.data().Motion_State)
      setIntensity(doc.data().Intensity)
      setTemperature_C(doc.data().Temperature_C)
      setTemperature_F(doc.data().Temperature_F)
      setHumidity(doc.data().Humidity)
      setGas(doc.data().Gas)
      setGasState(doc.data().GasState)
      setAlcohol(doc.data().Alcohol)
      setAlcoholState(doc.data().alcoholState)
      setWater_Level(doc.data().Water_Level)
      setMeasured_Weight(doc.data().Measured_Weight)
      setFood(doc.data().Food_state)
      setGate(doc.data().Gate_state)
      setLight(doc.data().Light)
    })
  })
console.log('QuerySnapshot ');
}

useEffect(() => {
getData();
});

/*
const GasStateCalc =(e) =>{
  e.preventDefault();
  if(Gas > 700){
    console.log("Worning");
    firebase.firestore().collection('Cage').doc('Dog').update({
    gasState:'Worning'
    })
  }
  console.log("Normal");
 firebase.firestore().collection('Cage').doc('Dog').update({
  gasState:'Normal'
 })
 
}
*/

const lighOn =(e) =>{
   e.preventDefault();
  console.log("light on");
  firebase.firestore().collection('Cage').doc('Dog').update({
    Light:'On'
  })
  
}

const lighOff =(e) =>{
  e.preventDefault();
  console.log("light off");
  firebase.firestore().collection('Cage').doc('Dog').update({
    Light:'Off'
  })
}

const submit =(e) =>{
  e.preventDefault();
  console.log("Submit");
  firebase.firestore().collection('Cage').doc('Dog').update({

    Motion_State: 'Motion_State',
    Temperature_C: 'Temperature_C',
    Intensity: 'Intensity',
    Temperature_F: 'Temperature_F',
    Humidity:'Humidity',
    Gas:'Gas',
    GasState:'GasState',
    Alcohol:'Alcohol',
    alcoholState:'alcoholState',
    Water_Level:'Water_Level',
    Measured_Weight:'Measured_Weight',
    Food_state:'Food_state',
    Gate_state:'Gate_state',
    Light:'Light',
    
    
    timeFood,
    timeGate
 
  })
}

const onChangeTimeFood =(time)=>{
  const number = moment(time, ["HH.mm"]).format("hh:mm a");
  console.log('number',number); // "02:00 pm"
  setTimeFood(number)
}

const onChangeTimeGate =(time)=>{
  // console.log('Goood',time.format("LTS"));
  const number = moment(time, ["HH.mm"]).format("hh:mm a");
  console.log('number',number); // "02:00 pm"
  setTimeGate(number)
}





    return ( 
        <Styles>       
           
        <form className="form">
          <div className="formatag">

          <div className="title">View details</div>
         
          <div className="form-group">
            <label  className="tagname">Motion_State </label>
            <div className="col-sm-6">
            <label  className="value">{Motion_State}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Intensity </label>
            <div className="col-sm-6">
            <label  className="value">{Intensity}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Temperature C</label>
            <div className="col-sm-6">
            <label className="value">{Temperature_C}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Temperature F</label>
            <div className="col-sm-6">
            <label className="value">{Temperature_F}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Humidity</label>
            <div className="col-sm-6">
            <label className="value">{Humidity}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Gas</label>
            <div className="col-sm-6">
            <label className="value">{Gas}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Gas state</label>
            <div className="col-sm-6">
            <label className="value">{GasState}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Alcohol</label>
            <div className="col-sm-6">
            <label className="value">{Alcohol}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Alcohol state</label>
            <div className="col-sm-6">
            <label className="value">{alcoholState}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Water Level</label>
            <div className="col-sm-6">
            <label className="value">{Water_Level}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Measured weight</label>
            <div className="col-sm-6">
            <label className="value">{Measured_Weight}</label>
            </div>
          </div>
          <div className="form-group">
            <label  className="tagname">Light State</label>
            <div className="col-sm-6">
            <label className="value">Light {Light}</label>
            </div>
          </div>
          <div className="time">
          <label  className="">Food State</label>
          <label  className="value">{Food_state}</label>
          <TimePicker
          onChange={onChangeTimeFood}
           value={timeFood}
        />
          </div>
          <div className="time">
          <label  className="">Gate State</label>
          <label  className="value">{Gate_state}</label>
          <TimePicker
          onChange={onChangeTimeGate}
           value={timeGate}
        />
          
          </div>
          <div className="buttongrp">
          <button className="btnlightOn" onClick={lighOn}>Light On</button>
          <button className="btnlightOff" onClick={lighOff}>Light Off</button>
          <button className="btnsubmit" onClick={submit}>Submit</button>
          <button className="btnreload" onClick={() => window.location.reload(false)}>Reload!</button>
          
          </div>

          </div>

        </form>
        
        </Styles>
     
     );
}



const Styles = styled.div`
 background:lavender; 
 padding: 20px;

 .form-group{
  display: flex;
  justify-content: space-between;
 }
 .title{
  text-align:center;
  font-weight: 500;
  font-family: sans-serif;
  color: #3d3d3d;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 20px;

 }
 .time{
   display: flex;
  justify-content: space-between;
   padding-right: 80px;
   padding-bottom : 10px;
   margin-left:50px ;
 }
 .value{
   margin-left:150px ;
 }
 .tagname{
  margin-left:50px ;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 800px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }


 .btnlightOn{
   background: green;
   font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
 }
 .btnlightOff{
  background: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
 }


 .btnsubmit{
  background: lightblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
 }

 .btnreload{
  background: yellow;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
 }

 .buttongrp{
  display: flex;
  gap :50px;
   justify-content: space-around;
 }

`;





 
export default CageForm;
