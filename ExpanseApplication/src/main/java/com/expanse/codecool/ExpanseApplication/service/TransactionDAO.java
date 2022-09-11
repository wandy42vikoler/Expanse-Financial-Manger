package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Transaction;

import java.util.List;

public interface TransactionDAO {

    Transaction saveTransaction(Transaction transaction);

    List<Transaction> fetchTransactions();

}
