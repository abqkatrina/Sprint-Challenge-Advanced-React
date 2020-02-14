import React from 'react';
import '../fifa_logo.png';
// import PieChart1 from './PieChart';
import '../App.css';


const Display = ({player}) => {

    return (
        <div className='displayMain'>
            {/* <div className='chart'>
                <PieChart />
            </div> */}
            <div className='tableContainer'>
                <table className='playerTable'>
                    <tbody>
                    <tr className='playerInfo'>
                        <td>{player.name}</td>
                        <td>{player.country}</td>
                        <td>{player.searches}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
}
export default Display;