<template>
    <div class="content">
        <div class="container">
            <BreadCrumbs :title="product.title"></BreadCrumbs>
            <div class="product">
                <h1 class="product__title">{{ product.title }}</h1>
                <div class="row">
                    <div class="product__img product-item__info">
                        <img src="images/products/1.jpg">

                        <div class="product-price">
                            Цена:
                        </div>
                        <div class="product-price">
                            {{ product.price }}₽
                        </div>
                    </div>
                    <div class="product__info">
                        <p class="product__subtitle">Характеристики</p>
                        <div class="product__props-list">
                            <div class="row">
                                <div class="row product__prop-l5">
                                    <div class="product__prop">
                                        <div class="product__prop-name">
                                            Производитель
                                        </div>
                                        <div class="product__prop-value">
                                            Старооскольский кирпичный завод
                                        </div>
                                    </div>

                                    <div class="product__prop">
                                        <div class="product__prop-name">
                                            Вид кирпича
                                        </div>
                                        <div class="product__prop-value">
                                            <div>
                                                Пустотелый
                                            </div>
                                        </div>
                                    </div>


                                    <div class="product__prop">
                                        <div class="product__prop-name">
                                            Пустотность
                                        </div>
                                        <div class="product__prop-value">
                                            <div>
                                                31-36%
                                            </div>
                                        </div>
                                    </div>


                                    <div class="product__prop">
                                        <div class="product__prop-name">
                                            Назначение кирпича
                                        </div>
                                        <div class="product__prop-value">
                                            <div>
                                                Облицовочный рядовой ГОСТ
                                            </div>
                                        </div>
                                    </div>

                                    <div class="product__prop">
                                        <div class="product__prop-name">
                                            Формат размера

                                        </div>
                                        <div class="product__prop-value">
                                            <div>
                                                Одинарный eвро 0.7 NF
                                            </div>

                                        </div>
                                    </div>

                                    <div class="product__prop">
                                        <div class="product__prop-name">
                                            Точный размер, мм
                                        </div>
                                        <div class="product__prop-value">
                                            <div>
                                                250х85х65
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    name: 'ItemView',
    data() {
        return {
            product:
                {
                    title: 'Кирпич красный',
                    manufacturer: 'Курский кирпичный завод',
                    price: 11.99,
                }
        }
    },
    components: {
        Filter,
        Product,
        BreadCrumbs
    }
}
</script>

<style>
.product__title {
    font-family: "IBM Plex Serif", sans-serif;
    font-weight: 700;
    font-size: 25px;
    line-height: 36px;
    letter-spacing: .04em;
    color: #2ba4a4;
    width: 790px;
    margin-bottom: 40px;
}

.product__img {
    padding: 15px;
    margin-right: 30px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .08);
}

.product__info {
    width: 652px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .08);
    padding: 30px 40px;
    height: 100%;
}

.product__subtitle {
    font-family: "IBM Plex Serif", sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: .04em;
    color: #404040;
    margin-bottom: 25px;
}

.product__prop-l5 {
    width: 100%;
    padding-right: 15px;
    height: 100%;
}

.product__prop {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #d1d1d1;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: .04em;
    color: #404040;
}

.product__prop-name, .product__prop-value {
    display: inline-block;
    width: 50%;
}

.center {
    justify-content: center;
}
</style>