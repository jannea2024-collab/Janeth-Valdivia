<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  indexBase: { type: String, default: '' }
})

const sections = [
  ['01-primeros-anos-y-educacion', '01', 'Primeros años y educación'],
  ['02-trayectoria-profesional', '02', 'Trayectoria profesional'],
  ['03-ea-upy-y-ai-safety-mexico', '03', 'EA UPY y AI Safety México'],
  ['04-publicaciones', '04', 'Publicaciones'],
  ['05-ensayos-y-escritos', '05', 'Ensayos y escritos'],
  ['06-reconocimientos', '06', 'Reconocimientos'],
  ['07-comunidad-y-voluntariado', '07', 'Comunidad y voluntariado'],
  ['08-posiciones-publicas', '08', 'Posiciones públicas'],
  ['09-apariciones-en-medios', '09', 'Apariciones en medios'],
  ['10-vida-personal', '10', 'Vida personal'],
  ['11-referencias', '11', 'Referencias'],
  ['12-enlaces-externos', '12', 'Enlaces externos']
]

function sectionHref(id) {
  return withBase(props.indexBase + '#' + id)
}
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
      <figure class="cover-photo">
        <h1 class="cover-photo-name">Janeth Valdivia</h1>
        <img :src="withBase('/janeth.png')" alt="Janeth Valdivia Pérez" width="1200" height="1600" />
      </figure>

      <aside class="cover-ficha">
        <p class="cover-level">Ficha</p>
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
        <p class="cover-role">
          Ingeniera de datos<br />
          Economista<br />
          Organizadora de AI Safety
        </p>
      </aside>
    </div>

    <nav class="cover-index" aria-label="Contenido">
      <p class="cover-level">Índice</p>
      <ol>
        <li v-for="item in sections" :key="item[0]">
          <a :href="sectionHref(item[0])"><span>{{ item[1] }}</span> {{ item[2] }}</a>
        </li>
      </ol>
    </nav>
  </section>
</template>
