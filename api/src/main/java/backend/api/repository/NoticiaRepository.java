package backend.api.repository;

import backend.api.dto.NoticiaDTO;
import backend.api.model.Noticia;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Map;

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

    @Query(value = "SELECT n.titulo AS titulo, c.nombre AS nombreCategoria, " +
            "n.contenido AS contenido, n.fecha_publicacion AS fechaPublicacion, n.imagen AS imagen " +
            "FROM noticia n " +
            "JOIN categoria c ON n.categoriaID = c.id " +
            "JOIN recomendacion r ON c.id = r.categoriaID " +
            "JOIN usuario u ON u.ID=r.usuarioID " +
            "WHERE u.email = :usuarioId AND r.estado = true",
            nativeQuery = true)
    List<Map<String, Object>> findNoticiasByUsuarioId(@Param("usuarioId") String usuarioId);
}