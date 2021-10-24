<template>
    <nav>
        <ul class="pagination">
            <li
                v-for="(link, index) in links"
                :key="index"
                class="page-item"
                :class="{
                    disabled: isLinkDisabled(link),
                    active: link.active,
                }"
            >
                <a
                    href="#"
                    class="page-link"
                    @click.prevent="goToLink(link)"
                    :tabindex="isLinkDisabled(link) ? -1 : null"
                >
                    <span v-html="link.label"></span>
                    {{' '}}<span class="sr-only" v-if="link.active">(current)</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            default: [],
        },
    },
    methods: {
        isLinkDisabled(link) {
            return !link.url;
        },
        goToLink(link) {
            this.$emit('link', link);
        },
    },
};
</script>
