<template>
  <div class="container">
    <div class="row">
      <div class="col-auto text-right">Juegos con stock: {{ juegosConStock }}</div>
    </div>
    <div class="row">
      <div class="col">
        <TablaJuegos :lista="listaJuegos" :puedeVender="true" />
      </div>
    </div>
  </div>
</template>

<script>
import TablaJuegos from "../components/TablaJuegos";
import { mapState } from "vuex";

export default {
  name: "Ventas",
  components: {
    TablaJuegos,
  },
  computed: mapState({
    listaJuegos(state) {
      const lista = state.listaJuegos;
      return lista.filter((item) => item.stock > 0);
    },
    juegosConStock(state) {
      const lista = state.listaJuegos;
      return lista.filter((item) => item.stock > 0).length;
    },
  }),
};
</script>