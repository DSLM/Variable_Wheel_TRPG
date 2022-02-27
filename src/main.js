import { improList } from "./data/improList.js";
import { improTrueKeysList } from "./data/improTrueKeysList.js";
import { keysList, offsetKeys, effectKeys, getTooltips } from "./data/keysList.js";
import { skillsText, trueKeysMenu, showKeys } from "./functions.js";


let main = $(`#main`);
$('body').append(main);


let improMenu = {name:"强化序列库", data:[]};
let keysMenu = [], allKeys = [];

//左中右三栏
let leftText = $(`<div id="leftSideMenu">
    <section class="sidebar-layout">
         <b-sidebar
            position="static"
            :reduce="reduce"
            type="is-light"
            fullheight="true"
            open
        >
            <div class="menuContainer">
                <b-menu class="is-custom-mobile vscroll" type="is-dark">
                        <b-menu-list label="强化序列库">
                            <template v-for="folder in improMenu.data">
                                <b-menu-item :label="folder.name+'（'+folder.data.length+'）'">
                                    <template v-for="file in folder.data">
                                                <b-menu-item :label="file.name+'（'+file.len+'）'" :href="file.data">
                                    </template>
                                </b-menu-item>
                            </template>
                        </b-menu-list>
                </b-menu>
                <b-field>
                    <b-switch v-model="reduce">{{reduce?"":"收起"}}</b-switch>
                </b-field>
            </div>
        </b-sidebar>
    </section>
</div>`);
main.append(leftText);
let middleText = $(`<div id="middleText" class="middleText vscroll"></div>`);
main.append(middleText);
let rightText = $(`<div id="rightSideMenu">
    <section class="sidebar-layout">
         <b-sidebar
            position="static"
            :reduce="reduce"
            type="is-light"
            fullheight="true"
            right="true"
            open
        >
            <div class="menuContainer">
                <b-menu class="is-custom-mobile vscroll">
                    <b-menu-list label="词条">
                        <template v-for="k1 in keysMenu">
                            <b-menu-item @click="showKeys(k1.show)" :disabled="k1.data.length == 0 && k1.show.length == 0" v-if="!(k1.data.length == 0 && k1.show.length == 0 && hide)">
                                <template #label="props">
                                    {{k1.name}}
                                    <b-icon v-if="!reduce && k1.data.length > 0" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                </template>
                                <template v-for="k2 in k1.data">
                                    <b-menu-item @click="showKeys(k2.show)" :disabled="k2.data.length == 0 && k2.show.length == 0" v-if="!(k2.data.length == 0 && k2.show.length == 0 && hide)">
                                        <template #label="props">
                                            {{k2.name}}
                                            <b-icon v-if="!reduce && k2.data.length > 0" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                        </template>
                                        <template v-for="k3 in k2.data">
                                            <b-menu-item @click="showKeys(k3.show)" :disabled="k3.data.length == 0 && k3.show.length == 0" v-if="!(k3.data.length == 0 && k3.show.length == 0 && hide)">
                                                <template #label="props">
                                                    {{k3.name}}
                                                    <b-icon v-if="!reduce && k3.data.length > 0" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                                </template>
                                                <template v-for="k4 in k3.data">
                                                    <b-menu-item @click="showKeys(k4.show)" :disabled="k4.data.length == 0 && k4.show.length == 0" v-if="!(k4.data.length == 0 && k4.show.length == 0 && hide)">
                                                        <template #label="props">
                                                            {{k4.name}}
                                                            <b-icon v-if="!reduce && k4.data.length > 0" class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                                                        </template>
                                                    </b-menu-item>
                                                </template>
                                            </b-menu-item>
                                        </template>
                                    </b-menu-item>
                                </template>
                            </b-menu-item>
                        </template>
                        <b-menu-item label="所有" @click="function(){$('.fileText').show();$('.skillText').show();}"></b-menu-item>
                    </b-menu-list>
                </b-menu>
                <b-field>
                    <b-switch v-model="reduce">{{reduce?"":"收起"}}</b-switch>
                    <b-switch v-if="!reduce" v-model="hide">隐藏无效关键词</b-switch>
                </b-field>
            </div>
        </b-sidebar>
    </section>
</div>`);
main.append(rightText);

//二次处理文本
Object.keys(improList).forEach((type) => {
        let tempFolder = {name:type, data:[]};
        middleText.append($(`<div class="typeTitle">${type}</div>`));
        Object.keys(improList[type].files).forEach((file) => {
                let tempFile = {name:file, data:`#file_${improList[type].id}_${improList[type].files[file].id}`,
                len:improList[type].files[file].skills.length};
                //文本添加
                skillsText(middleText, file, improList[type].files[file], improList[type].id);
                tempFolder.data.push(tempFile);
        });
        improMenu.data.push(tempFolder);
});

//目录栏目
let leftSideMenu = new Vue({
    el: `#leftSideMenu`,
    data: {
          reduce: false,
          improMenu: improMenu
    }
});

//二次处理真实关键词
let orderImproTrueKeysList = {};
//只有需要的关键词
let keysLists = {"抵点": offsetKeys, "效果": effectKeys};
Object.keys(keysLists).forEach((k1) => {
    orderImproTrueKeysList[k1] = {"types":improTrueKeysList[k1].types, "subkeys":{}};
    keysLists[k1].forEach((k2) => {
        orderImproTrueKeysList[k1].subkeys[k2] = {"types":{}, "subkeys":{}};
    });
    orderImproTrueKeysList[k1].subkeys["自定义"] = {"types":{}, "subkeys":{}};
    Object.keys(improTrueKeysList[k1].subkeys).forEach((k2) => {
        if(orderImproTrueKeysList[k1].subkeys[k2] == undefined)
        {
            orderImproTrueKeysList[k1].subkeys[k2] = improTrueKeysList[k1].subkeys[k2];
        }
        else
        {
            orderImproTrueKeysList[k1].subkeys[k2].types = improTrueKeysList[k1].subkeys[k2].types;
            orderImproTrueKeysList[k1].subkeys[k2].subkeys = improTrueKeysList[k1].subkeys[k2].subkeys;
        }
    });
});
orderImproTrueKeysList["未分类"] = {"types":improTrueKeysList["未分类"].types, "subkeys":{}};

//关键词栏目
let tempData = trueKeysMenu(orderImproTrueKeysList, improList);
keysMenu = tempData[0];
let rightSideMenu = new Vue({
    el: `#rightSideMenu`,
    data: {
        reduce: false,
        hide: true,
        keysMenu: keysMenu,
        showKeys: showKeys
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
    theme: 'light-border',
});
