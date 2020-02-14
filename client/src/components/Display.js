import React from 'react';
import '../fifa_logo.png';


const Display = props => {


    
    return (
        <div className='tableContainer'>
            <table className='playerTable'>
                <thead className='tableHead'>  
                    <span>Player Name</span>   
                    <span>Team</span>
                    <span>Info</span>
                    <span>Info</span>
                </thead>
                {props.data.map(player => {return (
                <tr className='playerInfo'>
                    <span>{props.player.name}</span>
                    <span>{props.player.team}</span>
                    <span>{props.player.info}</span>
                    <span>{props.player.searchinfo}</span>
                </tr>)})}
            </table>
        </div>
    )




}
export default Display;