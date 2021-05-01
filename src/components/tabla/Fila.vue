<template>
  <tr :class="cssClass">
    <slot />
  </tr>
</template>

<script>
export default {
  name: "Fila",
  props: {
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    cssClass() {
      const color = this.color;
      switch (color) {
          case 'red':
              return 'table-danger'
          case 'blue':
              return 'table-primary'
          case 'yellow':
              return 'table-warning'
          case 'green':
              return 'table-success'
          default:
              return ''
      }
    },
  },
};
</script>