<template>
  <Card class="card-4" :class="{ ch: active }">
    <template #title>
      <div class="title">
        <RadioButton @click="radio"/>
        <h4>Pledge with no reward</h4>
      </div>
    </template>
    <template #content>
      <div>
        <p>
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
        <div v-if="active" id="divider"></div>
      </div>
    </template>
    <template #footer>
      <div class="footer"  v-if="active">
        <InputNumber :min="26" id="currency-us" class="inputnumber" v-model="value" mode="currency" currency="USD" locale="en-US" />
        <Button @click="cont" label="Continue"  class="p-button-rounded" />
      </div>
    </template>
  </Card>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(props, context){
        const active = ref(null)
        const value = ref(26)

        const radio = () => {
            active.value = true
        }
        const cont = () => {
            context.emit('cont')
        }
        return { radio, active, cont, value }
    }
};
</script>

<style scoped>
.inputnumber{
    margin: 10px;
    height: 45px;
}
#divider{
    width: 100%;
    border: .01px solid rgb(216, 216, 216);
}

.card-4 {
  border-radius: 10px !important;
  margin-bottom: 50px;
  height: 185px;
}
.ch{
            height: 300px;
}
.title {
  display: flex;
  justify-content:right;
  align-items: center;
}
h4 {
  font-size: 18px;
  margin: 13px;
}
.footer h1 {
  display: inline;
  font-size: 25px;
  float: left;
}
.footer p {
  float: right;
  margin: 5px;
  color: hsl(0, 0%, 48%);
}
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer-1 {
  display: flex;
  align-items: center;
}

.p-button-rounded {
  background-color: #3cb4ab !important;
  border-color: #3cb4ab !important;
  width: 180px;
  height: 50px;
  font-weight: 700 !important;
}
button:hover {
  background-color: #157a74 !important;
}
</style>