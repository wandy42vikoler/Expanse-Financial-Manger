package com.expanse.codecool.ExpanseApplication.controller;


import com.expanse.codecool.ExpanseApplication.entity.Categories;
import com.expanse.codecool.ExpanseApplication.service.CategoriesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/categories")
public class CategoriesController {

    private final CategoriesService categoriesService;

    public CategoriesController(CategoriesService categoriesService) {
        this.categoriesService = categoriesService;
    }


    @CrossOrigin
    @GetMapping
    public List<Categories> categoriesList(){
        return categoriesService.getCategories();
    }

}