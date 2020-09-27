<template>
  <div class="home">
     <v-btn color="success" @click="shuffle(pokemones)">Revolver</v-btn>   
    <Memorice :collection="collection" ></Memorice>      
  </div>
</template>


<script>
// @ is an alias to /sr
import Memorice from '../components/Memorice'

import { mapState, mapActions } from "vuex";

export default {
   name: 'Home',
    components: {
    Memorice
  },
  data() {
    return {
      collection: []
    }
  },

  computed: {
    ...mapState (['pokemones']),
    
  },
  methods: {
    ...mapActions(["getPokes"]),
    shuffle(array){
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      console.log(array)
      this.collection = array
      return this.collection;
    }
  },
  created() {
    this.getPokes()   
  },
}
</script>
