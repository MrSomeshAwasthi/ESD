package com.example.demo2.Controller;

import com.example.demo2.Entity.Department;
import com.example.demo2.Repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentRepository departmentRepository;

    @PostMapping("/post_department")
    Department createDepartment(@RequestBody Department department){
        return departmentRepository.save(department);
    }

    @DeleteMapping("/del_department")
    void deleteDepartment(@RequestParam int department_id){
        departmentRepository.deleteById(department_id);
    }


    @GetMapping("/get_department")
    Optional<Department> getStudent(@RequestParam int department_id){
        return departmentRepository.findById(department_id);
    }

}
