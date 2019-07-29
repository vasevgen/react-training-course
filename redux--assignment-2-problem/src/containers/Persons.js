import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions';


class Persons extends Component {
    state = {
        persons: []
    }

 

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonRemoved(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({type: actionTypes.ADD_PERSON, personName: 'Max', personAge: Math.floor( Math.random() * 40 )}),
        onPersonRemoved: (id) => dispatch({type: actionTypes.REMOVE_PERSON,  personId: id})
    };
}


export default connect (mapStateToProps, mapDispatchToProps) (Persons);