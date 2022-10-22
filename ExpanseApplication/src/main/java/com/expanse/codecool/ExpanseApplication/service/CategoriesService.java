package com.expanse.codecool.ExpanseApplication.service;

import com.expanse.codecool.ExpanseApplication.entity.Categories;
import com.expanse.codecool.ExpanseApplication.repository.CategoriesRepository;
import com.expanse.codecool.ExpanseApplication.service.DAO.CategoriesDAO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class  CategoriesService implements CategoriesDAO {


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

    @Override
    public List<Categories> getTopFourCategories() {
        return categoriesRepository.findTop4ByOrderByAmountDesc();
    }
}
