<template>
  <div class="header container">
    <b-row class="justify-content-md-center">
      <b-col lg="7">
        <p class="subtitle t-align-end">{{ subTitle }}</p>
        <h1 class="title">{{ title }}</h1>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader',
    props: {
      title: String,
      subTitle: String,
    },
  };
</script>
