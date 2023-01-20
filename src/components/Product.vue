<template>
    <div class="product-item">
        <router-link class="product-item__img-wrap" to="/product">
            <img src="images/products/1.jpg">
            <div class="product-item__info">
                <span>
                    {{ title }}
                </span>
                <span>
                    {{ manufacturer }}
                </span>
                <span class="product-price">
                    {{ price }}₽
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data() {
        return {
        }
    },
    props: {
        title: String,
        manufacturer: String,
        price: Number
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
