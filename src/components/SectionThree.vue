<template>
  <Card class="card-3">
    <template #content>
        <section class="c3-sec-1">
            <h1>About this project</h1>
            <br>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <br>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
  to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        </section>
        <section class="c3-sec-2">
            <C3SEC2/>
        </section>
        <section class="c3-sec-3">
            <C3SEC3/>
        </section>
        <section class="c3-sec-4">
            <C3SEC4/>
        </section>
    </template>
  </Card>
</template>

<script>
import C3SEC2 from './C3SEC2.vue';
import C3SEC3 from './C3SEC3.vue';
import C3SEC4 from './C3SEC4.vue';
export default {
  components: { C3SEC2, C3SEC3, C3SEC4 }
}
</script>

<style scoped>
.card-3 {
  padding: 10px;
  width: 600px;
  /* height: 165px; */
  margin-bottom: 50px;
  border-radius: 10px;
  font-family: "Commissioner", sans-serif;
  color: black;
}
p{
    color: hsl(0, 0%, 48%);
}
</style>