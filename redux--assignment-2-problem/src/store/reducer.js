import * as actionTypes from '../store/actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_PERSON :
        { 
            const newPerson = {
                id: Math.random(), 
                name: action.personName,
                age: action.personAge
            }
            
        return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        }
        case actionTypes.REMOVE_PERSON :
        {
            const updatedArray = state.persons.filter( person => person.id !== action.personId);

        return {
                ...state,
                persons: updatedArray
            };
        }
        
        default:
            return state;
    }
} 

export default reducer;