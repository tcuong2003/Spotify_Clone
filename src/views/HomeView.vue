<script setup>
    import HomeCard from '../components/HomeCard.vue';
</script>

<template>
    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
            Made for you
        </button>

        <div class="py-1.5"></div>

        <div class="flex items-center">
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Discover Weekly" subTitle="Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you." />
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Release Radar" subTitle="Catch all the latest music from artists you follow, plus new singles picked for you." />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Daily Mix 1" subTitle="Made for you" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/67/300/300" title="Daily Mix 2" subTitle="Made for you" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/100/300/300" title="Daily Mix 3" subTitle="Made for you" />
        </div>
    </div>

    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
        Recently played
        </button>

        <div class="py-1.5"></div>

        <div class="flex items-center">
            <HomeCard image="https://picsum.photos/id/120/300/300" title="Liked Songs" subTitle="Playlist • 127 songs" />
            <HomeCard image="https://picsum.photos/id/110/300/300" title="Today's Top Hits" subTitle="Playlist • Spotify" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/221/300/300" title="RapCaviar" subTitle="Playlist • Spotify" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/232/300/300" title="Chill Hits" subTitle="Playlist • Spotify" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/187/300/300" title="Rock Classics" subTitle="Playlist • Spotify" />
        </div>
    </div>

    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
        Recommended songs
        </button>

        <div class="py-1.5"></div>

        <div class="flex items-center">
            <HomeCard image="https://picsum.photos/id/88/300/300" title="Pop Rising" subTitle="Playlist • Spotify" />
            <HomeCard image="https://picsum.photos/id/243/300/300" title="Indie Pop" subTitle="Playlist • Spotify" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/123/300/300" title="Alternative Rock" subTitle="Playlist • Spotify" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/121/300/300" title="Hip Hop Central" subTitle="Playlist • Spotify" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/99/300/300" title="Jazz Vibes" subTitle="Playlist • Spotify" />
        </div>
    </div>
</template>
