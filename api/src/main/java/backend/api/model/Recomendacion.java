package backend.api.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "recomendacion", schema = "public")
public class Recomendacion {
    @Id
    @ColumnDefault("nextval('recomendacion_id_seq')")
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "usuarioid", nullable = false)
    private Usuario usuarioid;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "categoriaid", nullable = false)
    private Categoria categoriaid;

    @ColumnDefault("true")
    @Column(name = "estado", nullable = false)
    private Boolean estado = false;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "fecha_adicion")
    private Instant fechaAdicion;

}