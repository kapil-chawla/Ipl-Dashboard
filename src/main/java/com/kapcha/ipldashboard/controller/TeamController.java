package com.kapcha.ipldashboard.controller;

import com.kapcha.ipldashboard.model.Team;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.kapcha.ipldashboard.model.Match;
import com.kapcha.ipldashboard.repository.MatchRepository;
import com.kapcha.ipldashboard.repository.TeamRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }



    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year+1, 1, 1);
        return this.matchRepository.getMatchesByTeamBetweeDates(teamName, startDate, endDate);
    }

    @GetMapping("/team-names")
    public List<String> getTeamNames(){
        List<String> teamNames = new ArrayList<>();
        Iterable<Team> teams = this.teamRepository.findAll();
        teams.forEach(team -> teamNames.add(team.getTeamName()));
        return teamNames;
    }
}
