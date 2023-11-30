package com.iiitb.server.authen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class    LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<String> authenticate(@RequestBody Login login) {
        boolean isAuthenticated = loginService.authenticate(login);
        return isAuthenticated ? ResponseEntity.ok("Authentication successful") : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
    }
}
