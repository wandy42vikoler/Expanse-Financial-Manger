package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Transaction;
import com.expanse.codecool.ExpanseApplication.entity.type.TransactionType;
import com.expanse.codecool.ExpanseApplication.repository.TransactionRepository;
import com.expanse.codecool.ExpanseApplication.service.DAO.TransactionDAO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionService implements TransactionDAO {

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

    @Override
    public List<Transaction> fetchIncomes() {
        return transactionRepository.getTransactionByTransactionType(TransactionType.INCOME);

    }

    @Override
    public List<Transaction> fetchExpenses() {
        return transactionRepository.getTransactionByTransactionType(TransactionType.EXPENSE);
    }

    @Override
    public Long sumExpenses() {

        List<Transaction> expenses = fetchExpenses();
        Long totExpenses = expenses.stream()
                .mapToLong(Transaction::getAmount)
                .sum();

        return totExpenses;
    }

    @Override
    public Long sumIncomes() {
        List<Transaction> expenses = fetchIncomes();
        Long totIncomes = expenses.stream()
                .mapToLong(Transaction::getAmount)
                .sum();

        return totIncomes;
    }


}
