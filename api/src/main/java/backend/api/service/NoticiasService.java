package backend.api.service;

import backend.api.dto.NoticiaDTO;
import backend.api.dto.requestRecDto;
import backend.api.model.Noticia;
import backend.api.repository.NoticiaRepository;
import backend.api.security.JwtUtil;
import io.jsonwebtoken.Jwt;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class NoticiasService {

    private final NoticiaRepository noticiaRepository;
    private final JwtUtil jwtUtil;

    public List<NoticiaDTO> getNoticias() {
        return noticiaRepository.findAllNoticiasWithCategoria();
    }

    public  List<Map<String, Object>> getNoticia(String header) {
        String token = header.substring(7);
        String email = jwtUtil.extractEmail(token);
        return noticiaRepository.findNoticiasByUsuarioId(email);
    }
}
