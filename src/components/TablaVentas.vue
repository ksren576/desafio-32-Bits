<template>
  <Tabla>
    <thead>
      <Fila>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
      </Fila>
    </thead>
    <tbody>
      <Fila
        v-for="(item, key) of lista"
        :key="'fila-lista-venta-' + key"
      >
        <td>{{ item.codigo }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.precio | toCurrency }}</td>
      </Fila>
    </tbody>
  </Tabla>
</template>

<script>
import Tabla from "./tabla/Tabla";
import Fila from "./tabla/Fila";

export default {
  name: "TablaVentas",
  props: {
    lista: Array,
  },
  components: {
    Tabla,
    Fila,
  },
};
</script>