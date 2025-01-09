package backend.api.repository;

import backend.api.dto.CategoriaDTO;
import backend.api.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends GenericRepository<Categoria, Long> {
    @Query("select new backend.api.dto.CategoriaDTO(c.id, c.nombre)" +
            " from Categoria c")
    List<CategoriaDTO> findAllCategorias();

}
