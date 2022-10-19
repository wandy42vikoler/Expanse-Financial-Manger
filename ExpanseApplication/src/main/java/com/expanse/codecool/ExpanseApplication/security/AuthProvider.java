/*
package com.expanse.codecool.ExpanseApplication.security;

import com.expanse.codecool.ExpanseApplication.service.PersonService;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
class AuthProvider implements AuthenticationProvider {
    private SecurityUserDetailsService userDetailsService;
    private PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private PersonService personService;

    public AuthProvider(SecurityUserDetailsService userDetailsService, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {
        return authentication;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return true;
    }
}

 */


