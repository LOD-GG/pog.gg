package com.example.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.gson.GsonAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Users;
import com.example.service.JoinService;
import com.example.service.LoginService;
import com.example.token.Co_Token;
import com.example.token.InvalidJwtAuthenticationException;

@CrossOrigin
@RestController
public class UsersController {
	
	@Autowired
	private JoinService joinService;
	
	@Autowired
	private LoginService loginService;
	
	
	@PostMapping(value = "/joinRequest")
	@ResponseStatus(HttpStatus.OK)
	public String joinRequest(@RequestBody Users param) {
//		Set<String> keys = paramMap.keySet();
//		for(String s: keys ) {
//			System.out.println(s);
//		}
//		System.out.println("-------");
		String userId = param.getUserid();
		String userPw = param.getPassword();
		String userName = param.getUsername();
//		System.out.println(userId);
//		System.out.println(userPw);
//		System.out.println(userName);
		
		String page = joinService.joinUser(userId, userPw, userName);
		System.out.println("!");
		return page;
	}
	
	@PostMapping(value = "/loginRequest")
	@ResponseStatus(HttpStatus.OK)
	public Co_Token loginRequest(@RequestBody Users param) {
		String userId = param.getUserid();
		String userPw = param.getPassword();
		
		System.out.printf("%s %s",userId,userPw);
		String name = loginService.login(userId, userPw);
		
		Users user = new Users();
		user.setUserid(userId);
		user.setPassword(userPw);
		user.setUsername(name);
		
		Co_Token jwt = new Co_Token(user);
		
		//jwt.getTokenResponse();
		//return user; //유저 객체로 반환
		return jwt; //토큰객체로 반환
	}

	//토큰 받아서 유저객체로 반환
	@PostMapping(value = "/tokenRequest")
	public Users tokenRequest( @RequestBody Co_Token param) throws InvalidJwtAuthenticationException {
		Users user= new Users();
		System.out.println("////////////////////////////////////////");
		//System.out.println(param.getToken());
		user = param.verifyToken();//객체 반환
		return user;
	}

}
