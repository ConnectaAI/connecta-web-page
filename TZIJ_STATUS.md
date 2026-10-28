# Tzij — estado del proyecto

Última actualización: 2026-10-20

## Qué es

Tzij es el laboratorio de IA generativa de Guatemala, una iniciativa de Connecta. Su meta es construir el primer LLM del país con datos que pertenecen a los pueblos de Guatemala. El primer paso es formar un consorcio para reunir y cuidar datos en idiomas mayas, con las comunidades como dueñas de la materia prima de la IA.

El consorcio parte de cero: hoy es una iniciativa, no hay socios, protocolos ni pilotos confirmados.

## Sitio web

| Pieza | Estado |
|---|---|
| Diseño de la página `/tzij` y de la tarjeta del home | Hecho (canvas de diseño; variante B editorial implementada) |
| Página `/tzij` y `/en/tzij` en el sitio | Hecho, pendiente de revisión visual |
| Tarjeta de Tzij en la sección Productos del home | Hecho (debajo de la tarjeta de Medassistant) |
| Enlace en el navbar | Hecho |
| Textos en español e inglés | Hecho |
| Paleta `--tzij-*` en `src/App.css` y wrapper `.tzij-theme` | Hecho |
| SEO (`PAGES`, `seo.tzij` es/en) y sitemap | Hecho |
| Hero con relieve de Qʼumarkaj (diseño 3m) | En el código, sin commit; diseño aprobado y confirmado por el responsable (2026-10-20); falta la consulta con personas o autoridades kʼicheʼ |
| Navbar, contacto y footer con tema Tzij (excepción confirmada 2026-10-20) | Hecho en el código, diseño aprobado el 2026-10-20: `navbar-tzij` en `Navbar.css`, `Contact variant="tzij"`, `TzijFooter` con los perfiles de relieve (`src/lib/tzijRidges.ts`, `src/assets/tzij-footer-grain.webp`) |
| Secciones por qué, consorcio, hacia dónde vamos y contacto (diseño E: grano, tipografía grande, numerales, perfil de elevación, kit gráfico) | Hecho en el código el 2026-10-20 |
| Favicon e imagen para redes (Kit de identidad en el canvas) | En pausa: no se publican hasta que la persona responsable lo decida |
| Cambios sin commit | Pendiente de commit |

Diseño: https://claude.ai/artifact/HFzGmQtjKydDjyisrcFSSG

## Contenido de la página

Secciones incluidas: hero, por qué, el consorcio (tres principios: propiedad comunitaria, consentimiento previo, beneficio compartido), hacia dónde vamos (cuatro etapas, solo "Formar el consorcio" en negrita) y el formulario de contacto de Connecta. La sección de idiomas mayas está en pausa (ver Pendiente).

La página es informativa: no tiene botón de acción en el hero.

## Pendiente a futuro

- **Sección "Súmate"** (dos vías: comunidades, academias e instituciones; organizaciones y empresas aliadas) y el botón de acción del hero. Se omiten hasta que haya un proceso real para recibir a quien quiera participar.
- Revisar con las comunidades y socios el texto sobre gobernanza antes de publicarlo como compromiso.
- Decidir si se muestran productos futuros (voz para clínicas, traducción) cuando existan.
- Redactar los textos en Kʼicheʼ y Qʼeqchiʼ solo con personas hablantes; no se generan con IA.

- **Sección de idiomas mayas** en pausa (2026-10-19). Ya no está en el código ni en la página C del diseño. Los borradores quedan en el canvas (índice, mapa de Guatemala y el saltillo como letra) por si se retoma.

## Decisiones tomadas

- Colores: paleta Tzij en las páginas de Tzij; los elementos de la marca Connecta (logo, navbar, footer, contacto) conservan los colores de Connecta.
- Tipografía y estilo: los del sitio actual (Fraunces, Geist, Geist Mono; diseño editorial y micro animaciones).
- Sin `tokens.json` ni script de generación; las variables viven en `src/App.css`.
- Formulario de contacto: el que ya existe.
- No se menciona el tamaño del equipo en ningún texto.

## Revisión cultural (abierta)

- 2026-10-20: el responsable aprobó la parte cultural (marcador de Qʼumarkaj en hero, perfil de la hoja de ruta y footer). Sigue abierta la consulta con personas hablantes o autoridades kʼicheʼ antes de publicar.
- El hero ya no usa la cruz maya ni los cuatro rumbos (diseño anterior descartado). Ahora marca el Templo de Tohil sobre el relieve de Qʼumarkaj; el diseño sigue en revisión en el canvas. Pendiente: aprobación final del responsable y revisión por personas hablantes o autoridades kʼicheʼ antes de publicar.

## Relieve del hero y del footer (datos y créditos)

- Los relieves usan el modelo digital de elevación Copernicus DEM GLO-30 (30 m). El hero muestra curvas de nivel de los alrededores de Qʼumarkaj; el footer, 36 perfiles de elevación del altiplano (de 92,05° a 90,1° O, sin tramos de llanura costera).
- Crédito exigido por la licencia para datos modificados: "produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved". Ya está en el footer (es/en); falta confirmarlo contra el texto oficial de la licencia (incluida la frase de no responsabilidad) y decidir el crédito del pie del hero.
- Los perfiles del footer están espejados respecto a una vista real desde Qʼumarkaj hacia el sur (el este queda a la derecha). Pendiente de decisión: dejarlo como vista estilizada o voltearlo.
- Las variantes de Tikal (3k, 3l) se descartaron; quedan en el canvas solo como referencia.

## Variante Q'umarkaj (altiplano k'iche')

- Relieve real de los alrededores de Q'umarkaj (Utatlán), Quiché, generado con Copernicus DEM GLO-30 (curvas cada 20 m, una más gruesa cada 100 m). Elevación del recorte: 1 798 a 2 241 m; el sitio, a unos 1 992 m.
- En el hero, el anillo marca la plaza de Q'umarkaj (15.0234 N, 91.1719 O según OpenStreetMap y Wikipedia, coincidentes a unos 15 m), donde según la bibliografía se encuentra el Templo de Tohil. No se encontró una coordenada específica del templo: la posición es aproximada (decenas de metros) y el pie del mapa ya no lo dice (ver pendiente en la sección del hero).
- Q'umarkaj sigue siendo un lugar ceremonial vivo para el pueblo k'iche'. Antes de publicar: confirmación del responsable, y consulta y aprobación de las comunidades o autoridades k'iche' sobre marcar el sitio y sobre la redacción.

- El footer repite el marcador de Qʼumarkaj (punto de maíz sobre el perfil). Entra en la misma revisión con personas o autoridades kʼicheʼ.

## Decisiones abiertas

- Redes sociales de Connecta en el contacto de Tzij: se mantienen (el diseño no las mostraba); pendiente decidir si se quitan.
- El hueco de 48 px sobre el formulario viene de una regla antigua de `App.css` (`.contact-form`). Se corrigió solo en `/tzij`; sigue igual en las páginas de Connecta.
- El perfil de elevación de "Hacia dónde vamos" repite el relieve del hero y del footer: confirmar que se lee como coherencia y no como repetición.
- Los perfiles del footer y de la hoja de ruta están espejados respecto a una vista real hacia el sur desde Qʼumarkaj; se presentan como vista estilizada.

## Reglas de contenido

- No afirmar cifras, socios, protocolos o pilotos sin confirmación.
- "El primer LLM de Guatemala" se presenta como meta, no como hecho.
- Ver `AGENTS.md` para colores, tipografía y límites culturales.

## Hero

- Contornos en `src/lib/tzijRelief.ts` (generados), grano en `src/assets/tzij-grain.webp` (18 KB), estilos del hero y del marcador en `src/styles/Tzij.css`.
- El pie del mapa ya no dice que la posición es aproximada (texto editado en el diseño); la posición del templo sigue siendo aproximada. Verificar con fuente oficial (IDAEH) y decidir si se restituye la aclaración.
- Pendiente: crédito formal de Copernicus.
