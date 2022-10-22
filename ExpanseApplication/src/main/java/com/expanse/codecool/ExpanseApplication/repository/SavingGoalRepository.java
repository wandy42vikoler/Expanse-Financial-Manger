package com.expanse.codecool.ExpanseApplication.repository;

import com.expanse.codecool.ExpanseApplication.entity.SavingGoal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface SavingGoalRepository extends JpaRepository<SavingGoal, Long> {
    List<SavingGoal> findAll();
}
