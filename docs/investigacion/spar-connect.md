# AI Safety Connect (SPAR)

Working report del Supervised Program for Alignment Research, publicado el **11 de enero de 2026**. Primera autora: Janeth Valdivia. Coautores: Dexter Gómez, Tim Sankara, Jakub Nowak, Kailer Laino, Julius A. Odai, Ihor Kendiukhov y Max Pinelo. Contribuyente: Jaime Raldua.

- Ficha: [SPAR Research Library](https://library.sparai.org/reports/ai-safety-connect-platform-gedm0j/)
- Código de equipo: [github.com/AI-Safety-Connect](https://github.com/AI-Safety-Connect)
- Rol de Valdivia en LinkedIn: *Project Collaborator (Data Engineer)*, septiembre 2025 – enero 2026

## Problema que plantea

Hay un hueco de coordinación entre la investigación académica y las comunidades de AI Safety. El proyecto construye una plataforma que mapea autores, publicaciones y áreas temáticas con una taxonomía jerárquica (Areas → Fields → Subfields).

## Qué construyeron, según el abstract

1. Compararon indexadores académicos y eligieron **Semantic Scholar** como fuente más estable.
2. Recuperaron **185,715 documentos** alineados a la taxonomía.
3. Procesaron los datos con una **arquitectura Medallion en AWS**: metadatos desduplicados, grafos de citas, distribuciones temáticas y perfiles de autor.
4. Añadieron una capa semántica con embeddings **E5-Large**.
5. Expusieron APIs REST y de búsqueda semántica para retrieval y matching de investigadores.

SPAR marca el texto como *working report* que puede no reflejar las vistas actuales de los autores.

## Contexto mexicano

AI Safety México presenta este trabajo como la vía por la que Jason Pinelo, Dexter Gómez y Janeth Valdivia entraron a SPAR. Encaja con la política de la organización: usar infraestructura existente (SPAR, Apart, BlueDot) en lugar de construir todo desde cero.
