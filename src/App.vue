<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

import { useSongStore } from "./stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const { isPlaying, currentTrack } = storeToRefs(useSong);

onMounted(() => {
  isPlaying.value = false;
});

let openMenu = ref(false);
</script>

<template>
  <div>
    <div
      id="TopNav"
      class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between"
    >
      <div class="flex items-center ml-6">
        <button
          type="button"
          class="rounded-full bg-black p-[1px] cursor-pointer"
        >
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button
          type="button"
          class="rounded-full bg-black p-[1px] hover:bg-[#] ml-4 cursor-pointer"
        >
          <ChevronRight fillColor="#FFFFFF" :size="30" />
        </button>
      </div>

      <button
        @click="openMenu = !openMenu"
        :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <img
            class="rounded-full"
            width="27"
            src="data:image/jpeg;base64,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"
          />
          <div class="text-white text-[14px] ml-1.5 font-semibold">
            Tran Cuong
          </div>
          <ChevronDown
            v-if="!openMenu"
            @click="openMenu = true"
            fillColor="#FFFFFF"
            :size="25"
          />
          <ChevronUp
            v-else
            @click="openMenu = false"
            fillColor="#FFFFFF"
            :size="25"
          />
        </div>
      </button>

      <span
        v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">
            Profile
          </li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>
    </div>

    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <RouterLink to="/">
        <img width="125" src="/images/icons/spotify-logo.png" />
      </RouterLink>
      <div class="my-8"></div>
      <ul>
        <RouterLink to="/">
          <MenuItem
            class="ml-[1px]"
            :iconSize="23"
            name="Home"
            iconString="home"
            pageUrl="/"
          />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem
            class="ml-[1px]"
            :iconSize="24"
            name="Search"
            iconString="search"
            pageUrl="/search"
          />
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem
            class="ml-[2px]"
            :iconSize="23"
            name="Your Library"
            iconString="library"
            pageUrl="/library"
          />
        </RouterLink>
        <div class="py-3.5"></div>
        <MenuItem
          :iconSize="24"
          name="Create Playlist"
          iconString="playlist"
          pageUrl="/playlist"
        />
        <MenuItem
          class="-ml-[1px]"
          :iconSize="27"
          name="Liked Songs"
          iconString="liked"
          pageUrl="/liked"
        />
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li
          class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white"
        >
          My Playlist #1
        </li>
        <li
          class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white"
        >
          My Playlist #2
        </li>
        <li
          class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white"
        >
          My Playlist #3
        </li>
        <li
          class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white"
        >
          My Playlist #4
        </li>
      </ul>
    </div>
  </div>

  <div
    class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black"
  >
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>

  <MusicPlayer v-if="currentTrack" />
</template>
