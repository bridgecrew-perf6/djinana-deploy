<template>
<v-card>
    <v-app-bar app dense flat>
        <v-app-bar-nav-icon @click="draw = !draw"></v-app-bar-nav-icon>
        <v-app-bar-title class="text-uppercase">
            DJINANA
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile">

        <v-btn text v-for="link in items" :key="link.to" link :href="link.to">
            {{link.title}}
        </v-btn>
        </template>

    </v-app-bar>
    

        <v-navigation-drawer v-model="draw" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        DJINANA
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Gestionnaire d'eau
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link :to='item.to'>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
            
        </v-navigation-drawer>
   

</v-card>
</template>

<script>
export default {
    data: () => ({
        items: [{
                title: 'Dashboard',
                icon: 'mdi-view-dashboard',
                to: "/"
            },
            {
                title: 'Enquete',
                icon: 'mdi-magnify-scan',
                to: '/enquete'
            },
            {
                title: 'Signaler',
                icon: 'mdi-alert',
                to: '/signaler'
            },
            {
                title: 'partenaire',
                icon: 'mdi-handshake',
                to: '/partenaire'
            },
            {
                title: 'About',
                icon: 'mdi-help-box',
                to: '/about'
            },

        ],
        draw: false,
        right: null,
    }),
    methods: {

    }
}
</script>

<style>
</style>
