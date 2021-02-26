<template>
  <Card class="card-4 p-disabled">
    <template #title>
      <div class="title">
        <h4>Mahogany Special Edition</h4>
        <h4 style="color: hsl(176, 50%, 47%)">Pledge $200 or more</h4>
      </div>
    </template>
    <template #content>
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
  to our Backer member list. Shipping is included.
    </template>
    <template #footer>
      <div class="footer">
        <div class="footer-1">
          <h1>0</h1>
          <p>left</p>
        </div>
        <Button label="Out of Stock" class="p-button-rounded" />
      </div>
    </template>
  </Card>
</template>

<script>
export default {};
</script>

<style scoped>
.card-4{
    border-radius: 10px !important;
    margin-bottom: 50px;
}
.title {
  display: flex;
  justify-content: space-between;
}
h4 {
  font-size: 18px;
}
.footer h1 {
  display: inline;
  font-size: 25px;
  float: left;
}
.footer p{
    float: right;
    margin: 5px;
    color: hsl(0, 0%, 48%);
}
.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-1{
    display: flex;
    align-items: center;
}

.p-button-rounded {
  background-color:hsl(0, 0%, 48%) !important;
  border-color: rgb(255, 255, 255) !important;
  width: 180px;
  height: 50px;
  font-weight: 700 !important;
}
button:hover {
  background-color: #157a74 !important;
}
</style>