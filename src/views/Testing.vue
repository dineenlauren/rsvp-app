<template>
  <div class="testing">
    <!-- PAGE TITLE -->
    <div class="container-fluid title-container ">
      <h1 class="title">Wedding</h1>
      <p class="subtitle t-end">FAQs</p>
    </div>
    <!-- DETAILS SECTION -->
    <div class="container t-center details-container">
      <b-row cols="1" cols-lg="2">
        <b-col class="card">
          <p class="subheading">Accomodations</p>
          <p>[Paragraph]</p>
        </b-col>
        <b-col class="card">
          <p class="subheading">Transportation</p>
          <p>[Paragraph]</p>
        </b-col>
        <b-col class="card">
          <p class="subheading">Schedule</p>
          <p>[Paragraph]</p>
        </b-col>
        <b-col class="card">
          <p class="subheading">Food &amp; Drink</p>
          <p>[Paragraph]</p>
        </b-col>
        <b-col class="card">
          <p class="subheading">Schedule</p>
          <p>[Paragraph]</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Testing',
  };
</script>

<style scoped>
  .container {
    padding: 2rem;
  }
  .title-container {
    background-color: #d9857d;
    color: white;
    padding: 1rem;
  }
  .details-container {
    color: rgb(110, 109, 109);
  }

  .subheading {
    color: #d9857d;
  }

  .card {
    margin: 0.3rem 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.4rem;
      margin: auto;
      width: 60%;
    }
    .title {
      font-size: 1.4rem;
      margin: auto;
      width: 60%;
    }
    .title-container {
      padding: 1rem;
    }
  }
</style>
