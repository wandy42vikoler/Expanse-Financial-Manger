package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Balance;
import com.expanse.codecool.ExpanseApplication.entity.Saving;
import com.expanse.codecool.ExpanseApplication.repository.SavingRepository;
import com.expanse.codecool.ExpanseApplication.service.DAO.BalanceDAO;
import com.expanse.codecool.ExpanseApplication.service.DAO.SavingDAO;
import org.springframework.stereotype.Service;

@Service
public class SavingService implements SavingDAO {

    private final SavingRepository savingRepository;

    public SavingService(SavingRepository savingRepository) {
        this.savingRepository = savingRepository;
    }


    @Override
    public void updateSaving(Long amount) {
        savingRepository.updateSavingAmount(amount);
    }

    @Override
    public Long getSavingAmount() {
        Long amount = savingRepository.findAll().stream().mapToLong(Saving::getSavingAmount).sum();
        return amount;
    }

    @Override
    public Saving save(Saving saving) {
        return savingRepository.save(saving);
    }
}
