package com.expanse.codecool.ExpanseApplication.controller;


import com.expanse.codecool.ExpanseApplication.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/user")
public class UserController {

    private final User user;

    public UserController(User user) {
        this.user = user;
    }

    @CrossOrigin
    @GetMapping
    public String userInformation(){
        return user.getUserFirstName();
    }

    @CrossOrigin
    @PostMapping(value="{firstname}/{lastname}")
    public void saveUser(@PathVariable String firstname, String lastname){
        user.setUserFirstName(firstname);
        user.setUserLastName(lastname);
    }
}
