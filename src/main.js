import { improList } from "./data/improList.js";
import { keysList, offsetKeys, effectKeys, improTrueKeysList, getTooltips } from "./data/keysList.js";
import { improListDeal, rebuildKeys, showKeys } from "./functions.js";
import { vars } from "./vars.js";

let main = $(`#main`);
$('body').append(main);


//初始化
let newImproList = {name:"强化序列库", data:[]};
offsetKeys.forEach((key) => {
    improTrueKeysList["抵点"].subkeys[key] = {skills:{}, subkeys:{}, show:{files:new Set(), skills:new Set()}, lessArr:{files:new Set(), skills:new Set()}, moreArr:{files:new Set(), skills:new Set()}};
});
effectKeys.forEach((key) => {
    improTrueKeysList["效果"].subkeys[key] = {skills:{}, subkeys:{}, show:{files:new Set(), skills:new Set()}, lessArr:{files:new Set(), skills:new Set()}, moreArr:{files:new Set(), skills:new Set()}};
});


//左中右三栏
let mainText = $(`<div id="leftSideMenu">
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
                                                <b-menu-item :label="file.name+'（'+file.len+'）'" :href="'#'+file.key">
                                    </template>
                                </b-menu-item>
                            </template>
                        </b-menu-list>
                </b-menu>
                <b-field>
                    <b-switch v-model="reduceLeft">{{reduceLeft?"":"收起"}}</b-switch>
                </b-field>
            </div>
        </b-sidebar>
    </section>
</div>
<div id="middleText" class="middleText vscroll">
    <template v-for="type in improList.data">
        <div class="typeTitle">{{type.name}}</div>
        <div v-for="file in type.data" :id="file.key" class="fileText" v-html="file.data"></div>
    </template>
</div>
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




                        <b-menu-item :label="'所有（'+skillsNum+'）'" @click="function(){$('.fileText').show();$('.skillText').show();}"></b-menu-item>
                    </b-menu-list>
                </b-menu>
                <b-field>
                    <b-switch v-model="reduceRight">{{reduceRight?"":"收起"}}</b-switch>
                    <b-switch v-if="!reduceRight" v-model="hide">隐藏无效关键词</b-switch>
                </b-field>
            </div>
        </b-sidebar>
    </section>
</div>`);
main.append(mainText);

//文本分析
Object.keys(improList).forEach((type) => {
        let tempFolder = {name:type, data:[]};
        Object.keys(improList[type].files).forEach((file) => {
                let returnData = improListDeal(type, file, improList[type].id, improList[type].files[file]);
                let key = `file_${improList[type].id}_${improList[type].files[file].id}`;
                let tempFile = {name:file, key:key, data:`
                <div class="fileTitle">${file}</div>${returnData.data}`, len:returnData.len};
                tempFolder.data.push(tempFile);
        });
        newImproList.data.push(tempFolder);
});

//重构关键词
let rebuildKeysList = rebuildKeys(improTrueKeysList);

if(process.env.NODE_ENV=="development")
{
    console.log(improTrueKeysList);
    console.log(newImproList);
    console.log(rebuildKeysList);
}

//正文
let mainVue = new Vue({
    el: `#main`,
    data: {
        reduceLeft: false,
        hide: true,
        showKeys: showKeys,
        reduceRight: false,
        improList: newImproList,
        keysList: rebuildKeysList,
        skillsNum: vars.skillsNum
    }
});

//关键词悬浮窗
tippy('.fullKey', {
    content(reference) {
        const key = reference.getAttribute('data-key');
        const cost = reference.getAttribute('data-cost');
        return getTooltips(key, cost);
    },
    allowHTML: true,
    trigger: 'click',
    interactive: true,
    maxWidth: "50rem",
    theme: 'light-border'
});
