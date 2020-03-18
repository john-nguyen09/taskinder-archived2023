<template>
    <div class="container mt-3">
        <div class="card mb-4">
            <div class="card-body">
                <h1 class="card-title">Manage passport</h1>
                <p class="card-text">You can manage OAuth Clients and Personal Access Tokens here</p>
            </div>
        </div>

        <Clients class="mb-4"></Clients>
        <AuthorizedClients class="mb-4"></AuthorizedClients>
        <PersonalAccessTokens class="mb-4"></PersonalAccessTokens>
    </div>
</template>

<script>
import Clients from './passport/Clients';
import AuthorizedClients from './passport/AuthorizedClients';
import PersonalAccessTokens from './passport/PersonalAccessTokens';

export default {
    data() {
        return {};
    },
    components: {
        Clients,
        AuthorizedClients,
        PersonalAccessTokens,
    }
};
</script>
