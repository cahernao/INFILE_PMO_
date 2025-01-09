package backend.api.controller;

import backend.api.dto.NoticiaDTO;
import backend.api.model.Noticia;
import backend.api.security.JwtUtil;
import backend.api.service.NoticiasService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/noticias")
@RequiredArgsConstructor
public class NoticiaController {

    /*private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;*/
    private final NoticiasService noticiasService;


    @GetMapping("/test")
    public ResponseEntity<?> listaNoticias() {
        List<NoticiaDTO> noticias = noticiasService.getNoticias();
        if (noticias.isEmpty()) {return ResponseEntity.ok(Map.of("noticias", null));}
        return ResponseEntity.ok(Map.of("noticias", noticias));
    }
}
