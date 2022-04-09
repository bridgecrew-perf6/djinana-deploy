<template>
<v-container>
    <v-row>
        <v-col lg='3' md="6" cols="12">

            <nombre-card color="red" title="problèmes signalés" :nombre="infos.count" />
        </v-col>
        <v-col lg='3' md="6" cols="12">

            <nombre-card color="green" icon="mdi-check" title="problèmes résolus" :nombre="problemResolu" />

        </v-col>
        <v-col lg='3' md="6" cols="12">

            <nombre-card color="yellow darken-3" icon="mdi-handshake" title="partenaire forages" />

        </v-col>
        <v-col lg='3' md="6" cols="12">

            <nombre-card color="indigo" icon="mdi-handshake" title="partenaire distribution" />

        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <tableau-lieu :items="infos.results" />

        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <tableau-lieu :items="enqs.results" title="reponse d'enquete" />

        </v-col>
        <v-col>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card>

                <l-map style="height: 500px" :zoom="zoom" :center="center">
                    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                    <l-marker v-for="marker in markerLatLng" :key="marker.id" :lat-lng="marker.coords">
                        <l-popup :content="marker.name"/>
                    </l-marker>
                </l-map>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card>

                <map-cluster />
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
import TableauLieu from '@/components/TableauLieu.vue'
import NombreCard from '@/components/NombreCard.vue'
// import L from 'leaflet';
import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
} from 'vue2-leaflet'
import MapCluster from '@/components/MapCluster.vue'
import {
    Icon
} from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
    name: 'HomeView',
    data: () => ({
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 11,
        center: [5.30966, -4.01266 ],
        // markerLatLng: [51.504, -0.159],
        infos: [],
        enqs: []
    }),
    components: {
        NombreCard,
        TableauLieu,
        LMap,
        LTileLayer,
        LMarker,
        MapCluster,
        LPopup
    },
    computed: {
        problemResolu() {
            return this.infos.results.filter(p => p.resolu === true).length
        },
        markerLatLng() {
            return [{
                id: 1,
                name: 'Yopougon',
                coords: [5.324281, -4.089586]
            }, {
                id: 2,
                name: 'Cocody',
                coords: [5.3499986, -3.9833294]
            }, {
                id: 3,
                name: 'Abobo',
                coords: [5.432887, -4.038892]
            }, {
                id: 4,
                name: 'Port-Bouet',
                coords: [5.25555, -3.9666628]
            }, {
                id: 5,
                name: 'Treichville',
                coords: [5.3, -4.0]

            }, {
                id: 6,
                name: 'Koumassi',
                coords: [5.2833322, -3.9833294]

            }, {
                id: 7,
                name: 'Port-Bouet',
                coords: []
            }]
        }
    },
    methods: {
        async getEnquete() {
            const axiosrequest1 = axios.get(this.api + "etude/etude_des_differenes_problemes/");
            const axiosrequest2 = axios.get(this.api + "/recolte_d_info/recolte_information/");
            // you could also use destructuring to have an array of responses
            await axios.all([axiosrequest1, axiosrequest2]).then(axios.spread((res1, res2) => {
                console.log(res1);
                this.infos = res1.data
                this.enqs = res2.data
                console.log(res2);
            }));
            // axios
            //     .get(this.api + "etude/etude_des_differenes_problemes/")
            //     .then(res => {
            //         this.infos = res.data
            //         console.log(res.data)

            //     })
            //     .catch(err => {
            //         console.dir(err)
            //     })
        }
    },
    created() {
        this.getEnquete()
        this.getLocation()
        console.log(this.localisation)
    }
}
</script>
