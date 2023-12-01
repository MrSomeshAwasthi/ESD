package com.example.demo2.Controller;
import java.util.*;
import com.example.demo2.Entity.Student;
import com.example.demo2.Repository.StudentRepository;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/get_all_students")
    List<Student> getAllStudents(){
        List<Student> res = studentRepository.findAll();
        return res;
    }

    @PostMapping("/post_student")
    Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }

    @DeleteMapping("/del_student")
    void deleteStudent(@RequestParam int student_id){
        studentRepository.deleteById(student_id);
    }


    @GetMapping("/get_student")
    Optional<Student> getStudent(@RequestParam int student_id){
        return studentRepository.findById(student_id);
    }


    @PostMapping("/login")
    ResponseEntity<Object> login(@RequestBody Map<String, Object> details){
//        if(details.)
        System.out.println(details.get("email"));

        String email = details.get("email").toString();
        String pass = details.get("password").toString();

        if(email.isEmpty() || pass.isEmpty()){
            return ResponseEntity.status(400).body("Enter the required details!");
        }

        Student st = studentRepository.getByEmail(email);

        if(st==null){
            return ResponseEntity.status(400).body("Invalid Email Provided!");
        }
        if(st.getPassword().compareTo(pass) != 0){
            return ResponseEntity.status(400).body("Invalid Password Provided!");
        }

        return ResponseEntity.ok(st);
    }


}
