/**
 * Author:  cahernao
 * Created: 10/01/2025
 */

 --     DDL
 -- Crear la tabla 'rol'
CREATE TABLE rol (
    ID SERIAL PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    descripcion TEXT,
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_adicion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla 'usuario'
CREATE TABLE usuario (
    ID SERIAL PRIMARY KEY,
    rollID INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    id_red_social VARCHAR(150),
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (rollID) REFERENCES rol(ID)
);

-- Crear la tabla 'categoria'
CREATE TABLE categoria (
    ID SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    fecha_adicion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla 'noticia'
CREATE TABLE noticia (
    ID SERIAL PRIMARY KEY,
    categoriaID INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP NOT NULL,
    imagen VARCHAR(255),
    FOREIGN KEY (categoriaID) REFERENCES categoria(ID)
);

-- Crear la tabla 'recomendacion'
CREATE TABLE recomendacion (
    ID SERIAL PRIMARY KEY,
    usuarioID INT NOT NULL,
    categoriaID INT NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_adicion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioID) REFERENCES usuario(ID),
    FOREIGN KEY (categoriaID) REFERENCES categoria(ID)
);


-- DML

-- valor 1 por defecto
insert into rol (tipo, descripcion, estado)
values ('cliente', 'el tipo de usuareio es cliente', true);

-- valor 1 por defecto
insert into categoria (nombre, descripcion)
values ('deporte', 'habla de deportes');

insert into noticia (categoriaid, titulo, contenido, fecha_publicacion, imagen)
values (1, 'MBAPPE AL REAL MADRID', 'Mpbappe se viene al real madrid', '2023-01-01', 'https://media.tycsports.com/files/2024/06/03/725664/kylian-mbappe_862x485.webp');

