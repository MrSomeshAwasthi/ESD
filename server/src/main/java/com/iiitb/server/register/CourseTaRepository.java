package com.iiitb.server.register;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseTaRepository extends JpaRepository<CourseTa, String> {
    // Custom queries or methods, if needed
}