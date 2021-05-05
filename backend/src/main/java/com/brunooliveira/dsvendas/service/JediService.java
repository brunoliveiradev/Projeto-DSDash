package com.brunooliveira.dsvendas.service;

import com.brunooliveira.dsvendas.dto.JediDTO;
import com.brunooliveira.dsvendas.entities.Jedi;
import com.brunooliveira.dsvendas.repositories.JediRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

//serviço que por sua vez chama um repositório
@Service
public class JediService {

    // injeção automatica pelo framework
    @Autowired
    private JediRepository repository;

    //Converte de Jedi para JediDTO e por fim return em lista
    public List<JediDTO> findAll() {
        List<Jedi> result = repository.findAll();
        return result.stream()
                .map(JediDTO::new)
                .collect(Collectors.toList());
    }
}
