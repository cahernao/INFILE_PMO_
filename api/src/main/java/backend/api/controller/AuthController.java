package backend.api.controller;



import backend.api.model.RequestRegister;
import backend.api.model.Rol;
import backend.api.model.Usuario;
import backend.api.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final backend.api.repository.usuarioRepository usuarioRepository;


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody RequestRegister requestRegister) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestRegister.getEmail(), requestRegister.getPassword()));
        UserDetails userDetails = userDetailsService.loadUserByUsername(requestRegister.getEmail());
        return ResponseEntity.ok().body(Map.of("token", jwtUtil.generateToken(userDetails)));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RequestRegister requestRegister) {

        try{
            if (requestRegister.getUsername() == null || requestRegister.getPassword() == null) {
                throw new IllegalArgumentException("No existen credenciales");
            }

            Usuario nuevoUsuario = new Usuario();
            nuevoUsuario.setEmail(requestRegister.getEmail());
            nuevoUsuario.setPassword(passwordEncoder.encode(requestRegister.getPassword()));
            nuevoUsuario.setNombre(requestRegister.getUsername());


            Rol rol = new Rol();
            rol.setId(1); // POR DEFECTO USUARIO

            nuevoUsuario.setRol(rol);

            usuarioRepository.save(nuevoUsuario);

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestRegister.getEmail(), requestRegister.getPassword()));
            return ResponseEntity.ok().body("Usuario registrado exitosamente");

        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }
}