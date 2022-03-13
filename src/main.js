import { decImproList, decImproTrueKeysList, skillsNum } from "./data/improList.js";
import { keysList, getTooltips } from "./data/keysList.js";
import keyMenu from "./components/keyMenu.vue";

let main = $(`#main`);
$('body').append(main);


//初始化
let improList = JSON.parse(LZString.decompressFromBase64(decImproList))
let improTrueKeysList = JSON.parse(LZString.decompressFromBase64(decImproTrueKeysList))


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
                                                <b-menu-item :label="file.name+(type.name=='种族'?'':'（'+file.len+'）')" :href="'#'+file.key">
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
        <div class="typeTitle">{{type.name}}</div>
        <div v-for="file in type.data" :id="file.key" class="fileText" v-html="file.data"></div>
    </template>
</div>
<key-menu v-bind:keys-list="keysList" v-bind:skills-num="skillsNum"></key-menu>`);
main.append(mainText);

if(process.env.NODE_ENV=="development")
{
    console.log(improTrueKeysList);
    console.log(improList);
}

//正文
let mainVue = new Vue({
    el: `#main`,
    data: {
        reduceLeft: false,
        improList: improList,
        keysList: improTrueKeysList,
        skillsNum: skillsNum
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
