package com.expanse.codecool.ExpanseApplication.controller;


import com.expanse.codecool.ExpanseApplication.entity.Saving;
import com.expanse.codecool.ExpanseApplication.service.BalanceService;
import com.expanse.codecool.ExpanseApplication.service.SavingService;
import com.expanse.codecool.ExpanseApplication.service.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/savings")
public class SavingsController {

    private final SavingService savingService;
    private final BalanceService balanceService;

    public SavingsController(SavingService savingService, TransactionService transactionService, BalanceService balanceService) {
        this.savingService = savingService;
        this.balanceService = balanceService;
    }


    @CrossOrigin
    @GetMapping
    public Long savingBalance(){
        return savingService.getSavingAmount();
    }

    @CrossOrigin
    @GetMapping(value="/getall")
    public List<Saving> getAll(){
        return savingService.getAll();
    }

    @CrossOrigin
    @PostMapping(value="/add")
    public void addToSaving(@RequestParam long amount){
        Long updateAmount = savingService.getSavingAmount() + amount;
        savingService.updateSaving(updateAmount);
        balanceService.updateBalance(balanceService.getBalance() - amount);
    }

    @CrossOrigin
    @PostMapping(value="/deduct")
    public void removeFromSaving(@RequestParam long amount){
        Long updateAmount = savingService.getSavingAmount() - amount;
        savingService.updateSaving(updateAmount);
        balanceService.updateBalance(balanceService.getBalance() + amount);
    }

    @CrossOrigin
    @PostMapping(value="/setsavings")
    public void userSaving(@RequestParam Long amount){
        Saving newSaving = new Saving(amount);
        savingService.save(newSaving);
    }
}