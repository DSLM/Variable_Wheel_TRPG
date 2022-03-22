import { decItemList, decItemTrueKeysList, itemsNum, itemsImage } from "./data/itemList.js";
import { getTooltips } from "./data/keysList.js";
import itemPage from "./components/ItemPage.vue";


//初始化
let itemList = JSON.parse(LZString.decompressFromBase64(decItemList));
let itemTrueKeysList = JSON.parse(LZString.decompressFromBase64(decItemTrueKeysList));


//左中右三栏
let body = $(`body`);
let main = $(`<item-page id="main" v-bind:item-list="itemList" v-bind:keys-list="keysList" v-bind:num="num" v-bind:items-image="itemsImage"></item-page>`);
body.append(main);

if(process.env.NODE_ENV=="development")
{
    console.log(itemTrueKeysList);
    console.log(itemList);
}

//正文
let mainVue = new Vue({
    el: `#main`,
    data: {
        itemList: itemList,
        keysList: itemTrueKeysList,
        num: itemsNum,
        itemsImage: itemsImage
    },
    components: {
        itemPage
    },
    mounted:function(){
        let url = window.location.hash;
        if(!url) return;
        //跳转至指定位置
        document.getElementById(url.replace("#","")).scrollIntoView();
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
