<template>
    <div class="bread-crumbs">
        <ul class="bread-crumbs__list">
            <li class="bread-crumbs__item">
                <router-link class="bread-crumbs__link" to="/">
                    <span>Главная</span>
                </router-link>
            </li>
            <li class="bread-crumbs__item">
                <router-link class="bread-crumbs__link" to="/catalog">
                    <span>Каталог</span>
                </router-link>
            </li>
            <li v-if="title" class="bread-crumbs__item">
                <router-link class="bread-crumbs__link" to="/item">
                    <span>{{ title }}</span>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'BreadCrumbs',
    data() {
        return {
        }
    },
    props: {
        title: String
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
