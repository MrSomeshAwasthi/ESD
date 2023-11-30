package com.iiitb.server.authen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.servlet.http.HttpSession;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private EmployeesRepository EmployeesRepository;

    @Autowired
    private HttpSession session;

    public boolean authenticate(Login login) {
        Optional<Employees> optionalEmployees = EmployeesRepository.findByEmail(login.getEmail());
        if (optionalEmployees.isPresent() && optionalEmployees.get().getPassword().equals(login.getPassword())) {
            // Store authenticated user information in the session
            session.setAttribute("authenticatedUser", optionalEmployees.get());
            return true;
        }
        return false;
    }
}
