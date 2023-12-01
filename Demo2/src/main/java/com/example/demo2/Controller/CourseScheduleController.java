package com.example.demo2.Controller;

import com.example.demo2.Entity.Course_Schedule;
import com.example.demo2.Entity.Courses;
import com.example.demo2.Repository.CourseRepository;
import com.example.demo2.Repository.CourseScheduleRepository;
import org.hibernate.type.AnyType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.HttpMessageReader;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
public class CourseScheduleController {
    @Autowired
    private CourseScheduleRepository courseScheduleRepository;

    @PostMapping("/post_course_schedule")
    ResponseEntity<String> createCourseSchedule(@RequestBody Course_Schedule schedule){
        String building = schedule.getBuilding();
        String day = schedule.getDay();
        LocalDateTime time = schedule.getTime();
        String room = schedule.getRoom();
        List<Course_Schedule> l = courseScheduleRepository.findBy(building, day, room, time);
        if(l.isEmpty())
            return new ResponseEntity<String>(
                    ""+courseScheduleRepository.save(schedule),
                    HttpStatus.OK
            );
        else{
            return new ResponseEntity<String>(
                    "This schedule is already Occupied",
                    HttpStatus.OK
            );
        }
    }

    @DeleteMapping("/del_course_schedule")
    void deleteCourseSchedule(@RequestParam int course_schedule_id){
        courseScheduleRepository.deleteById(course_schedule_id);
    }


    @GetMapping("/get_course_schedule")
    Optional<Course_Schedule> getCourseSchedule(@RequestParam int course_schedule_id){
        return courseScheduleRepository.findById(course_schedule_id);
    }

//    @GetMapping("/if_schedule_exists")
//    boolean ifScheduleExists(@RequestBody Course_Schedule schedule){
//
//    }

}
