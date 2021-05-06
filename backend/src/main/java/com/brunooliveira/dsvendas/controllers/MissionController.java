package com.brunooliveira.dsvendas.controllers;

import com.brunooliveira.dsvendas.dto.MissionDTO;
import com.brunooliveira.dsvendas.dto.MissionSuccessDTO;
import com.brunooliveira.dsvendas.dto.MissionSumDTO;
import com.brunooliveira.dsvendas.service.MissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/missions")
public class MissionController {

    @Autowired
    private MissionService service;

    //No corpo da resposta irá retornar a lista, busca páginada
    @GetMapping
    public ResponseEntity<Page<MissionDTO>> findAll(Pageable pageable){
        Page<MissionDTO> list = service.findAll(pageable);
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/amount-by-jedi")
    public ResponseEntity<List<MissionSumDTO>> amountGroupedByJedi(){
        List<MissionSumDTO> list = service.amountGroupedByJedi();
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/success-by-jedi")
    public ResponseEntity<List<MissionSuccessDTO>> successGroupedByJedi(){
        List<MissionSuccessDTO> list = service.successGroupedByJedi();
        return ResponseEntity.ok(list);
    }
}
