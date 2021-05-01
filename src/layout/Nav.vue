<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">32-bits</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" exact-active-class="active" to="/">Inicio</router-link>
          <router-link class="nav-link" exact-active-class="active" to="/busquedas">Búsquedas</router-link>
          <router-link class="nav-link" exact-active-class="active" to="/ventas">Ventas</router-link>
          <router-link class="nav-link" exact-active-class="active" to="/total">Total</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
