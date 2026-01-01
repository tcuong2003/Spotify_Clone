# 🎵 Spotify Clone – Vue 3 Project

A modern **Spotify clone** built with **Vue 3**, **Vite**, and **TailwindCSS**, featuring state management with **Pinia** and routing with **Vue Router**. Includes user authentication, playlist management, and liked songs functionality.

Live Demo: [https://spotify-clone-azure-seven.vercel.app/](https://spotify-clone-azure-seven.vercel.app/)

---

## 📌 Features

### 🖥️ User Features

- **Authentication**: Login/logout with demo credentials
- **Browse & Search**: Music tracks, albums, playlists, and genres
- **Audio Player**: Play/pause, skip forward/backward, volume control, progress bar
- **Playlists**: Create custom playlists, view user's playlists
- **Liked Songs**: Like/unlike songs, dedicated liked songs playlist
- **Profile**: View user information and statistics
- **Responsive UI**: Optimized for desktop and mobile devices
- **Dynamic Theming**: Unique colors for playlists using `uniqolor`

### 🔧 Technical Features

- State management with Pinia + persisted state
- Vue Router for multi-page navigation with route guards
- TailwindCSS for modern styling and responsive layout
- Material Design icons for consistent UI elements
- Docker containerization for easy deployment

---

## 🛠 Tech Stack

### **Frontend**

- **Vue 3** (Composition API)
- **Vite 4** (Fast build tool)
- **TailwindCSS 3** (Utility-first CSS framework)
- **Pinia** + **Pinia PersistedState** (State management)
- **Vue Router 4** (Client-side routing)
- **vue-material-design-icons** (Icon library)
- **uniqolor** (Dynamic color generation)

### **Development Tools**

- **Vite Plugin Vue** (Vue support for Vite)
- **PostCSS** + **Autoprefixer** (CSS processing)
- **Docker** (Containerization)

---

## 📦 Installation & Development

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/tcuong2003/Spotify_Clone.git
cd Spotify_Clone
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4️⃣ Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 5️⃣ Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t spotify-clone .
```

### Run Container

```bash
docker run -d -p 80:80 spotify-clone
```

Access the app at [http://localhost](http://localhost).

### Push to Docker Hub

```bash
docker tag spotify-clone tcuong2003/spotify_clone:latest
docker push tcuong2003/spotify_clone:latest
```

---

## 📝 Docker Notes

### 🔍 Multi-Stage Build

The Dockerfile uses a multi-stage build process:

- **Build Stage**: Uses Node.js to install dependencies and build the Vue app
- **Production Stage**: Uses Nginx Alpine to serve the static files

### 📊 Image Size Optimization

- Base images: `node:18-alpine` and `nginx:alpine` for minimal size
- Only production assets are copied to the final image
- No development dependencies in the final image

### 🔧 Environment Variables

The app uses Vite's environment variables. For production deployment, you can:

```bash
docker run -e VITE_API_URL=https://api.example.com -p 80:80 spotify-clone
```

### 🚀 Production Deployment

For production, consider:

- Using Docker Compose for multi-container setups
- Adding SSL/TLS termination
- Setting up reverse proxy (nginx, traefik)
- Configuring environment-specific variables

### 🐛 Troubleshooting

- **Port conflicts**: Change the host port: `docker run -p 8080:80 spotify-clone`
- **Build issues**: Clear Docker cache: `docker system prune -a`
- **Permission issues**: Ensure Docker daemon is running

---

## 🎯 Usage Guide

### Demo Credentials

- **Username**: `test`
- **Password**: `test`

### Navigation

- **Home**: Browse featured playlists and recommendations
- **Search**: Explore music by genres and categories
- **Library**: View your playlists and liked songs
- **Create Playlist**: Add new custom playlists
- **Liked Songs**: Access your favorite tracks
- **Profile**: View account information and logout

### Audio Controls

- Click play button on any track to start playback
- Use player controls: play/pause, previous/next, volume, seek
- Like songs by clicking the heart icon

---

## 📁 Project Structure

```
Spotify_Clone/
├── public/
│   ├── images/
│   │   ├── albumCovers/
│   │   └── icons/
│   └── songs/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CategorySelect.vue
│   │   ├── HomeCard.vue
│   │   ├── MenuItem.vue
│   │   ├── MusicPlayer.vue
│   │   ├── MusicPlayerVolume.vue
│   │   └── SongRow.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   ├── song.js
│   │   └── user.js
│   ├── views/
│   │   ├── CreatePlaylistView.vue
│   │   ├── HomeView.vue
│   │   ├── LibraryView.vue
│   │   ├── LikedSongsView.vue
│   │   ├── LoginView.vue
│   │   ├── ProfileView.vue
│   │   └── SearchView.vue
│   ├── App.vue
│   └── main.js
├── Dockerfile
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is for educational purposes only. All rights reserved to Spotify.

---

## 🙏 Acknowledgments

- Inspired by Spotify's design and functionality
- Built with Vue.js ecosystem
- Icons from Material Design Icons
- Sample music tracks for demonstration

---

## 📞 Contact

**Tran Cuong** - tcuong2003

Project Link: [https://github.com/tcuong2003/Spotify_Clone](https://github.com/tcuong2003/Spotify_Clone)
