package com.example.token;

import javax.security.sasl.AuthenticationException;

public class InvalidJwtAuthenticationException extends AuthenticationException  {

	public InvalidJwtAuthenticationException(String e) {
        super(e);
    }

}
