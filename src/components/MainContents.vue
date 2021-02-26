<template>
  <div class="main">
    <section class="section-1">
      <Card class="card">
        <template #header>
          <div class="logo" style="width: 100%; text-align: center">
            <img
              style="text-align: center"
              alt="user header"
              src="../assets/logo-mastercraft.svg"
            />
          </div>
        </template>
        <template #title>
          <h3 style="text-align: center">Mastercraft Bamboo Monitor Riser</h3>
        </template>
        <template #subtitle>
          <h5 style="text-align: center">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </h5>
        </template>
        <template #content>
          <div class="btn">
            <dialog-box/>
            <Button
              icon="pi pi-bookmark"
              label="Bookmark"
              class="btn-2 p-button-rounded"
            />
          </div>
        </template>
        <template #footer> </template>
      </Card>
    </section>
    <section class="section-2">
      <section-two />
    </section>
    <section class="section-3">
      <section-three />
    </section>
  </div>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import SectionTwo from "./SectionTwo.vue";
import SectionThree from "./SectionThree.vue";
import DialogBox from "./DialogBox.vue";
import FinalCard from "./FinalCard.vue"
import { defineEmit, ref } from "vue";
export default {
  components: { Card, Button, SectionTwo, SectionThree, DialogBox,FinalCard },
  setup(props, context) {
    const showDialog = ref(false)
    const show = ref(false)

    const handleClick = () => {
      showDialog.value = true
    };
    const offf = () => {
      console.log('sdf')
    }
    return {handleClick, showDialog, offf}
  },
};
</script>

<style scoped>
.logo img {
  margin-top: -40px;
}
.card {
  border-radius: 10px;
  height: 300px;
  margin-bottom: 50px;
  font-family: "Commissioner", sans-serif;
  color: black;
}
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.section-1 {
  margin-top: -100px;
  width: 600px;
}
.section-1 img {
  align-self: center;
}
img {
  height: 80px !important;
  width: 80px !important;
}
button {
  background-color: #3cb4ab;
  border-color: #3cb4ab !important;
  width: 180px;
  height: 50px;
  font-weight: 700;
}
button:hover {
  background-color: #157a74 !important;
}
.btn {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.btn-2 {
  background-color: #f4f4f4 !important;
  color: #495057;
}
.btn-2:hover {
  background-color: #f4f4f4 !important;
  color: #157a74 !important;
}
</style>