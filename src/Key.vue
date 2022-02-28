<template v-for="k1 in keysList">
    <b-menu-item @click="if(k1.subkeys.length == 0)showKeys(k1.show)" :disabled="k1.subkeys.length == 0 && k1.show.files.size == 0" v-if="!(k1.subkeys.length == 0 && k1.show.files.size == 0 && hide)">
        <template #label="props">
            {{k1.key}}（{{k1.show.skills.size}}）
            <b-icon v-if="!reduceRight && k1.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
        </template>

        <template v-for="k2 in k1.subkeys">
            <b-menu-item @click="if(k2.subkeys.length == 0)showKeys(k2.show)" :disabled="k2.subkeys.length == 0 && k2.show.files.size == 0" v-if="!(k2.subkeys.length == 0 && k2.show.files.size == 0 && hide)">
                <template #label="props">
                    {{k2.key}}（{{k2.show.skills.size}}）
                    <b-icon v-if="!reduceRight && k2.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>

                <template v-for="k3 in k2.subkeys">
                    <b-menu-item @click="if(k3.subkeys.length == 0)showKeys(k3.show)" :disabled="k3.subkeys.length == 0 && k3.show.files.size == 0" v-if="!(k3.subkeys.length == 0 && k3.show.files.size == 0 && hide)">
                        <template #label="props">
                            {{k3.key}}（{{k3.show.skills.size}}）
                            <b-icon v-if="!reduceRight && k3.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                        </template>

                        <template v-for="k4 in k3.subkeys">
                            <b-menu-item @click="if(k4.subkeys.length == 0)showKeys(k4.show)" :disabled="k4.subkeys.length == 0 && k4.show.files.size == 0" v-if="!(k4.subkeys.length == 0 && k4.show.files.size == 0 && hide)">
                                <template #label="props">
                                    {{k4.key}}（{{k4.show.skills.size}}）
                                    <b-icon v-if="!reduceRight && k4.subkeys.length" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                </template>

                                <template v-for="k5 in k4.subkeys">
                                    <b-menu-item @click="if(k5.subkeys.length == 0)showKeys(k5.show)" :disabled="k5.subkeys.length == 0 && k5.show.files.size == 0" v-if="!(k5.subkeys.length == 0 && k5.show.files.size == 0 && hide)">
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
