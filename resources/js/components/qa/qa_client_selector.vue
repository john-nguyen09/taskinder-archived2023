<template>
    <div class="container-fluid mt-3">
        <div class="card mb-4">
            <div class="card-body">
                <div class="row border-bottom p1 font-weight-bold">
                    <div class="col-2">ID</div>
                    <div class="col-10">Name</div>
                </div>

                <div v-if="clients.length === 0" class="row p-1 border-top">
                    <div class="col-12">No clients to select, please create first</div>
                </div>

                <div class="row p-1 border-top" v-for="client in clients" :key="client.id">
                    <div class="col-2">{{client.id}}</div>
                    <div class="col-10">
                        <router-link :to="`/qa/${client.id}`">{{client.name}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        clients() {
            return this.$store.getters.clients;
        },
    },
    mounted() {
        this.$store.dispatch('fetchClients');
    },
}
</script>
