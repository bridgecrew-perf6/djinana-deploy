<template>
<v-container fill-height>
    <v-snackbar v-model="snackbar" :timeout="2000">
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
    <v-row justify="center">
        <v-col cols="auto">
            <v-card>
                <v-card-title>
                    Enquête
                </v-card-title>
                <v-card-subtitle>
                    Ceci est une enquete menée pour savoir si vous avez accès à l'eau potable. vuillez renseigner correctement ce formulaire
                </v-card-subtitle>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-row justify="center">
                            <v-col cols="11">
                                <v-text-field dense v-model="nom" label="Nom et prenoms" required></v-text-field>

                            </v-col>
                            <v-col cols="11">
                                <v-text-field dense v-model="dure" label="Depuis combien de temps ?" required></v-text-field>

                            </v-col>
                            <v-col cols="11">
                                <v-text-field dense v-model="localisation" label="Ma localisation" required></v-text-field>

                            </v-col>
                            <v-col cols="11">
                                <v-checkbox dense v-model="acces" hint="cochez si vous avez accès à l'eau" label="J'ai accès à l'eau dans votre localité" required></v-checkbox>
                            </v-col>
                            <v-col cols="11">
                                <v-btn block text @click="getLocation" color="primary">
                                    <v-icon color="blue">mdi-map-marker</v-icon> Obtenir ma position
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row justify="end">
                            <v-col>

                            </v-col>
                            <v-col cols="auto">
                                <v-btn :loading="loading" @click="enregistrer" color="success" class="mr-4">
                                    Envoyer
                                </v-btn>
                            </v-col>

                        </v-row>

                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        localisation: '',
        nom: '',
        dure: '',
        acces: false,
        loading: false,
        snackbar: false,
        text: '',
        snackColor: ''
    }),

    methods: {
        getLocation() {
            let vm = this
            navigator.geolocation.getCurrentPosition(function (position) {
                vm.localisation = `${position.coords.latitude}, ${position.coords.latitude}`

            });
            this.localisation = vm.localisation
        },
        enregistrer() {
            this.loading = true
            axios.post(this.api + "/recolte_d_info/recolte_information/", {
                    nom: this.nom,
                    localisation: this.localisation,
                    duree: this.dure,
                    status: this.acces
                })
                .then(res => {
                    console.log(res.data)
                    this.text = 'Ajouté avec succès'
                    this.snackColor = 'success'
                    this.snackbar = true
                    this.loading = false
                })
                .catch(err => {
                    console.dir(err)
                    this.text = err.message
                    this.snackColor = ''
                    this.snackbar = true
                    this.loading = false
                })
        }
    }
}
</script>

<style>

</style>
