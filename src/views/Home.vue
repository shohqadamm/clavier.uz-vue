<template>

  <div class="layout layout--3">
 <div class="container">
   <themes />
    <rooms />
    <latest-actions />
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Themes from '../components/Themes.vue'
import Rooms from '../components/Rooms.vue'
import LatestActions from '../components/LatestActions.vue'

export default {
  name: "Home",
  components: {
    Themes,
    Rooms,
    LatestActions,
  },
};
</script>


<style scoped>
.home>.container{
display: flex;
justify-content: space-between;
align-items: flex-start;
}
</style>
