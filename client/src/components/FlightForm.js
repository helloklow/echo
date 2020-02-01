import React from 'react'
import {connect} from 'react-redux'
import {updateFlightForm} from '../actions/flightFormActions'

const FlightForm = ({flightData, userId, updateFlightForm, handleSubmit, editMode}) => {
    const {date, aircraft, aircraftId, departure, arrival, classification, position, 
            duration, conditions, ground, landings, remarks} = flightData

    const handleChange = e => {
        const {name, value} = e.target
        updateFlightForm(name, value)
    }

    return (
        <div className="FlightForm">
            <form onSubmit={e => {
                e.preventDefault()
                handleSubmit(flightData)
            }}>
            <input type="date" name="date" onChange={handleChange} value={date} className="form" /><br/><br/>
            <input type="text" name="aircraft" onChange={handleChange} value={aircraft} placeholder="Aircraft Model" className="form" />
            <input type="text" name="aircraftId" onChange={handleChange} value={aircraftId} placeholder="Aircraft ID" className="form" /><br/><br/>
            <input type="text" name="departure" onChange={handleChange} value={departure} placeholder="Departure" className="form" />
            <input type="text" name="arrival" onChange={handleChange} value={arrival} placeholder="Arrival" className="form" /><br/><br/>
            <select name="classification" onChange={handleChange} value={classification} className="form-select">
                <option value={classification}>Airplane single-engine land</option>
                <option value={classification}>Airplane multi-engine land</option>
                <option value={classification}>Airplane single-engine sea</option>
                <option value={classification}>Airplane multi-engine sea</option>
                <option value={classification}>Rotorcraft helicopter</option>
                <option value={classification}>Rotorcraft gyroplane</option>
            </select>
            <select name="position" onChange={handleChange} value={position} className="form-select">
                <option value={position}>Dual</option>
                <option value={position}>Pilot-in-Command</option>
                <option value={position}>Second-in-Command</option>
                <option value={position}>Flight Instructor</option>
            </select><br/><br/>
            <input type="text" name="duration" onChange={handleChange} value={duration} placeholder="Flight Duration" className="form" />
            <select name="conditions" onChange={handleChange} value={conditions} className="form-select">
                <option value={conditions}>Day</option>
                <option value={conditions}>Night</option>
                <option value={conditions}>Cross-Country</option>
                <option value={conditions}>Actual Instrument</option>
                <option value={conditions}>Simulated Instrument</option>
            </select><br/><br/>
            <input type="text" name="ground" onChange={handleChange} value={ground} placeholder="Ground Training" className="form" />
            <input type="text" name="landings" onChange={handleChange} value={landings} placeholder="No. Landings Day / Night" className="form" /><br/><br/>
            <textarea rows="5" cols="50" name="remarks" onChange={handleChange} value={remarks} placeholder="Remarks" className="form-text" /><br/>
            <br/><input type="submit" value={editMode ? "Edit Flight" : "Add Flight"} className="form-button" />
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    const userId = state.user ? state.user.id : ""
    return {
        flightData: state.flights,
        userId
    }
}

export default connect(mapStateToProps, {updateFlightForm})(FlightForm)