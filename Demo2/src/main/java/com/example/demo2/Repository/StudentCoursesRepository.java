package com.example.demo2.Repository;

import com.example.demo2.Entity.Courses;
import com.example.demo2.Entity.Student;
import com.example.demo2.Entity.Student_Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface StudentCoursesRepository extends JpaRepository<Student_Courses, Integer> {

    @Query(value = "select sc.course from Student_Courses sc where sc.student.student_id= :student_id")
    List<Courses> findCoursesByStudentId(int student_id);

}
