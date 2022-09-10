package com.expanse.codecool.ExpanseApplication.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Repository
public class User {
    private String userFirstName;
    private String userLastName;
}
