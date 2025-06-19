<template>
  <v-text-field
    v-model="localValue"
    label="Buscar usuarios"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    @update:modelValue="handleInput"
    class="dark-text-field"
  />
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue', 'search']);

const localValue = ref(props.modelValue || '');

const handleInput = (value) => {
  localValue.value = value;
  emit('update:modelValue', value);
  emit('search', value);
};
</script>

<style scoped>
.dark-text-field :deep(.v-field) {
  background-color: #181818 !important;
}

.dark-text-field :deep(.v-field__overlay) {
  background-color: #181818 !important;
}

.dark-text-field :deep(.v-field--focused),
.dark-text-field :deep(.v-field--active) {
  background-color: #181818 !important;
}

.dark-text-field :deep(.v-field__outline) {
  color: rgba(255, 255, 255, 0.2) !important;
}

.dark-text-field :deep(.v-field--focused .v-field__outline) {
  color: rgba(255, 255, 255, 0.4) !important;
}

.dark-text-field :deep(.v-label) {
  color: rgba(255, 255, 255, 0.6) !important;
}

.dark-text-field :deep(.v-field--focused .v-label) {
  color: rgba(255, 255, 255, 0.8) !important;
}

.dark-text-field :deep(.v-field__input) {
  color: white !important;
  background-color: #181818 !important;
  border: none
}
</style>

