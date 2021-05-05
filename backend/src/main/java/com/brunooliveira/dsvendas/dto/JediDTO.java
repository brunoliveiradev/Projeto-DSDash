package com.brunooliveira.dsvendas.dto;

import com.brunooliveira.dsvendas.entities.Jedi;

import java.io.Serializable;

//garantir que os objetos saidos da DTO possam ser convertidos em bits e trafegado em redes e arquivos
public class JediDTO implements Serializable {

    private Long id;
    private String name;

    public JediDTO(){

    }

    public JediDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    //construtor que recebe a entidade
    public JediDTO(Jedi entity) {
        id = entity.getId();
        name = entity.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
