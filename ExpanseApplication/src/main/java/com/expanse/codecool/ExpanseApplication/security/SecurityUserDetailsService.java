package com.expanse.codecool.ExpanseApplication.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecurityUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public SecurityUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        Person person = userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not present"));
        return person;
    }

    public void createUser(UserDetails user) {
        userRepository.save((Person) user);
    }
}