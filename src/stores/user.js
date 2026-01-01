import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    username: "",
    password: "",
    likedSongs: [],
    playlists: [],
  }),
  actions: {
    login(username, password) {
      // Simple check for demo
      if (username === "test" && password === "test") {
        this.isLoggedIn = true;
        this.username = username;
        this.password = password;
        return true;
      }
      return false;
    },
    logout() {
      this.isLoggedIn = false;
      this.username = "";
      this.password = "";
    },
    toggleLikeSong(song) {
      const index = this.likedSongs.findIndex((s) => s.id === song.id);
      if (index > -1) {
        this.likedSongs.splice(index, 1);
      } else {
        this.likedSongs.push(song);
      }
    },
    createPlaylist(name) {
      const playlist = {
        id: Date.now(),
        name,
        songs: [],
      };
      this.playlists.push(playlist);
      return playlist;
    },
    addSongToPlaylist(playlistId, song) {
      const playlist = this.playlists.find((p) => p.id === playlistId);
      if (playlist && !playlist.songs.find((s) => s.id === song.id)) {
        playlist.songs.push(song);
      }
    },
  },
  persist: true,
});
