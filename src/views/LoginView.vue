<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

let username = ref('test')
let password = ref('test')
let error = ref('')

const login = () => {
  if (userStore.login(username.value, password.value)) {
    router.push('/')
  } else {
    error.value = 'Invalid credentials'
  }
}
</script>

<template>
  <div class="min-h-screen bg-black flex items-center justify-center">
    <div class="bg-[#121212] p-8 rounded-lg w-96">
      <h1 class="text-white text-2xl font-bold mb-6 text-center">Spotify Clone</h1>
      <div class="mb-4">
        <label class="block text-white mb-2">Username</label>
        <input
          v-model="username"
          type="text"
          class="w-full p-3 bg-[#333] text-white rounded"
          placeholder="Enter username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-white mb-2">Password</label>
        <input
          v-model="password"
          type="password"
          class="w-full p-3 bg-[#333] text-white rounded"
          placeholder="Enter password"
        />
      </div>
      <button
        @click="login"
        class="w-full bg-green-500 text-white p-3 rounded font-semibold hover:bg-green-600"
      >
        Log In
      </button>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
      <p class="text-gray-400 mt-4 text-sm">
        Demo credentials: username: test, password: test
      </p>
    </div>
  </div>
</template>