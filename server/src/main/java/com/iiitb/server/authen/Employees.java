package com.iiitb.server.authen;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employees {
    @Id
    private int employee_id;
    private String email;
    private String password;

    // Constructors
    public Employees() {
        // Default constructor required by JPA
    }

    public Employees(int employee_id, String email, String password) {
        this.employee_id = employee_id;
        this.email = email;
        this.password = password;
    }

    // Getters and setters
    public int getEmployeeId() {
        return employee_id;
    }

    public void setEmployeeId(int employeeId) {
        this.employee_id = employeeId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
