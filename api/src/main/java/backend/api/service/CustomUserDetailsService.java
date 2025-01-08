package backend.api.service;

import backend.api.model.AuthenticationResponse;
import backend.api.model.RequestRegister;
import backend.api.model.Usuario;
import backend.api.repository.usuarioRepository;
import backend.api.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static org.springframework.security.core.userdetails.User.*;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final usuarioRepository usuarioRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepo.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con el email: " + username));

        return builder()
                .username(usuario.getEmail())
                .password(usuario.getPassword())
                //.authorities("1") // Aquí puedes configurar roles dinámicos si los tienes
                .build();
    }

    public AuthenticationResponse register(RequestRegister request) {
        var user = builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(1)
                .build();
        usuarioRepo.save(user);
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }

    public AuthenticationResponse authenticate(RequestRegister request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = usuarioRepo.findByEmail(request.getEmail())
                .orElseThrow();
        var token = jwtUtil.generateToken((UserDetails) user);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }

}