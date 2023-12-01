package com.example.demo2.Entity;

import jakarta.persistence.*;

@Entity
public class Student_Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    public Student_Courses(int id, Student student, Courses course) {
        this.id = id;
        this.student = student;
        this.course = course;
    }

    public Student_Courses() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Courses getCourse() {
        return course;
    }

    public void setCourse(Courses course) {
        this.course = course;
    }

    @ManyToOne()
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne()
    @JoinColumn(name = "course_id")
    private Courses course;



}
