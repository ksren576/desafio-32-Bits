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
        <Tabla>
          <thead>
            <Fila>
              <th>Código</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
            </Fila>
          </thead>
          <tbody>
            <Fila v-for="(item, key) of juegosEncontrados" :key="'fila-lista-'+key" :color="item.color">
              <td>{{ item.codigo }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.stock }}</td>
              <td>{{ item.precio }}</td>
            </Fila>
          </tbody>
        </Tabla>
      </div>
    </div>
  </div>
</template>

<script>
import Tabla from "../components/tabla/Tabla";
import Fila from "../components/tabla/Fila";
import { mapState } from "vuex";

export default {
  name: "Busquedas",
  data() {
    return {
      inputBusqueda: "",
    };
  },
  components: {
    Tabla,
    Fila,
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
    }
  }),
};
</script>