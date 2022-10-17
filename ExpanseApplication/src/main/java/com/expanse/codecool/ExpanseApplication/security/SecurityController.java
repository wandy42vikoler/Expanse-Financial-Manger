package com.expanse.codecool.ExpanseApplication.security;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
public class SecurityController {
    private final SecurityUserDetailsService userDetailsManager;
    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;

    public SecurityController(SecurityUserDetailsService userDetailsManager, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.userDetailsManager = userDetailsManager;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @GetMapping("/security")
    public String index() {
        return "index";
    }

    @PostMapping("/login")
    public String login(HttpServletRequest request, HttpSession session) {
        session.setAttribute(
                "error", getErrorMessage(request)
        );
        List<Person> people = userRepository.findAll();
        System.out.println(people);
        return "login";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @PostMapping(
            value = "/register"//,
            //        consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE, produces = {
            //        MediaType.APPLICATION_ATOM_XML_VALUE, MediaType.APPLICATION_JSON_VALUE}
    )
    public void addUser(@RequestBody Map<String, String> body) {
        Person user = new Person();
        user.setUsername(body.get("user"));
        user.setPassword(passwordEncoder.encode(body.get("password")));
        user.setAccountNonLocked(true);
        userDetailsManager.createUser(user);
    }

    private String getErrorMessage(HttpServletRequest request) {
        Exception exception = (Exception) request.getSession().getAttribute("SPRING_SECURITY_LAST_EXCEPTION");
        String error = "";
        if (exception instanceof BadCredentialsException) {
            error = "Invalid username and password!";
        } else if (exception instanceof LockedException) {
            error = exception.getMessage();
        } else {
            error = "Invalid username and password!";
        }
        return error;
    }
}
