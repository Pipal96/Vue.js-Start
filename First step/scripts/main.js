/* Global filter */

Vue.filter('alwaysLowerWords', function (value) {
    return value.toLowerCase();
})

new Vue({
    el: "#hello",
    data: {
        title: "Hello World!",
        colorCSS: '',
        value: 1,
        show: true,
        cars: [{
                model: "BMW",
                speed: 300.8
            }, {
                model: "KIA",
                speed: 180.8
            },

            {
                model: "Audi",
                speed: 280.8
            },
            {
                model: "Ford",
                speed: 210
            },
        ],
        lowerText: "текст маленькими буквами, но с фильтром",
        upperText: 'ТЕКСТ БОЛЬШИМИ БУКВАМИ',
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
    filters: {
        upperCase(value) {
            return value.toUpperCase();
        }
    },

});


Vue.component('card', {
    data: function () {
        return {
            headline: 'new Card',
            text: 'description',
        }
    },
    template: `<div><div class="card"><h2>{{headline}}</h2><p>{{text}}</p></div></div>`,
});

new Vue({
    el: '#app',
})