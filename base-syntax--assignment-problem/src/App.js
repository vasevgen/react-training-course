import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users : [
      {id: 1, userName: 'Yevhen', paragraph: 'Yevhen\'s paragraph'}, 
      {id: 2, userName: 'Vlad', paragraph: 'Vlad\'s paragraph'}
    ]
  }
  
  changedUserHandler = (event) => {
  
    let users = [...this.state.users];
    for (let i in users) {
      users[i].userName = event.target.value;
    }
    
    this.setState({users: users});
}

  render() {
    return (
      <div className="App">  
        <UserInput changed={this.changedUserHandler} userName={ this.state.users.length > 0 ? this.state.users[0].userName : ''} />

        {this.state.users.map (user =>
          {
              return <UserOutput 
                key = {user.id}
                userName = {user.userName}
                paragraph = {user.paragraph}/>
          })
        }

        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default App;
