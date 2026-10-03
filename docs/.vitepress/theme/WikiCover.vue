<script setup>
import { withBase } from 'vitepress'

defineProps({
  indexBase: { type: String, default: '' }
})
</script>

<template>
  <section class="wiki-cover" aria-label="Portada">
    <div class="cover-rail">
      <span>Wiki</span>
      <span class="cover-rail-line" aria-hidden="true"></span>
      <span>02.10.2026</span>
      <span class="cover-rail-line" aria-hidden="true"></span>
      <span>Mérida · MX</span>
    </div>

    <div class="cover-stage">
      <p class="cover-level cover-level-00">00</p>
      <h1 class="cover-name">
        <span class="cover-name-janeth">Janeth</span>
        <span class="cover-name-valdivia">Valdivia</span>
      </h1>

      <figure class="cover-photo">
        <p class="cover-level cover-level-01">01 · Retrato</p>
        <img :src="withBase('/janeth.png')" alt="Janeth Valdivia Pérez" width="1200" height="1600" />
      </figure>

      <aside class="cover-ficha">
        <p class="cover-level cover-level-02">02 · Ficha</p>
        <p class="cover-ficha-name">Janeth Valdivia Pérez</p>
        <dl>
          <div>
            <dt>Residencia</dt>
            <dd>Mérida, Yucatán</dd>
          </div>
          <div>
            <dt>Educación</dt>
            <dd>Ing. Datos, UPY · M.Sc. IIMAS-UNAM</dd>
          </div>
          <div>
            <dt>Ocupación</dt>
            <dd>AI Safety México · Operations lead</dd>
          </div>
          <div>
            <dt>Conocida por</dt>
            <dd>EA UPY · Encuesta COMIA 2025 · Global South Hackathon</dd>
          </div>
        </dl>
      </aside>

      <p class="cover-role">
        Ingeniera de datos<br />
        Economista<br />
        Organizadora de AI Safety
      </p>
    </div>

    <nav class="cover-index" aria-label="Contenido">
      <p class="cover-level cover-level-03">03 · Índice</p>
      <ol>
        <li><a :href="withBase(`${indexBase}#01-primeros-anos-y-educacion`)"><span>01</span> Primeros años y educación</a></li>
        <li><a :href="withBase(`${indexBase}#02-trayectoria-profesional`)"><span>02</span> Trayectoria profesional</a></li>
        <li><a :href="withBase(`${indexBase}#03-ea-upy-y-ai-safety-mexico`)"><span>03</span> EA UPY y AI Safety México</a></li>
        <li><a :href="withBase(`${indexBase}#04-publicaciones`)"><span>04</span> Publicaciones</a></li>
        <li><a :href="withBase(`${indexBase}#05-ensayos-y-escritos`)"><span>05</span> Ensayos y escritos</a></li>
        <li><a :href="withBase(`${indexBase}#06-reconocimientos`)"><span>06</span> Reconocimientos</a></li>
        <li><a :href="withBase(`${indexBase}#07-comunidad-y-voluntariado`)"><span>07</span> Comunidad y voluntariado</a></li>
        <li><a :href="withBase(`${indexBase}#08-posiciones-publicas`)"><span>08</span> Posiciones públicas</a></li>
        <li><a :href="withBase(`${indexBase}#09-apariciones-en-medios`)"><span>09</span> Apariciones en medios</a></li>
        <li><a :href="withBase(`${indexBase}#10-vida-personal`)"><span>10</span> Vida personal</a></li>
        <li><a :href="withBase(`${indexBase}#11-referencias`)"><span>11</span> Referencias</a></li>
        <li><a :href="withBase(`${indexBase}#12-enlaces-externos`)"><span>12</span> Enlaces externos</a></li>
      </ol>
    </nav>
  </section>
</template>
