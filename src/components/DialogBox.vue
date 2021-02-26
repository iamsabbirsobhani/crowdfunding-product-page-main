<template>
  <div class="dialog">
    <Button
      label="Back this project"
      class="p-button-rounded"
      @click="openResponsive"
    />
    <FinalCard @got="close" v-if="show"/>
    <Dialog

      header="Back this project"
      v-model:visible="displayResponsive"
      :breakpoints="{ '960px': '75vw' }"
      :style="{ width: '50vw' }"
      :modal="true"
      class="dbox"
    >
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
      </p>
      <section class="d1">
       <DOne @cont="off"/>
      </section>
      <section class="d2">
      </section>
      <section class="d3">

      </section>
      <section class="d4">

      </section>
      <template #footer>
      </template>
    </Dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import DOne from './DOne.vue';
import FinalCard from './FinalCard.vue'

export default {
  components: { DOne, FinalCard },
  setup() {
    const displayResponsive = ref(false);
    const show = ref(false);

    const openResponsive = () => {
      displayResponsive.value = true;
        show.value = false
    };

    const off = () => {
        displayResponsive.value = false
        show.value = true
    }

    const close = () => {
        show.value = false

    }

    return { displayResponsive, openResponsive, off, show, close };
  },
};
</script>

<style scoped>
</style>