<template>
  <div class="head">
    <div class="hair">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="eye"></div>
    <div class="mouth"></div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default Vue.component('person-face', {
    props: {
      eyeColor: {
        type: String,
        default: '#f3f3f3'
      },
      hairColor: {
        type: String,
        default: '#f3f3f3'
      }
    },
    data: function() {
      return {
        eyeColors: {
          blue: 'blue'
        },
        hairColors: {
          blond: '#FAF0BE'
        }
      }
    }
  });
</script>

<style scoped>
  .eye,
  .mouth,
  .hair {
    position: absolute;
  }


  .head {
    position: relative;
    width: 200px;
    height: 200px;
    background: #eebb99;
    border-radius: 20px 20px 100% 100%;
    box-shadow: inset 0 40px 0 0 #3B3F4B;
  }

  .hair {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 10px;
    border-top-color: #3B3F4B;
  }

    .hair div {
      margin-right: -5px;
      border-top: 30px solid;
      border-top-color: inherit;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
    }

  .eye {
    top: 80px;
    left: 40px;
    width: 30px;
    height: 30px;
    background: #FFF;
    border-radius: 100%;
    border: 4px solid #3B3F4B;
  }

    .eye:before {
      position: absolute;
      content: '';
      top: -4px;
      left: 83px;
      width: 30px;
      height: 30px;
      background: inherit;
      border-radius: 100%;
      border: 4px solid #3B3F4B;
    }

  .mouth {
    top: 130px;
    left: 65px;
    width: 80px;
    height: 20px;
    border-radius: 100px;
    background: #3B3F4B;
  }
</style>
