package com.example.demo2.Entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "department_id")
    private int department_id;

    public Department() {

    }


    public int getDepartment_id() {
        return department_id;
    }

    public void setDepartment_id(int department_id) {
        this.department_id = department_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public Department(int department_id, String name, int capacity) {
        this.department_id = department_id;
        this.name = name;
        this.capacity = capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "capacity")
    private int capacity;


    @OneToMany(mappedBy = "department")
    private List<Employee> employees = new ArrayList<>();



}
