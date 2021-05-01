<template>
  <Tabla>
    <thead>
      <Fila>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th v-if="puedeVender">Acciones</th>
      </Fila>
    </thead>
    <tbody>
      <Fila
        v-for="(item, key) of lista"
        :key="'fila-lista-' + key"
        :color="item.color"
      >
        <td>{{ item.codigo }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.stock }}</td>
        <td>{{ item.precio | toCurrency }}</td>
        <td v-if="puedeVender">
          <button @click="realizarVenta(item.codigo)" class="btn btn-info btn-dark btn-sm" :disabled="cargando">Vender</button>
        </td>
      </Fila>
    </tbody>
  </Tabla>
</template>

<script>
import Tabla from "./tabla/Tabla";
import Fila from "./tabla/Fila";
import { mapActions } from "vuex";

export default {
  props: {
    lista: Array,
    puedeVender: {
      type: Boolean,
      default: false,
    },
  },
  data() {
      return {
          cargando: false
      }
  },
  methods: {
    ...mapActions(["venderJuego", "registrarVenta"]),
    async realizarVenta(codigo) {
      this.cargando = true;
      await this.venderJuego(codigo);
      await this.registrarVenta(codigo);
      alert('Venta procesada');
      this.cargando = false;
    },
  },
  components: {
    Tabla,
    Fila,
  },
};
</script>