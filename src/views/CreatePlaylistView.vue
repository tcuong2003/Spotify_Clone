<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

let playlistName = ref('')

const createPlaylist = () => {
  if (playlistName.value.trim()) {
    userStore.createPlaylist(playlistName.value.trim())
    router.push('/playlists')
  }
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-white text-2xl font-bold mb-6">Create New Playlist</h1>
    <div class="max-w-md">
      <label class="block text-white mb-2">Playlist Name</label>
      <input
        v-model="playlistName"
        type="text"
        class="w-full p-3 bg-[#333] text-white rounded mb-4"
        placeholder="Enter playlist name"
      />
      <button
        @click="createPlaylist"
        class="bg-green-500 text-white px-6 py-2 rounded font-semibold hover:bg-green-600"
      >
        Create Playlist
      </button>
    </div>
  </div>
</template>