<template>
  <div class="background">
    <img class="b-img" style="width: 100%" src="../assets/image-hero-desktop.jpg" alt="">
    <nav>
      <img src="../assets/logo.svg" alt="" />
      <div class="nav-info">
        <p>About</p>
        <p>Discover</p>
        <p>Get Started</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  /* height: 200px; */
  /* background: url("../assets/image-hero-desktop.jpg") no-repeat center /contain; */
  margin: 0;
  position: relative;
}
nav {
  position: absolute;
  top: 36px;
  left: 0px;
  height: 40px;
  width: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-info {
  display: flex;
}
nav img {
  margin: 10px;
  cursor: pointer;
}
p {
  margin: 10px;
  color: white;
  cursor: pointer;
  font-weight: 500;
}
</style>