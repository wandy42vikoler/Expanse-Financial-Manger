package com.expanse.codecool.ExpanseApplication.security;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
class AuthProvider implements AuthenticationProvider {
    // private static final int ATTEMPTS_LIMIT = 3;
    private SecurityUserDetailsService userDetailsService;
    private PasswordEncoder passwordEncoder;
    //private final AttemptsRepository attemptsRepository;
    private final UserRepository userRepository;

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

    /*
    private void processFailedAttempts(String username, Person user) {
        Optional<Attempts>
                userAttempts = attemptsRepository.findAttemptsByUsername(username);
        if (userAttempts.isEmpty()) {
            Attempts attempts = new Attempts();
            attempts.setUsername(username);
            attempts.setAttempts(1);
            attemptsRepository.save(attempts);
        } else {
            Attempts attempts = userAttempts.get();
            attempts.setAttempts(attempts.getAttempts() + 1);
            attemptsRepository.save(attempts);

            if (attempts.getAttempts() + 1 >
                    ATTEMPTS_LIMIT) {
                user.setAccountNonLocked(false);
                userRepository.save(user);
                throw new LockedException("Too many invalid attempts. Account is locked!!");
            }
        }
    }

     */

