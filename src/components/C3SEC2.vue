<template>
  <Card class="card-4">
    <template #title>
      <div class="title">
        <h4>Bamboo Stand</h4>
        <h4 style="color: hsl(176, 50%, 47%)">Pledge $25 or more</h4>
      </div>
    </template>
    <template #content>
      You get an ergonomic stand made of natural bamboo. You've helped us launch
      our promotional campaign, and you’ll be added to a special Backer member
      list.
    </template>
    <template #footer>
      <div class="footer">
        <div class="footer-1">
          <h1>101</h1>
          <p>left</p>
        </div>
        <Button label="Select Reward" class="p-button-rounded" />
      </div>
    </template>
  </Card>
</template>

<script>
export default {};
</script>

<style>
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