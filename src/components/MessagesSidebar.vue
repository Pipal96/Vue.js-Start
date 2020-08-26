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
                <li v-for="(link, index) in links" :key="index">
                    <a @click="showComponent(index)" class="text-capitalize link-style" href="#">
                        <SVGLetter class="margin-message"></SVGLetter>
                        <p class="text tab-style">{{link.headline_link}}</p>
                        <span class="margin-message text tab-style">{{link.count_message}}</span>

                    </a>
                </li>
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
                links: [{
                        headline_link: 'my questions',
                        count_message: '()',
                    },
                    {
                        headline_link: 'Messanger',
                        count_message: '()',
                    },
                    {
                        headline_link: 'Community QA',
                        count_message: '()',
                    },
                    {
                        headline_link: 'FAQ',
                        count_message: '()',
                    },
                ],
                currentComponent: '',
            }
        },
        name: 'app-SVG',
        components: {
            SVGLetter,
        },
        methods: {
            showComponent(index) {
                this.currentComponent = this.links[index].headline_link
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