package com.iiitb.server.register;

import com.iiitb.server.authen.Employees;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaAllocationService {

    @Autowired
    private CourseTaRepository courseTaRepository;

    public void allocateTaToCourse(Employees faculty, int studentId, int courseId) {
        // Check if the faculty teaches the specified course
        if (facultyTeachesCourse(faculty, courseId)) {
            // Allocate the TA to the course
            CourseTa courseTa = new CourseTa();
            courseTa.setFacultyId(faculty.getEmployeeId());
            courseTa.setStudentId(studentId);
            courseTa.setCourseId(courseId);
            courseTaRepository.save(courseTa);
        } else {
            throw new RuntimeException("Faculty does not teach the specified course.");
        }
    }

    // Replace this placeholder with the actual logic
    private boolean facultyTeachesCourse(Employees faculty, int courseId) {
        // Implement logic to check if the faculty teaches the specified course
        // This may involve querying the database or checking some other data source
        // Return true if the faculty teaches the course, otherwise return false
        return true; // Placeholder, replace with actual implementation
    }
}
