import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './AllTeamsPage.scss'

export const AllTeamsPage = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const fetchTeamNames = async () => {
           const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team-names`);
           setTeams(await resp.json());
        };
        fetchTeamNames();
    },[]);
    
    return (
        <div className="AllTeamsPage">
            {
                teams.length >0 ?
                teams.map(
                team => 
                    (
                        <span key={team.id}>
                            <h3><Link to={ `/teams/${team} `}>{team}</Link></h3>
                        </span>
                    )
                ) : "No team Found"

            }
        </div>
    )
}
