import os
import json
import re
from docx import Document #pip install python_docx

debugList = {"keys":{}, "skills":[], "noUpdate":[]}
debugSkillNum = [0, 0];

changelogs = {"impro":{}}
improTrueKeysList = {"抵点":{"types":{}, "subkeys":{}}, "效果":{"types":{}, "subkeys":{}}, "未分类":{"types":{}, "subkeys":{}}}

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

def pushKeys(type, file, skillId, key, data):

    if "-" in key:
        keys = key.split('-', 1);
        if keys[0] not in data["subkeys"]:
            data["subkeys"][keys[0]] = {"types":{}, "subkeys":{}}
        pushKeys(type, file, skillId, keys[1], data["subkeys"][keys[0]])
    else:
        if key not in data["subkeys"]:
            data["subkeys"][key] = {"types":{}, "subkeys":{}}
        if type not in data["subkeys"][key]["types"]:
            data["subkeys"][key]["types"][type] = {}
        if file not in data["subkeys"][key]["types"][type]:
            data["subkeys"][key]["types"][type][file] = []
        data["subkeys"][key]["types"][type][file].append(skillId)

#强化序列库函数
def improFirstFunc(type, data):
    count = 1
    data["files"] = {}
    for file in os.listdir(data["path"]):
        if "func" in improDeal[type]:
            trueName = re.sub(r"\[[^\]]*\]", "", file.replace(".txt", ""))
            data["files"][trueName] = improDeal[type]["func"](type, file, data["path"], trueName)
            data["files"][trueName]["id"] = count
            count += 1

def improSkillsFunc(type, fileName, path, trueName):
    count = 1
    f = open(path + "/" + fileName, 'r', encoding="utf-8")
    text = f.read()

    list = {"skills":[]}

    grou = re.split(r"(\n-----*\n)", text)
    for i in grou:
        #提取名称
        name = re.findall(r"技能名称：(.*)", i)
        if  len(name) > 0:
            list["skills"].append({"name": name[0], "data": i, "keys": {}, "id":count})
            #提取实际耗点
            real = re.findall(r"实际耗点：(.*)", i)

            # DEBUG: 技能总数
            debugSkillNum[0] += 1

            if  len(real) > 0:
                # DEBUG: 技能完成数
                debugSkillNum[1] += 1
                #多个实际耗点行，有问题
                if len(real) > 1:
                    print("多个实际耗点行，有问题：", fileName, name)
                real = real[0]

                #提取并替换真实关键词
                newString = ""
                nowIndex = 0
                for match_obj in re.finditer(r"([0-9]*)（([^）]*)）", real):
                    #替换
                    cost = match_obj.group(1)
                    key = match_obj.group(2)
                    newString += real[nowIndex:match_obj.start()]
                    nowIndex = match_obj.end()
                    newString += "<span class='fullKey' data-cost='{costVal}' data-key='{keyVal}'>{costVal}（{keyVal}）</span>".format(costVal=cost, keyVal=key)
                    #提取
                    #技能->关键词
                    #list["skills"][-1]["keys"][key] = {"cost": cost}
                    #关键词->技能
                    if "抵点：" in key:
                        pushKeys(type, trueName, count, key.replace("抵点：", ""), improTrueKeysList["抵点"])
                    else:
                        pushKeys(type, trueName, count, key, improTrueKeysList["效果"])
                newString += real[nowIndex:]
                list["skills"][-1]["data"] = list["skills"][-1]["data"].replace(real, newString)

                keys = re.findall(r"([0-9]*)（([^）]*)）", real)
                if len(keys) <= 0:
                    if type not in improTrueKeysList["未分类"]["types"]:
                        improTrueKeysList["未分类"]["types"][type] = {}
                    if trueName not in improTrueKeysList["未分类"]["types"][type]:
                        improTrueKeysList["未分类"]["types"][type][trueName] = []
                    improTrueKeysList["未分类"]["types"][type][trueName].append(count)
                    # DEBUG: 所有无实际耗点的技能
                    debugList["skills"].append(type+" "+fileName+" "+name[0])
            else:
                # DEBUG: 所有无实际耗点的技能
                debugList["skills"].append(type+" "+fileName+" "+name[0])

            count += 1
    f.close()
    return list

#强化序列库格式化
improList = {
"初始技能与日常技能":{"id":1},
"技能表":{"id":2},
"特质":{"id":3},
"职业":{"id":4},
"种族":{"id":5}}
improDeal = {
"初始技能与日常技能":{},
"技能表":{"func":improSkillsFunc},
"特质":{"func":improSkillsFunc},
"职业":{"func":improSkillsFunc},
"种族":{}}
for file in os.listdir(improDataBase):
    if ("更新日志" in file):
        if (file not in "更新日志.txt"):
            os.rename(os.path.join(improDataBase, file), os.path.join(improDataBase, "更新日志.txt"))
        changelogs["impro"]["path"] = improDataBase + "/更新日志.txt"
    for key in improList:
        if (key in file) and (file not in key):
            os.rename(os.path.join(improDataBase, file), os.path.join(improDataBase, key))
for key in improList:
    improList[key]["path"] = improDataBase + "/" + key

for key in improList:
    improFirstFunc(key, improList[key])
theFile = open('./src/data/improList.js', 'w', encoding="utf-8")
theFile.write("export var improList = " + json.dumps(improList, ensure_ascii=False))
theFile.close()

theFile = open('./src/data/improTrueKeysList.js', 'w', encoding="utf-8")
theFile.write("export var improTrueKeysList = " + json.dumps(improTrueKeysList, ensure_ascii=False))
theFile.close()

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

#检查特质升级链
for i in improList["特质"]["files"]:
    tempList = []
    for j in improList["特质"]["files"][i]["skills"]:
        if not re.search(r"升级链】", j["data"]):
            tempList.append(j["name"])
        else:
            for k in tempList:
                tempSubStr = "【"+k
                tempSubStr = tempSubStr.replace("/", "\/")
                tempSubStr = tempSubStr.replace("(", "\(")
                tempSubStr = tempSubStr.replace(")", "\)")
                tempSubStr = tempSubStr.replace("[", "\[")
                tempSubStr = tempSubStr.replace("]", "\]")
                if re.search(tempSubStr, j["data"]):
                    tempList.remove(k)
                    break
    if (len(tempList) > 0 and i not in ["替身使者《JOJOの奇妙冒险》", "最弱之人", "机械改造——机械飞升", "Philosophiofantasia（贤者幻想）", "恶灵的杀手《黎明杀机》" , "蜘蛛能力者《蜘蛛侠》", "科技术士《寻星者》" ,"尼德霍格&路因加德《北欧神话／奥奇传说》"]):
        print(i)
        print(tempList, "加入白板升级链技能")
# DEBUG: 所有实际词条列表
theFile = open('./log.txt', 'w', encoding="utf-8")
for i in debugList["skills"]:
    theFile.write(i+"\n")
theFile.close()
print("完成技能："+str(debugSkillNum[1])+"；总计技能："+str(debugSkillNum[0]))
