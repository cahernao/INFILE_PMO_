package backend.api.service;

import backend.api.dto.NoticiaDTO;
import backend.api.model.Noticia;
import backend.api.repository.NoticiaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoticiasService {

    private final NoticiaRepository noticiaRepository;

    public List<NoticiaDTO> getNoticias() {
        return noticiaRepository.findAllNoticiasWithCategoria();
    }
}
