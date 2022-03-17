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
        <div v-if="hasImage" class="image">{{data["立绘"]}}<img :src="`/src/data/itemsImage/${data.key}.png`" alt="加载失败"/></div>
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
        <div v-if="hasImage" class="image">{{data["立绘"]}}<img :src="`/src/data/itemsImage/${data.key}.png`" alt="加载失败"/></div>
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
        <div v-if="hasImage" class="image">{{data["立绘"]}}<img :src="`/src/data/itemsImage/${data.key}.png`" alt="加载失败"/></div>
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
        <div v-if="hasImage" class="image">{{data["立绘"]}}<img :src="`/src/data/itemsImage/${data.key}.png`" alt="加载失败"/></div>
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
        <div v-if="hasImage" class="image">{{data["立绘"]}}<img :src="`/src/data/itemsImage/${data.key}.png`" alt="加载失败"/></div>
        <div>{{data["制作人"]}}</div>
    </div>
    <div v-else-if="data.type == 'car'">
        <div class="title3">{{data["名称"]}}</div>
        <div>品质：{{data["品质"]}}</div>
        <div>载具类型：{{data["载具类型"]}}</div>
        <div>基础防护：{{data["基础防护"]}}</div>
        <div>结构强度：{{data["结构强度"]}}</div>
        <div>载具出力：{{data["载具出力"]}}</div>
        <div>能量值：{{data["能量值"]}}</div>
        <div><span v-for='extra in ["机动", "耐久", "耗能", "保护", "灵活", "呼叫"]' v-if='data[extra+"补正"]>0'>{{extra}}补正：{{data[extra+"补正"]}}；</span></div>
        <div>载具防护：{{data["载具防护"]}}</div>
        <div>载具速度：{{data["载具速度"]}}</div>
        <div>载具耗能：{{data["载具耗能"]}}</div>
        <div>保护效果：{{data["保护效果"]}}</div>
        <div>载具时速：{{data["载具时速"]}}</div>
        <div>载具耐久：{{data["载具耐久"]}}</div>
        <div>重量：{{data["重量"]}}</div>
        <div>体积：{{data["体积"]}}</div>
        <div>恶劣环境：{{data["恶劣环境"]}}</div>
        <div>加速性能：{{data["加速性能"]}}</div>
        <div>动力类型：{{data["动力类型"]}}</div>
        <div>乘员上限：{{data["乘员上限"]}}</div>
        <div>灵活性：{{data["灵活性"]}}</div>
        <div>乘员防护：{{data["乘员防护"]}}</div>
        <div>呼叫时间：{{data["呼叫时间"]}}</div>
        <div>负重上限：{{data["负重上限"]}}</div>
        <div>总计耗点：<span class="prioNum">{{data["总计耗点"]}}</span>=<span class="prioNum">{{data["效果耗点"]}}</span>（效果耗点）+<span class="prioNum">{{data["防护耗点"]}}</span>（防护耗点）+<span class="prioNum">{{data["结构耗点"]}}</span>（结构耗点）+<span class="prioNum">{{data["出力耗点"]}}</span>（出力耗点）+<span class="prioNum">{{data["能量耗点"]}}</span>（能量耗点）</div>
        <div>价格：{{data["价格"]}}</div>
        <div v-html='data["效果"]'></div>
        <div>{{data["简介"]}}</div>
        <div v-if="hasImage" class="image">{{data["立绘"]}}<img :src="`/src/data/itemsImage/${data.key}.png`" alt="加载失败"/></div>
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
            },
            hasImage: {
                type: Boolean
            }

        }
    }
</script>
