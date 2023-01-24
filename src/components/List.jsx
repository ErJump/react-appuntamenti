import {React, useState} from 'react'
import data from '../data'

export default function List() {

    const [appointments, setAppointments] = useState(data);
    
    const removeAppointment = (id) => {
        setAppointments((oldAppointments) => {
            return oldAppointments.filter(el => el.id !== id)
        })
    }

    const resetAppointments = () => {
        setAppointments(data);
    }

    const deleteAllAppointments = () => {
        setAppointments([]);
    }

    return (
        <div className='row'>
            {
                appointments.length === 0 && (
                    <div className='col-12'>
                        <h2 className='text-center text-white'>No appointments for today</h2>
                    </div>
                )
            }
            {
                appointments.map((appointment) => (
                    <div key={appointment.id} className='col-12 ms_card py-3 mb-3 d-flex align-items-center'>
                        <div className='me-3'>
                            <img src={appointment.img} alt="img" />
                        </div>
                        <div>
                            <h5 className='text-primary'>{appointment.name}</h5>
                            <h6 className='text-white'>{appointment.status}</h6>
                        </div>
                        <button className='btn btn-danger ms-auto me-3' onClick={() => removeAppointment(appointment.id)}>X</button>
                    </div>
                ))
            }
            <div className="col-12 d-flex justify-content-between px-0">
                <button className='btn btn-success' onClick={resetAppointments}>Reset</button>
                <button className='btn btn-danger' onClick={deleteAllAppointments}>Delete All</button>
            </div>
        </div>
    )
}
