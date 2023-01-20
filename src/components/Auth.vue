<template>
    <div class="content">
        <div class="auth-container">
            <form class="auth" @submit="checkForm">
                <div v-if="errors.length" class="error">
                    <p v-for="error in errors">{{ error}}</p>
                </div>

                <div class="auth-item">
                    <label for="InputLogin">Логин</label>
                    <input v-model="login" type="text" class="auth-input" id="InputLogin">
                </div>
                <div class="auth-item">
                    <label for="InputPassword">Пароль</label>
                    <input v-model="password" class="auth-input" id="InputPassword" type="text">
                </div>
                <button class="auth-button" type="submit">Войти</button>
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data() {
        return {
            login: '',
            password: '',
            errors: []
        }
    },
    methods: {
        checkForm(e) {
            this.errors = [];
            if (!this.login || !this.password)
            {
                this.errors.push('Требуется указать логин и пароль');
                e.preventDefault();
                return true;
            }
            let regexLogin = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            let regexPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)

            if (!regexLogin.test(this.login)) {
                this.errors.push('Логин должен содержать адрес почты');
            }
            if (!regexPassword.test(this.password)) {
                this.errors.push('Пароль должен содержать хотя бы одну цифру и специальный символ');
            }

            e.preventDefault();
        },
    }
}
</script>

<style scoped>

.error {
    color: #ff0004;
}
</style>
