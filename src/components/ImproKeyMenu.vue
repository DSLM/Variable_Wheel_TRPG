<template>
    <div id="rightSideMenu">
        <section class="sidebar-layout">
             <b-sidebar
                position="static"
                :reduce="reduceRight"
                type="is-light"
                fullheight="true"
                right="true"
                open
            >
                <div class="menuContainer">
                    <b-menu class="is-custom-mobile vscroll">
                        <b-menu-list label="词条">

                            <template v-for="k1 in keysList">
                                <b-menu-item @click="showKeys(k1.moreArr, k1.subkeys.length)" :disabled="k1.subkeys.length == 0 && k1.moreArr.files.length == 0" v-if="!(k1.subkeys.length == 0 && k1.moreArr.files.length == 0 && hide)">
                                    <template #label="props">
                                        {{k1.key}}（{{k1.moreArr.skills.length}}）
                                        <svg-icon v-bind:figure="!reduceRight && k1.subkeys.length" v-bind:path="props.expanded ? menuUp : menuDown"></svg-icon>
                                    </template>

                                    <template v-for="k2 in k1.subkeys">
                                        <b-menu-item @click="showKeys(k2.moreArr, k2.subkeys.length)" :disabled="k2.subkeys.length == 0 && k2.moreArr.files.length == 0" v-if="!(k2.subkeys.length == 0 && k2.moreArr.files.length == 0 && hide)">
                                            <template #label="props">
                                                {{k2.key}}（{{k2.moreArr.skills.length}}）
                                                <svg-icon v-bind:figure="!reduceRight && k2.subkeys.length" v-bind:path="props.expanded ? menuUp : menuDown"></svg-icon>
                                            </template>

                                            <template v-for="k3 in k2.subkeys">
                                                <b-menu-item @click="showKeys(k3.moreArr, k3.subkeys.length)" :disabled="k3.subkeys.length == 0 && k3.moreArr.files.length == 0" v-if="!(k3.subkeys.length == 0 && k3.moreArr.files.length == 0 && hide)">
                                                    <template #label="props">
                                                        {{k3.key}}（{{k3.moreArr.skills.length}}）
                                                        <svg-icon v-bind:figure="!reduceRight && k3.subkeys.length" v-bind:path="props.expanded ? menuUp : menuDown"></svg-icon>
                                                    </template>

                                                    <template v-for="k4 in k3.subkeys">
                                                        <b-menu-item @click="showKeys(k4.moreArr, k4.subkeys.length)" :disabled="k4.subkeys.length == 0 && k4.moreArr.files.length == 0" v-if="!(k4.subkeys.length == 0 && k4.moreArr.files.length == 0 && hide)">
                                                            <template #label="props">
                                                                {{k4.key}}（{{k4.moreArr.skills.length}}）
                                                                <svg-icon v-bind:figure="!reduceRight && k4.subkeys.length" v-bind:path="props.expanded ? menuUp : menuDown"></svg-icon>
                                                            </template>

                                                            <template v-for="k5 in k4.subkeys">
                                                                <b-menu-item @click="showKeys(k5.moreArr, k5.subkeys.length)" :disabled="k5.subkeys.length == 0 && k5.moreArr.files.length == 0" v-if="!(k5.subkeys.length == 0 && k5.moreArr.files.length == 0 && hide)">
                                                                    <template #label="props">
                                                                        {{k5.key}}（{{k5.moreArr.skills.length}}）
                                                                        <svg-icon v-bind:figure="!reduceRight && k5.subkeys.length" v-bind:path="props.expanded ? menuUp : menuDown"></svg-icon>
                                                                    </template>


                                                                </b-menu-item>
                                                            </template>

                                                        </b-menu-item>
                                                    </template>

                                                </b-menu-item>
                                            </template>

                                        </b-menu-item>
                                    </template>

                                </b-menu-item>
                            </template>



                            <b-menu-item :label="'所有（'+num+'）'" @click="showKeys({files:['main,.fileText'], skills:['main,.skillText']}, 0)"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                    <b-field>
                        <b-switch v-if="false" v-model="reduceRight">{{reduceRight?"":"收起"}}</b-switch>
                        <b-switch v-if="!reduceRight" v-model="hide">隐藏无效关键词</b-switch>
                    </b-field>
                </div>
            </b-sidebar>
        </section>
    </div>
</template>

<script>
    import { mdiMenuUp, mdiMenuDown } from '@mdi/js';
    import { showKeys } from "./../functions.js";
    import svgIcon from "./SvgIcon.vue";

    export default {
        name: 'improKeyMenu',
        props: {
            keysList: {
                type: Object
            },
            num: {
                type: Number
            }

        },
        data() {
            return {
                showKeys: showKeys,
                hide: true,
                reduceRight: false,
                menuUp: mdiMenuUp,
                menuDown: mdiMenuDown,
            }
        },
        components: {
            svgIcon
        }
    }
</script>
