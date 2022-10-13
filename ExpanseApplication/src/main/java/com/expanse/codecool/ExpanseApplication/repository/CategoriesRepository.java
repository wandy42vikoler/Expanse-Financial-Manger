package com.expanse.codecool.ExpanseApplication.repository;

import com.expanse.codecool.ExpanseApplication.entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
public interface CategoriesRepository extends JpaRepository<Categories, Long> {

    List<Categories> findCategoriesByName(String name);

    List<Categories> findAll();

    Categories getByName(String name);

    boolean existsByName(String name);

    @Transactional
    @Modifying
    @Query
    ("update Categories c set c.amount = ?1 where c.name = ?2")
    void updateCategoryAmount(long amount, String name);

    List<Categories> findTop4ByOrderByAmountDesc();
}
