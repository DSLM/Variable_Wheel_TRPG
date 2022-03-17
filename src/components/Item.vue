<template>
    <div v-if="data.type == 'melee'">
        <div class="title3">{{data["名称"]}}</div>
        <div>品质：{{data["品质"]}}</div>
        <div>武器类别：{{data["武器大类"][0]}}——{{data["武器大类"][1]}}——{{data["武器大类"][2]}}</div>
        <div>攻击力结算：{{data["攻击力结算"]}}</div>
        <div>重量：{{data["重量"]}}</div>
        <div>体积：{{data["体积"]}}</div>
        <div>总计耗点：<span class="prioNum">{{data["总计耗点"]}}</span>=<span class="prioNum">{{data["攻击力耗点"]}}</span>（攻击力耗点）+<span class="prioNum">{{data["效果耗点"]}}</span>（效果耗点）</div>
        <div>价格：{{data["价格"]}}</div>
        <div v-html='data["效果"]'></div>
        <div>{{data["简介"]}}</div>
        <div class="image">{{data["立绘"]}}</div>
        <div>{{data["制作人"]}}</div>
    </div>
    <div v-else-if="data.type == 'range'">
        <div class="title3">{{data["名称"]}}</div>
        <div>品质：{{data["品质"]}}</div>
        <div>武器类别：{{data["武器大类"][0]}}——{{data["武器大类"][1]}}——{{data["武器大类"][2]}}</div>
        <div>攻击力结算：{{data["攻击力结算"]}}</div>
        <div>载弹量：{{data["载弹量"]}}</div>
        <div>射程：{{data["射程"]}}</div>
        <div>重量：{{data["重量"]}}</div>
        <div>体积：{{data["体积"]}}</div>
        <div>总计耗点：<span class="prioNum">{{data["总计耗点"]}}</span>=<span class="prioNum">{{data["攻击力耗点"]}}</span>（攻击力耗点）+<span class="prioNum">{{data["效果耗点"]}}</span>（效果耗点）+<span class="prioNum">{{data["载弹耗点"]}}</span>（载弹耗点）+<span class="prioNum">{{data["射程耗点"]}}</span>（射程耗点）</div>
        <div>价格：{{data["价格"]}}</div>
        <div v-html='data["效果"]'></div>
        <div>{{data["简介"]}}</div>
        <div class="image">{{data["立绘"]}}</div>
        <div>{{data["制作人"]}}</div>
    </div>
    <div v-else-if="data.type == 'armor'">
        <div class="title3">{{data["名称"]}}</div>
        <div>品质：{{data["品质"]}}</div>
        <div>防具部位：{{data["防具部位"]}}</div>
        <div>防御力等级：{{data["防御力等级"]}}</div>
        <div>重量：{{data["重量"]}}</div>
        <div>体积：{{data["体积"]}}</div>
        <div>总计耗点：<span class="prioNum">{{data["总计耗点"]}}</span>=<span class="prioNum">{{data["防御力耗点"]}}</span>（防御力耗点）+<span class="prioNum">{{data["效果耗点"]}}</span>（效果耗点）</div>
        <div>价格：{{data["价格"]}}</div>
        <div v-html='data["效果"]'></div>
        <div>{{data["简介"]}}</div>
        <div class="image">{{data["立绘"]}}</div>
        <div>{{data["制作人"]}}</div>
    </div>
    <div v-else-if="data.type == 'shield'">
        <div class="title3">{{data["名称"]}}</div>
        <div>品质：{{data["品质"]}}</div>
        <div>具体分类：{{data["具体分类"]}}</div>
        <div>防御力结算：{{data["防御力结算"]}}</div>
        <div>重量：{{data["重量"]}}</div>
        <div>体积：{{data["体积"]}}</div>
        <div>总计耗点：<span class="prioNum">{{data["总计耗点"]}}</span>=<span class="prioNum">{{data["防御力耗点"]}}</span>（防御力耗点）+<span class="prioNum">{{data["效果耗点"]}}</span>（效果耗点）</div>
        <div>价格：{{data["价格"]}}</div>
        <div v-html='data["效果"]'></div>
        <div>{{data["简介"]}}</div>
        <div class="image">{{data["立绘"]}}</div>
        <div>{{data["制作人"]}}</div>
    </div>
    <div v-else-if="data.type == 'tool'">
        <div class="title3">{{data["名称"]}}</div>
        <div>品质：{{data["品质"]}}</div>
        <div>重量：{{data["重量"]}}</div>
        <div>体积：{{data["体积"]}}</div>
        <div>总计耗点：<span class="prioNum">{{data["效果耗点"]}}</span>=<span class="prioNum">{{data["效果耗点"]}}</span>（效果耗点）</div>
        <div>价格：{{data["价格"]}}</div>
        <div v-html='data["效果"]'></div>
        <div>{{data["简介"]}}</div>
        <div class="image">{{data["立绘"]}}</div>
        <div>{{data["制作人"]}}</div>
    </div>
</template>

<script>
    export default {
        name: 'item',
        data () {
            return {
            }
        },
        props: {
            data: {
                type: Object
            }

        }
    }
</script>
