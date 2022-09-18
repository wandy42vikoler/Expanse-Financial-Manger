package com.expanse.codecool.ExpanseApplication.entity;

import lombok.*;
import org.springframework.stereotype.Repository;

import javax.persistence.*;


@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Balance {


    @Id
    private long id;

    @Column
    private Long amount;


    public Balance(Long amount) {
        this.amount = amount;
    }
}



