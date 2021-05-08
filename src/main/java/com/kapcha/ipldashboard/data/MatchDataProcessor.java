package com.kapcha.ipldashboard.data;

import java.time.LocalDate;

import com.kapcha.ipldashboard.model.Match;

import org.springframework.batch.item.ItemProcessor;

public class MatchDataProcessor implements ItemProcessor<MatchInput,Match> {

    @Override
  public Match process(final MatchInput input) throws Exception {
    Match match = new Match();
    match.setId(Long.parseLong(input.getId()));
        match.setCity(input.getCity());
        match.setDate(LocalDate.parse(input.getDate()));
        match.setPlayerOfMatch(input.getPlayer_of_match());
        match.setVenue(input.getVenue());
        // Set Team 1 and Team 2 depending on the innings order
        String firstInningsTeam=null; 
        String secondInningsTeam=null;

        if ("bat".equals(input.getToss_decision())) {
            firstInningsTeam = input.getToss_winner();
            secondInningsTeam = input.getToss_winner().equals(input.getTeam1()) 
                ? input.getTeam2() : input.getTeam1();

        } else {
            secondInningsTeam = input.getToss_winner();
            firstInningsTeam = input.getToss_winner().equals(input.getTeam1()) 
                ? input.getTeam2() : input.getTeam1();
        }
        match.setTeam1(firstInningsTeam);
        match.setTeam2(secondInningsTeam);

        match.setTossWinner(input.getToss_winner());
        match.setTossDecision(input.getToss_decision());
        match.setMatchWinner(input.getWinner());
        match.setResult(input.getResult());
        match.setResultMargin(input.getResult_margin());
        match.setUmpire1(input.getUmpire1());
        match.setUmpire2(input.getUmpire2());

    return match;
  }
}
