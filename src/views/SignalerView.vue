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
                    Signaler
                </v-card-title>
                <v-card-subtitle>
                    Indiquer ici votre probleme d'eau.
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
                                <v-textarea v-model="description" dense outlined label="Description de votre problème"></v-textarea>
                            </v-col>
                            <v-col cols="11">
                                <v-btn block text @click="getLocation" color="primary">
                                    <v-icon color="blue">mdi-map-marker</v-icon> Obtenir ma position
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row justify="end">
                            <v-col cols="auto">
                                <v-btn color="success" @click="postProblem" class="mr-4">
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
        nom: '',
        dure: '',
        description: '',
        // localisation: '',
        loading: false,
        snackbar: false,
        text: '',
        snackColor: ''
    }),
    methods: {
        // getLocation() {
        //     let vm = this
        //     navigator.geolocation.getCurrentPosition(function (position) {
        //         vm.localisation = `${position.coords.latitude}, ${position.coords.latitude}`

        //         console.log(position)
        //     })

        //     this.localisation = vm.localisation

        // },
        postProblem() {
            this.loading = true

            axios
                .post(this.api + "etude/etude_des_differenes_problemes/", {
                    "nom_prenom": this.nom,
                    "localisation": this.localisation,
                    "description": this.description,
                    'duree': this.dure,
                    "resolu": false,
                    "status": true
                })
                .then(res => {
                    this.infos = res.data
                    this.text = 'Ajouté avec succès'
                    this.snackColor = 'success'
                    this.snackbar = true
                    this.loading = false

                    console.log(res.data)

                })
                .catch(err => {
                    console.dir(err)
                    this.text = err.message
                    this.snackColor = ''
                    this.snackbar = true
                    this.loading = false
                })
        }
    },
}
</script>

<style>

</style>
