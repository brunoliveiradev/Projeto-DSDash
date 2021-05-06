package com.brunooliveira.dsvendas.service;

import com.brunooliveira.dsvendas.dto.MissionDTO;
import com.brunooliveira.dsvendas.entities.Mission;
import com.brunooliveira.dsvendas.repositories.JediRepository;
import com.brunooliveira.dsvendas.repositories.MissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//serviço que por sua vez chama um repositório
@Service
public class MissionService {

    // injeção automatica pelo framework
    @Autowired
    private MissionRepository repository;

    //Como a quantidade de Jedis são poucas, a solução abaixo é eficaz, ira chamar e guardar em cache para não precisar fazer 5 consultas (numero total de jedis)
    @Autowired
    private JediRepository jediRepository;

    //Converte de Mission para MissionDTO e por fim retorna todos em lista
    //readOnly para não fazer lock no banco, pois será operação apenas de leitura
    @Transactional(readOnly = true)
    public Page<MissionDTO> findAll(Pageable pageable) {
        //traz pra memoria e JPA armazena em cache os Jedis
        jediRepository.findAll();
        Page<Mission> result = repository.findAll(pageable);
        return result.map(MissionDTO::new);
    }
}
