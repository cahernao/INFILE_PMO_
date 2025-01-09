package backend.api.repository;

import backend.api.dto.NoticiaDTO;
import backend.api.model.Noticia;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface NoticiaRepository extends GenericRepository<Noticia, Long> {
    @Query("SELECT new backend.api.dto.NoticiaDTO(n.titulo, c.nombre, n.contenido, n.fechaPublicacion, n.imagen) " +
            "FROM Noticia n JOIN n.categoria c")
    List<NoticiaDTO> findAllNoticiasWithCategoria();

    @Query("SELECT new backend.api.dto.NoticiaDTO(n.titulo, c.nombre, n.contenido, n.fechaPublicacion, n.imagen) " +
            "FROM Noticia n JOIN n.categoria c " +
            "WHERE c.id = :categoriaId")
    List<NoticiaDTO> findNoticiasByCategoriaId(@Param("categoriaId") Long categoriaId);

    @Query("SELECT new backend.api.dto.NoticiaDTO(n.titulo, c.nombre, n.contenido, n.fechaPublicacion, n.imagen) " +
            "FROM Noticia n JOIN n.categoria c " +
            "WHERE LOWER(n.titulo) LIKE LOWER(CONCAT('%', :searchTerm, '%')) " +
            "OR LOWER(n.contenido) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<NoticiaDTO> searchNoticias(@Param("searchTerm") String searchTerm);
}