import { improList } from "./data/improList.js";
import { keysList, offsetKeys, effectKeys, improTrueKeysList, getTooltips } from "./data/keysList.js";
import { improListDeal, rebuildKeys } from "./functions.js";
import { vars } from "./vars.js";
import keyMenu from "./components/keyMenu.vue";

let main = $(`#main`);
$('body').append(main);


//初始化
improList = JSON.parse(LZString.decompressFromBase64(improList))
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
<key-menu v-bind:keys-list="keysList" v-bind:skills-num="skillsNum"></key-menu>`);
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
        improList: newImproList,
        keysList: rebuildKeysList,
        skillsNum: vars.skillsNum
    },
    components: {
        keyMenu
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
