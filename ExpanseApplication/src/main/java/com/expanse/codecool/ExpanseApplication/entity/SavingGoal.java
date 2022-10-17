package com.expanse.codecool.ExpanseApplication.entity;


import com.expanse.codecool.ExpanseApplication.entity.type.TransactionType;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class SavingGoal {


    @Id
    @GeneratedValue
    private Long id;
    private String title;

    private Long amount;

    private String date;

    public SavingGoal(String title, String date, Long amount) {
        this.title = title;
        this.date = date;
        this.amount = amount;
    }
}
