package com.expanse.codecool.ExpanseApplication.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class ReactController {

    @CrossOrigin
    @RequestMapping(value="/message", method=GET)
    public String reactTesting(){
        return "Hello this works!";
    }
}
