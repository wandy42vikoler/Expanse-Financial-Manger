package com.expanse.codecool.ExpanseApplication.repository;

import com.expanse.codecool.ExpanseApplication.entity.Balance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BalanceRepository extends JpaRepository<Balance, Long> {

    List<Balance> findAll();

    @Transactional
    @Modifying
    @Query
    ("update Balance b set b.amount = ?1")
    void updateBalanceAmount(long amount);
}
