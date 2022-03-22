<template>
    <div id="main" class="main">
        <navbar></navbar>
        <div id="leftSideMenu">
            <section class="sidebar-layout">
                 <b-sidebar
                    position="static"
                    :reduce="reduceLeft"
                    type="is-light"
                    fullheight="true"
                    open
                >
                    <div class="menuContainer">
                        <b-menu class="is-custom-mobile vscroll" type="is-dark">
                                <b-menu-list label="强化序列库">
                                    <template v-for="type in improList.data">
                                        <b-menu-item :label="type.name+'（'+type.data.length+'）'">
                                            <template v-for="file in type.data">
                                                        <b-menu-item :label="file.name+(type.name=='种族'?'':'（'+file.len+'）')" :href="'#'+file.key"/>
                                            </template>
                                        </b-menu-item>
                                    </template>
                                </b-menu-list>
                        </b-menu>
                        <b-field>
                            <b-switch v-if="false" v-model="reduceLeft">{{reduceLeft?"":"收起"}}</b-switch>
                        </b-field>
                    </div>
                </b-sidebar>
            </section>
        </div>
        <div id="middleText" class="middleText vscroll">
            <template v-for="type in improList.data">
                <div class="title1">{{type.name}}</div>
                <div v-for="file in type.data" v-bind:key="file.key" :id="file.key" class="fileText" v-html="file.data"></div>
            </template>
        </div>
        <impro-key-menu v-bind:keys-list="keysList" v-bind:num="num"></impro-key-menu>
    </div>
</template>

<script>
    import improKeyMenu from "./ImproKeyMenu.vue";
    import navbar from "./Navbar.vue";

    export default {
        name: 'improPage',
        props: {
            improList: {
                type: Object
            },
            keysList: {
                type: Object
            },
            num: {
                type: Number
            },

        },
        data() {
            return {
                reduceLeft: false
            }
        },
        components: {
            improKeyMenu,
            navbar
        }
    }
</script>
