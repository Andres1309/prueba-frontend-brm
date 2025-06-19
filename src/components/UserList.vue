<template>
  <v-container>
    <SearchBar v-model="searchQuery" @search="handleSearch" />

    <v-row v-if="loading" justify="center">
      <v-col cols="auto">
        <v-progress-circular indeterminate color="primary" size="64"  />
      </v-col>
    </v-row>

    <v-card v-else>
      <v-table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>
              <v-avatar size="40">
                <v-img :src="user.avatar || 'https://cdn.vuetifyjs.com/images/john.png'" alt="Avatar" />
              </v-avatar>
            </td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <v-btn class="custom-action-btn" color="hsla(160, 100%, 37%, 1)" size="small" @click="openModal(user)">
                Ver más
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>

      <v-alert v-if="filteredUsers.length === 0" type="info" class="mt-4">
        No se encontraron usuarios
      </v-alert>
    </v-card>

    <UserModal v-model="isModalOpen" :user="selectedUser" />
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { fetchUsers } from '@/services/api.js';
import UserModal from './UserModal.vue';
import SearchBar from './SearchBar.vue';

const users = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const selectedUser = ref(null);
const isModalOpen = ref(false);

onMounted(async () => {
  try {
    const data = await fetchUsers();
    users.value = Array.isArray(data) ? [...data] : [];
  } catch (error) {
    console.error('Error fetching users:', error);
    users.value = [];
  } finally {
    loading.value = false;
  }
});

const filteredUsers = computed(() =>
  users.value.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const openModal = (user) => {
  selectedUser.value = user;
  isModalOpen.value = true;
};

const handleSearch = (query) => {
  searchQuery.value = query;
};
</script>

<style scoped>
.v-table {
  width: 100%;
}
</style>

<style>
.custom-action-btn {
  background-color: hsla(160, 100%, 37%, 1) !important;
  color: white !important;
  box-shadow: none !important;
  border-radius: 4px !important;
  /* transition: background-color 0.2s ease; */
}

/* Quita el overlay del hover (este es el que te está molestando) */
.custom-action-btn::after {
  color: black !important;
  opacity: 0
}

/* Hover manual */
.custom-action-btn:hover {
  color: transparent !important;
}
</style>