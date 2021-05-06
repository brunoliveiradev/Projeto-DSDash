package com.brunooliveira.dsvendas.dto;

import com.brunooliveira.dsvendas.entities.Jedi;

import java.io.Serializable;

public class MissionSumDTO implements Serializable {

    private String jediName;
    private Double sum;

    public MissionSumDTO () {}

    public MissionSumDTO(Jedi jedi, Double sum) {
        this.jediName = jedi.getName();
        this.sum = sum;
    }

    public String getJediName() {
        return jediName;
    }

    public void setJediName(String jediName) {
        this.jediName = jediName;
    }

    public Double getSum() {
        return sum;
    }

    public void setSum(Double sum) {
        this.sum = sum;
    }
}
