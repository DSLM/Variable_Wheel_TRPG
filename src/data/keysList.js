export var offsetKeys = ['技能冷却时间','技能消耗能量','技能引导消耗','心无恶垢','不杀之刃','永不退避','永不背弃','机能缺损','临时虚弱','反噬','不稳定','誓约武具','严苛环境','乾坤一掷','连段携用','持续占用','条件响应','背水一战','乘胜追击','濒死反击','压倒','独行者','奉献','适应性战术'];

//武具强化是技能词条
export var effectKeys = ['技能生效范围','技能生效目标数量','减益效果持续时间','增益效果持续时间','技能释放动作','攻击技能','增幅','技能增幅','稳固攻势','致命','伤害增幅','甲胄反击','封锁','生命栓锁','护甲击破','护甲削减','技能打断','目标锁定','痛击','惊骇','晕击','麻痹打击','寒击','放血','灼烧','注毒','能量抽取','能量燃烧','缓速','强制位移','迟钝','禁令','命中增幅','稳定格挡','坚壁防御','强韧之甲','护甲','连锁护甲','适应性护甲','专项防护','千层甲','甲胄融合','庇护装甲','闪避/防御增幅','守护屏障','防护措施','第六感','心智壁垒','强健体魄','抗性提升','战斗续航','极限顽强','困兽之斗','生存欲望','无惧伤痛','愈合','生命恢复','瞬间恢复','治疗增幅','复苏之风','生命窃取','过量治疗','能量恢复','快速冥想','快速恢复','净化','驱散','属性增幅','能量池增幅','远击','远击增幅','迅捷','熟练','专家','皮糙肉厚','反射强化','疾行','水下呼吸','跃升','负重增幅','位移','学识渊博','收容','技能容纳','透体','光明化','黑暗化','安魂曲','灵媒','灵击','飞行','隐身','意志解放','愈战愈勇','随机应变','蓄势待发','幸运女神的眷顾','技能强化','高速神言','逆境行者','命运重铸','显赫武具','武具强化'];

//更改：生命恢复，能量恢复，远击增幅
export var keysList = {
'技能冷却时间':'[技能冷却时间]：在一回合（也即当回合使用后下回合仍可继续使用程度的冷却时间）的基础上，冷却时间每增加一回合便会为技能附带50点耗点的收益，这个上限至多为五回合。在五回合后，技能的冷却时间仅有一场战斗限定一次/一次干涉任务限定一次两种，二者分别会为技能带来300点耗点/600点耗点的收益。',
'技能消耗能量':'[技能消耗能量]：每10点体力/能量消耗都将为技能附带50耗点的收益，当混合使用体力/能量消耗时，则将收益公式更改为最终消耗每15点提供50耗点的收益。若该消耗为持续消耗，则每有4点体力/能量用以维持当回合的消耗，便提供50耗点的收益，当混合使用体力/能量消耗时，则将收益公式更改为总体消耗每6点提供50耗点的收益。',
'技能引导消耗':'[技能引导消耗]：3AP以后，技能每额外消耗1点AP，都将为其带来50耗点的收益，此效果限定作用于引导动作技能。',
'心无恶垢':'[心无恶垢]：在取得附带这一词条的能力后，角色将在道德层面上受到极端严苛的自我管束，盗窃、抢劫、无端杀戮等广义且普遍认可的恶行对于为自己添加了这一词条的角色而言均属于禁止事项。但诸如软弱即罪的诡辩并不适用于这一词条，审时度势后做出的退避等行为并不会直接被计作恶行，而非自我意识主导下做出的言行也不会使得该词条的持有者受到影响，例如催眠词条持有者后使其进行词条涵盖范围内的恶行。但值得注意的是，对于词条持有者的保护仅限于“非自主、自愿进行”的前提下。当角色由“被催眠——作恶”的流程中有任何一个环节带有自愿性质时，这个保护将会失效。也即，角色无法通过自愿接受催眠的手段逃避作恶惩罚。当这名角色进行上述条件包含的恶行时，他的意志值能量池将被封锁，附带这一词条的能力将全部永久失效，且占用技能栏，需洗去技能后才可重新使用该技能栏。并且每存在一项包含该词条的能力，即会对其造成相当于该能力优先等级+300/5的，不可豁免的伤害。附加这一词条的能力将因此获得相当于150耗点的额外收益。这个词条可以应用于装备，在将其应用于装备时，这将视为这件装备获得了可以任意投入的150点点数。同时，封锁技能栏的惩罚更改为封锁装备栏，需要花费与购买、后续跟进强化该装备的总消费相等的资源才能将其解锁。取消将造成的伤害，仅计算为装备彻底损坏。以上损失均需记录进角色的账单中。部分干涉任务，主持人有权利拒绝带有此效果的调律者进入。',
'不杀之刃':'[不杀之刃]：在取得附带这一词条的能力后，角色将会明确不得以任何手段夺走他人性命的准则，当这名角色以任何手段杀死任何单位时，他的意志值能量池将被封锁，附带这一词条的能力将全部永久失效，且占用技能栏，需洗去技能后才可重新使用该技能栏。并且每存在一项包含该词条的能力，即会对其造成相当于该能力优先等级+300/5的，不可豁免的伤害。这个负面影响仅可以作用于技能，且能为其作用的技能带来相当于150点耗点的收益，同时为持有该词条的角色提供可以自由控制自身对其他单位造成的伤害量为0-伤害上限的能力，值得注意的是，控制伤害量的能力仅能选定作用的行动，而不能选定作用的范围。也即，一次范围性攻击将造成的伤害如被控制，则角色将无法决定范围中的哪些角色不享受/承受伤害控制带来的伤害减免或伤害增加，只能选择是否将伤害量控制在某一数值。同时，角色因自身能力受到的反噬伤害等对自身造成的伤害将无法被这一能力控制。这一能力的生效原理来源于调律者对自身序列强度的控制，因此在进行时无需顾虑“如何控制手雷破片造成的伤害”一类的问题。词条附带能力同时仅生效一个，多余部分则将被覆盖。当角色被判定为间接杀死某些单位时，仅仅会使他的意志值能量池封锁。以上损失均需记录进角色的账单中。',
'永不退避':'[永不退避]：在取得附带这一词条的能力后，角色将会明确绝不在战斗中逃离或逃避战斗的准则，当这名角色逃避战斗，或从战斗中逃离时，他的意志值能量池将被封锁，附带这一词条的能力将全部永久失效，且占用技能栏，需洗去技能后才可重新使用该技能栏。并且每存在一项包含该词条的能力，即会对其造成相当于该能力优先等级+300/5的，不可豁免的伤害。附加这一词条的能力将因此获得相当于150耗点的额外收益。这个词条可以应用于装备，在将其应用于装备时，这将视为这件装备获得了可以任意投入的150点点数，封锁技能栏的惩罚更改为封锁装备栏，需要花费与购买、后续跟进强化该装备的总消费相等的资源才能将其解锁。同时取消将造成的伤害，仅计算为装备彻底损坏。以上损失均需记录进角色的账单中。',
'永不背弃':'[永不背弃]：在取得附带这一词条的能力后，角色将会明确绝不在战斗中先于友方单位离场的准则，这一准则同样受到与“心无恶垢”词条相同的保护，也即角色在任何环节中都处于非自主、自愿状况下进行的行为均不会被计入玩家行为。当这名角色先于任何友方单位从战斗中离开时，他的意志值能量池将被封锁，附带这一词条的能力将全部永久失效，且占用技能栏，需洗去技能后才可重新使用该技能栏。并且每存在一项包含该词条的能力，即会对其造成相当于该能力优先等级+200/5的，不可豁免的伤害。附加这一词条的能力将因此获得相当于100耗点的额外收益。这个词条可以应用于装备，在将其应用于装备时，这将视为这件装备获得了可以任意投入的100点点数，封锁技能栏的惩罚更改为封锁装备栏，需要花费与购买、后续跟进强化该装备的总消费相等的资源才能将其解锁。同时取消将造成的伤害，仅计算为装备彻底损坏。以上损失均需记录进角色的账单中。',
'机能缺损':'[机能缺损]：附带这一词条的能力通常是“束缚使用者感官以带来更强的念力”、“屏蔽感知以发挥出更加强大的体能”类型的能力，这些能力通常是被动能力，但并不代表只有被动能力可以附加这个词条。为一个能力附带机能缺损词条时，制作者需从任意一项属性、主动/被动方的闪避或防御判定、移动速度中选择至多三项，作为该能力将为持有者带来的缺损点。缺损点与耗点的换算为：每5点指定属性的下降视为为该技能附加50点耗点、每15点主动方/被动方的闪避或防御判定的下降视为为该技能附加50点耗点、每15米单次移动距离上限的降低视为为该技能附加50耗点。机能缺损的耗点附加仅能以50耗点的整数进行，也即制作者无法让某一属性下降3点后以2点其他属性填补，且通过技能缺损来获得的耗点收益至多无法超过300点，或让某一判定下降10点后用5点其他判定填补。机能缺损词条的使用例为：某制作者以兑换技能后降低20点反应、5点爆发、15点被动方闪避判定为代价，即可为该技能带来额外的300耗点。但这一词条有以下需要注意的要点：因该词条降低的属性属于基础属性，当角色的对应基础属性小于等于因自身拥有的、附带机能缺损词条的能力而下降的数值总和时，角色的兑换将不成立。当角色的爆发/反应属性小于等于因自身拥有的、附带机能缺损词条的能力而下降的防御/闪避判定中任何一方的数值总和*2时，兑换同样不成立。即，调律者A在自身的基础反应力为30点，但他兑换了某一降低25点基础反应力的能力后，就无法再次兑换任何将会降低自身反应力属性的能力或装备，除非他的基础属性再次提升。当调律者A的反应力属性为40点时，他在总计拥有75点被动方闪避判定减值时，就无法再次兑换任何将会降低自身被动方闪避判定值的能力或装备。当角色的单回合移动距离上限因附带机能缺损的技能而变为负数时，角色将进入无法行动的瘫痪状态。',
'临时虚弱':'[临时虚弱]：附带这一词条的能力通常是“使用过后将极大消耗精力，导致使用者虚弱”类型的能力，这一词条因其特殊性不能应用于被动能力。临时虚弱持续的时间限定为一次战斗/一轮回，附带临时虚弱词条的能力的冷却也应当与临时虚弱保持一致，但这并不会影响到冷却时间原先就会为能力带来的收益。为一个能力附带临时虚弱词条时，制作者需从任意一项属性、主动/被动方的闪避或防御判定中选择至多两项，作为该能力将为持有者带来的临时虚弱。临时虚弱与耗点的换算为：每5点指定属性的下降视为为该技能附加50点耗点、每15点主动方/被动方的闪避或防御判定的下降视为为该技能附加50点耗点、每15米单次移动距离上限的下降视为为该技能附加50耗点。在临时虚弱时长为一轮回时，换算将会被调整为：每3点指定属性的降低视为为该技能附加50点耗点、每9点主动方/被动方的闪避或防御判定的降低视为为该技能附加50点耗点,每6米单回合移动距离上限但只能选择一项。临时虚弱的耗点附加仅能以50耗点的整数进行，且上限同样为300点。临时虚弱同样受到与机能缺损相同的限制，也即对应基础属性不得小于等于因附带临时虚弱及机能缺损词条的技能带来的下降数值的总和，爆发/反应不得小于等于因附带临时虚弱及机能缺损词条的技能带来的防御/闪避判定中任何一方的数值总和*2，当角色的单回合移动距离上限因附带机能缺损及临时虚弱的技能而变为负数时，角色将进入无法行动的瘫痪状态。当除开移动距离上限的条件不足仍然使用附带临时虚弱词条的技能时，角色将因此而在技能施放后死亡，但这并不会影响技能的施放。',
'反噬':'[反噬]：附带这一词条的能力通常是“使用过后将会直接导致使用者重伤垂危，甚至死亡”类型的能力，这一词条因其特殊性不能应用于被动能力。当角色使用附带反噬词条的能力后，将会直接受到无法以任何方式减免的伤害。这一伤害每有50点，即视为带来50点耗点，这一伤害至多为300点，且可以致死，且先于包括瞬发动作在内的任何动作进行生效并结算。',
'不稳定':'[不稳定]：附带这一词条的能力通常是“降低角色对该能力的掌握以发挥更强也更不稳定的效果”类型的能力。这一词条不能应用于被动能力的抵点。在该技能释放时（即这一次技能在生效时进行的所有判定），任何涉及到需要释放者进行属性对抗时都需要额外进行一次鉴定并取两次鉴定中的最小值作为最终结果。此时，该技能将获得相当于100耗点的收益。',
'誓约武具':'[誓约武具]：附带这一词条的能力首先需要选择应当持有的武器类型，这一选择应当细分至刀枪剑戟程度的小类，即使是魔导器体系，也应当加入魔导器-XX的细分。只有在一场任务开始之前，确定自己携带的一把属于此类的武器，只有在使用这把武器作为主手武器时，附带这一词条的能力才能生效。附带该词条的能力将获得100耗点的收益。将誓约武具直接设定为徒手打击时，可以获得200点耗点的收益。此词条无法作用于道具中，即武器，防具或是工具无法通过此效果获得额外的抵点。',
'严苛环境':'[严苛环境]：附带这一词条的能力必须在选定的某一特定环境下才能生效或施放，目前仅可选择黑夜、白昼、高温/低温环境四项，且高温/低温环境的判断标准交予主持人。附带这一词条的能力将获得100耗点的收益。',
'乾坤一掷':'[乾坤一掷]：附带这一能力的词条不得为被动能力，且拥有三档的生效概率，即：25%、50%、75%。当生效概率为75%时，技能生效条件为进行一次1d100，且骰子出目大于25，否则将不返还AP、动作、消耗、冷却，这将为技能附带100耗点的收益。当生效概率为50%时，技能生效条件为进行一次1d100，且骰子出目大于50，否则将不返还AP、动作、消耗、冷却，这将为技能附带200耗点的收益。当生效概率为25%时，技能生效条件为进行一次1d100，且骰子出目大于75，否则将不返还AP、动作、消耗、冷却，这将为技能附带400耗点的收益。',
'连段携用':'[连段携用]：附带这一词条的能力首先需要选定一个同系列制作，或序列库中已有的非被动前置能力。选定之后，只有在上一个动作时使用过这一能力后，附带该词条的能力方可发动。这一词条将会为能力带来100耗点的收益。拥有连段携用的能力同时也可以成为被其他附带连段携用词条选中的前置能力。拥有连段携用词条的能力每有一个附带连段携用的前置能力，它就在原先的基础上再次获得100耗点的收益，至多可叠加至获得300耗点的收益。',
'持续占用':'[持续占用]：附带该词条的能力限定为被动，且需要选择体力/能量能量池中的一个作为占用能量池，并设置占用数量。附带该词条的能力将会封锁住这一部分对应的能量池，除非该项能力不再生效（例如技能被封印或是道具与持有者完全切断链接）。每封锁10点体力/能量池，这一词条将会为能力带来100耗点的收益。当角色拥有多个该词条效果时，封锁能量池的效果将会叠加，但最终总计封锁的量无法超过角色所持有的对应能量池的上限。',
'条件响应':'[条件响应]：附带该词条的效果只有在针对特殊的目标时才能够生效（不包括持有该词条的角色自身的特殊状态），仅在针对[针对种族大类，例如光明生物/黑暗生物/构造体/或一类较为普遍的概念]时生效可以提供100点耗点；仅在针对[特定种族/特殊状态/或一类较为罕见的概念]时生效可以提供200点耗点，但是否生效的判断标准交予主持人。条件响应可以不对单个技能中的全部效果生效，但必须对至少2倍于泛用效果的耗点生效，比如一个带有人类特攻效果的600点技能，其中至少400耗点必须是仅仅面对人类才能触发的效果。',
'背水一战':'[背水一战]：这类词条在使用者生命值降低到[壮硕值*5]或是[壮硕值*2]以下时才能生效，这两种词条分别可以为该能力提供100/300点的收益。',
'乘胜追击':'[乘胜追击]：这类词条在目标的生命值降低到[壮硕值*5]或是[壮硕值*2]以下时才能生效，这两种词条分别可以为该能力提供100/300点的收益。',
'濒死反击':'[濒死反击]：这类词条仅能够用于瞬发类技能，在使用者生命值归零时才能发动，发动后角色将无法再触发[战斗续航]效果。这个词条无法与[临时虚弱]和[反噬]词条同时使用，将为技能提升相当于600耗点的收益，且该技能也将因此被取消冷却时间的耗点收益。',
'压倒':'[压倒]：该词条技能作用于必须进行对抗的能力，例如攻击/防御/释放技能/属性对抗，只有当角色的对抗结果高于对方X点才能生效，X每提升20点便可以抵消50点的消耗',
'独行者':'[独行者]：附带该词条的技能必须于持有者在执行干涉任务时，不与友方调律者同行才可以生效（具体何种情况可以被视为没有同行者，需要由主持人临场判定），这个效果将为本项技能提供100点耗点收益，当设定为全部友方单位的时候，再额外获得100点耗点收益。',
'奉献':'[奉献]：附带该词条的效果只有在以友方单位为目标（无法对持有该效果的角色自身生效）施加增益效果[增益效果包括各项增幅与治疗效果，不包括直接与非直接的减益与伤害效果]，时才能生效可以为这个效果提供100点抵点，但一个目标是否能够被判断为友方角色的判断标准交予主持人。',
'适应性战术':'[适应性战术]：附带该词条的技能必须有多个不同的效果，但这两个效果将共享效果的冷却时间与能量消耗。每当各个效果耗点都有200点（即每个效果拥有200耗点），该词条就可以为每个效果提供100点的点耗点收益。该词条不能用于被动效果，效果必须在不同情况下才能触发，且无法对分至多个效果的的同一词条效果生效。',
'技能生效范围':'[技能生效范围]：此效果初始为100耗点，该效果将根据自身的打击类型的不同，在罩形、扇形、环形/柱形/线形打击的技能释放时对10/20/50m范围内（根据技能释放类型来决定具体的范围，例如罩型打击的影响范围可能为以角色为中心的半径10m的罩形，柱形打击的范围则是角色面朝方向20m长的一个柱形范围等）的3/2/1个目标生效，每增加50耗点则可以提升10m的影响范围。该效果在作用于柱型打击的技能时每增加50耗点则可以提升20m的影响范围，作用于线型打击时每增加50耗点则可以提升50m的影响范围。',
'技能生效目标数量':'[技能生效目标数量]：每50耗点可以使得技能可以额外影响范围内的一个目标',
'减益效果持续时间':'[减益效果持续时间]：此效果基础耗点为0点，可以使技能效果造成的减益或伤害效果可以持续生效1回合，在此基础上每消耗100点则可以在1回合的基础上额外再持续一回合。此效果作用于非直接减益类效果时（直接减益效果包括降低属性、赋予易伤、或是降低某项判定），将在每回合的结束阶段（即所有在场的角色行动完毕后）结算，直到持续时间结束的那一回合结算最后一次。在涉及对抗的场合时，将在其释放后每个回合结束时进行对抗的判定。',
'增益效果持续时间':'[增益效果持续时间]：此效果基础无需耗点，可以使技能效果造成的增益效果可以持续生效1回合，在此基础上每消耗50点则可以在1回合的基础上额外再持续一回合，也可以消耗200点使这个技能持续到战斗结束为止（这会使得该技能无法使用冷却时间进行抵点，同时该技能只有在解除后的下一回合才能够再次开启）。此效果作用于非直接增益类效果时（直接增益效果包括提升属性、伤害、或是某项判定），将在每回合的结束阶段（即所有在场的角色行动完毕后）结算，直到持续时间结束的那一回合结算最后一次。在涉及对抗的场合时，将在其释放后每个回合结束时进行对抗的判定。',
'技能释放动作':'[技能释放动作]：此效果为将技能是释放方式设定为特定指令的耗点，将技能释放方式设置为瞬发释放时，耗点为100点，但瞬发效果将无法携带直接对其他目标造成伤害的效果（例如发起攻击或赋予持续伤害效果）；将技能释放方式设置为主动释放或是引导释放则无需额外支付释放动作耗点。',
'攻击技能':'[攻击技能]：每100耗点可以对目标造成50点伤害，消耗一个[主动技能/引导]动作发动。',
'增幅':'[增幅]：对通常攻击指令（这里仅指指令类型3中的通常攻击指令，不包括主动技能）的伤害加成，每100耗点可以使角色获得20点任意类型的伤害加成。',
'技能增幅':'[技能增幅]：角色在发动非常规攻击时（这里指主动/引导动作释放的固定伤害类技能，不包括以技能形式发动的通常攻击），每100耗点可以使角色造成的伤害量外加50点。',
'稳固攻势':'[稳固攻势]：（200/400/600）（唯一效果，无法叠加）角色每有2个护甲等级，那么其伤害量就会被动增加10/20/30，使用该词条的被动效果有一回合的冷却时间（即单个增伤效果每回合只能触发一次）。',
'致命':'[致命]：此词条在（200/400/600）耗点时，此次攻击对敌人造成的有效伤害增加（1/2/3）倍敌方壮硕值的额外伤害。该词条可以被设置为被动效果，在每回合第一次使用任意攻击指令（非主动技能/瞬发发动作攻击指令）时触发。这一词条的收益每个角色在同一回合仅可触发一个，拥有多个致命词条的玩家可以自行选择一个自身拥有的任意等级的致命生效，其余致命效果则视为被覆盖。',
'伤害增幅':'[伤害增幅]：以一个[主动/引导]动作进行一次通常攻击(包含远程武器攻击与赋能攻击)，该词条100耗点时使得这次通常攻击的伤害上升30点，往后每提升100耗点都会再上升30点攻击力。',
'甲胄反击':'[甲胄反击]：（固定每600耗点效果）角色当前的护甲等级高于或等于8级时才能发动，在受到一次有效的近战伤害（实际受伤至少hp30以上）时·如果角色的生命值未归零，那么可以以一个瞬发动作立即把这个伤害量（无视防御等级带来的伤害减免，但无法受到任何效果加成）以一次可防御或闪避的攻击形式反击给攻击者。该词条效果无法叠加，当拥有多个该词条效果时视为覆盖处理。',
'封锁':'[封锁]：持有该词条的角色命中的生物类目标，目标在持续时间内所受到的任何生命恢复效果都将减半（向上取整），该效果固定为400耗点，效果可刷新但无法叠加，使用该词条的效果必须设置持续时间。',
'生命栓锁':'[生命栓锁]：（100耗点）持有该词条的角色命中的生物类目标，目标在该效果持续时间内所受到的任何生命恢复效果都将减少50，该效果每提升100耗点则减少治疗的效果提升50点，效果可刷新但无法叠加，使用该词条的效果必须设置持续时间。',
'护甲击破':'[护甲击破]（唯一效果，无法叠加）：每100耗点增加2护甲击破等级，每级护甲击破可击破等级的防御力等级。如果自身持有的护甲击破等级小于目标的护甲等级，则在结算伤害的防御力数值减伤判定时也可以每100耗点无视50点的防御力数值（仅仅只是无视对方提供防御力等级的防御数值而已，其他特殊类型的减伤则无法无视）。',
'护甲削减':'[护甲削减]（唯一效果，无法叠加）：每100耗点增加1护甲削弱等级，每级护甲削弱可削弱目标等级的防御力等级。该效果至多将目标的护甲削减至0级，且在目标拥有的总记护甲等级超过12级时，将优先削减这部分溢出的护甲等级（也就是当目标总级拥有16级护甲时，尽管目标在实际进行护甲判定时护甲已经抵达满值，但在收到6级护甲削减影响后，实际判定时仍然可以享受10级护甲等级的收益）。使用该词条的效果必须设置持续时间。当一个角色同时受到多个该词条效果影响时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'技能打断':'[技能打断]：该词条基础耗点为300点，每额外耗100则提升一级，且使用该词条的技能释放方式必须为瞬发动作，在对方释放主动或是引导类型的技能时，根据效果等级通过与对方进行一次我方判定结果-30/-20/-10/-0的精神对抗（当多个角色同时进行打断时将只取其中的一个打断效果生效），成功后可打断对方的释放并让对方的技能强制陷入冷却（无冷却则不陷入），即使失败也可以根据效果等级使对方正在释放/引导的技能额外添加1/1/2/2AP的额外引导时间，无法打断瞬发和强制瞬发技能，此词条起始为3级（300耗点），可以打断最高600优先度的技能。',
'目标锁定':'[目标锁定]：该词条耗点固定为400/600耗点，在400点时命中目标后会对其施加[标记]效果，被[标记]的角色将会持续暴露在对其施加[标记]的角色的主要感官中，这使被[标记]的角色即使进入潜行也无法对施加者进行突袭。在600耗点时，施加标记的角色可以使这个标记被其选定的任意数量的角色共享效果。使用该词条的效果必须设置持续时间。当一个角色同时受到多个该词条效果影响时，会分别呈现在多个施加者和其选定的共享角色的主要感官中。',
'痛击':'[痛击]：该词条耗点为100耗点，每消耗100点提升一级，在命中目标后可以选择与目标强制进行一次壮硕对抗，若对抗成功则使其触发[恍惚]debuff。（[恍惚]：身体在外力的作用下陷入短暂的虚弱，进行的任何战斗对抗类判定都将下降[该词条等级*15]点的结果值。），使用该词条的效果必须设置持续时间。当这个词条的耗点/200后，大于目标角色的星级时（生物模板中的推荐星级，升格者视为六星），带有这个效果陷入[昏厥]的角色，昏厥的时间将会延长至双倍且期间无法被主动唤醒。',
'惊骇':'[惊骇]：该词条基础耗点为100耗点，每消耗100点提升一级，在命中目标后可以选择与目标强制进行一次精神对抗，若对抗成功则使其触发[震慑]debuff。（[震慑]：难以言喻的恐慌感涌上心头，进行的任何战斗对抗类判定都将下降[该词条等级*15]点的结果值。），使用该词条的效果必须设置持续时间。当这个词条的耗点/200后，大于目标角色的星级时（生物模板中的推荐星级，升格者视为六星），带有这个效果陷入[昏厥]的角色在醒来后将会进入[崩溃]状态。',
'晕击':'[晕击]：该词条固定为600耗点，在命中目标后可以选择与目标强制进行一次[角色的壮硕/精神属性与目标的壮硕/精神属性对抗（这部分由受到攻击的目标决定）]，若对抗成功则使其触发[眩晕]debuff，眩晕持续时间固定为1战斗回合，此效果对同一目标在一次战斗中至多生效一次。',
'麻痹打击':'[麻痹打击]：该词条200耗点时进行攻击命中目标并造成了有效伤害后，会给目标造成“麻痹1”效果，400耗点时可造成“麻痹2”效果，以此类推，最高800耗点。麻痹不可叠加但可以刷新，使用该词条的效果必须设置持续时间。',
'寒击':'[寒击]：该词条200耗点时进行攻击命中目标并造成了有效伤害后，会给目标造成“冻伤1”效果，400耗点时可造成“冻伤2”效果，以此类推，最高800耗点。冻伤不可叠加但可以刷新，使用该词条的效果必须设置持续时间。',
'放血':'[放血]：当附带该词条的攻击对目标造成了有效伤害时（具体限度由主持人临场决定），会附加给目标根据该词条耗点的[流血]效果，流血效果一般而言至少持续至战斗结束，但可以通过合理的包扎或是治疗来解除此效果。该词条的耗点与[流血]效果的等级之间的关系如下，100/300/600/900/1200对应着[1/2/3/4/5级流血]。',
'灼烧':'[灼烧]：当附带该词条的攻击对目标造成了有效伤害时（具体限度由主持人临场决定），会附加给目标根据该词条耗点的[燃烧]效果，[燃烧]效果一般而言至少持续至战斗结束，但可以通过合理的扑灭手段或是治疗来解除此效果。该词条的耗点与[燃烧]效果的等级之间的关系如下，100/300/600/900/1200对应着[1/2/3/4/5级燃烧]。',
'注毒':'[注毒]：当附带该词条的攻击对目标造成了有效伤害时（具体限度由主持人临场决定），将附加给目标根据该词条耗点的[中毒]效果，[中毒]效果一般而言无法被主动消散，但可以通过祛毒或净化等方式解除。该词条的耗点与[中毒]效果的等级之间的关系如下，100/300/600/900/1200对应着[1/2/3/4/5级中毒]。对于构造体或灵魂体这类种族的角色而言，毒素不一定能够生效（具体由主持人临场判定）。',
'能量抽取':'[能量抽取]：该词条的基础耗点为100点，每提升100点耗点则效果提升1级，至多可提升至6级，可以在成功命中后额外消耗对方的能量/体力值，可以额外消耗对方1d4/2d4/3d4/4d4/5d4/6d4体力值或是3d4/4d4/5d4/6d4/7d4/8d4点能量值。在抽取目标的体力/能量时，若目标的能量值被降低至0点，则这个效果还将额外对对方造成等于[抽取量*5]的额外伤害，具体是消耗体力还是能量需要制作者在创作序列时决定。当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。在面对一些可以将某一能量池通用另一能量池的种族时(例如女妖)，无论时抽取体力还是能量的效果在这时都将抽取对方那个通用的能量池（例如女妖的能量池也会被体力吸取的效果抽取等量的能量）。',
'能量燃烧':'[能量燃烧]：该词条的基础耗点为100点，每提升100点耗点则效果提升1级，至多可提升至6级，可以在成功命中后附加[能量燃烧]效果，可以使对方的能量/体力（制作时决定）每回合结束时流失一定的量，该效果必须设置持续时间。（[能量燃烧]：每回合结束时，角色都将损失[该词条等级*3点]能量值/体力值，若角色的能量池被降低为0点，则将对角色造成等同于[损失量*10]的生命值损伤。）',
'缓速':'[缓速]：该词条每提升100耗点则可以在命中后降低目标15m单次移动距离，最低降低至0m。该词条造成的效果在同一目标身上只取最高耗点的效果生效，多次生效时不可叠加但可以刷新持续时间，使用该词条的效果必须设置持续时间。',
'强制位移':'[强制位移]：该词条不可被设定为被动效果，初始耗点100，在命中目标后可以选择与目标强制进行一次[角色的爆发/精神属性与目标的壮硕的对抗]，若对抗成功则可以将目标向靠近或远离角色至多20m（具体是拉近还是击退需要在制作时决定），每提升100耗点便可以额外移动目标20m，但该效果的冷却时间不得低于1回合，若是被动效果则在1回合内至多触发一次。',
'迟钝':'[迟钝]：词条固定为300/600/900耗点，在命中目标后可以选择与目标强制进行一次[角色的爆发/精神属性与目标的壮硕的对抗]，若对抗成功则使其触发[迟钝]效果，使用该词条的效果必须设置持续时间。([迟缓]：使对方在持续时间内的先攻判定-40/-80/-120，且不再能够享受优先权效果。)',
'禁令':'[禁令]：词条固定为200/400/600耗点，在命中目标后可以选择与目标强制进行一次[角色的爆发/精神属性与目标的壮硕值或精神力对抗（对方决定）]，若对抗成功则使其触发[禁令]效果，封锁对方至多1/2/3个技能或是装备效果，使用该词条的效果必须设置持续时间。具体禁用哪个技能或装备需要使用者在释放时决定，在封锁装备效果时保留装备的基础面板。([禁令]：角色在持续时间内将无法激活被指定的技能或装备的效果，但被动效果与已经生效的效果不会受到影响，且同一角色不会再一场战斗中再受到[禁令]效果的影响。)',
'命中增幅':'[命中增幅]：提升自身的主动闪避或防御（择一）判定，每100耗点提升你的这类对抗判定15点点数，多个使用该词条的效果在最终计算增益效果上限时将相加并作为一个整体进行计算。',
'稳定格挡':'[稳定格挡]：（200/400/600耗点效果）如果你防御判定成功，且这次防御对抗你的结果高于对方30/20/10点及以上，那么在伤害结算时如果对方具有破甲击破效果，则强制令对方的破甲击破等级在这次结算中下降3/6/8级计算。该效果同一回合内至多触发1/2/3次，即使角色身上携带有多个该词条效果，也只取耗点最高的一个生效。',
'坚壁防御':'[坚壁防御]：该词条耗点固定为300/600，可以使角色在每次成功防御时，在原本的防御成功的伤害减免基础上享受额外的相当于自身[壮硕值*1]/[壮硕值*2]的伤害减免，当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'强韧之甲':'[强韧之甲]：（固定500耗点）在受到带有破甲的打击时（无论其等级），进行一次[1D100+壮硕>100]的判定，如果判定成功则无视这次破甲效果，只结算其伤害量，在每回合的第一次判定成功后，该效果都将进入冷却。',
'护甲':'[护甲]：每150点数可以增加1级的护甲等级，此词条不会算作效果技能品质的颜色阶级而是基础数据，之所以被放入词条目录当中，是因为有些技能可能会涉及到150点数1级的护甲换算，但是你也可以制作300/600这样150倍数的护甲值增益技能。',
'连锁护甲':'[连锁护甲]：（200/400/600耗点）你每有1级的护甲等级，在受到攻击时你就可以得到固定5/10/15点的伤害减免，拥有多个连锁护甲词条的角色可以自行选择一个自身拥有的任意等级的连锁护甲生效，其余连锁护甲效果则视为被覆盖（无法生效）。',
'适应性护甲':'[适应性护甲]：（200/400/600耗点）当角色在受到一次伤害后，若下一次面对的攻击的主要构成未改变时（即总计伤害中至少有一半的伤害与上一次攻击相同），角色每有两级护甲等级，便可以对这次攻击享有10/25/40点的固定伤害减免，拥有多个类似效果的角色可以自行选择一个自身拥有的任意等级效果生效，其余的效果则视为被覆盖（无法生效）。',
'专项防护':'[专项防护]：每当这个效果具有100耗点时，当角色在面对主要构成为[物理/能量]的伤害时（即总计伤害中有一半以上的伤害为[物理/能量]伤害，若正好相等则也能够触发这个效果），角色便可以获得50点的固定伤害减免（这部分减免的伤害至多将其中的[物理/能量]伤害减免至0，剩余伤害若能够击破防御则仍然会造成伤害）。这个词条的耗点至多为600点，在制作时便需要决定是针对物理还是能量伤害。拥有多个类似效果的角色可以自行选择一个自身拥有的任意等级效果生效，其余的效果则视为被覆盖（无法生效）。',
'千层甲':'[千层甲]：（600耗点）角色的身上每具有1级高于12级的，来自护甲类道具被动效果的护甲等级（计算这个效果时，由[庇护装甲]的效果带来的防御等级不会被计算在内），便可以获得对任意攻击指令25点固定的伤害减免，至多可以叠加12层，拥有多个类似效果的角色可以自行选择一个自身拥有的任意等级效果生效，其余的效果则视为被覆盖（无法生效）。',
'甲胄融合':'[甲胄融合]：（600耗点）如果你自身的护甲等级达到满值，那么只要你的壮硕值高于目标超过30点，在目标对你造成伤害时，那么他的破甲效果将视为没能击破你的护甲（即可以保留其在没有击破护甲时免除护甲伤害减免的效果）。',
'庇护装甲':'[庇护装甲]：（200耗点）让一个技能范围内选定的目标获得3的额外防御等级（可以将目标选定为自己、防御等级可以和角色当前防御等级叠加，但无法超过护甲等级的上限），每提升200耗点增加3的防御等级，至多提升至600耗点，该效果无法被设定为被动效果，且必须设置持续时间（此项的持续时间不能维持至战斗结束）。',
'闪避/防御增幅':'[闪避/防御增幅]：增加你的被动[闪避/防御（择一）]判定，每100耗点增加你的这类对抗判定15点点数。',
'守护屏障':'[守护屏障]：（100耗点）对技能范围内的一个角色投射一个以能量编织的守护屏障（可以将目标选定为自己），屏障在非被动效果时具有100耐久度，被动效果时具有50点耐久度，在屏障耐久度耗尽之前它会帮助内部的角色抵挡伤害（无论角色是否选择了应对措施）。每提升100耗点，屏障耐久提高100/50，该效果在设定为非被动效果时必须设置持续时间。设置为被动效果的守护屏障必须设置冷却时间，且这个冷却时间不得低于3回合。被动效果的屏障将在被破坏后开始计算冷却时间，冷却时间结束后重新生成，这段时间内不会给予角色保护。（屏障不享用自身护甲以及减伤，并且不会受到debuff与buff以及对方的破甲效果影响，被屏障保护的角色也不会被需要造成有效伤害后才能够触发的减益效果的影响。屏障的作用对象可以自行决定是否接受屏障的保护，同一时间内同一角色至多只能享受一面守护屏障效果的保护。',
'防护措施':'[防护措施]:（100耗点)该词条仅限于瞬发释放技能使用，可以在接下来的伤害中免疫100点任意伤害，每提升100耗点使得该免伤幅度额外再增加100，这个效果只能对自己使用，减伤在抵消了一次伤害后便会消失。在使用这个效果后，角色将不再能以闪避的方式来应对其他角色发起的攻击。该效果无法在同一回合内发动多次，且减伤效果持续至多一个回合或1分钟日常时间，且当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'第六感':'[第六感]：200/400/600耗点该词条可以使角色在受到突袭攻击时，可以不受到被突袭时被更改判定公式的效果，但在这次对抗中自身结果需要承受-60/-40/-20点额外减值。',
'心智壁垒':'[心智壁垒]：该词条每具有100耗点，便可以使角色在面对其他来源施加的心智类的负面效果时（如[震慑]），自身的对抗判定提升20点。当这个效果至少拥有600耗点后，在对抗失败的场合，若角色在陷入[昏厥]时这个效果没有失效，则可以使得角色在面对这类效果的附加效果时，星级按照比自身当前星级高一级计算。角色拥有的多个该词条效果无法叠加，角色可以选择任意一个生效，其余的视为被覆盖。',
'强健体魄':'[强健体魄]：该词条每具有100耗点，便可以使角色在面对其他来源施加的肉体类的负面效果时（如[恍惚]），自身的对抗判定提升20点。当这个效果至少拥有600耗点后，在对抗失败的场合，若角色在陷入[昏厥]时这个效果没有失效，则可以使得角色在面对这类效果的附加效果时，星级按照比自身当前星级高一级计算。角色拥有的多个该词条效果无法叠加，角色可以选择任意一个生效，其余的视为被覆盖。',
'抗性提升':'[抗性提升]：该词条每具有300耗点，可以在生效时使角色在面对[燃烧]，[冻伤]，[流血]，[麻痹]，[中毒]等效果时，可以将对方施加的效果按照降低一级处理，至多可以降低至0级，在降低至零级时视为对方施加的效果不再对你造成任何负面影响。这个效果最多900耗点，角色拥有的多个该词条效果无法叠加，角色可以选择任意一个生效，其余的视为被覆盖。',
'战斗续航':'[战斗续航]：200/400/600耗点的词条效果是在角色本应该受到攻击而导致角色陷入[濒死状态]时，角色仍然可以在保留极限生命值的情况下继续战斗1/2/3回合（在下一回合的开始阶段开始计算，下回合为保有极限生命值战斗的第一个回合）。在战续状态下，和正常生命值状态一样，角色可以发起指令和受到伤害且不会进入[昏厥]状态，直到极限生命值归零或是效果时间结束为止（但期间所收到的所有生命回复类效果都无法直接作用于极限生命值上，这些回复的生命值将会在战斗续航状态结束后生效于正常生命值中）。若战斗结束时角色仍然处于战斗续航状态，那么主持人会根据其最终伤势来判定其最后是会进入[濒死]状态还是直接死亡，通常冷却为每个干涉任务触发一次（多个极限生命值的效果无法叠加，且共享冷却时间，玩家有权利自行判定多个角色携带的极限生命值效果中哪一个生效）。',
'极限顽强':'[极限顽强]：只有在战斗续航的极限生命值状态下才会生效，每100耗点使角色获得50点伤害减免（无法被破甲击破），持续到战斗续航状态结束，拥有多个极限顽强词条的玩家可以自行选择一个自身拥有的任意等级的继续顽强生效，其余致命效果则视为被覆盖。',
'困兽之斗':'[困兽之斗]：只有在战斗续航的极限生命值状态下才会生效，角色的被动闪避和防御判定增加20点，词条等级从100耗点开始计算，每100耗点可额外增加20点，至多增加120点。',
'生存欲望':'[生存欲望]：该词条固定为200/400/600耗点，该效果只有在战斗续航的极限生命值状态下才会生效，角色可以以一个动作脱离战斗续航状态，这需要角色在触发这一能力时至少保有[壮硕值*6/4/2]点生命值。附带这个词条的效果无法被设置为被动生效，角色已经损失的极限生命值在该效果触发后不会得到补充，同时角色在下一次生命值归零时无法免疫溢出的伤害且无法再次进入战斗续航状态。',
'无惧伤痛':'[无惧伤痛]：该词条固定为600耗点，只有在战斗续航的极限生命值状态下才会生效，能够作用于角色的负面效果的数量降低至至多一个，且角色不会受到疼痛带来的负面效果的影响。在角色持有多个该词条时将自动选择其中最高的那一个，其余类似效果视为覆盖。',
'愈合':'[愈合]：周期性为角色恢复生命值，该词条每具有200耗点可以使角色每战斗回合的结束阶段恢复[壮硕*1]点生命值且日常每小时恢复[壮硕*3]点生命值，除非是被动效果，使用该词条的效果必须设置持续时间，且所有的类似效果中只取最高的一种生效，至多恢复至角色的生命值上限。',
'生命恢复':'[恢复]：使用该词条的技能必须为主动释放或是引导释放，每提升100耗点可以恢复目标100点生命值，该效果无法设置持续时间。',
'瞬间恢复':'[瞬间恢复]：使用该词条的技能必须为瞬发释放，每100耗点可以恢复目标50点生命值，该效果无法设置持续时间。',
'治疗增幅':'[治疗增幅]：该词条每100耗点可以使角色释放的治疗效果额外恢复目标30点生命值，但角色释放的持续愈合效果无法受到本词条增幅（这里指的是赋予给其他角色的持续愈合效果），被动类型的愈合效果则无法触发本项词条。',
'复苏之风':'[复苏之风]：该词条每100耗点可以使角色接受的治疗效果额外恢复20点生命值（包括生命窃取效果或是种族的），被动类型的持续愈合效果同样可以触发项词条。当角色同时被多个该词条效果影响时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'生命窃取':'[生命窃取]：（这个效果与吸血鬼啃咬吸血不同，属于攻击即可吸血，一般会用在武器附魔上面，请按照设定套用）在该词条100耗点时，对对方造成伤害将会吸收30点生命值恢复自身（有效伤害的伤害量必须大于30才能触发，无法通过持续附加的伤害效果触发，且无法通过对自身造成伤害触发），该词条每上升100耗点，吸收的生命值加30，该词条耗点至多为600点。当角色同时被多个该词条效果影响时，只取其中耗点最高的效果生效，其余的视作被覆盖。（此词条在面对构造体或是灵体生物时是否生效将有主持人自行判定）',
'过量治疗':'[过量治疗]：这个效果固定为400/600耗点，可以使角色在收到了超过自身生命值上限的治疗效果后（由愈合效果带来的治疗不会计算在其中），这部分溢出的治疗量会等量转化为一个仅对角色自身的[守护屏障]的耐久度，这个屏障的持续时间固定为1回合（无需耗点，每次出现溢出的治疗量时刷新），屏障的耐久度上限为角色的[壮硕值*3]/[壮硕值*5]。当角色同时被多个该词条效果影响时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'能量恢复':'[恢复]：（100耗点）被动恢复能量值/体力值，每战斗回合的结束阶段恢复3点能量值/体力值且日常每小时恢复9点能量值/体力值（每提升100耗点则增加3点能量池的战斗回合恢复和9点日常小时恢复量），除非是被动效果，使用该词条的效果必须设置持续时间。',
'快速冥想':'[快速冥想]：（300/600耗点）具有这个词条技能的角色可以在战斗轮中放弃某一轮中自己所有的行动与AP以进行快速冥想，快速冥想算作引导动作，可以恢复相当于[引导消耗的AP值*3]/[引导消耗的AP值*6]量的能量值。当角色在日常轮使用这个效果时，冥想时角色日常每小时可以恢复60/90点能量值。',
'快速恢复':'[快速恢复]：（300耗点）具有这个词条技能的角色可以在战斗轮中以一个引导动作消耗任意数量的AP以进行快速恢复，快速恢复算作引导动作，可以恢复相当于[引导消耗的AP值*6]量的体力值。',
'净化':'[净化]：驱离效果作用的目标身上任意一个被赋予的1/2/3个负面效果，等级固定为200/400/600耗点。在净化高于100耗点的效果时，需要进行一个己方具有20/40/60点加成的最高属性对抗，失败则无法将其净化。',
'驱散':'[驱散]：驱离效果作用的目标身上任意一个被赋予的1/2/3个正面效果，等级固定为200/400/600耗点。在被驱散方非自愿的情况下，需要进行一个己方具有40/20/0点减值的最高属性对抗，失败则无法将其驱散。',
'属性增幅':'[属性增幅]：每100耗点可以使角色某一项指定的属性值+5点数加成。',
'能量池增幅':'[能量池增幅]：每100耗点可使能量或体力能量池上升10点。',
'远击':'[远击]：使武器的通常攻击赋予远程打击，每100耗点增加10米射程（并不算远程兵器）',
'远击增幅':'[远击（增幅）]：（仅限远程兵器）在已有的远程攻击基础上被动增加更高的射程，每100耗点增加100米的距离。',
'迅捷':'[迅捷]：每200耗点可以使角色每回合可用AP+1。',
'熟练':'[熟练]：每100耗点可以使角色的[某项属性的日常轮判定（不包括眷顾属性）]的判定结果+10。需要在制作序列时决定具体是哪一属性。',
'专家':'[专家]：每100耗点可以使角色的[某项特定的动作（例如搜索，追逐，运动等）]的判定结果+20。需要在制作序列时决定具体是哪一项动作。',
'皮糙肉厚':'[皮糙肉厚]:该词条基础为100耗点，增加角色100点的生命值上限，每提升100耗点则额外提升100点，通过非被动效果获得的额外生命值将在效果结束时，先扣除等同于额外生命值数值一半的生命值，然后再扣除额外的生命值上限，如果将角色的剩余生命值不足则将扣除所有的剩余生命值并进入极限生命状态。',
'反射强化':'[反射强化]：每100耗点可以使角色的先攻判定结果+10。',
'疾行':'[疾行]：每100耗点可以让角色每回合的移动距离上升15米。',
'水下呼吸':'[水下呼吸]：固定100耗点，赋予角色在水下呼吸的能力。',
'跃升':'[跃升]：固定100耗点，使角色的跳跃高度提升为爆发*2。',
'负重增幅':'[负重增幅]：此词条从200耗点开始，每提升200耗点可以提升角色自身[壮硕*5]负重，双手负重[壮硕*2]，单手负重[壮硕*1]，至多提升至600点。当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'位移':'[位移]：这个词条不能被设置为被动效果，无法对其他角色生效，当发动方式为主动或是引导时，该词条每具有100耗点则可以将角色自身推动50m的距离，而当发动方式被设置为瞬发时，该词条每100耗点只能推动角色自身20m的距离。且若要使这个效果可以穿过障碍物，以瞬间移动的方式移动则需要额外的200耗点。且需要注意的是，在面对以角色为目标的主动动作发起时（即使没有伤害），即使角色使用了该词条的效果移动出范围也仍然需要承受这个动作带来的所有效果（视为在角色离开攻击范围的过程中被击中）。',
'学识渊博':'[学识渊博]：这个词条必须被设置为被动效果，在耗点为100/300/600点时分别可以使角色掌握入门/精通/宗师级别的某一项日常技能，需要注意的这一部分的日常技能等级与角色卡中日常技能页面的同一项日常技能在使用时只取其中等级较高的一个生效，其余的视作被覆盖。',
'收容':'[收容]：这个词条通常被用作背包或一些空间储存装置之中，往往不会出现在角色技能上面，从100/200/300/400/500/600耗点级分别是100/200/400/600/800/1000可容纳的体积范围，同时也是可收入的重量范围。（普通背包类道具最高为一级；而高于一级的收容道具所容纳的物品必须为序列库物品，且只有在其他调律者同意后才能够收容他人所持有的物品）',
'技能容纳':'[技能容纳]：这个效果会提升角色针对某一项特定体系的技能的可用技能容量，每100点便可以提升角色200点针对这个体系技能的技能容量。',
'透体':'[透体]：（500耗点）此词条仅能够在瞬发的技能中使用，在激活后角色可以穿过一些物质或能量（例如穿墙、穿过结界等），但如果该物质或能量具有特殊效果则穿过时自身会受到相应效果，且角色在停留与某个物体内时无法主动结束该效果。该效果在激活时可以获得300点对纯物理伤害的伤害减免（各种伤害被算作纯物理伤害将由主持人临场判断），但会导致角色无法响应防御动作，并暂时失去其护甲等级。',
'光明化':'[光明化]：该词条效果固定为200点，且必须被设定为被动效果，装备者原本的种族不能为黑暗生物，装备后角色将被视为光明生物，享受针对光明生物的各项正面与负面效果，必须在一场干涉任务开始前决定是否生效，无法在任务中主动屏蔽这个效果。',
'黑暗化':'[黑暗化]：该词条效果固定为200点，且必须被设定为被动效果，装备者原本的种族不能为光明生物，装备后角色将被视为黑暗生物，享受针对黑暗生物的各项正面与负面效果，必须在一场干涉任务开始前决定是否生效，无法在任务中主动屏蔽这个效果。',
'安魂曲':'[安魂曲]：该效果固定为600耗点，持有该词条的能力在将一名非调律者角色的生命值降低至0点时将直接将其彻底杀死，并使其无法享受战斗续航或是复活等能力的效果。',
'灵媒':'[灵媒]：能够看见灵体并与其交流，角色自己可以主动地关闭灵媒效果（100耗点，固定为1级效果），在一些技能中，灵媒的耗点可能会不到100耗点，也就是处于半灵媒状态，这只需要50耗点即可，拥有“半灵媒”的角色需要使用一个主动动作来开启灵媒状态，并且每战斗回合或每分钟都会消耗角色的1点能量值。',
'灵击':'[灵击]：角色的攻击能够伤害到灵体，效果耗点固定为100点。',
'飞行':'[飞行]：可以让角色获得飞行能力，该词条耗点固定为100/300/600耗点，100耗点时飞行速度等于行走速度/2，飞行高度为最高属性*10，在空中每回合至少执行一个移动动作，无法在恶劣环境中飞行（例如风暴中无法飞行）；300耗点时飞行速度等于行走速度，飞行高度为最高属性*30，在空中每回合至少执行一个移动动作，无法在零重力环境中飞行；600耗点时飞行速度等于行走速度，飞行高度无限制，在空中每回合无需移动，可以在任何环境飞行。',
'隐身':'[隐身]：（400/600耗点）你不会被视线捕捉，在面对只有视觉感知/任意感知的目标一直处于潜行状态，且角色发起的每次攻击都将被视为偷袭攻击，但每次触发此效果时对方都可以进行识破角色潜行的对抗。角色在被识破后，若对方没有进行标记或是锁定，则可以在回合结束阶段自动回到潜行状态。且需要注意的是，在面对以角色为目标的主动动作发起时（即使没有伤害），即使角色使用了该词条的效果从对方视野中消失也仍然需要承受这个动作带来的所有效果（视为在角色进入隐身状态时对方暂时记住了你的位置并继续发动效果）。',
'意志解放':'[意志解放]：该词条固定为300/600耗点，可以为角色增加15/30点WIP使用上限。当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'愈战愈勇':'[愈战愈勇]：此词条固定为300/600耗点，且只能被设置为被动效果。每次主动对抗成功之后都会获得5/10点全部主动对抗加成，每回合最多触发三次，最终上限为60点。当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'随机应变':'[随机应变]：该词条固定为100/300/500耗点，分别可以为角色提供1/3/5点仅能够在自己的行动轮外生效的AP，这些AP同样会在每个大回合开始时刷新，未使用的同样不会保留，且这部分额外的AP不能拿来进行角色的引导动作。在角色持有多个该词条时将自动选择其中最高的那一个，其余类似效果视为覆盖。',
'蓄势待发':'[蓄势待发]：该词条基础耗点为300点，可以使角色在自己的行动轮中将多个动作延迟发动（存储的每个动作仍然需要消耗ap），当该词条耗点提升至600点后，角色可以在一个回合的开始阶段（决定先攻后）选择一个动作进行延迟（仍然需要消耗ap，且不能够选择引导类动作，不能选择直接攻击类动作）。',
'幸运女神的眷顾':'[幸运女神的眷顾]：该词条仅能作为被动能力生效，持有该效果的角色在每个大回合内的X次判定与对抗结果可以上升等同于角色眷顾值的点数（玩家可以决定究竟哪一次触发），该效果每有200点则X提升1点，在角色持有多个该词条时将自动选择其中最高的那一个，其余效果视为覆盖。',
'技能强化':'[技能强化]：该词条仅限于技能使用，将根据可升级的技能的资历值来决定耗点，具体耗点为[对应技能的优先等级每有100点，则需要消耗50点耗点（对应技能的资历向上取整）]，使用该词条的技能在被购入技能栏后，可以对其指定的另一技能进行强化（也需要购买至技能栏，作为前置条件，若对应技能被遗忘则该技能也不再生效），让其获得等同于该效果除去该词条外的额外能力，这部分能力可以超过对应超过抵点上限，但最终受强化技能的实际耗点不得高于2100点。',
'高速神言':'[高速神言]：此词条固定为300/600耗点。当角色进行引导类型技能时，可以减少引导技能2/5点AP消耗，每回合只能生效一次（即使角色拥有多个高速神言效果），而减少引导也不得低于4AP的消耗，一次战斗只能对同一个技能生效一次。当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'逆境行者':'[逆境行者]：（固定200耗点）角色可以无视地形带来的影响，可以无视光滑或者凹凸不平的地形。仅限于地形，像是高温寒冷等环境影响无法免疫。',
'命运重铸':'[命运重铸]：（固定200/400/600耗点效果）当持有者在当前回合中的某个判定失效时，可以额外进行1次重投，取其中的最大值作为最终数值。这个效果的使用次数至多为1/2/3次，若该词条为被动生效效果，则这个次数会在每个回合的开始阶段重置。当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'显赫武具':'[显赫武具]：该词条仅能够使用于调律者自身所携带的技能上（道具无法使用此词条）；使用该词条的技能在使用时将会变为一把武器或是一件防具并被立即装备在技能预设的装备位上（需要提前制作并审核，在效果栏标注该道具为某技能所赋予的显赫武具，且显赫武具的耗点同样受到序列限制的影响），并将该位置原有的装备收纳进印痕。显赫武具的总耗点为[该技能的总耗点*1.5]（如最终300耗点的技能，通过序列受损抵消了200点的耗点，那么最终显赫武具的耗点就是750点），但不能通过任何方式来抵显赫武具本身的耗点，且只能被技能持有者本人使用。当技能解除时显赫武具将消失并同时移除所有因其效果带来的增益或是负面影响（例如生命值加成/属性加成/显赫武具技能为自身或是其他目标带来的负面效果）。',
'从属物':'[从属物]：[此词条已删除，召唤物请酌情制作，由审核员把控最终强度]',
'组合':'[组合]：该词条仅限于工具使用，使用后该工具的价格公式将被修改为[最终耗点*25]，但使用该词条的工具可以与其他指定的道具进行组合，在组合完毕后使用该词条的工具的特效将生效于被组合的道具之上，两件道具的资历值加成相加，并被视为同一件道具。值得注意的是，这些可被组合的道具只能在变量之轮内进行组合，在干涉任务之中即使角色了解如何组合，在组合后也会因为序列的干预而导致两件道具同时损坏。',
'武具强化':'[武具强化]：每100耗点可以使角色持有的一把武器/一面盾牌（无论位于主手还是副手武器栏）的攻击力/防御力提升5d5/3d5，至多提升至600耗点。当角色同时拥有多个该词条效果时，只取其中耗点最高的效果生效，其余的视作被覆盖。',
'缄默死神':'[缄默死神]：该词条仅限于武器类道具使用，固定为100耗点，用于远程武器时该武器必须为一件无噪声武器（如弓弩与无声枪械等），通常射击时只会发出极小的噪音。用于近战武器时该武器必须为一件灵巧武器（如匕首等小巧的武器），通常利于藏匿且便于在极短距离内使用。使用这种武器在角色脱离潜行状态进行第一次攻击后可以以一个瞬发动作重新进入潜行状态（除非使用了会造成明显动静的能力、或最终重新进入潜行的位置处于对方的视野内、或是对方使用了锁定技能，否则这次潜行判定将自动成功，这一项由主持人临场判断），这个效果同一回合内至多触发一次。',
'载具用武器':'[载具用武器]：该词条仅能够用于武器模板的道具之中，附加了该词条的武器将可以与对应的载具组合使用（视为安装在对应的载具上，二者资历相加并视为单个效果），在安装后这把武器将仅能够在驾驶这台载具时使用。这个效果可以为这把武器提供200点任意抵点。',
'载具用护盾':'[载具用护盾]：该词条仅能够用于护盾模板的道具之中，附加了该词条的武器将可以与对应的载具组合使用（视为安装在对应的载具上，二者资历相加并视为单个效果），在安装后这面盾牌将仅能够在驾驶这台载具时使用。这个效果可以使得载具在进行防御判定时使用盾牌获得额外的减伤。',
'载具用插件':'[载具用插件]：该词条仅能够用于工具模板的道具之中，附加了该词条的武器将可以与对应的载具组合使用（视为安装在对应的载具上，二者资历相加并视为单个效果），在安装后这件防具将仅能够在驾驶这台载具时使用。这个词条将根据自身原本的耗点加成来决定耗点，具体耗点为[物品总耗点/4（向下取整）]',
'外骨骼机甲':'[外骨骼机甲]：角色可以在驾驶该载具的情况下直接使用载具的结构强度与出力替换自身的壮硕值与爆发力进行判定或是对抗，但角色将无法在战斗中自主脱离载具。这个效果的耗点将由载具在添加这个效果前的品质决定。从[黑色]消耗50点开始，品质每提升一级需要消耗额外的50点。',
'充能':'[充能]：这个词条仅限用于消耗品工具上，该词条每有100耗点可以在该物品消耗后为载具提供20点能量值，为载具充能需要消耗一个主动动作进行。',
'智慧核心':'[智慧核心]：该词条可以赋予搭载这个效果的载具在一定的命令下自律行动的效果，并使得载具在自律行动的情况下根据耗点100/200/300/400/500/600以10/20/30/40/50/60点的固定数值进行协调、精神、反应、眷顾判定，在这个效果的耗点达到400点或以上时可以使得载具拥有一定程度上的独立智能，可以理解其他角色下达的指令（一般由购买载具的玩家进行扮演，但在必要时主持人也可以代替该玩家执行操作）。',
'飞行载具':'[飞行载具]：该词条可以让载具获得飞行能力，该词条耗点固定为100/300/600耗点，100耗点时飞行速度等于移动速度/2，飞行高度为出力属性*5，起飞后每回合至少进行两次移动指令（部分悬浮载具在贴地行驶时可以无视这条限制）；300耗点时飞行速度等于移动速度，飞行高度为出力属性*15，起飞后每回合至少进行一次移动指令，（部分悬浮载具在贴地行驶时可以无视这条限制）；600耗点时飞行速度等于移动速度，飞行高度无限制，起飞后每回合无需强制进行移动指令。',
'共同驾驶':'[共同驾驶]（200/400/600）：该载具可选择由至多2/4/6人共同驾驶，同时分摊其耗点以使其不至于序列限制。在分摊耗点时，在两人驾驶时，每个角色的资历以其本身资历的0.7进行计算（向下取整）。在三人以上时，每个角色的资历以其本身资历的一半进行计算（向下取整）。',
'变形出击':'[变形出击]（200/400/600）：该载具具备着变形的机能，可以使其适应更多的环境情况，因此其可以在两个形态之间转变。在战斗中的载具变形将会消耗当前轮次中驾驶者的所有AP，变形完毕后载具可以将除呼叫以外的1/2/3点补正重新分配，但必须在载具制作时决定。',
'全能机体':'[全能机体]（600）：赋予该载具1点额外的补正，具体如何分配需要在制作时决定。这个效果仅能够被设置为被动效果，同一个载具至多能够受到该效果的两次加成。',
'载具用武器':'[载具用武器]：该词条仅能够用于武器模板的道具之中，附加了该词条的武器将可以与对应的载具组合使用（视为安装在对应的载具上，二者资历相加并视为单个效果），在安装后这把武器将仅能够在驾驶这台载具时使用。这个效果可以为这把武器提供200点任意抵点。',
'载具用护盾':'[载具用护盾]：该词条仅能够用于护盾模板的道具之中，附加了该词条的武器将可以与对应的载具组合使用（视为安装在对应的载具上，二者资历相加并视为单个效果），在安装后这面盾牌将仅能够在驾驶这台载具时使用。这个效果可以使得载具在进行防御判定时使用盾牌获得额外的减伤。',
'载具用插件':'[载具用插件]：该词条仅能够用于工具模板的道具之中，附加了该词条的武器将可以与对应的载具组合使用（视为安装在对应的载具上，二者资历相加并视为单个效果），在安装后这件防具将仅能够在驾驶这台载具时使用。这个词条将根据自身原本的耗点加成来决定耗点，具体耗点为[物品总耗点/4（向下取整）]',
'过载运行':'[过载运行]：该词条可以为载具携带的一个效果提供x*50点的抵点，但载具在开启对应效果后，将在持续时间内总计消耗20点额外的载具能量，平均到效果生效的回合中每回合结束时扣除。使用该词条的效果无法被设为被动效果，在设置为非持续效果时，持续时间被视为一轮，主动结束时将会直接消耗所有剩余未消耗的能力。',
'形态限定':'[形态限定]：在使用这个词条时，这个载具必须使用了[变形出击]词条。带该词条的技能必须有多个不同的，仅能够在某一个形态生效的效果，但这两个效果将共享效果的冷却时间与能量消耗。每当各个效果耗点都有200点（即每个效果拥有200耗点），该词条就可以为每个效果提供100点的点耗点收益。该效果必须在不同形态下才能触发，且无法对分至多个效果的的同一词条效果生效。',
'眩晕':'[眩晕]：强制使目标跳过他的下个行动轮并打断他目前正在进行的行动，处于眩晕状态的角色在当前回合只能够执行应对动作，但已经受到一个眩晕效果的角色在同一场战斗中不会再次受到眩晕效果的影响。',
'恍惚':'[恍惚]：身体在外力的作用下陷入短暂的虚弱，进行的任何战斗对抗类判定都将下降一定的结果值。',
'震慑':'[震慑]：难以言喻的恐慌感涌上心头，进行的任何战斗对抗类判定都将下降一定的结果值。',
'晕厥':'[晕厥]：进入深度昏迷状态，角色在1天之内至少无法自行苏醒，但是可以被其他角色通过一些特殊手段唤醒，具体根据主持人的判定而定。',
'部位麻痹':'[部位麻痹]：角色将会失去这部分部位的知觉，并且被麻痹的部位无法进行运动。',
'崩溃':'[崩溃]：极度恐惧的情况下出现的症状，角色会因此而陷入持续精神影响（精神/肉体影响状态）或晕厥状态，并且在精神影响（精神/肉体影响状态）下丧失战斗意志，情绪开始绝望，具体持续时间由主持人的判断而定。',
'标记':'[标记]：角色被某种方式标记了，将会持续暴露在施加这个效果的角色的感官中，在下一次成功的对施加者进行的潜行判定成功前，角色的潜行判定需要承受100点减值。',
'迟缓':'[迟缓]：使对方在持续时间内的先攻判定下降一定的数值，且不再能够享受优先权效果。',
'禁令':'[禁令]：角色在持续时间内将无法释放某些指定的技能，但被动效果与已经生效的效果不会受到影响，且同一角色不会再一场战斗中再受到[禁令]效果的影响。',
'能量燃烧':'[能量燃烧]：每回合结束时，角色都将损失一定量的能量值/体力值，若角色的能量池被降低为0点，则将对角色造成等同于[损失量*10]的生命值损伤。',
'麻痹1':'[麻痹1]：角色除精神与眷顾外其他属性相关的判定下降15点结果值，且角色进行任何需要消耗AP的行动时，都需要进行一次难度为20点的[壮硕属性鉴定]，若判定失败需要额外消耗1点AP才能执行。且当角色累计触发了三次麻痹效果后，角色最后一次使用的肢体部位将受到[部位麻痹]效果的影响。',
'麻痹2':'[麻痹2]：角色除精神与眷顾外其他属性相关的判定下降30点结果值，且角色进行任何需要消耗AP的行动时，都需要进行一次难度为40点的[壮硕属性鉴定]，若判定失败需要额外消耗1点AP才能执行。且当角色累计触发了三次麻痹效果后，角色最后一次使用的肢体部位将受到[部位麻痹]效果的影响。',
'麻痹3':'[麻痹3]：角色除精神与眷顾外其他属性相关的判定下降45点结果值，且角色进行任何需要消耗AP的行动时，都需要进行一次难度为80点的[壮硕属性鉴定]，若判定失败需要额外消耗1点AP才能执行。且当角色累计触发了三次麻痹效果后，角色最后一次使用的肢体部位将受到[部位麻痹]效果的影响。',
'麻痹4':'[麻痹4]：角色除精神与眷顾外其他属性相关的判定下降60点结果值，且角色进行任何需要消耗AP的行动时，都需要进行一次难度为120点的[壮硕属性鉴定]，若判定失败需要额外消耗1点AP才能执行。且当角色累计触发了三次麻痹效果后，角色最后一次使用的肢体部位将受到[部位麻痹]效果的影响。',
'麻痹5':'[麻痹5]：角色除精神与眷顾外其他属性相关的判定默认失败，且任何需要消耗AP的行动都需要额外消耗2点AP才能执行。',
'麻痹6':'[麻痹6]：角色晕厥并抽搐，无法进行正常思考，持续5分钟或5战斗回合。',
'冻伤1':'[冻伤1]：冻伤者与壮硕、爆发和协调相关的判定下降20点结果值，角色发起的主动攻击动作判定额外再下降10点结果值，且角色每次进行移动动作（包含快速移动）时都将下降等同于角色移动距离的生命值（只包含主动移动，且仅在战斗环节生效，但在日常轮中也将影响角色的行动速度，具体由主持人决定）。',
'冻伤2':'[冻伤2]：冻伤者与壮硕、爆发和协调相关的判定下降40点结果值，角色发起的主动攻击动作判定额外再下降20点结果值，且角色每次进行移动动作（包含快速移动）时都将下降等同于角色移动距离的生命值（只包含主动移动，且仅在战斗环节生效，但在日常轮中也将影响角色的行动速度，具体由主持人决定）。',
'冻伤3':'[冻伤3]：冻伤者与壮硕、爆发和协调相关的判定下降60点结果值，角色发起的主动攻击动作判定额外再下降30点结果值，且角色每次进行移动动作（包含快速移动）时都将下降等同于角色移动距离的生命值（只包含主动移动，且仅在战斗环节生效，但在日常轮中也将影响角色的行动速度，具体由主持人决定）。',
'冻伤4':'[冻伤4]：冻伤者与壮硕、爆发和协调相关的判定下降80点结果值，角色发起的主动攻击动作判定额外再下降40点结果值，且角色每次进行移动动作（包含快速移动）时都将下降等同于角色移动距离的生命值（只包含主动移动，且仅在战斗环节生效，但在日常轮中也将影响角色的行动速度，具体由主持人决定）。',
'冻伤5':'[冻伤5]：冻伤者与壮硕、爆发和协调相关的判定与主动攻击判定自动失败，且角色每次进行移动动作（包含快速移动）时都将下降等同于角色移动距离的生命值（只包含主动移动，且仅在战斗环节生效，但在日常轮中也将影响角色的行动速度，具体由主持人决定）。',
'冻伤6':'[冻伤6]：冻伤者只剩下微弱的生命反应，代谢活动近乎停止（如果有的话），无法进行思考，持续到妥善的解冻处理为止。',
'燃烧1':'[燃烧1]：燃烧者在每个大回合结束时将会下降15点生命值，在日常轮中每10分钟下降45点生命值,且燃烧者在每次消耗AP时，自己都将下降这次AP消耗量*5的生命值。',
'燃烧2':'[燃烧2]：燃烧者在每个大回合结束时将会下降30点生命值，在日常轮中每10分钟下降90点生命值，且燃烧者在每次消耗AP时，自己都将下降这次AP消耗量*10的生命值。',
'燃烧3':'[燃烧3]：燃烧者在每个大回合结束时将会下降60点生命值，在日常轮中每10分钟下降180点生命值，且燃烧者在每次消耗AP时，自己都将下降这次AP消耗量*15的生命值。',
'燃烧4':'[燃烧4]：燃烧者在每个大回合结束时将会下降90点生命值，在日常轮中每10分钟下降270点生命值，且燃烧者在每次消耗AP时，自己都将下降这次AP消耗量*20的生命值。',
'燃烧5':'[燃烧5]：燃烧者在每个大回合结束时将会下降120点生命值，在日常轮中每10分钟下降360点生命值，且燃烧者在每次消耗AP时，自己都将下降这次AP消耗量*25的生命值。',
'流血1':'[流血1]：流血者在每个大回合结束时将会下降15点生命值，在日常轮中每10分钟下降45点生命值，且角色所有的战斗相关判定结果-15。',
'流血2':'[流血2]：流血者在每个大回合结束时将会下降30点生命值，在日常轮中每10分钟下降90点生命值，且角色所有的战斗相关判定结果-30。',
'流血3':'[流血3]：流血者在每个大回合结束时将会下降60点生命值，在日常轮中每10分钟下降180点生命值，且角色所有的战斗相关判定结果-45。',
'流血4':'[流血4]：流血者在每个大回合结束时将会下降90点生命值，在日常轮中每10分钟下降270点生命值，且角色所有的战斗相关判定结果-60。',
'流血5':'[流血5]：流血者在每个大回合结束时将会下降120点生命值，在日常轮中每10分钟下降360点生命值，且角色所有的战斗相关判定结果-75。',
'中毒1':'[中毒1]：中毒者在每个大回合结束时受到20点生命值的伤害，且这个伤害每次成功造伤的回合结束时提升10点。（20/30/40/50/60以此类推，伤害在施加后的第五回合时封顶）在日常轮中每一小时受到40点生命值的伤害，且这个伤害每小时会增加20点。（同上以此类推，伤害在五小时后封顶）',
'中毒2':'[中毒2]：中毒者在每个大回合结束时受到40点生命值的伤害，且这个伤害每次成功造伤的回合结束时提升20点。（40/60/80/100/120以此类推，伤害在施加后的第五回合时封顶）在日常轮中每一小时受到80点生命值的伤害，且这个伤害每小时会增加40点。（同上以此类推，伤害在五小时后封顶）',
'中毒3':'[中毒3]：中毒者在每个大回合结束时受到60点生命值的伤害，且这个伤害每次成功造伤的回合结束时提升30点。（60/90/120/150/180以此类推，伤害在施加后的第五回合时封顶）在日常轮中每一小时受到120点生命值的伤害，且这个伤害每小时会增加60点。（同上以此类推，伤害在五小时后封顶）',
'中毒4':'[中毒4]：中毒者在每个大回合结束时受到80点生命值的伤害，且这个伤害每次成功造伤的回合结束时提升40点。（80/120/160/200/240以此类推，伤害在施加后的第五回合时封顶）在日常轮中每一小时受到160点生命值的伤害，且这个伤害每小时会增加80点。（同上以此类推，伤害在五小时后封顶）        ',
'中毒5':'[中毒5]：中毒者在每个大回合结束时受到100点生命值的伤害，且这个伤害每次成功造伤的回合结束时提升50点。（100/150/200/250/300以此类推，伤害在施加后的第五回合时封顶）在日常轮中每一小时受到200点生命值的伤害，且这个伤害每小时会增加100点。（同上以此类推，伤害在五小时后封顶）    ',
'心智影响':'[心智影响]：角色被其他角色施加的心智效果影响时（此处心智效果包含魅惑/暗示/催眠/读心等），角色在不知情时，对方需要进行的是难度等同于对方精神力的[精神属性鉴定]来判定是否能够成功施加影响。而在知情的情况下，则被影响方可以进行一次己方+20的精神对抗来反抗对方施加的影响。',
'束缚':'[束缚]：角色身体的一部分被束缚住了，他的行动将会受到一定的阻碍，可能是腿部被束缚而无法移动，也可能是手部被束缚而无法展开需要使用手的行动，此时他若是想要使用被束缚的肢体，他就需要在执行任意动作前额外花费1ap与束缚住他的角色进行[力量对抗]来进行挣脱。若失败则这次行动的ap将不会被返还，同时动作无法执行，若成功则角色可以执行对应的动作。',
'掩体':'[掩体]：角色通过障碍物遮蔽了自己的身躯（不能是其他角色，其他角色成为掩护时需要使用[援护]指令），这可以使他面对来自障碍物另一端的对单体远程攻击时可以利用障碍物掩护自己，这会使他的[应对类指令]获得30点的额外加成。而面对可以直接将掩体完全破坏，或是可以笼罩整个掩体的范围攻击时往往无法生效（主持人根据对方的伤害和攻击类型仔细判定）。',
'感官受阻':'[感官受阻]：角色在某些环境下，自身的主要感官可能[难以感知/无法感知]到周围的环境的变化，例如正常的人类在[只有稀薄月光的黑夜]/[极度黑暗无光的洞穴中]，而以听觉为主的种族在噪音极大的环境，或是依靠精神力感知的角色在魔力极度紊乱的地区中也是一样。在这样的环境中，角色的所有鉴定难度增加10/20，所有对抗判定都将要承受20/40的减值，且在没有[直感]类效果的情况下无法选择其他角色作为攻击目标。',
'寄生':'[寄生]：角色在某些环境下，可能会遭到一些存在的寄生或是附身，一般而言，这种状态无法被净化效果解除，需要角色在医学/神秘学/魔法理论学等学术技能的帮助下，在具备条件的情况下进行[技能鉴定]才能够摆脱这种状态。难度等级一般为：寄生/附身物的资历值/100。寄生/附身物的效果由主持人自行拟定。',
'失稳':'[失稳]：角色在不具备飞行能力的情况下被一些方式击打到空中后，角色将在这一回合的行动轮中无法使用移动指令，且所有的应对指令将承受30点减值，在回合结束时坠地并承受摔落的伤害（角色的重量视为[自身体积+所有装备的重量总和]）。',
'失重':'[失重]：角色在不具备在零重力环境下移动的能力的情况下，失去引力影响时，角色在没有可以依附的物体时，在行动轮中无法使用移动指令，且所有的涉及肉体的指令承受30的减值，所有的应对指令将承受60点减值。在能够攀附物体移动时，角色执行的任何移动指令都需要消耗额外的1ap。在具有初始速度且无法停下时，角色将在每个自己的行动轮开始时向着对应方向移动（具体距离和速度由主持人判定）。',
'超重':'[超重]：角色在重力场强度高于通常情况的环境中，将会承受超重的负面影响。在等级1~6级的超重环境中，角色自身每具备10体积，携带10重量的装备，就将承受1/2/3/4/5/6点肉体方面的对抗减值/判定加值。若承受的总计减值高于了角色的壮硕值，角色将难以行动，所有的动作都将消耗双倍的AP，且每回合结束时扣除等同于超出壮硕值部分的体力值。但在这个状态下，角色的所有近战与徒手打击指令的伤害都将提升10/30/50/70/90点，这被视为武器的重量伤害。在体力值归零的情况下，角色将失去下回合的所有AP值。',
'高温':'[高温]：角色在没有抵抗高温的能力，且具备体表感官的情况下，在高温环境中的所有对抗都需要承受-5的减值，所有的判定鉴定都需要承受5点的难度加值，在高温环境中每停留一个小时，都会使这个效果带来的减值和难度加值提升一次，至多叠加5次。且这个效果会使[饥渴]和[疲惫]的周期降低6个小时。',
'寒冷':'[寒冷]：角色在没有抵抗寒冷的能力，且具备体表感官的情况下，在高温环境中的所有对抗都需要承受-5的减值，所有的判定鉴定都需要承受5点的难度加值，在高温环境中每停留一个小时，都会使这个效果带来的减值和难度加值提升一次，至多叠加5次。在叠加到3次后，角色受到[冻伤1]的影响，叠加5次后，角色受到[冻伤2]的影响。',
'窒息':'[窒息]：需要呼吸的角色在无法呼吸时，需要每回合的结束阶段进行一次[壮硕属性鉴定]来判定角色是否能够免受窒息效果的影响。第一次鉴定难度为10，往后每次难度提升20点。在第一次没有通过鉴定后，角色将陷入一回合的[眩晕]状态（与[晕击]效果独立计算，即使角色在同一场战斗内被击晕过了也会受到这个效果影响），在第二次没有通过鉴定后，角色将陷入一回合的[眩晕]状态并损失等同于[壮硕值*5]的生命值，在第三次没有通过鉴定后，角色将失去所有剩余生命值（不触发战斗续航），并直接进入[昏厥]状态。',
'饥渴':'[饥渴]：需要食物和水分来生存的角色在12个小时内无法摄入充足的食物和水时（部分种族有所差异，这个周期可能更长或更短，具体由主持人裁定，此处以人类举例），将会进入饥渴状态。处于饥渴状态的角色，将会承受10点全判定减值与10点全鉴定难度加值，饥渴状态每呈持续一个周期便会使这些值叠加一次。当这些值叠加次数超过了角色的壮硕值的一半（向下取证）时，每额外叠加一次便会扣除角色壮硕值*2的生命值。',
'疲惫':'[疲惫]：需要休息的角色在24个小时内无法进行长休息时（长休息一般周期为八小时左右；而需要休息的周期会根据种族而变长或是变短，具体由主持人裁定，此处以人类举例），将会进入疲惫状态。处于疲惫状态的角色每有一个周期未休息便需要进行一次[壮硕属性鉴定/精神属性鉴定]来保持清醒，这个鉴定的难度在第一次为10，之后每次的难度+20。若没有通过，则角色将会强制进入[昏厥]状态。从[昏厥]中醒来视为进行了一次长休息。',
'肢体残疾':'[肢体残疾]：当角色的肢体被一些方式切断或是伤残导致无法使用时，角色需要承受肢体残疾的负面效果。一般而言，角色的头部和躯干不会独立破坏，但部分种族也可能会出现这种情况。',
'伤势恶化':'[伤势恶化]：当角色在受伤后长期没有得到医疗的情况下，角色身上的伤势将会恶化。在受伤的角色，在12个小时（恶劣环境中可能这个时间将会更快，由主持人决定）没有得到妥善处理的情况下，角色的伤势将会开始恶化，日常每小时降低[壮硕值*1]的生命值，至多不会超过30点。这个伤害在角色进入极限生命值状态后将会立刻开始生效，并在角色生命值归零后，扣除等量的极限生命值。',
'拟态':'[拟态]：当具有这个效果的角色进入潜行时，即使他被暴露在对方的感官之中，他也依旧能够进行潜行。在没有被察觉到时，对方会认为这个角色只是一个场景中的物件。'};

export var improTrueKeysList = {
    "抵点":{
        skills:{},
        subkeys:{},
        show:{files:new Set(), skills:new Set()},
        lessArr:{files:new Set(), skills:new Set()},
        moreArr:{files:new Set(), skills:new Set()}},
    "效果":{
        skills:{},
        subkeys:{},
        show:{files:new Set(), skills:new Set()},
        lessArr:{files:new Set(), skills:new Set()},
        moreArr:{files:new Set(), skills:new Set()}},
    "未分类":{
        skills:{},
        subkeys:{},
        show:{files:new Set(), skills:new Set()},
        lessArr:{files:new Set(), skills:new Set()},
        moreArr:{files:new Set(), skills:new Set()}}};

export function getTooltips(key, cost)
{
    key = key.replace("抵点：", "");
    let keys = key.split("-");
    if(keys[0] in keysList)
    {
        return keysList[keys[0]];
    }
    return key;
}