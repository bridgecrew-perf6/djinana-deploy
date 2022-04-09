<template>
<v-card outlined :color="color" dark>
    <v-card-text>
        <v-row>
            <v-col cols="6">
                <h1 class="display-4">
                    {{nombre || 0}}
                </h1>
            </v-col>
            <v-col cols="6" class="text-center">
                <v-icon x-large>
                    {{icon || "mdi-alert"}} 
                </v-icon>
                <v-alert class="py-1  my-0 " :color="color">
                    {{title}}
                </v-alert>
            </v-col>
        </v-row>

    </v-card-text>

</v-card>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
        },
        title: {
            type: String,
            required: true
        },
        color: String ,
        nombre: Number ,
    }
}
</script>
