package com.brunooliveira.dsvendas.controllers;

import com.brunooliveira.dsvendas.dto.JediDTO;
import com.brunooliveira.dsvendas.service.JediService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/jedis")
public class JediController {

    @Autowired
    private JediService service;

    //No corpo da resposta irá retornar a lista
    @GetMapping
    public ResponseEntity<List<JediDTO>> findAll(){
        List<JediDTO> list = service.findAll();
        return ResponseEntity.ok(list);
    }
}
