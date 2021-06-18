import React from 'react'
import {Link} from 'react-router-dom'
import './MatchSmallCard.scss'

export const MatchSmallCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = match.team1===teamName ? match.team2 : match.team1;
    const otherTeamLink = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    return (
        <div className={isMatchWon ? 'MatchSmallCard win-card' : 'MatchSmallCard lost-card'}>
            <span className="vs">vs</span>
                <h1 className="team-name">
                    <Link to={otherTeamLink}>{otherTeam}</Link>
                </h1>
            <div className="match-result">
                <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
            </div>
            
        </div>
    )
}
