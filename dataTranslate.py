# -*- coding: utf-8 -*-
import os
import json
import re
import copy
from docx import Document #pip install python_docx
import lzstring #pip install lzstring
import openpyxl #pip install openpyxl
import openpyxl_image_loader #pip install openpyxl-image-loader

#初始化
subObj = {"subkeys":{}, "lessArr":{"files":[], "skills":[]}, "moreArr":{"files":[], "skills":[]}}
totalSkills = 0
improTrueKeysList = {"抵点":copy.deepcopy(subObj), "效果":copy.deepcopy(subObj), "未分类":copy.deepcopy(subObj)}
totalItems = 0
itemTrueKeysList = {"抵点":copy.deepcopy(subObj), "效果":copy.deepcopy(subObj), "未分类":copy.deepcopy(subObj)}
#更改：生命恢复，能量恢复，远击增幅
offsetKeys = ["技能冷却时间","技能消耗能量","技能引导消耗","心无恶垢","不杀之刃","永不退避","永不背弃","机能缺损","临时虚弱","反噬","不稳定","誓约武具","严苛环境","乾坤一掷","连段携用","持续占用","条件响应","背水一战","乘胜追击","濒死反击","压倒","独行者","奉献","适应性战术"]
#武具强化是技能词条
effectKeys = ["技能生效范围","技能生效目标数量","减益效果持续时间","增益效果持续时间","技能释放动作","攻击技能","增幅","技能增幅","稳固攻势","致命","伤害增幅","甲胄反击","封锁","生命栓锁","护甲击破","护甲削减","技能打断","目标锁定","痛击","惊骇","晕击","麻痹打击","寒击","放血","灼烧","注毒","能量抽取","能量燃烧","缓速","强制位移","迟钝","禁令","命中增幅","稳定格挡","坚壁防御","强韧之甲","护甲","连锁护甲","适应性护甲","专项防护","千层甲","甲胄融合","庇护装甲","闪避/防御增幅","守护屏障","防护措施","第六感","心智壁垒","强健体魄","抗性提升","战斗续航","极限顽强","困兽之斗","生存欲望","无惧伤痛","愈合","恢复","瞬间恢复","治疗增幅","复苏之风","生命窃取","过量治疗","恢复","快速冥想","快速恢复","净化","驱散","属性增幅","能量池增幅","远击","远击（增幅）","迅捷","熟练","专家","皮糙肉厚","反射强化","疾行","水下呼吸","跃升","负重增幅","位移","学识渊博","收容","技能容纳","透体","光明化","黑暗化","安魂曲","灵媒","灵击","飞行","隐身","意志解放","愈战愈勇","随机应变","蓄势待发","幸运女神的眷顾","技能强化","高速神言","逆境行者","命运重铸","显赫武具","从属物","组合","武具强化","缄默死神","载具用武器","载具用护盾","载具用插件","外骨骼机甲","充能","智慧核心","飞行载具","共同驾驶","变形出击","全能机体","载具用武器","载具用护盾","载具用插件","过载运行","形态限定"]
for key in offsetKeys:
    improTrueKeysList["抵点"]["subkeys"][key] = copy.deepcopy(subObj)
    itemTrueKeysList["抵点"]["subkeys"][key] = copy.deepcopy(subObj)
for key in effectKeys:
    improTrueKeysList["效果"]["subkeys"][key] = copy.deepcopy(subObj)
    itemTrueKeysList["效果"]["subkeys"][key] = copy.deepcopy(subObj)

#去除后缀
dataSource = "./DataSource"
improDataBase = "变量之轮强化序列库"
itemDataBase = "变量之轮道具序列库"
for file in os.listdir(dataSource):
    if ("变量之轮词条目录" in file) and (".docx" in file):
        if (file not in "变量之轮词条目录.docx"):
            os.rename(os.path.join(dataSource, file), os.path.join(dataSource, "变量之轮词条目录.docx"))
    if (improDataBase in file) and (file not in improDataBase):
        os.rename(os.path.join(dataSource, file), os.path.join(dataSource, improDataBase))
    if (itemDataBase in file) and (file not in itemDataBase):
        os.rename(os.path.join(dataSource, file), os.path.join(dataSource, itemDataBase))
improDataBase = dataSource + "/" + improDataBase
itemDataBase = dataSource + "/" + itemDataBase


#词条预提取
doc = Document(dataSource + "/变量之轮词条目录.docx")
theFile = open(dataSource + "/变量之轮词条目录.json", 'w', encoding="utf-8")
for paragraph in doc.paragraphs:
    docLines = re.findall(r"^\[([^\]]*)\](.*)", paragraph.text)
    for i in docLines:
        theFile.write(f"'{i[0]}',")
theFile.write(f"\n")
for paragraph in doc.paragraphs:
    docLines = re.findall(r"^\[([^\]]*)\](.*)", paragraph.text)
    for i in docLines:
        theFile.write(f"'{i[0]}':'[{i[0]}]{i[1]}',\n")
theFile.close()

#强化库
improList = {
"初始技能与日常技能":{"id":1},
"技能表":{"id":2},
"特质":{"id":3},
"职业":{"id":4},
"种族":{"id":5}}

#文件导入
for file in os.listdir(improDataBase):
    if ("更新日志" in file):
        if (file not in "更新日志.txt"):
            os.rename(os.path.join(improDataBase, file), os.path.join(improDataBase, "更新日志.txt"))
    for key in improList:
        if (key in file) and (file not in key):
            os.rename(os.path.join(improDataBase, file), os.path.join(improDataBase, key))
for key in improList:
    improList[key]["path"] = improDataBase + "/" + key

#添加关键词
def pushImproKeys(typeId, fileId, skillId, key, data):
    global subObj
    #是否有子词条
    if "-" in key:
        keys = key.split('-', 1)
        if keys[0] not in data["subkeys"]:
            data["subkeys"][keys[0]] = copy.deepcopy(subObj)
        #包含子类
        if fileId not in data["subkeys"][keys[0]]["moreArr"]["files"]:
            data["subkeys"][keys[0]]["moreArr"]["files"].append(fileId)
        if skillId not in data["subkeys"][keys[0]]["moreArr"]["skills"]:
            data["subkeys"][keys[0]]["moreArr"]["skills"].append(skillId)
        #处理子词条
        data["subkeys"][keys[0]] = pushImproKeys(typeId, fileId, skillId, keys[1], data["subkeys"][keys[0]])
    else:
        if key not in data["subkeys"]:
            data["subkeys"][key] = copy.deepcopy(subObj)
        #不包含子类
        if fileId not in data["subkeys"][key]["lessArr"]["files"]:
            data["subkeys"][key]["lessArr"]["files"].append(fileId)
        if skillId not in data["subkeys"][key]["lessArr"]["skills"]:
            data["subkeys"][key]["lessArr"]["skills"].append(skillId)
        #包含子类
        if fileId not in data["subkeys"][key]["moreArr"]["files"]:
            data["subkeys"][key]["moreArr"]["files"].append(fileId)
        if skillId not in data["subkeys"][key]["moreArr"]["skills"]:
            data["subkeys"][key]["moreArr"]["skills"].append(skillId)
    return data


#对单文件处理
def dealImproFile(data, typeName, typeId, fileName, fileData, fileId, obj):
    splitData = re.split(r"\n-----*\n", fileData)
    skillRegex = r"(技能名称：)(.*)"
    prioRegex = r"(优先等级：)([0-9]*)"
    realRegex = r"(实际耗点：)(.*)"
    keyRegex = r"([0-9]*)（(抵点：)?([^）]*)）"

    obj["id"] = fileId
    obj["len"] = 0
    obj["data"] = ""

    if typeName == "种族":
        for i in splitData:
            if i == "":
                continue
            obj["data"] += f"<div>{i}</div>"
        return

    elif typeName == "初始技能与日常技能":

        if fileName == "初始技能表":
            skillRegex = r"(\[[^\]]*\])："
        elif fileName == "日常技能（联动表）":
            skillRegex = r"(【[^\]]*】)"

        for i in splitData:
            if i == "":
                continue

            #提取名称
            name = re.findall(skillRegex, i)

            #高亮
            if  len(name) > 0:

                #统计技能总数
                obj["len"] += 1

                #高亮名字
                if fileName == "初始技能表" or fileName == "日常技能（联动表）":
                    repStr = i.replace(name[0], f"""<span class="skillTitle">{name[0]}</span>""")
                else:
                    repStr = i.replace(name[0][0]+name[0][1], f"""<span class="preIntro">{name[0][0]}</span><span class="skillTitle">{name[0][1]}</span>""")
                tempStr = f"""<div id="skill_{typeId}_{fileId}_{obj["len"]}">{repStr}</div>"""
            else:
                tempStr = f"<div>{i}</div>"
            obj["data"] += tempStr
        return

    #技能表，特质，职业
    else:
        for i in splitData:
            if i == "":
                continue

            #提取名称
            name = re.findall(skillRegex, i)

            #高亮
            if  len(name) > 0:

                #统计技能总数
                global totalSkills
                totalSkills += 1
                obj["len"] += 1
                fileEleId = f"""file_{typeId}_{fileId}"""
                skillEleId = f"""skill_{typeId}_{fileId}_{obj["len"]}"""

                #多个名称，有问题
                if  len(name) > 1:
                    print("多个名称，有问题：", fileName, name)

                #高亮名字
                repStr = i.replace(name[0][0]+name[0][1], f"""<span class="preIntro">{name[0][0]}</span><span class="skillTitle">{name[0][1]}</span>""")

                #高亮优先等级
                prioObj = re.findall(prioRegex, repStr)
                if  len(prioObj) > 0:
                    repStr = repStr.replace(prioObj[0][0]+prioObj[0][1], f"""<span class="preIntro">{prioObj[0][0]}</span><span class="prioNum">{prioObj[0][1]}</span>""")

                #提取并替换真实关键词
                real = re.findall(realRegex, i)
                if  len(real) > 0:
                    #多个实际耗点行，有问题
                    if len(real) > 1:
                        print("多个实际耗点行，有问题：", fileName, name)

                    #提取并替换真实关键词
                    newString = f"""<span class="preIntro">{real[0][0]}</span>"""
                    nowIndex = 0
                    for match_obj in re.finditer(keyRegex, real[0][1]):
                        #替换
                        cost = match_obj.group(1)
                        offs = match_obj.group(2)
                        key = match_obj.group(3)
                        newString += real[0][1][nowIndex:match_obj.start()]
                        nowIndex = match_obj.end()
                        #提取
                        #关键词->技能
                        if offs is not None:
                            data["抵点"] = pushImproKeys(typeId, fileEleId, skillEleId, key, data["抵点"])
                            if fileEleId not in data["抵点"]["moreArr"]["files"]:
                                data["抵点"]["moreArr"]["files"].append(fileEleId)
                            if skillEleId not in data["抵点"]["moreArr"]["skills"]:
                                data["抵点"]["moreArr"]["skills"].append(skillEleId)
                        else:
                            data["效果"] = pushImproKeys(typeId, fileEleId, skillEleId, key, data["效果"])
                            if fileEleId not in data["效果"]["moreArr"]["files"]:
                                data["效果"]["moreArr"]["files"].append(fileEleId)
                            if skillEleId not in data["效果"]["moreArr"]["skills"]:
                                data["效果"]["moreArr"]["skills"].append(skillEleId)
                        #高亮实际耗点
                        if offs is None:
                            offs = ""
                        else:
                            offs = f"""<span class="preOffset">{offs}</span>"""
                        newString += f"""<span class="prioNum">{cost}</span><span class='fullKey' data-cost='{cost}' data-key='{key}'>（{offs}{key}）</span>"""
                    newString += real[0][1][nowIndex:]

                    #补充遗漏数字高亮
                    restNum = re.findall(r"([0-9]{1,5})(=)", newString)
                    if  len(restNum) > 0:
                        newString = newString.replace(restNum[0][0]+restNum[0][1], f"""<span class="prioNum">{restNum[0][0]}</span>{restNum[0][1]}""")
                    restNum = re.findall(r"(=)([0-9]{1,5})", newString)
                    if  len(restNum) > 0:
                        newString = newString.replace(restNum[0][0]+restNum[0][1], f"""{restNum[0][0]}<span class="prioNum">{restNum[0][1]}</span>""")

                    repStr = repStr.replace(real[0][0]+real[0][1], newString)

                    keys = re.findall(r"([0-9]*)（([^）]*)）", real[0][1])
                    if len(keys) <= 0:
                        #元素id
                        improTrueKeysList["未分类"]["moreArr"]["files"].append(fileEleId)
                        improTrueKeysList["未分类"]["moreArr"]["skills"].append(skillEleId)
                        # DEBUG: 所有无实际耗点的技能
                        print("无实际耗点，有问题：", fileName, name)
                else:
                    #元素id
                    improTrueKeysList["未分类"]["moreArr"]["files"].append(fileEleId)
                    improTrueKeysList["未分类"]["moreArr"]["skills"].append(skillEleId)
                    # DEBUG: 所有无实际耗点的技能
                    print("无实际耗点，有问题：", fileName, name)

                #最后套div
                tempStr = f"""<div id="skill_{typeId}_{fileId}_{obj["len"]}" class="skillText">{repStr}</div>"""
            else:
                tempStr = f"<div>{i}</div>"
            obj["data"] += tempStr


#挨个处理文件
for key in improList:
    count = 1
    improList[key]["files"] = {}
    for file in os.listdir(improList[key]["path"]):
        trueName = re.sub(r"\[[^\]]*\]", "", file.replace(".txt", ""))
        improList[key]["files"][trueName] = {}
        f = open(improList[key]["path"] + "/" + file, 'r', encoding="utf-8")
        dealImproFile(improTrueKeysList, key, improList[key]["id"], trueName, f.read(), count, improList[key]["files"][trueName])
        count += 1
    del improList[key]["path"]

#文本分析
newImproList = {"name":"强化序列库", "data":[]}
for type in improList:
        tempFolder = {"name":type, "data":[]}
        for file in improList[type]["files"]:
                key = f"""file_{improList[type]["id"]}_{improList[type]["files"][file]["id"]}"""
                tempFile = {"name":file, "key":key, "len":improList[type]["files"][file]["len"], "data":f"""<div class="fileTitle">{file}</div>{improList[type]["files"][file]["data"]}"""};
                tempFolder["data"].append(tempFile)
        newImproList["data"].append(tempFolder)

#重构关键词
def rebuildKeys(obj):
    for key in obj:
        obj[key]["subkeys"] = rebuildKeys(obj[key]["subkeys"])
        if len(obj[key]["subkeys"]) > 0:
            obj[key]["subkeys"].append({"key":"未分类", "subkeys":[], "moreArr":{"files":obj[key]["lessArr"]["files"], "skills":obj[key]["lessArr"]["skills"]}})
            obj[key]["subkeys"].append({"key":"所有", "subkeys":[], "moreArr":{"files":obj[key]["moreArr"]["files"], "skills":obj[key]["moreArr"]["skills"]}})

    tempArray = []
    for key in obj:
        temp = obj[key]
        temp["key"] = key
        tempArray.append(temp)

    return tempArray


#重构关键词
rebuildKeysList = rebuildKeys(improTrueKeysList)
print(rebuildKeysList)


theFile = open('./src/data/improList.js', 'w', encoding="utf-8")
x = lzstring.LZString()
improListStr = json.dumps(newImproList, ensure_ascii=False)
improTrueKeysListStr = json.dumps(rebuildKeysList, ensure_ascii=False)
theFile.write(f"""export var skillsNum = {totalSkills};export var decImproTrueKeysList = '{x.compressToBase64(improTrueKeysListStr)}';export var decImproList = '{x.compressToBase64(improListStr)}';""")
theFile.close()

#道具库
for file in os.listdir(itemDataBase):
    if ("更新日志" in file):
        if (file not in "更新日志.txt"):
            os.rename(os.path.join(itemDataBase, file), os.path.join(itemDataBase, "更新日志.txt"))
print(totalSkills)
