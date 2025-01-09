package backend.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface GenericRepository<T, ID> extends JpaRepository<T, ID> {

    @Query("SELECT t FROM #{#entityName} t")
    Page<T> findAllWithPagination(Pageable pageable);
}
