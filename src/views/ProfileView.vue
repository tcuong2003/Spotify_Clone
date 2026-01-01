<script setup>
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-white text-2xl font-bold mb-6">Profile</h1>
    <div class="bg-[#121212] p-6 rounded-lg max-w-md">
      <div class="flex items-center mb-4">
        <img src="https://picsum.photos/id/1/60/60" class="rounded-full mr-4" alt="Profile">
        <div>
          <h2 class="text-white text-xl">{{ userStore.username }}</h2>
          <p class="text-gray-400">Premium User</p>
        </div>
      </div>
      <div class="text-gray-300 mb-4">
        <p><strong>Liked Songs:</strong> {{ userStore.likedSongs.length }}</p>
        <p><strong>Playlists:</strong> {{ userStore.playlists.length }}</p>
      </div>
      <button
        @click="logout"
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  </div>
</template>