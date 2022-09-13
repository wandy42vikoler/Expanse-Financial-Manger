package com.expanse.codecool.ExpanseApplication.entity;

import com.expanse.codecool.ExpanseApplication.entity.type.TransactionType;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Categories {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long categoryId;

    @Column(unique = true)
    private String name;

    private Long amount;


    public Categories(String categoryName, Long categoryAmount) {
        this.name = categoryName;
        this.amount = categoryAmount;
    }
}



