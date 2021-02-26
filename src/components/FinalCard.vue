<template>
  <Dialog
    v-model:visible="displayModal"
    :style="{ width: '50vw' }"
    :modal="true"
  >
  <template #header>

          <p>&nbsp;</p>

  </template>
  <div style="width: 100%; text-align: center;">
  <img src="../assets/icon-check.svg" alt="">
  </div>
  <h1 style="text-align: center;">Thanks for your support!</h1>
  <br>
    <h4 class="p-m-0" style="text-align: center;">
      Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.
    </h4>
    <template #footer>
        <div class="fbtn">
      <Button @click="gotit" label="Got it!" class="p-button-rounded" />
      </div>
    </template>
  </Dialog>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(props, context){
        const displayModal = ref(true)

        const gotit = () => {
            context.emit('got')
        }
        return { gotit, displayModal }
    }
};
</script>

<style scoped>
.fbtn{
    width: 100%;
    text-align: center;
}
</style>