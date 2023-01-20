<template>
    <footer>
        <div class="container-fluid footer">
            <div class="container footer-style">
                <div class="row">
                    <div class="footer-logo margin_auto">
                        <router-link class="subheader__logo" to="/">
                            <img src="images/logo.svg" class="subheader__logo-img">
                        </router-link>
                    </div>
                    <div class="footer__about-company margin_auto">
                        <p class="footer-title">
                            О компании
                        </p>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#" class="footer__link">О компании</a>
                            </li>
                        </ul>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#" class="footer__link">Оплата и доставка</a>
                            </li>
                        </ul>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#" class="footer__link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__catalog margin_auto">
                        <p class="footer-title">
                            Каталог продукции
                        </p>
                        <div class="row">
                            <div class="footer__catalog-list">
                                <ul class="footer-list">
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">
                                            Кирпичи
                                        </a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">
                                            Блоки
                                        </a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">
                                            Природный камень
                                        </a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">
                                            Тротуарная плитка
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
