package backend.api.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NoticiaDTO {
    private String titulo;
    private String nombreCategoria;
    private String contenido;
    private LocalDateTime fechaPublicacion;
    private String imagen;
}
