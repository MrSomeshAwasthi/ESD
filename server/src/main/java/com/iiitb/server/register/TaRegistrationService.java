package com.iiitb.server.register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.iiitb.server.authen.Employees;

@Service
public class TaRegistrationService {

    @Autowired
    private CourseTaRepository courseTaRepository;

    public void registerStudentAsTa(Employees faculty, int studentId, int courseId) {
        // Check if the faculty teaches the specified course
        if (facultyTeachesCourse(faculty, courseId)) {
            // Check if the student is not already registered as a TA for the course
            if (!isStudentRegisteredAsTa(studentId, courseId)) {
                // Register the student as a TA for the course
                CourseTa courseTa = new CourseTa();
                courseTa.setFacultyId(faculty.getEmployeeId());
                courseTa.setStudentId(studentId);
                courseTa.setCourseId(courseId);
                courseTaRepository.save(courseTa);
            } else {
                throw new RuntimeException("Student is already registered as TA for the course.");
            }
        } else {
            throw new RuntimeException("Faculty does not teach the specified course.");
        }
    }

    private boolean facultyTeachesCourse(Employees faculty, int courseId) {
        // Implement logic to check if the faculty teaches the specified course
        // This may involve querying the database or checking some other data source
        // Return true if the faculty teaches the course, otherwise return false
        return true; // Placeholder, replace with actual implementation
    }

    private boolean isStudentRegisteredAsTa(int studentId, int courseId) {
        // Implement logic to check if the student is already registered as TA for the course
        // This may involve querying the database or checking some other data source
        // Return true if the student is registered as TA, otherwise return false
        return false; // Placeholder, replace with actual implementation
    }
}
