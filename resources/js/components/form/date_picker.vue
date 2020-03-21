<template>
    <v-date-picker
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event)"
        :popover="{ visibility: 'click' }"
    >
        <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': isInvalid }"
            readonly
            :value="formattedDate"
            :placeholder="placeholder"
        />
    </v-date-picker>
</template>

<script>
import { format } from 'date-fns';

export default {
    props: [
        'placeholder', 'value', 'isInvalid'
    ],
    computed: {
        formattedDate() {
            if (this.value instanceof Date) {
                return format(this.value, 'yyyy-MM-dd');
            }
            return '';
        },
    },
}
</script>
