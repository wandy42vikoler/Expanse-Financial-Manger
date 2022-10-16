package com.expanse.codecool.ExpanseApplication.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class ApplicationConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf()
                .and()
                .cors()
                .disable()
                .authorizeRequests().antMatchers("/register**/")
                .permitAll().anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/login/")
                .permitAll()
                .and()
                .logout().invalidateHttpSession(true)
                .clearAuthentication(true).permitAll();
        return http.build();
    }
}
