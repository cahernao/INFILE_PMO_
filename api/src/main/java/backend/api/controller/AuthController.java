package backend.api.controller;



import backend.api.model.RequestRegister;
import backend.api.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;


    @PostMapping("/login")
    public String login(@RequestBody RequestRegister requestRegister) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestRegister.getUsername(), requestRegister.getPassword()));
        UserDetails userDetails = userDetailsService.loadUserByUsername(requestRegister.getUsername());
        return jwtUtil.generateToken(userDetails);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RequestRegister requestRegister) {
        return ResponseEntity.ok(authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestRegister.getUsername(), requestRegister.getPassword())));
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }
}