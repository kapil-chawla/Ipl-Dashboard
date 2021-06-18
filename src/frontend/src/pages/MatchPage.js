import { React, useEffect, useState } from 'react'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { useParams } from 'react-router-dom'
import './MatchPage.scss'
import { YearSelector } from '../components/YearSelector'

export const MatchPage = () => {
    const[matches,setMatches] = useState([]);
    const {teamName,year}  = useParams();
    useEffect(
        () => {
            const fetchMatches = async() => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                console.log(`data`, data);
                setMatches(data);
            }
            fetchMatches();
        }, [teamName,year]
    );
    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h4>Select Year</h4>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1>{teamName} matches for {year}</h1>
                {
                    matches.length>0 ?
                    matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)
                    : "No Match Found"
                }
            </div>
        </div>
    )
}
