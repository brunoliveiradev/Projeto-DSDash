package com.brunooliveira.dsvendas.dto;

import com.brunooliveira.dsvendas.entities.Jedi;

import java.io.Serializable;

public class MissionSuccessDTO implements Serializable {

    private String jediName;
    private Long visited;
    private Long deals;

    public MissionSuccessDTO() {}

    public MissionSuccessDTO(Jedi jedi, Long visited, Long deals) {
        jediName = jedi.getName();
        this.visited = visited;
        this.deals = deals;
    }

    public String getJediName() {
        return jediName;
    }

    public void setJediName(String jediName) {
        this.jediName = jediName;
    }

    public Long getVisited() {
        return visited;
    }

    public void setVisited(Long visited) {
        this.visited = visited;
    }

    public Long getDeals() {
        return deals;
    }

    public void setDeals(Long deals) {
        this.deals = deals;
    }
}
