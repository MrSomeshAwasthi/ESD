package com.example.demo2.Controller;

import com.example.demo2.Entity.Courses;
import com.example.demo2.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/post_course")
    Courses createCourse(@RequestBody Courses course){
        return courseRepository.save(course);
    }

    @DeleteMapping("/del_course")
    void deleteCourse(@RequestParam int course_id){
        courseRepository.deleteById(course_id);
    }


    @GetMapping("/get_course")
    Optional<Courses> getCourse(@RequestParam int course_id){
        return courseRepository.findById(course_id);
    }



}
