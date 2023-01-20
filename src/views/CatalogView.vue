<template>
    <div class="content">
        <div class="container">
            <BreadCrumbs></BreadCrumbs>
            <h1 class="title-blue catalog__title">Каталог строительных материалов</h1>

            <div class="catalog">
                <div class="row-content">
                    <Filter></Filter>
                    <div class="catalog-products">
                        <div class="catalog__list-offset">
                            <div class="row">
                                <Product
                                    v-for="product in products"
                                    :title="product.title"
                                    :manufacturer="product.manufacturer"
                                    :price="product.price">
                                </Product>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Filter from "@/components/Filter.vue";
import Product from "@/components/Product.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
export default {
    name: 'CatalogView',
    data() {
        return {
            products: [
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Курский кирпичный завод',
                    price: 11.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Белгородский кирпичный завод',
                    price: 12.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Старооскольский кирпичный завод',
                    price: 13.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Старооскольский кирпичный завод',
                    price: 14.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Старооскольский кирпичный завод',
                    price: 15.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Старооскольский кирпичный завод',
                    price: 16.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Старооскольский кирпичный завод',
                    price: 17.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Питерский кирпичный завод',
                    price: 18.99,
                },
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Московский кирпичный завод',
                    price: 19.99,
                },
            ]
        }
    },
    components: {
        Filter,
        Product,
        BreadCrumbs
    }
}
</script>
