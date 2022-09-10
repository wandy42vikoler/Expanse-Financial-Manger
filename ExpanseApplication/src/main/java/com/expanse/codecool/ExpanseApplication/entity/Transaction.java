package com.expanse.codecool.ExpanseApplication.entity;


import com.expanse.codecool.ExpanseApplication.entity.type.TransactionType;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;


@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Transaction {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long TransactionId;
    private String title;
    private String category;
    private LocalDate date;
    private Long amount;

    private TransactionType transactionType;

    public Transaction(String title, String category, LocalDate date, Long amount, TransactionType transactionType) {
        this.title = title;
        this.category = category;
        this.date = date;
        this.amount = amount;
        this.transactionType = transactionType;
    }
}
