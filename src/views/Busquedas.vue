<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Filtrar por código"
          v-model="inputBusqueda"
        />
      </div>
      <div class="col-6 text-right">Juegos en lista: {{ juegosEnLista }}</div>
    </div>
    <div class="row">
      <div class="col">
        <TablaJuegos :lista="juegosEncontrados" />
      </div>
    </div>
  </div>
</template>

<script>
import TablaJuegos from "../components/TablaJuegos";
import { mapState } from "vuex";

export default {
  name: "Busquedas",
  components: {
    TablaJuegos,
  },
  data() {
    return {
      inputBusqueda: "",
    };
  },
  computed: mapState({
    juegosEncontrados(state) {
      const lista = state.listaJuegos;
      if (this.inputBusqueda) {
        return lista.filter((item) => item.codigo.includes(this.inputBusqueda));
      }
      return lista;
    },
    juegosEnLista(state) {
      return state.listaJuegos.length;
    },
  }),
};
</script>