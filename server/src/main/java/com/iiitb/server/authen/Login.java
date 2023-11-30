package com.iiitb.server.authen;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity
public class Login {
    @Id
    private String email;
    private String password;

    public Login() {
        //constructor
    }
    public Login(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
