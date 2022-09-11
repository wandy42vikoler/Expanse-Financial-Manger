package com.expanse.codecool.ExpanseApplication.controller;


import com.expanse.codecool.ExpanseApplication.entity.Transaction;
import com.expanse.codecool.ExpanseApplication.entity.type.TransactionType;
import com.expanse.codecool.ExpanseApplication.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value="/transaction")
public class TransactionsController {

    private final TransactionService transactionService;


    public TransactionsController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @CrossOrigin
    @GetMapping
    public List<Transaction> transactionTable(){
        return transactionService.fetchTransactions();
    }

    @CrossOrigin
    @PutMapping(value="/addexpense")
    @ResponseBody
    public void addExpense(@RequestParam String title, String category, Long amount) throws Exception {
        System.out.println(amount);
        LocalDate date = LocalDate.now();
        System.out.println(category);
        Transaction transaction = new Transaction(title, category, date, amount, TransactionType.EXPENSE);
        transactionService.saveTransaction(transaction);
    }


    @CrossOrigin
    @PutMapping(value="/addincome")
    public void addIncome(@RequestParam String title, String category, Long amount){
        System.out.println(amount);
        LocalDate date = LocalDate.now();
        System.out.println(category);
        Transaction transaction = new Transaction(title, category, date, amount, TransactionType.INCOME);
        transactionService.saveTransaction(transaction);
    }
}