import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listaJuegos: [{
      codigo: "0001",
      nombre: "Sekiro",
      stock: 100,
      precio: 30000,
      color: "red",
      destacado: true
    },{
      codigo: "0002",
      nombre: "Fifa 21",
      stock: 100,
      precio: 25000,
      color: "blue",
      destacado: false
    },{
      codigo: "0003",
      nombre: "Gears of War 4",
      stock: 100,
      precio: 15000,
      color: "green",
      destacado: true
    },{
      codigo: "0004",
      nombre: "Mario Tennis Aces",
      stock: 100,
      precio: 35000,
      color: "yellow",
      destacado: false
    },{
      codigo: "0005",
      nombre: "Bloodborne",
      stock: 100,
      precio: 10000,
      color: "blue",
      destacado: false
    },{
      codigo: "0006",
      nombre: "Forza Horizon 4",
      stock: 100,
      precio: 20000,
      color: "red",
      destacado: true
    }],
    ventas: []
  },
  getters: {},
  mutations: {
    vender(state, codigo) {
      state.listaJuegos = state.listaJuegos.map((juego) => {
        if (juego.codigo === codigo) {
          juego.stock -= 1;
          return juego;
        }
        return juego;
      })
    },
    agregarVenta(state, venta) {
      state.ventas = [
        ...state.ventas,
        venta,
      ];
    }
  },
  actions: {
    async venderJuego(context, codigo) {
      return new Promise((res) => {
        setTimeout(() => {
          context.commit('vender', codigo);
          res();
        }, 2000);
      });
    },
    async registrarVenta(context, codigo) {
      return new Promise((res) => {
        setTimeout(() => {
          const juego = context.state.listaJuegos.find((item) => item.codigo === codigo);
          context.commit('agregarVenta', {
            codigo: juego.codigo,
            nombre: juego.nombre,
            precio: juego.precio
          });
          res();
        }, 1000);
      });
    }
  }
});

export default store;
