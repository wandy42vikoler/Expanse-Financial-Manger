package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.SavingGoal;
import com.expanse.codecool.ExpanseApplication.repository.SavingGoalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SavingGoalService{

    private final SavingGoalRepository savingGoalRepository;

    public SavingGoalService(SavingGoalRepository savingGoalRepository) {
        this.savingGoalRepository = savingGoalRepository;
    }


    public List<SavingGoal> getAll() {
        return savingGoalRepository.findAll();
    }

    public SavingGoal save(SavingGoal savingGoal) {
        return savingGoalRepository.save(savingGoal);
    }
}
