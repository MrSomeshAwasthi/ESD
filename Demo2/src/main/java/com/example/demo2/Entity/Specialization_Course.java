package com.example.demo2.Entity;

import jakarta.persistence.*;

@Entity
public class Specialization_Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "specialization_id")
    private Specialization specialization;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Courses course;
}
