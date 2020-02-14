import React from 'react';
import '../fifa_logo.png';
import '../App.css';


const Display = ({player}) => {

    return (
        <div className='tableContainer'>
            <table className='playerTable'>
                <thead>
                <tr className='tableHead'>  
                    <th>Player Name</th>   
                    <th>Team</th>
                    <th>Searches</th>
                </tr>
                </thead>
                <tbody>
                <tr className='playerInfo'>
                    <td>{player.name}</td>
                    <td>{player.country}</td>
                    <td>{player.searches}</td>
                </tr>
                </tbody>
            </table>
        </div>)
}
export default Display;