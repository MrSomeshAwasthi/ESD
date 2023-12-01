package com.example.demo2.Repository;

import com.example.demo2.Entity.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Courses, Integer> {

}
