import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import LibraryView from "../views/LibraryView.vue";
import LoginView from "../views/LoginView.vue";
import LikedSongsView from "../views/LikedSongsView.vue";
import CreatePlaylistView from "../views/CreatePlaylistView.vue";
import ProfileView from "../views/ProfileView.vue";
import { useUserStore } from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/search",
      component: SearchView,
      meta: { requiresAuth: true },
    },
    {
      path: "/library",
      component: LibraryView,
      meta: { requiresAuth: true },
    },
    {
      path: "/liked-songs",
      component: LikedSongsView,
      meta: { requiresAuth: true },
    },
    {
      path: "/create-playlist",
      component: CreatePlaylistView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      component: ProfileView,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
