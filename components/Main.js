import React from 'react'
import data from '../data.json'


const renderTable = () => {
    return data.map((service, idx) => {
        return (
            <div key={idx}>
                <div className='bar'>
                    <h2>{service.car}</h2>
                    <button className="barbt">Add Service</button>  
                </div>
                {/* <h3>{service.note}</h3> */}
                <table className="services">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Miles</th>
                            <th>Description</th>
                            <th>Location/Price</th>
                            <th>Note</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {service.service.map((item, idx) => {
                            return (
                                <tr key={idx+'b'}>
                                    <td>{item.date}</td>
                                    <td>{item.miles}</td>
                                    <td>{item.description}</td>
                                    <td>{item.location}<br />{item.price}</td>
                                    <td>{item.note}</td>
                                    <td className='edit'><a href="">Edit</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    })
}

export default function Main() {
    return (
        <div>
            <nav>
                <div>
                    <span id="logotxt1">My</span>
                    <span id="logotxt2">Car</span>
                    <span id="logotxt3">Service</span>
                </div>
                <div>
                    <a href="">Service Reminders</a>
                    <a href="">My Profile</a>
                    <a href="">Logout</a>
                </div>
            </nav>
            <div className="wrapper">
                <div className="records">
                    {renderTable()}
                </div>
            </div>
        </div>
    )
}
