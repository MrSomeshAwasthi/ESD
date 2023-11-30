package com.iiitb.server.authen;// LoginRepository.java
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, String> {
    // You can add custom queries here if needed
}
