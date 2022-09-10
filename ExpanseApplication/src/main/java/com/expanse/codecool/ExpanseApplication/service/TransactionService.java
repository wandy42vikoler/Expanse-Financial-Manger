package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Transaction;
import com.expanse.codecool.ExpanseApplication.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class TransactionService implements TransactionDAO{

    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @Override
    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> fetchTransactions() {
        List<Transaction> transactionList = new ArrayList<>();
        transactionRepository.findAll().forEach(transactionList::add);
        return transactionList;
    }
}
