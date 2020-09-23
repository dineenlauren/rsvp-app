<template>
  <div class="wedding">
    <!-- PAGE TITLE -->
    <div class="container">
      <h1 class="title">Wedding</h1>
      <p class="subtitle t-align-end">Timeline</p>
    </div>

    <div class="timeline-container mb-5">
      <div class="row">
        <div class="col-md-6 offset-md-3 mb-4">
          <p>September 8th 2019</p>
          <p>Lairmont Manor at 4:00pm</p>
        </div>

        <div class="col-md-6 offset-md-3">
          <h2>The Ceremony</h2>
          <ul class="timeline">
            <li>Prelude</li>
            <li>Seating of the Mothers</li>
            <li>Processional</li>
            <li>Entrance of the Bride</li>
            <li>Welcome</li>
            <li>Exchanging of Vows</li>
            <li>Exchanging of Rings</li>
            <li>Presentation of Couple</li>
            <li>Recessional</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Wedding',
  };
</script>

<style scoped>
  .wedding {
    color: black;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
  }

  /* Timeline Verticle Line */
  ul.timeline:before {
    content: ' ';
    background: #000000;
    display: inline-block;
    position: absolute;
    left: 27px;
    width: 1px;
    height: 100%;
    z-index: 400;
  }

  /* List Items */
  ul.timeline > li {
    margin: 30px 0;
    padding-left: 10px;
  }

  /* Timeline Circles */
  ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #000000;
    margin: 8px 0;
    left: 20px;
    width: 15px;
    height: 15px;
    z-index: 400;
  }
  .container {
    padding: 2rem;
  }
  .title {
    border-bottom: 5px dotted black;
  }
  p {
    margin: 0;
  }
  .timeline-container {
    padding: 2rem;
  }
  /* .title-container {
    background-color: #d9857d;
    color: white;
    padding: 1rem;
  } */

  .subheading {
    color: #d9857d;
  }

  @media (min-width: 768px) {
    /* h1 {
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
    } */
  }
</style>
