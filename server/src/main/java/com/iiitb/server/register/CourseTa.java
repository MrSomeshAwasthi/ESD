package com.iiitb.server.register;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CourseTa {

    @Id
    private int id;

    private int facultyId;

    private int studentId;

    private int courseId;

    public CourseTa() {
        // Default constructor required by JPA
    }

    public CourseTa(int id, int facultyId, int studentId, int courseId) {
        this.id = id;
        this.facultyId = facultyId;
        this.studentId = studentId;
        this.courseId = courseId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(int facultyId) {
        this.facultyId = facultyId;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }
}
