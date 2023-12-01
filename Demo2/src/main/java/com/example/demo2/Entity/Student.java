package com.example.demo2.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
//import jakarta.*;
//import java.util.*;

@Entity
@Table(name = "Student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int student_id;
    
    @Column(name="roll_number", unique = true, nullable = false)
    private String roll_number;

    @Column(name = "studentName")
    private String studentName;



    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    public Student() {

    }

    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public String getRoll_number() {
        return roll_number;
    }

    public void setRoll_number(String roll_number) {
        this.roll_number = roll_number;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Specialization getSpecialization() {
        return specialization;
    }


    public void setSpecialization(Specialization specialization) {
        this.specialization = specialization;
    }

    public Student(int student_id, String roll_number, String studentName, String email, String password, Specialization specialization) {
        this.student_id = student_id;
        this.roll_number = roll_number;
        this.studentName = studentName;
        this.email = email;
        this.password = password;
//        this.specialization = specialization;
    }


    @ManyToOne
    @JoinColumn(name="specialization", nullable = false)
    @JsonIgnoreProperties("students")
    private Specialization specialization;

}
