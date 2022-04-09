<template>
<v-card>
    <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-card-title>Listes de {{title}}</v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
</v-card>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => { return  new Array([]) }
        },
        title: { type: String, default: 'Problèmes'}
            },
    data() {
        return {
            search: '',

        }
    },
    computed: {
        headers() {
            if (this.items.length) {
                let titles = Object.keys(this.items[0])
                let headers = []
                for (let i of titles) {
                    if (i == 'date_add' || i == 'date_update' || i == 'status') {
                        continue
                    }
                    let h = {
                        text: i,
                        value: i
                    }
                    headers.push(h)

                }
                return headers
            } else {
                return []
            }

        }
    }
}
</script>
