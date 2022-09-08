package com.expanse.codecool.ExpanseApplication.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

@RestController
public class ReactController {

    @CrossOrigin
    @RequestMapping(value="/message", method=PUT)
    public List<String> reactTesting(){
        List<String> test = List.of("hi", "hey", "ho");
        return test;
    }
}
