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
        <div>{{data["效果"]}}</div>
        <div>{{data["简介"]}}</div>
        <div>{{data["立绘"]}}</div>
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
