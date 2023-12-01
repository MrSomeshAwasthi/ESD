package com.example.demo2.Repository;

import com.example.demo2.Entity.Courses;
import com.example.demo2.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    Student getByEmail(String email);
}
