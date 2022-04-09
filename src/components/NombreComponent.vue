<template>
  <v-row>
    <v-col>
     
      <nombre-card color="red" title="problèmes signalés" />
    </v-col>
    <v-col>
     
      <nombre-card color="green" icon="mdi-check"  title="problèmes résolus" />

    </v-col>
    <v-col>
      
      <nombre-card color="yellow darken-3" icon="mdi-handshake" title="partenaire forages" />

    </v-col>
    <v-col>
      
      <nombre-card color="indigo" icon="mdi-handshake" title="partenaire distribution" />

    </v-col>
  </v-row>
</template>

<script>
import NombreCard from './NombreCard.vue'
export default {
  components: { NombreCard },

}
</script>

<style>

</style>