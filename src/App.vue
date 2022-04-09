<template>
<v-app>
    <nav-bar />
    <v-main class="grey lighten-3">
        <router-view />
    </v-main>
</v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Vue from "vue"

Vue.mixin({
    data: () => ({
        api: "https://djinana.wmcci.com/",
        localisation: ''
    }),
    computed: {
        isMobile() {
            if (window.screen.width < 940) {
                return true;
            }
            return false;
        },

    },
    methods: {
        getLocation() {
            let vm = this
            navigator.geolocation.getCurrentPosition(function (position) {
                vm.localisation = `${position.coords.latitude}, ${position.coords.longitude}`

            });
            this.localisation = vm.localisation
        },
    }
})

export default {
    components: {
        NavBar
    },
    name: 'App',

    data: () => ({
        //
    }),
    mounted(){
      this.getLocation()
    }
};
</script>
