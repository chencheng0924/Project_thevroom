<template>
  <div class="text-center">
    <v-btn
      rounded
      color="#F34841"
      dark
      class="submitbutton"
    >
      {{ buttonSubmit }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ['buttonSubmit']
}
</script>

<style lang="scss">
.submitbutton{
    width: 150px;
}
</style>
