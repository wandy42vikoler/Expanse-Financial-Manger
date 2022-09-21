package com.expanse.codecool.ExpanseApplication.service.DAO;

import com.expanse.codecool.ExpanseApplication.entity.Categories;
import org.springframework.data.domain.Slice;

import java.util.List;
import java.util.Optional;

public interface CategoriesDAO {

    boolean checkForDuplicate(String name);

    List<Categories> getCategories();

    Categories getCategory(String name);

    Categories save(Categories category);

    void updateCategoryAmount(long amount, String name);

    List<Categories> getTopFourCategories();
}
