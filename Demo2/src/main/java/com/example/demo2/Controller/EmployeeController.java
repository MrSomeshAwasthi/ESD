package com.example.demo2.Controller;

import com.example.demo2.Entity.Employee;
import com.example.demo2.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/post_employee")
    Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/del_employee")
    void deleteEmployee(@RequestParam int employee_id){
        employeeRepository.deleteById(employee_id);
    }


    @GetMapping("/get_employee")
    Optional<Employee> getEmployee(@RequestParam int employee_id){
        return employeeRepository.findById(employee_id);
    }

}
