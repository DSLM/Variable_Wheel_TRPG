import { decImproList, decImproTrueKeysList, skillsNum } from "./data/improList.js";
import { getTooltips } from "./data/keysList.js";
import improPage from "./components/ImproPage.vue";


//初始化
let improList = JSON.parse(LZString.decompressFromBase64(decImproList));
let improTrueKeysList = JSON.parse(LZString.decompressFromBase64(decImproTrueKeysList));


//左中右三栏
let body = $(`body`);
let main = $(`<impro-page id="main" v-bind:impro-list="improList" v-bind:keys-list="keysList" v-bind:num="num"></impro-page>`);
body.append(main);

if(process.env.NODE_ENV=="development")
{
    console.log(improTrueKeysList);
    console.log(improList);
}

//正文
let mainVue = new Vue({
    el: `#main`,
    data: {
        improList: improList,
        keysList: improTrueKeysList,
        num: skillsNum
    },
    components: {
        improPage
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
