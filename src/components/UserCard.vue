<template>
  <v-card>
    <v-img :src="`https://i.pravatar.cc/150?u=${user.id}`" height="200" />
    <v-card-title>{{ user.name }}</v-card-title>
    <v-card-subtitle>{{ user.email }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('open-modal', user)">Ver más</v-btn>
    </v-card-actions>
  </v-card>
</template>