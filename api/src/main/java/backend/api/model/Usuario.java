package backend.api.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "rollID", nullable = false)
    private Rol rol;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(name = "id_red_social", length = 150)
    private String idRedSocial;

    @Column(nullable = false)
    private Boolean estado = true;

    @Column(nullable = false)
    private String password;
}