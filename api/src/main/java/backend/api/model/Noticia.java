package backend.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Entity
@Table(name = "noticia")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Noticia {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "categoriaID")
    private Categoria categoria;

    private String titulo;
    private String contenido;

    @Column(name = "fecha_publicacion")
    private LocalDateTime fechaPublicacion;

    private String imagen;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}