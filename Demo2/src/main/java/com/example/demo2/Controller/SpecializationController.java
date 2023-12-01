package com.example.demo2.Controller;

import com.example.demo2.Entity.Specialization;
import com.example.demo2.Entity.Student;
import com.example.demo2.Repository.SpecializationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class SpecializationController {
    @Autowired
    private SpecializationRepository specializationRepository;

    @PostMapping("/post_specialization")
    Specialization createSpecialization(@RequestBody Specialization specialization){
        return specializationRepository.save(specialization);
    }

    @DeleteMapping("/del_specialization")
    void deleteSpecialization(@RequestParam int specialization_id){
        specializationRepository.deleteById(specialization_id);
    }


    @GetMapping("/get_specialization")
    Optional<Specialization> getCourse(@RequestParam int specialization_id){
        return specializationRepository.findById(specialization_id);
    }

//    List<Student> getStudentsInSp(@RequestParam int specialization_id){
//        return
//    }

}
