<template>
    <div class="wrapper">
        <div class="message-block">
            <div class="blod-text block_name-position">
                <p class="">{{block_name}}</p>
            </div>
            <div class="text">
                <p class="">{{block_subtitle_name}}</p>
            </div>
        </div>
        <div class="links-tabs">
            <ul>
                <li><a @click="firstLineClick()" class="text-capitalize link-style" href="#">
                        <SVGLetter class="margin-message"></SVGLetter>
                        <p class="text tab-style">{{first_line}}</p> <span
                            class="margin-message text tab-style">{{first_value}}</span>

                    </a></li>
                <li><a class="text-capitalize link-style" href="#">
                        <SVGLetter class="margin-message"></SVGLetter>
                        <p class="text tab-style"> {{second_line}}</p>
                        <span class="margin-message text tab-style">{{second_value}}</span>

                    </a></li>
                <li><a class="text-capitalize link-style" href="#">

                        <SVGLetter class="margin-message"></SVGLetter>
                        <p class="text tab-style">{{third_line}}</p>
                        <span class="margin-message text tab-style">{{third_value}}</span>
                    </a></li>
                <li><a class="text-capitalize link-style" href="#">

                        <SVGLetter class="margin-message"></SVGLetter>
                        <p class="text tab-style">{{fourth_line}}</p>

                    </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import SVGLetter from './SvgLetter.vue'

    export default {
        data() {
            return {
                block_name: 'message',
                block_subtitle_name: 'history',
                first_line: 'my questions',
                second_line: 'Messanger',
                third_line: 'Community QA',
                fourth_line: 'FAQ',
                first_value: `(${45})`,
                second_value: `(${11})`,
                third_value: `(${23})`,
                currentComponent: '',
            }
        },
        name: 'app-SVG',
        components: {
            SVGLetter,
        },
        methods: {
            firstLineClick() {
                this.currentComponent = this.first_line
                this.$emit('currentComponent', this.currentComponent)
            }
        },


    }
</script>

<style scoped>
    .wrapper {
        width: 90%;
        margin: 0 auto;
        text-align: left;
        margin-top: 15px;
    }

    .link-style:hover .tab-style {
        color: #f8fbfb;
    }

    .wrapper p {
        margin: 0;
    }

    .block_name-position {
        text-transform: uppercase;
    }

    .links-tabs a {
        display: flex;
        align-items: center;
    }

    .links-tabs a:active {
        box-shadow: 0 0 10px 1px #117fa3;
        transition: 0.2s;
    }

    .links-tabs a:hover {
        background-color: #117fa3;
        border-radius: 5px;
        transition: 0.1s;
    }

    .tab-style {
        color: #949ea2;
        transition: 0.1s;
    }

    .margin-message {
        margin-left: 5%;
    }

    .message-block p {
        width: 90%;
        margin: 0 auto;
    }
</style>