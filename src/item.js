import { decItemList, decItemTrueKeysList, itemsNum } from "./data/itemList.js";
import { getTooltips } from "./data/keysList.js";
import keyMenu from "./components/keyMenu.vue";
import item from "./components/Item.vue";

let main = $(`#main`);
$('body').append(main);


//初始化
let itemList = JSON.parse(LZString.decompressFromBase64(decItemList))
let itemTrueKeysList = JSON.parse(LZString.decompressFromBase64(decItemTrueKeysList))
console.log(itemList);

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
                        <b-menu-list label="道具序列库">
                            <template v-for="file in itemList">
                                <b-menu-item :label="file.name+'（'+Object.keys(file.menus).length+'）'">
                                    <template v-for="menu in file.menus">
                                        <b-menu-item :label="menu.name+'（'+menu.items.length+'）'">
                                            <template v-for="item in menu.items">
                                                        <b-menu-item :label="item['名称']" :href="'#'+item.key">
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
            <item v-for="item in menu.items" :id="item.key" v-bind:data="item" :class="['itemText', 'itemLevel-'+item.level]"></item>
        </template>
    </template>
</div>
<key-menu v-bind:keys-list="keysList" v-bind:num="itemsNum"></key-menu>`);
main.append(mainText);

if(process.env.NODE_ENV=="development")
{
    console.log(itemTrueKeysList);
    console.log(itemList);
}

//正文
let mainVue = new Vue({
    el: `#main`,
    data: {
        reduceLeft: false,
        itemList: itemList,
        keysList: itemTrueKeysList,
        itemsNum: itemsNum
    },
    components: {
        keyMenu,
        item
    },
    mounted:function(){
        let url = window.location.hash;
        if(!url) return;
        //跳转至指定位置
        $("#middleText").animate({scrollTop:$(url).offset().top},1000);
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
