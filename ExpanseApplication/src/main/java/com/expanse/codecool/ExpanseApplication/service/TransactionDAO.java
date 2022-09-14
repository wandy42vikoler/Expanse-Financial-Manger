package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Transaction;
import com.expanse.codecool.ExpanseApplication.entity.type.TransactionType;

import java.util.List;

public interface TransactionDAO {

    Transaction saveTransaction(Transaction transaction);

    List<Transaction> fetchTransactions();
    List<Transaction> fetchIncomes();
    List<Transaction> fetchExpenses();

    Long sumExpenses();

    Long sumIncomes();



}
