package com.example.demo2.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class Course_Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_schedule_id")
    private int course_schedule_id;

    public int getCourse_schedule_id() {
        return course_schedule_id;
    }

    public void setCourse_schedule_id(int course_schedule_id) {
        this.course_schedule_id = course_schedule_id;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public Courses getCourse() {
        return course;
    }

    public void setCourse(Courses course) {
        this.course = course;
    }

    public Course_Schedule(int course_schedule_id, LocalDateTime time, String day, String room, String building, Courses course) {
        this.course_schedule_id = course_schedule_id;
        this.time = time;
        this.day = day;
        this.room = room;
        this.building = building;
//        this.course = course;
    }

    @Column(name = "time", nullable = false)
//    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "yyyy-mm-dd HH:mm:ss")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss[.SSS][.SS][.S]")
    private LocalDateTime time;

    @Column(name = "day", nullable = false)
    private String day;

    @Column(name = "room", nullable = false)
    private String room;

    @Column(name = "building")
    private String building;


    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    @JsonIgnoreProperties("schedules")
    private Courses course;


    public Course_Schedule() {

    }
}
