package com.expanse.codecool.ExpanseApplication.service.DAO;

import com.expanse.codecool.ExpanseApplication.entity.Balance;
import com.expanse.codecool.ExpanseApplication.entity.Categories;

import java.util.List;

public interface BalanceDAO {

    void updateBalance(Long amount);

    Long getBalance();

    Balance save(Balance balance);


}
