package com.example.demo2.Controller;

import java.util.*;
import com.example.demo2.Entity.Courses;
import com.example.demo2.Entity.Student;
import com.example.demo2.Entity.Student_Courses;
import com.example.demo2.Repository.StudentCoursesRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;


@RestController
public class StudentCoursesController {

    @Autowired
    private StudentCoursesRepository studentCoursesRepository;

    @PostMapping("/post_student_courses")
    Student_Courses createStudentCourses(@RequestBody Student_Courses sc){
        return studentCoursesRepository.save(sc);
    }

    @DeleteMapping("/del_student_courses")
    void deleteStudentCourses(@RequestParam int sc_id){
        studentCoursesRepository.deleteById(sc_id);
    }


    @GetMapping("/get_student_courses")
    Optional<Student_Courses> getStudentCourses(@RequestParam int sc_id){
        return studentCoursesRepository.findById(sc_id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get_course_by_student_id")
    ResponseEntity<Object> getCoursesByStudentId(@RequestParam int student_id){

        List<Courses> list_of_student_courses = studentCoursesRepository.findCoursesByStudentId(student_id);
        if(list_of_student_courses.isEmpty()){
            return ResponseEntity.ok("The student with the id provided not found!");
        }
        else{
            return ResponseEntity.ok(list_of_student_courses);
        }

    }

}
