package com.iiitb.server.register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpSession;
import com.iiitb.server.authen.Employees;

@RestController
@RequestMapping("/api/faculty")
public class FacultyController {

    @Autowired
    private TaRegistrationService taRegistrationService;

    @Autowired
    private TaAllocationService taAllocationService;

    @Autowired
    private HttpSession session;

    @PostMapping("/registerTA")
    public ResponseEntity<String> registerStudentAsTa(
            @RequestParam int studentId,
            @RequestParam int courseId
    ) {
        try {
            // Get authenticated faculty from the session
            Employees authenticatedFaculty = (Employees) session.getAttribute("authenticatedUser");

            // Check if the faculty is authenticated
            if (authenticatedFaculty == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
            }

            taRegistrationService.registerStudentAsTa(authenticatedFaculty, studentId, courseId);
            return ResponseEntity.ok("TA Registration Successful");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/allocateTA")
    public ResponseEntity<String> allocateTaToCourse(
            @RequestParam int studentId,
            @RequestParam int courseId
    ) {
        try {
            // Get authenticated faculty from the session
            Employees authenticatedFaculty = (Employees) session.getAttribute("authenticatedUser");

            // Check if the faculty is authenticated
            if (authenticatedFaculty == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
            }

            taAllocationService.allocateTaToCourse(authenticatedFaculty, studentId, courseId);
            return ResponseEntity.ok("TA Allocation Successful");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
