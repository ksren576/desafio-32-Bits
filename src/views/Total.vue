<template>
  <div class="container">
    <div class="row">
      <div class="col-auto text-right">Total de ventas: {{ totalVentas | toCurrency }}</div>
    </div>
    <div class="row">
      <div class="col">
        <TablaVentas v-if="totalVentas > 0" :lista="ventas" />
        <p class="text-center" v-if="totalVentas === 0">No hay ventas registradas</p>
      </div>
    </div>
  </div>
</template>

<script>
import TablaVentas from "../components/TablaVentas";
import { mapState } from "vuex";

export default {
  name: "Total",
  components: {
    TablaVentas,
  },
  computed: mapState({
    ventas(state) {
      return state.ventas;
    },
    totalVentas(state) {
      return state.ventas.reduce((prev, item) => prev += item.precio, 0);
    }
  }),
};
</script>