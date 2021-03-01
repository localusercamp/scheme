<template>
  <div class="custom-header">
    <div class="navlink">
      <a href="/back-end">Backend</a>
    </div>
    <div class="navlink">
      <a href="/cli">CLI</a>
    </div>
    <div class="navlink">
      <a href="/front-end">Frontend</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      show: true,
    }
  },
}
</script>

<style>
  .custom-header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid lightgrey;
  }
  .navlink {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    display: inline-block;
    border-top: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    height: 49px;
    padding: 8px 20px 0 20px;
  }
  .navlink > a {
    text-decoration: none;
    color: black;
  }
</style>
