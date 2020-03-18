<template>
    <div class="auth-form text-center">
        <form method="POST" v-on:submit.prevent="login">
            <img class="mb-4" src="img/logo.svg" alt width="300" height="72" />

            <p
                class="text-danger"
                v-if="authErrors.has('invalid_credentials')"
                v-text="authErrors.get('invalid_credentials')"
            ></p>

            <label for="username" class="sr-only">Username</label>
            <input
                type="text"
                id="username"
                class="form-control"
                placeholder="Username"
                required
                autofocus
                v-model="username"
            />

            <label for="password" class="sr-only">Password</label>
            <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Password"
                required
                v-model="password"
            />

            <div class="checkbox mt-2">
                <label>
                    <input type="checkbox" value="remember" v-model="remember" /> Remember me
                </label>
            </div>

            <button class="btn btn-lg btn-primary btn-block mt-2 mb-2" type="submit">Sign in</button>

            <router-link :to="{ name: 'password-email' }">Forgot Password</router-link>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            remember: false
        };
    },
    computed: {
        authErrors() {
            return this.$store.getters.authErrors;
        }
    },
    methods: {
        login: function() {
            const { username, password, remember } = this;
            this.$store
                .dispatch("authRequest", { username, password, remember })
                .then(() => {
                    this.$router.push("/");
                });
        }
    }
};
</script>
