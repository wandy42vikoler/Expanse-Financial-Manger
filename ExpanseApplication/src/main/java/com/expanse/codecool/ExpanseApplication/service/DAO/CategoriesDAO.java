package com.expanse.codecool.ExpanseApplication.service.DAO;

import com.expanse.codecool.ExpanseApplication.entity.Categories;

import java.util.List;

public interface CategoriesDAO {

    boolean checkForDuplicate(String name);

    List<Categories> getCategories();

    Categories getCategory(String name);

    Categories save(Categories category);

    void updateCategoryAmount(long amount, String name);
}
