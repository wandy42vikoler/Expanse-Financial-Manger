package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Categories;
import com.expanse.codecool.ExpanseApplication.repository.CategoriesRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CategoriesService implements CategoriesDAO{


    private final CategoriesRepository categoriesRepository;

    public CategoriesService(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }


    @Override
    public boolean checkForDuplicate(String name) {
        return categoriesRepository.existsByName(name);
    }

    @Override
    public List<Categories> getCategories() {
        return categoriesRepository.findAll();
    }

    @Override
    public Categories getCategory(String name) {
        return categoriesRepository.getByName(name);
    }

    @Override
    public Categories save(Categories category) {
        return categoriesRepository.save(category);
    }

    @Override
    public void updateCategoryAmount(long amount, String name) {
        categoriesRepository.updateCategoryAmount(amount, name);
    }


}
