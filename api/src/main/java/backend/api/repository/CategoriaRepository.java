package backend.api.repository;

import backend.api.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends GenericRepository<Categoria, Long> {
    @Query("select new backend.api.model.Categoria(c.id, c.nombre, c.descripcion, c.fechaAdicion)" +
            " from Categoria c")
    List<Categoria> findAllCategorias();

}
