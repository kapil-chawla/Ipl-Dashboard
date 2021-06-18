import React from 'react'
import { Link } from 'react-router-dom';
import './YearSelector.scss';

export const YearSelector = ({teamName}) => {
    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    let endYear = process.env.REACT_APP_DATA_END_YEAR;
    for(let i=endYear;i>=startYear;i--){
        years.push(i);
    }
    return (
        <div className="YearSelector">
            {
                years.map( year => {
                    return (
                    <ol>
                        <li>
                            <Link to={`/teams/${teamName}/matches/${year}`} >{year}</Link>
                        </li>
                    </ol>
                    )
                })
            }
        </div>
    )
}
