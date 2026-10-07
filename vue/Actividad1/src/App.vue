<script setup>
import { ref } from 'vue'
import Cabecera from './components/Cabecera.vue'
import Inicio from './components/Inicio.vue'
import Modelos from './components/Modelos.vue'
import Pie from './components/pie.vue'
import Catalogo from './components/Catalogo.vue'

const mostrarCatalogo = ref(false)
</script>

<template>
  <Cabecera />
  <Cabecera @abrir-modelos="mostrarCatalogo = true" />
  <main>
    <Inicio />
    <Inicio  @abrir-modelos="mostrarCatalogo = true"/>
    <Modelos />
  </main>
  <Pie />

  <Catalogo :visible="mostrarCatalogo" @cerrar="mostrarCatalogo = false" />
</template>
