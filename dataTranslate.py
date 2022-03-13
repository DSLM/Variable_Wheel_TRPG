import os
import json
import re
from docx import Document #pip install python_docx
import lzstring #pip install lzstring

debugList = {"keys":{}, "skills":[], "noUpdate":[]}
debugSkillNum = [0, 0];

improTrueKeysList = {"抵点":{"types":{}, "subkeys":{}}, "效果":{"types":{}, "subkeys":{}}, "未分类":{"types":{}, "subkeys":{}}}
itemTrueKeysList = {"抵点":{"types":{}, "subkeys":{}}, "效果":{"types":{}, "subkeys":{}}, "未分类":{"types":{}, "subkeys":{}}}

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
#新方式：客户端处理页面
improList = {
"初始技能与日常技能":{"id":1},
"技能表":{"id":2},
"特质":{"id":3},
"职业":{"id":4},
"种族":{"id":5}}

for file in os.listdir(improDataBase):
    if ("更新日志" in file):
        if (file not in "更新日志.txt"):
            os.rename(os.path.join(improDataBase, file), os.path.join(improDataBase, "更新日志.txt"))
    for key in improList:
        if (key in file) and (file not in key):
            os.rename(os.path.join(improDataBase, file), os.path.join(improDataBase, key))
for key in improList:
    improList[key]["path"] = improDataBase + "/" + key

for key in improList:
    count = 1
    improList[key]["files"] = {}
    for file in os.listdir(improList[key]["path"]):
        trueName = re.sub(r"\[[^\]]*\]", "", file.replace(".txt", ""))
        improList[key]["files"][trueName] = {}
        f = open(improList[key]["path"] + "/" + file, 'r', encoding="utf-8")
        improList[key]["files"][trueName]["data"] = f.read()
        improList[key]["files"][trueName]["id"] = count
        count += 1
    del improList[key]["path"]

theFile = open('./src/data/improList.js', 'w', encoding="utf-8")
x = lzstring.LZString()
str = json.dumps(improList, ensure_ascii=False)
theFile.write("export var decImproList = '" + x.compressToBase64(str) + "'")
theFile.close()

#道具库
for file in os.listdir(itemDataBase):
    if ("更新日志" in file):
        if (file not in "更新日志.txt"):
            os.rename(os.path.join(itemDataBase, file), os.path.join(itemDataBase, "更新日志.txt"))
