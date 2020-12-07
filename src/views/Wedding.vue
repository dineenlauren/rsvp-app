<template>
  <div class="wedding">
    <!-- PAGE TITLE -->
    <header>
      <PageHeader :subTitle="subTitle" :title="title" />
    </header>

    <b-container class="mb-5">
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
    </b-container>
  </div>
</template>

<script>
  import PageHeader from '../components/PageHeader';

  export default {
    name: 'Wedding',
    components: { PageHeader },
    data() {
      return {
        subTitle: 'Wedding',
        title: 'Timeline',
      };
    },
  };
</script>
