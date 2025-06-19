<template>
  <v-dialog 
    :model-value="modelValue" 
    @update:model-value="$emit('update:modelValue', $event)"
    max-width="500"
  >
    <v-card v-if="user">
      <v-card-title>{{ user.name || 'Nombre no disponible' }}</v-card-title>
      <v-card-text>
        <p><strong>Dirección:</strong> {{ user.address?.street || 'N/A' }}, {{ user.address?.city || 'N/A' }}</p>
        <p><strong>Teléfono:</strong> {{ user.phone || 'N/A' }}</p>
        <p><strong>Compañía:</strong> {{ user.company?.name || 'N/A' }}</p>
        <p v-if="user.website">
          <strong>Sitio web:</strong> 
          <a :href="`https://${user.website}`" target="_blank">{{ user.website }}</a>
        </p>
        <p v-else><strong>Sitio web:</strong> N/A</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="hsla(160, 100%, 37%, 1)" @click="$emit('update:modelValue', false)">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  user: Object
});

defineEmits(['update:modelValue']);
</script>