package com.expanse.codecool.ExpanseApplication.service.DAO;

import com.expanse.codecool.ExpanseApplication.entity.Balance;
import com.expanse.codecool.ExpanseApplication.entity.Saving;

import java.util.List;

public interface SavingDAO {

    void updateSaving(Long amount);

    Long getSavingAmount();

    Saving save(Saving saving);

    List<Saving> getAll();


}
