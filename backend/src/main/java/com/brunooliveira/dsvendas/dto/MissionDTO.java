package com.brunooliveira.dsvendas.dto;

import com.brunooliveira.dsvendas.entities.Mission;

import java.time.LocalDate;

public class MissionDTO {

    private Long id;
    private Integer visited;
    private Integer deals;
    private Double amount;
    private LocalDate date;

    private JediDTO jedi;

    public MissionDTO () {

    }

    public MissionDTO(Long id, Integer visited, Integer deals, Double amount, LocalDate date, JediDTO jedi) {
        this.id = id;
        this.visited = visited;
        this.deals = deals;
        this.amount = amount;
        this.date = date;
        this.jedi = jedi;
    }

    public MissionDTO(Mission entity) {
        id = entity.getId();
        visited = entity.getVisited();
        deals = entity.getDeals();
        amount = entity.getAmount();
        date = entity.getDate();
        jedi = new JediDTO(entity.getJedi());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getVisited() {
        return visited;
    }

    public void setVisited(Integer visited) {
        this.visited = visited;
    }

    public Integer getDeals() {
        return deals;
    }

    public void setDeals(Integer deals) {
        this.deals = deals;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public JediDTO getJedi() {
        return jedi;
    }

    public void setJedi(JediDTO jedi) {
        this.jedi = jedi;
    }
}
