<template>
  <Card class="card-2">
    <template #header> </template>
    <template #title>
      <div class="data">
        <section class="section-1 section">
          <h3>$89,914</h3>
          <p>of $100,000 backed</p>
        </section>
        <section class="section-2 section">
          <h3>$89,914</h3>
          <p>of $100,000 backed</p>
        </section>
        <section class="section-3 section">
          <h3>$89,914</h3>
          <p>of $100,000 backed</p>
        </section>
      </div>
    </template>
    <template #content>
      <ProgressBar class="bar" :value="value1" :showValue="false" />
    </template>
    <template #footer> </template>
  </Card>
</template>

<script>
import ProgressBar from "primevue/progressbar";
import Slider from "primevue/slider";
import { ref } from "vue";
export default {
  components: { Slider, ProgressBar },
  setup() {
    const value1 = ref(80);

    return { value1 };
  },
};
</script>

<style scoped>
.data{
    display: flex;
    justify-content: space-between;
    line-height: 5px;
}
.section-1, .section-2{
    border-right: 1px solid rgb(196, 196, 196);
    padding-right: 40px;
}
 p {
    font-weight: normal;
    font-size: 14px;
    color: hsl(0, 0%, 48%);
}
.card-2 {
    padding: 10px;
  width: 600px;
  height: 165px;
  margin-bottom: 50px;
  border-radius: 10px;
    font-family: 'Commissioner', sans-serif;
    color: black;
}
.bar {
  height: 10px;
  border-radius: 10px;
}
</style>