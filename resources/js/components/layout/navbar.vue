<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="img/vue.svg" width="30" height="30" class="d-inline-block align-top" alt />
            Taskinder
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <li
                        class="nav-item"
                        :class="[isExactActive && 'active']"
                    >
                        <a :href="href" class="nav-link" @click="navigate">Home</a>
                    </li>
                </router-link>
                <router-link to="/client" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <li
                        class="nav-item"
                        :class="[isExactActive && 'active']"
                    >
                        <a :href="href" class="nav-link" @click="navigate">Client</a>
                    </li>
                </router-link>
                <router-link to="/qa" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <li
                        class="nav-item"
                        :class="[isActive && 'active', isExactActive && 'exact-active']"
                    >
                        <a :href="href" class="nav-link" @click="navigate">QA</a>
                    </li>
                </router-link>
                <router-link to="/manage-passport" v-slot="{ href, route, navigate, isActive, isExactActive }">
                    <li
                        class="nav-item"
                        :class="[isActive && 'active', isExactActive && 'exact-active']"
                    >
                        <a :href="href" class="nav-link" @click="navigate">Manage passport</a>
                    </li>
                </router-link>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="UserDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >{{user.firstname}} {{user.lastname}}</a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="UserDropdown">
                        <a class="dropdown-item" href="#" @click.prevent="logout">Sign Out</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>



<script>
export default {
    data() {
        return {};
    },
    computed: {
        user() {
            return this.$store.getters.getProfile;
        }
    },
    methods: {
        logout: function() {
            this.$store.dispatch("authLogout").then(() => {
                this.$router.push("/login");
            });
        }
    }
};
</script>
