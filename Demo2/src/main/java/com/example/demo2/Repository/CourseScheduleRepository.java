package com.example.demo2.Repository;

import com.example.demo2.Entity.Course_Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface CourseScheduleRepository extends JpaRepository<Course_Schedule, Integer> {

    @Query("select schedule from Course_Schedule schedule where schedule.building=:building and schedule.day=:day and schedule.room=:room and schedule.time=:time")
    List<Course_Schedule> findBy(String building, String day, String room, LocalDateTime time);
}
