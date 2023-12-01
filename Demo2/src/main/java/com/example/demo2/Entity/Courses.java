package com.example.demo2.Entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.*;

@Getter
@Entity
@Table(name="Courses")
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private int course_id;


    @Column(name = "course_code", nullable = false, unique = true)
    private String course_code;

    @Column(name = "course_name", nullable = false)
    private String course_name;

    public Courses() {

    }


    public void setCourse_id(int course_id) {
        this.course_id = course_id;
    }

    public void setCourse_code(String course_code) {
        this.course_code = course_code;
    }

    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }

    public Courses(int course_id, String course_code, String course_name) {
        this.course_id = course_id;
        this.course_code = course_code;
        this.course_name = course_name;
    }


//    @ManyToMany

    public void setSchedules(List<Course_Schedule> schedules) {
        this.schedules = schedules;
    }
//    private List<Student> students = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Course_Schedule> schedules = new ArrayList<>();


}
