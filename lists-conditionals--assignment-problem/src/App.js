import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';
import { timingSafeEqual } from 'crypto';

class App extends Component {

  state = {
      currentText: ''
  }

  changeHandler = (event) => {
    this.setState(
    { 
        currentText: event.target.value
    });      
  } 

  deleteHandler = (index) => {
    const chars = this.state.currentText.split("");
    chars.splice(index, 1);

    this.setState(
    { 
        currentText: chars.join("")
    });      
  } 

  render() {    
        
    const currentText = this.state.currentText;

    return (
      <div className="App">

        <input type='text' onChange={this.changeHandler} value={currentText} />
        <p>{currentText.length} </p>

        <ValidationComponent currentNumber={currentText.length}  />

        {currentText.split("").map( (char, index) =>
          {
            return <CharComponent char={char} click={this.deleteHandler.bind(this, index)}/> 
          })
        }

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
