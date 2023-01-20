<template>
    <header>
        <div class="subheader">
            <div class="container">
                <div class="row subheader-align-center">
                    <router-link class="subheader__logo" to="/">
                        <img src="images/logo.svg" class="subheader__logo-img">
                    </router-link>
                    <!--                    <a class="subheader__logo" href="">-->
                    <!--                        <img src="images/logo.svg" class="subheader__logo-img">-->
                    <!--                    </a>-->
                    <div class="row subheader__contacts subheader-align-center">
                        <div class="address subheader_address address_black">
                            <a class="address-link">г. Белгород, кл. Костюкова, д.44</a>
                        </div>
                        <div class="phone subheader_phone phone_black">
                                <span class="phone_feedback">
                                    Заказать звонок
                                </span>
                            <a class="phone__link">
                                8(951)088-21-82
                            </a>
                            <a class="phone__link">
                                8(905)158-15-53
                            </a>
                        </div>
                    </div>
                    <div class="subheader__cart">
                        <div class="row favorite">
                            <img src="../../public/images/icons/contacts/login.svg" alt="" class="login_black">
                            <router-link class="favorite" to="/auth">
                                <span class="favorite__text">
                                    Авторизация
                                </span>
                            </router-link>
                        </div>
                        <a href="#" class="mini-cart">
                            <div class="mini-cart__qty">
                                    <span class="mini-cart__qty-text">
                                        <span class="mini-cart-count">
                                            0
                                        </span>
                                        <span>
                                            товаров
                                        </span>
                                    </span>
                                <span>
                                        в корзине
                                    </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container header-catalog">
            <div class="row">
                <div class="header__catalog catalog-hide">
                    <router-link class="header__catalog-title" to="/catalog">
                        <span>Каталог продукции</span>
                    </router-link>
                </div>

                <div class="dropdown header__share">
                    <a href="#" class="header__building header__building-link">
                        Строительство домов
                    </a>
                    <div class="dropdown-content">
                        <a href="#" class="header__building__link" title="Возведение фундамента">Возведение
                            фундамента</a>
                        <a href="#" class="header__building__link" title="Цоколь">Цоколь</a>
                        <a href="#" class="header__building__link" title="Коробка здания">Коробка здания</a>
                        <a href="#" class="header__building__link" title="Продажа готовых домов">Продажа готовых
                            домов</a>
                    </div>
                </div>
                <div class="header__category-prod">
                    <div class="row jc-between">
                        <a href="#" class="header__category-item brick_icon">Кирпичи</a>
                        <a href="#" class="header__category-item bloc_icon">Блоки</a>
                        <a href="#" class="header__category-item brick_icon">Плитка</a>
                        <a href="#" class="header__category-item stone_icon">Камень</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {}
}
</script>

<style scoped>

</style>
