package com.expanse.codecool.ExpanseApplication.repository;


import com.expanse.codecool.ExpanseApplication.entity.Transaction;
import com.expanse.codecool.ExpanseApplication.entity.type.TransactionType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    List<Transaction> getTransactionByTransactionType(TransactionType transactionType);
}
