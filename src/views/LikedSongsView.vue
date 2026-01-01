<script setup>
import { computed } from 'vue'
import SongRow from '../components/SongRow.vue'
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';
import { useUserStore } from '../stores/user'
import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const songStore = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(songStore)

const likedSongs = computed(() => userStore.likedSongs)

const playFunc = () => {
  if (currentTrack.value && likedSongs.value.some(s => s.id === currentTrack.value.id)) {
    songStore.playOrPauseThisSong({ name: 'Liked Songs', albumCover: '/images/albumCovers/LikedSongs.png' }, currentTrack.value)
    return
  }
  if (likedSongs.value.length > 0) {
    songStore.loadSong({ name: 'Liked Songs', albumCover: '/images/albumCovers/LikedSongs.png' }, likedSongs.value[0])
  }
}
</script>

<template>
  <div class="p-8 overflow-x-hidden">
    <div class="flex items-center w-full relative h-full mb-6">
      <img width="140" src="/images/albumCovers/LikedSongs.png" class="rounded" alt="Liked Songs">

      <div class="w-full ml-5">
        <div class="text-gray-300 text-[13px] mb-2">Playlist</div>
        <div style="font-size: 33px;" class="text-white font-bold mb-2">
          Liked Songs
        </div>
        <div class="text-gray-300 text-[13px]">
          {{ likedSongs.length }} songs
        </div>

        <div class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5">
          <button class="p-1 rounded-full bg-white" @click="playFunc()">
            <Play v-if="!isPlaying" fillColor="#181818" :size="25"/>
            <Pause v-else fillColor="#181818" :size="25"/>
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between px-5 pt-2">
      <div class="flex items-center justify-between text-gray-400">
        <div class="mr-7">#</div>
        <div class="text-sm">Title</div>
      </div>
      <div><ClockTimeThreeOutline fillColor="#FFFFFF" :size="18"/></div>
    </div>
    <div class="border-b border-b-[#2A2A2A] mt-2"></div>
    <div class="mb-4"></div>
    <ul class="w-full" v-if="likedSongs.length > 0">
      <li v-for="track, index in likedSongs" :key="track.id">
        <SongRow :artist="{ name: 'Liked Songs' }" :track="track" :index="index + 1"/>
      </li>
    </ul>
    <div v-else class="text-gray-400 text-center mt-10">
      No liked songs yet. Like some songs to see them here!
    </div>
  </div>
</template>