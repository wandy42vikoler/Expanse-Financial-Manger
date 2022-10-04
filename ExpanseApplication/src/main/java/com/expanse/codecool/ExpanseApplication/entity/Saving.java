package com.expanse.codecool.ExpanseApplication.entity;

import com.expanse.codecool.ExpanseApplication.repository.SavingRepository;
import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Saving {


    @Id
    private long id;

    @Column
    private Long savingAmount;

    public Saving(Long savingAmount) {
        this.savingAmount = savingAmount;
    }
}