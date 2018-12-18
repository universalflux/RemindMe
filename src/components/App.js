import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, deleteAll } from '../actions';

/*  Action is a javacript object, action creator is a function that returns the js object. */

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            dueDate: new Date().toDateString()

        }
    }
    changeText = (e) => {
        this.setState({
            text: e.target.value
        })
        e.preventDefault();
    }

    changeDate = (e) => {
        this.setState({
            dueDate: e.target.value
        })
        e.preventDefault();
    }

    addReminder = () => {
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder = (id) => {
        this.props.deleteReminder(id);
    }

    deleteAll = () => {
        this.props.deleteAll(this.state);
    }

    renderReminders = () => {
        const { reminders } = this.props;
        return (
                <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return(
                          <li key={reminder.id} className="list-group-item">
                                <h3 className=""> {reminder.text} </h3>
                                <h4 className="list-item"> <em>{reminder.dueDate} </em></h4>
                                <div onClick={() => ( this.deleteReminder(reminder.id))} className="list-item delete-button">
                                &#x2715;</div>
                          </li>
                        )
                    }
                  )
                }
                </ul>)
    }

    render(){
        return (<div className="App">
            <div className="title"> <h1>Remind me.</h1></div>
            <div className="form-inline reminder-form">
                <div className="form-group">
                    <input className = "form-control"
                           placeholder="I have to ..."
                           onChange={this.changeText}/>
                    <input className = "form-control"
                           type="datetime-local"
                           placeholder="I have to ..."
                           onChange={this.changeDate}/>
                           
                    
                    <button type="button"
                            className="btn btn-success"
                            onClick={this.addReminder}
                            >
                            Add reminder
                    </button>
                    <button type="button"
                            className="btn btn-danger"
                            onClick={this.deleteAll}
                            >
                            Clear Reminders
                    </button>
                </div>
            </div>
            { this.renderReminders() }
        </div>)
    }
}


function mapStateToProps(state){
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, deleteAll})(App);