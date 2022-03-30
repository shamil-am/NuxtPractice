<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="d-flex justify-content-between w-100">
      <div class="left">
        <nuxt-link to="/" class="navbar-brand"> Home </nuxt-link>
        <nuxt-link to="/posts" class="navbar-brand">Posts</nuxt-link>
      </div>
      <div class="admin">
        <nuxt-link to="/admin">
          <button class="btn btn-outline-success">Admin</button>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>