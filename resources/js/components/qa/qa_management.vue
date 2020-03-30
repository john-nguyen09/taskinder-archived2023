<template>
    <div class="container-fluid mt-3">
        <h1>{{qaClient.name}}</h1>
        <div class="alert alert-danger" v-if="errors.hasErrorMessage()">
            {{errors.getErrorMessage()}}
        </div>

        <div class="card mb-4">
            <div class="card-body">
                <form @submit.prevent="store">
                    <div class="form-row">
                        <div class="col-auto">
                            <input
                                type="text"
                                class="form-control"
                                :class="{ 'is-invalid': errors.has('question') }"
                                placeholder="Question" v-model="question" />
                            <div class="invalid-feedback" v-if="errors.has('question')">
                                {{errors.get('question')}}
                            </div>
                        </div>
                        <div class="col-5">
                            <textarea
                                class="form-control"
                                :class="{ 'is-invalid': errors.has('answer') }"
                                placeholder="Answer"
                                v-model="answer"></textarea>
                            <div class="invalid-feedback" v-if="errors.has('answer')">
                                {{errors.get('answer')}}
                            </div>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-primary">Submit</button>
                            <button type="button" class="btn btn-secondary" @click="cancel" :disabled="cancelDisabled">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="d-flex mb-2">
            <button type="button" class="btn btn-primary" @click="exportQAs">Export CSV</button>
        </div>
        <div class="card mb-4">
            <div class="card-body">
                <div class="row border-bottom p-1 font-weight-bold">
                    <div class="col-1">#</div>
                    <div class="col-3">Question</div>
                    <div class="col-5">Answer</div>
                </div>
                <div v-if="qas.length === 0" class="row p-1 border-top">
                    <div class="col-12">No QAs</div>
                </div>
                <div class="row p-1 border-top" v-for="(qa, index) in qas" :key="qa.id">
                    <div class="col-1">{{index + 1}}</div>
                    <div class="col-3">{{qa.question}}</div>
                    <div class="col-5" v-html="qa.answer_html"></div>
                    <div class="col-3">
                        <button type="button" class="btn btn-warning" @click="edit(index)"><i class="fa fa-pencil-alt"></i></button>
                        <button
                            type="button"
                            class="btn btn-danger btn-confirm-delete"
                            :class="{ 'to-confirm': toDeleteQA && toDeleteQA.id == qa.id }"
                            @click="deleteQA(index)"
                            @blur="revokeDelete(index)"
                        >
                            <i class="fa fa-trash delete-icon"></i><span class="delete-text"> Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        question: {
            get() {
                return this.$store.getters.qaForm.question;
            },
            set(value) {
                this.$store.dispatch('setQAFormQuestion', value);
            },
        },
        answer: {
            get() {
                return this.$store.getters.qaForm.answer;
            },
            set(value) {
                this.$store.dispatch('setQAFormAnswer', value);
            },
        },
        cancelDisabled() {
            return this.question === '' && this.answer === '';
        },
        errors() {
            return this.$store.getters.qaErrors;
        },
        ...mapGetters([
            'qaClient',
            'qas',
            'toDeleteQA',
        ]),
    },
    methods: {
        store() {
            this.$store.dispatch('storeQA');
        },
        cancel() {
            this.$store.dispatch('resetQAForm');
        },
        edit(index) {
            this.$store.dispatch('editQA', index);
        },
        deleteQA(index) {
            this.$store.dispatch('deleteQA', index);
        },
        revokeDelete(index) {
            this.$store.dispatch('revokeDeleteQA', index);
        },
        exportQAs() {
            this.$store.dispatch('exportQAs');
        },
    },
    async mounted() {
        this.$store.dispatch('setQAFormClientId', this.$route.params.id);
        await this.$store.dispatch('fetchQAs', this.$route.params.id);
    },
}
</script>
