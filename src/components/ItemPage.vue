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
                                <b-menu-list label="道具序列库">
                                    <template v-for="file in itemList">
                                        <b-menu-item :label="file.name+'（'+Object.keys(file.menus).length+'）'">
                                            <template v-for="menu in file.menus">
                                                <b-menu-item :label="menu.name+'（'+menu.items.length+'）'">
                                                    <template v-for="item in menu.items">
                                                                <b-menu-item :label="item['名称']" :href="'#'+item.key" :class="['itemMenu', 'itemLevel-'+item.level]"/>
                                                    </template>
                                                </b-menu-item>
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
            <template v-for="file in itemList">
                <div class="title1">{{file.name}}</div>
                <template v-for="menu in file.menus">
                    <div class="title2">{{menu.name}}</div>
                    <item v-for="item in menu.items" v-bind:key="item.key" :id="item.key" v-bind:data="item"  v-bind:has-image="itemsImage.includes(item.key)" :class="['itemText', 'itemLevel-'+item.level]"></item>
                </template>
            </template>
        </div>
        <item-key-menu v-bind:keys-list="keysList" v-bind:num="num"></item-key-menu>
    </div>
</template>

<script>
    import itemKeyMenu from "./ItemKeyMenu.vue";
    import item from "./Item.vue";
    import navbar from "./Navbar.vue";

    export default {
        name: 'itemPage',
        props: {
            itemList: {
                type: Object
            },
            keysList: {
                type: Object
            },
            num: {
                type: Number
            },
            itemsImage: {
                type: Array
            },

        },
        data() {
            return {
                reduceLeft: false,
            }
        },
        components: {
            itemKeyMenu,
            item,
            navbar
        }
    }
</script>
