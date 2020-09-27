<template>
  <div class="memorice">
    <v-container>    
      <v-row>
        <v-col v-for="(poke, index) in collection" :key="index" cols="4" >
          <v-card class="mx-auto" max-width="344">
            <v-img :src="poke.sprites.front_default" height="200px"></v-img>     
          </v-card>          
        </v-col>
      </v-row> 
    </v-container>     
  </div>
</template>
<script>
export default {
  name: 'Memorice',
  props: {//recibir!!!
   collection: Array
  },

}
</script>