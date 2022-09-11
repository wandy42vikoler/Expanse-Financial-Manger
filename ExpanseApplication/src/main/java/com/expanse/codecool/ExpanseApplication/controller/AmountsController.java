package com.expanse.codecool.ExpanseApplication.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/finances")
public class AmountsController {

    @CrossOrigin
    @GetMapping(value="/balance")
    public String userBalance(){
        return "total Balance";
    }

    @CrossOrigin
    @GetMapping(value="/totalIncome")
    public String userIncome(){
        return "total Income";
    }

    @CrossOrigin
    @GetMapping(value="/totalExpense")
    public String userExpense(){
        return "total Expense";


    }
}