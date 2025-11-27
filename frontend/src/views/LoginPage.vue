<template>
  <div class="login-page">
    <h1>Login</h1>
    <button @click="login" class="login-button">Log In with Keycloak</button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    login() {
      this.$keycloak.login({
        redirectUri: window.location.origin + '/',
      })
    }
  }
}
</script>

<style scoped>
/* Renamed class to match the template and added centering styles */
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers items horizontally */
  justify-content: center; /* Centers items vertically (if the container has height) */
  text-align: center; /* Centers the <h1> text */
  min-height: 100vh; /* Ensures the container takes up the full viewport height */
  padding: 40px;
  margin-top: -300px;
}

.login-button {
  padding: 10px 20px;
  font-size: 1.1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.login-button:hover {
  background-color: #45a049;
}
</style>