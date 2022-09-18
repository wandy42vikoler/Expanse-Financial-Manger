package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Balance;
import com.expanse.codecool.ExpanseApplication.repository.BalanceRepository;
import com.expanse.codecool.ExpanseApplication.service.DAO.BalanceDAO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BalanceService implements BalanceDAO {

    private final BalanceRepository balanceRepository;

    public BalanceService(BalanceRepository balanceRepository) {
        this.balanceRepository = balanceRepository;
    }

    @Override
    public void updateBalance(Long amount) {
        balanceRepository.updateBalanceAmount(amount);
    }

    @Override
    public Long getBalance() {
        System.out.println(balanceRepository.findAll());
        Long amount = balanceRepository.findAll().stream().mapToLong(Balance::getAmount).sum();
        System.out.println(amount);
        return amount;
    }

    @Override
    public Balance save(Balance balance) {
        return balanceRepository.save(balance);
    }
}
