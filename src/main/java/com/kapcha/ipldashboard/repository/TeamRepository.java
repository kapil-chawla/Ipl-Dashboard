package com.kapcha.ipldashboard.repository;

import com.kapcha.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;


public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
