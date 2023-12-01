package com.example.demo2.Entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.*;

@Getter
@Entity
public class Specialization {

    public Specialization(int specialization_id, String code, String specialization_name, List<Student> students) {
        this.specialization_id = specialization_id;
        this.code = code;
        this.specialization_name = specialization_name;
//        this.students = students;
    }

    public Specialization() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "specialization_id")
    private int specialization_id;



    @Column(name = "code", unique = true, nullable = false)
    private String code;

    @Column(name = "specialization_name", unique = true, nullable = false)
    private String specialization_name;

    public int getSpecialization_id() {
        return specialization_id;
    }

    public String getCode() {
        return code;
    }

    public String getSpecialization_name() {
        return specialization_name;
    }

//    public List<Student> getStudents() {
//        return students;
//    }

    public void setSpecialization_id(int specialization_id) {
        this.specialization_id = specialization_id;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setSpecialization_name(String specialization_name) {
        this.specialization_name = specialization_name;
    }


    public void setStudents(List<Student> students) {
        this.students = students;
    }

    @OneToMany(mappedBy = "specialization", cascade = CascadeType.ALL)
    private List<Student> students = new ArrayList<>();

}
