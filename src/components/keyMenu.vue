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
                                <b-menu-item @click="showKeys(k1.show, k1.subkeys.length)" :disabled="k1.subkeys.length == 0 && k1.show.files.size == 0" v-if="!(k1.subkeys.length == 0 && k1.show.files.size == 0 && hide)">
                                    <template #label="props">
                                        {{k1.key}}（{{k1.show.skills.size}}）
                                        <b-icon v-if="!reduceRight && k1.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                    </template>

                                    <template v-for="k2 in k1.subkeys">
                                        <b-menu-item @click="showKeys(k2.show, k2.subkeys.length)" :disabled="k2.subkeys.length == 0 && k2.show.files.size == 0" v-if="!(k2.subkeys.length == 0 && k2.show.files.size == 0 && hide)">
                                            <template #label="props">
                                                {{k2.key}}（{{k2.show.skills.size}}）
                                                <b-icon v-if="!reduceRight && k2.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                            </template>

                                            <template v-for="k3 in k2.subkeys">
                                                <b-menu-item @click="showKeys(k3.show, k3.subkeys.length)" :disabled="k3.subkeys.length == 0 && k3.show.files.size == 0" v-if="!(k3.subkeys.length == 0 && k3.show.files.size == 0 && hide)">
                                                    <template #label="props">
                                                        {{k3.key}}（{{k3.show.skills.size}}）
                                                        <b-icon v-if="!reduceRight && k3.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                                    </template>

                                                    <template v-for="k4 in k3.subkeys">
                                                        <b-menu-item @click="showKeys(k4.show, k4.subkeys.length)" :disabled="k4.subkeys.length == 0 && k4.show.files.size == 0" v-if="!(k4.subkeys.length == 0 && k4.show.files.size == 0 && hide)">
                                                            <template #label="props">
                                                                {{k4.key}}（{{k4.show.skills.size}}）
                                                                <b-icon v-if="!reduceRight && k4.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                                            </template>

                                                            <template v-for="k5 in k4.subkeys">
                                                                <b-menu-item @click="showKeys(k5.show, k5.subkeys.length)" :disabled="k5.subkeys.length == 0 && k5.show.files.size == 0" v-if="!(k5.subkeys.length == 0 && k5.show.files.size == 0 && hide)">
                                                                    <template #label="props">
                                                                        {{k5.key}}（{{k5.show.skills.size}}）
                                                                        <b-icon v-if="!reduceRight && k5.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
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



                            <b-menu-item :label="'所有（'+skillsNum+'）'" @click="showKeys({files:['file_1_1,.fileText'], skills:['file_1_1,.skillText']}, 0)"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                    <b-field>
                        <b-switch v-model="reduceRight">{{reduceRight?"":"收起"}}</b-switch>
                        <b-switch v-if="!reduceRight" v-model="hide">隐藏无效关键词</b-switch>
                    </b-field>
                </div>
            </b-sidebar>
        </section>
    </div>
</template>

<script>
    import { showKeys } from "./../functions.js";

    export default {
        name: 'keyMenu',
        props: {
            keysList: {
                type: Object
            },
            skillsNum: {
                type: Number
            }

        },
        data() {
            return {
                showKeys: showKeys,
                hide: true,
                reduceRight: false
            }
        }
    }
</script>
