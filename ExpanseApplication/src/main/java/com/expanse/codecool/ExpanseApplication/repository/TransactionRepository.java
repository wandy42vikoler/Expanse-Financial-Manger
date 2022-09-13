package com.expanse.codecool.ExpanseApplication.repository;


import com.expanse.codecool.ExpanseApplication.entity.Transaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    
}
