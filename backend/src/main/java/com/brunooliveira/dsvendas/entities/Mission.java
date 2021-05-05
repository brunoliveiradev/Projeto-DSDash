package com.brunooliveira.dsvendas.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_missions")
public class Mission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer visited;
    private Integer deals;
    private Double amount;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "jedi_id")
    private Jedi jedi;

    public Mission() {

    }

    public Mission(Long id, Integer visited, Integer deals, Double amount, LocalDate date, Jedi jedi) {
        this.id = id;
        this.visited = visited;
        this.deals = deals;
        this.amount = amount;
        this.date = date;
        this.jedi = jedi;
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

    public Jedi getJedi() {
        return jedi;
    }

    public void setJedi(Jedi jedi) {
        this.jedi = jedi;
    }
}