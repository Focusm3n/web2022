<template>
    <div class="catalog-filter">
        <div class="qty-product">
            Найдено <b>100500</b> товаров
        </div>
        <div id="filter" class="filter">
            <ul class="list-unstyled filters">
                <li>
                    <div>Производитель</div>
                    <ul class="list-unstyled">
                        <li>
                            <input type="checkbox"> Старооскольский кирпичный завод
                        </li>
                        <li>
                            <input type="checkbox"> Железногорский кирпичный завод
                        </li>
                        <li>
                            <input type="checkbox"> Строма
                        </li>
                        <li>
                            <input type="checkbox"> Керма
                        </li>
                    </ul>
                </li>
                <li>
                    <div>Вид строительного материала</div>
                    <ul class="list-unstyled">
                        <li>
                            <input type="checkbox"> Пустотелый
                        </li>
                        <li>
                            <input type="checkbox"> Полнотелый
                        </li>
                    </ul>
                </li>
                <li>
                    <div>Материал</div>
                    <ul class="list-unstyled">
                        <li>
                            <input type="checkbox"> Керамический
                        </li>
                        <li>
                            <input type="checkbox"> Гиперпресованный
                        </li>
                    </ul>
                </li>
                <li>
                    <div>Назначение</div>
                    <ul class="list-unstyled">
                        <li>
                            <input type="checkbox"> Облицовачный
                        </li>
                        <li>
                            <input type="checkbox"> Фундаментный
                        </li>
                        <li>
                            <input type="checkbox"> Облицовачный рядовой ГОСТ
                        </li>
                    </ul>
                </li>
                <li>Формат размера</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data() {
        return {}
    },
}
</script>

<style scoped>

</style>
