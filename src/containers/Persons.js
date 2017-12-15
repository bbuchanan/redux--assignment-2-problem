import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionTypes from '../store/actions'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={(id) => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({ type: actionTypes.ADD_PERSON }),
        onPersonDeleted: (id) => dispatch({ type: actionTypes.REMOVE_PERSON, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)