<template>


    <v-col>
      <v-card>
        <v-img v-bind:src="image" class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
          <v-card-title v-text='title'></v-card-title>
        </v-img>
      <v-card-text>
        <p>
         <slot></slot>
        </p>
      </v-card-text>
      
        <v-card-actions>
          <v-spacer></v-spacer>
      
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
            <span class="subheading">{{ Math.round(Math.random() * 100) }}</span>
          </v-btn>
      
          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
            <span class="subheading">{{ Math.round(Math.random() * 100) }}</span>
          </v-btn>
      
          <v-btn plain color="deep-purple" v-bind:href = "link" target = "_blank">
            <v-icon>mdi-share-variant</v-icon> Читать полностью
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

     </template>
<script>
export default{
    name : "NewsMain",
    props: ['image','link','title'],
}
</script>