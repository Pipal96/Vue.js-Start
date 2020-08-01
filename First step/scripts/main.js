new Vue({
    el: "#hello",
    data: {
        title: "Hello World!",
        colorCSS: '',
        value: 1,
    },

    methods: {
        chengeText() {
            this.title = "new text";
        },
        /**
         * @param {number} value получает число из текстового поля input
         * @returns {number} число в переменную value и число * 2 в переменную value2
         */
        increment(value) {
            this.value = value;
            if (value == 11) {
                alert('Вы ввели число 11');
            }
        }
    },

    computed: {
        /**
         * Данный метод связывается с переменной value и образовывается зависимость
         */
        value2() {
            return this.value * 2;
        }
    },

});