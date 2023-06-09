import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";

import FaceRecognition from './components/FaceRecognition/FaceRecognition';




const particlesOptions={
  particles:{
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
    }}
class App extends Component  {

  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{}
    }
  }
 /* calculateFaceLocation=(data)=>
  {
    const clarifaiFace=response.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
  return {
    leftCol:clarifaiFace.left_col*width,
    topRow:clarifaiFace.top_row+height,
    rightCol:width-(clarifaiFace.rightCol*width),
    bottomRow:height-(clarifaiFace.bottomRow*height)
  } 
  }
 app= new Clarifai.App({
  apiKey:'5566c450b15d4ec99be606a5ec777631'}); 
  displayFaceBox=(box)=>{
    this.setState({box:box})
  }

  onInputChange=(event)=>{
   this.setState({input:event.target.value});

  }
  onButtonSubmit=()=>{
    
   
    
     this.setState({imageUrl:this.state.input});

     app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input)
     .then(response=>
        this.displayFaceBox(
        this.calculateFaceLocation(response)
        )
        ).
        catch(err=>console.log(err)); 
       } */


      
  render(){
  return (
    <div className="App">
    <Particles className='particles'
     params={particlesOptions}/>
      <Navigation/>
      <Rank/>
      <Logo/>
     <ImageLinkForm onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/> 
    </div>
  );}}

export default App;
