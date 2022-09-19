package com.expanse.codecool.ExpanseApplication.repository;

import com.expanse.codecool.ExpanseApplication.entity.Balance;
import com.expanse.codecool.ExpanseApplication.entity.Saving;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface SavingRepository extends JpaRepository<Saving, Long> {

    List<Saving> findAll();

    @Transactional
    @Modifying
    @Query
    ("update Saving b set b.savingAmount = ?1")
    void updateSavingAmount(long amount);
}
