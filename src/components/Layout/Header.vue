<template>
  <a-menu mode="horizontal" disabled>
    <a-menu-item @click="$router.push({name: 'home'})">
      <img src="../../assets/img/logo.png" alt="logo">
    </a-menu-item>
    <a-menu-item>Save</a-menu-item>
    <a-menu-item>Transfers</a-menu-item>
    <a-menu-item @click="$router.push({name: 'loan'})">Loans</a-menu-item>
    <a-menu-item class="nav-btns">
      <a-button>Get Started</a-button>
      <a-button @click="$router.push({name: 'login'})" class="login">Login</a-button>
    </a-menu-item>
  </a-menu>
</template>

<style lang="scss" scoped>
  .nav-btns {
    float: right;
    .ant-btn {
      margin-left: 12px;
    }
    .login {
      background: transparent !important;
      color: #EE8D5A;
      border: 1px solid #EE8D5A;
    }
  }
</style>