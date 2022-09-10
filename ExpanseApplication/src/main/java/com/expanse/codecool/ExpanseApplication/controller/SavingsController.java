package com.expanse.codecool.ExpanseApplication.controller;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/savings")
public class SavingsController {

    @CrossOrigin
    @GetMapping
    public String savingBalance(){
        return "Saving Balance";
    }

    @CrossOrigin
    @PostMapping(value="add/{amount}")
    public String addToSaving(@PathVariable int amount){
        return "Added Amount " + amount;
    }

    @CrossOrigin
    @PostMapping(value="deduct/{amount}")
    public String removeFromSaving(@PathVariable int amount){
        return "Deducted " + amount;
    }
}