<template>
    <div class="container-fluid mt-3">
        <div class="card mb-4">
            <div class="card-body">
                <form @submit.prevent="store">
                    <div class="form-row">
                        <div class="col-auto">
                            <input type="text" class="form-control" placeholder="Name" v-model="name" />
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-primary">Submit</button>
                            <button type="button" class="btn btn-secondary" @click="cancel" :disabled="cancelDisabled">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <div class="row border-bottom p-1 font-weight-bold">
                    <div class="col-1">ID</div>
                    <div class="col-8">Name</div>
                </div>
                <div v-if="clients.length === 0" class="row p-1 border-top">
                    <div class="col-12">No clients</div>
                </div>
                <div class="row p-1 border-top" v-for="(client, index) in clients" :key="client.id">
                    <div class="col-1">{{client.id}}</div>
                    <div class="col-8">{{client.name}}</div>
                    <div class="col-3">
                        <button type="button" class="btn btn-warning" @click="edit(index)"><i class="fa fa-pencil-alt"></i></button>
                        <button
                            type="button"
                            class="btn btn-danger btn-confirm-delete"
                            :class="{ 'to-confirm': toDeleteClient && toDeleteClient.id == client.id }"
                            @click="deleteClient(index)"
                            @blur="revokeDelete(index)"
                        >
                            <i class="fa fa-times delete-icon"></i><span class="delete-text"> Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        name: {
            get() {
                return this.$store.getters.clientForm.name;
            },
            set(value) {
                this.$store.dispatch('setClientFormName', value);
            },
        },
        cancelDisabled() {
            return this.name === '';
        },
        clients() {
            return this.$store.getters.clients;
        },
        toDeleteClient() {
            return this.$store.getters.toDeleteClient;
        },
    },
    methods: {
        store() {
            this.$store.dispatch('storeClient');
        },
        cancel() {
            this.$store.dispatch('resetClientForm');
        },
        edit(index) {
            this.$store.dispatch('editClient', index);
        },
        deleteClient(index) {
            this.$store.dispatch('deleteClient', index);
        },
        revokeDelete(index) {
            this.$store.dispatch('revokeDeleteClient', index);
        },
    },
    mounted() {
        this.$store.dispatch('fetchClients');
    },
}
</script>
