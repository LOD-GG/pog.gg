package com.example.token;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class Securityconfig extends WebSecurityConfigurerAdapter {

	 @Override
	 public void configure(WebSecurity web) {
	        web.ignoring().antMatchers("/res/**");
	 }


	@Override
	    public void configure(HttpSecurity http) throws Exception {
	        http.authorizeRequests().antMatchers("/**").permitAll();
	        http.authorizeRequests().antMatchers("freeboard/**").permitAll();
	        http.csrf().disable();
	    }



}
