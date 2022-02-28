import { improTrueKeysList } from "./data/keysList.js";
import { vars } from "./vars.js";

export function improListDeal(type, file, typeNum, fileData)
{
    let splitData = fileData.data.split(/\n-----*\n/);
    let returnData = {data:"", len:0};
    let skillRegex = /技能名称：(.*)/g;
    let realRegex = /实际耗点：(.*)/g;
    let keyRegex = /([0-9]*)（([^）]*)）/g;

    if(type == "种族")
    {
        returnData.data = `<div>${fileData.data}</div>`;
        return returnData;
    }

    if(type == "初始技能与日常技能")
    {
        if(file == "初始技能表")
        {
            skillRegex = /(\[[^\]]*\])：/;
        }
        else if(file == "日常技能（联动表）")
        {

            skillRegex = /(【[^\]]*】)/;
        }
        splitData.forEach((tempStr) => {
            skillRegex.lastIndex = 0;
            if(tempStr != "")
            {
                //提取名称
                let nameObj = skillRegex.exec(tempStr);
                skillRegex.lastIndex = 0;
                if(nameObj != null)
                {
                    tempStr = `<div id="skill_${typeNum}_${fileData.id}_${returnData.len}" class="skillText">${tempStr.replace(nameObj[0], nameObj[0].replace(nameObj[1], `<span class="skillTitle">${nameObj[1]}</span>`))}</div>`;
                    //技能总数
                    returnData.len += 1;
                }
                returnData.data += tempStr;
            }
        });
        return returnData;
    }

    //技能表，特质，职业
    splitData.forEach((tempStr) => {
        if(tempStr != "")
        {
            //提取名称
            let nameObj = skillRegex.exec(tempStr);
            skillRegex.lastIndex = 0;
            if(nameObj != null)
            {
                //统计技能总数
                vars.skillsNum += 1;
                //多个名称，有问题
                if(tempStr.match(skillRegex).length > 1)
                {
                    if(process.env.NODE_ENV=="development")
                        console.log(`多个名称，有问题：${file} ${tempStr.match(skillRegex)}`);
                }
                tempStr = `<div id="skill_${typeNum}_${fileData.id}_${returnData.len}" class="skillText">${tempStr.replace(nameObj[0], nameObj[0].replace(nameObj[1], `<span class="skillTitle">${nameObj[1]}</span>`))}</div>`;

                //提取并替换真实关键词
                let realObj = realRegex.exec(tempStr);
                realRegex.lastIndex = 0;
                let newString = "", nowIndex = 0;
                //无实际耗点
                if(tempStr.match(realRegex) == null)
                {
                    if(!(type in improTrueKeysList["未分类"].skills))
                    {
                        improTrueKeysList["未分类"].skills[type] = {};
                    }
                    if(!(file in improTrueKeysList["未分类"].skills[type]))
                    {
                        improTrueKeysList["未分类"].skills[type][file] = [];
                    }
                    //技能字典，目前没用
                    improTrueKeysList["未分类"].skills[type][file].push(returnData.len);
                    //元素id
                    improTrueKeysList["未分类"]["show"]["files"].add(`file_${typeNum}_${fileData.id}`);
                    improTrueKeysList["未分类"]["show"]["skills"].add(`skill_${typeNum}_${fileData.id}_${returnData.len}`);
                    if(process.env.NODE_ENV=="development")
                        console.log(`无实际耗点，有问题：${file} ${nameObj}`);
                }
                else
                {
                    for (let keyObj of realObj[0].matchAll(keyRegex))
                    {
                        //替换
                        let cost = keyObj[1], key = keyObj[2];
                        newString += realObj[0].slice(nowIndex, keyObj.index);
                        nowIndex = keyObj.index + keyObj[0].length;
                        newString += `<span class='fullKey' data-cost='${keyObj[1]}' data-key='${keyObj[2]}'>${keyObj[0]}</span>`;
                        //提取
                        //技能->关键词
                        //list["skills"][-1]["keys"][key] = {"cost": cost}
                        //关键词->技能
                        if(key.indexOf("抵点：") != -1)
                        {
                            pushKeys(type, file, typeNum, fileData.id, returnData.len, key.replace("抵点：", ""), "抵点");
                        }
                        else
                        {
                            pushKeys(type, file, typeNum, fileData.id, returnData.len, key, "效果");
                        }
                    }
                    newString +=  realObj[0].slice(nowIndex);
                    tempStr = tempStr.replace(realObj[0], newString);

                    //无实际耗点
                    if(realObj[0].match(keyRegex) == null)
                    {
                        if(!(type in improTrueKeysList["未分类"].skills))
                        {
                            improTrueKeysList["未分类"].skills[type] = {};
                        }
                        if(!(file in improTrueKeysList["未分类"].skills[type]))
                        {
                            improTrueKeysList["未分类"].skills[type][file] = [];
                        }
                        //技能字典，目前没用
                        improTrueKeysList["未分类"].skills[type][file].push(returnData.len);
                        //元素id
                        improTrueKeysList["未分类"].show.files.add(`file_${typeNum}_${fileData.id}`);
                        improTrueKeysList["未分类"].show.files.add(`skill_${typeNum}_${fileData.id}_${returnData.len}`);
                        if(process.env.NODE_ENV=="development")
                            console.log(`无实际耗点，有问题：${file} ${nameObj}`);
                    }

                    //多个实际耗点行，有问题
                    if(tempStr.match(realRegex).length > 1)
                    {
                        if(process.env.NODE_ENV=="development")
                            console.log(`多个实际耗点行，有问题：${file} ${nameObj}`);
                    }
                }
                //技能总数
                returnData.len += 1;
            }
            else
            {
                tempStr = `<div>${tempStr}</div>`;
            }
            returnData.data += tempStr;
        }
    });
    return returnData;
}

//添加关键词
function pushKeys(type, file, typeId, fileId, skillId, key, firstKey)
{
    let splitKeys = key.split('-');
    splitKeys.push("");
    let curLevel = function(now, theRest, theFirstKey){let theStr = `this["${theFirstKey}"]${now ==0?'':'["subkeys"]["'}${splitKeys.slice(0,now).join('"]["subkeys"]["')}${now ==0?'':'"]'}${theRest}`;return eval(theStr);};
    splitKeys.forEach((curKey, i) => {
        if(i+1<splitKeys.length && !(curKey in curLevel.apply(improTrueKeysList, [i, `["subkeys"]`, firstKey])))
        {
            curLevel.apply(improTrueKeysList, [i, `["subkeys"]["${curKey}"] = {skills:{}, subkeys:{}, show:{files:new Set(), skills:new Set()}, lessArr:{files:new Set(), skills:new Set()}, moreArr:{files:new Set(), skills:new Set()}}`, firstKey]);
        }
        if(!(type in curLevel.apply(improTrueKeysList, [i, `["skills"]`, firstKey])))
        {
            curLevel.apply(improTrueKeysList, [i, `["skills"]["${type}"] = {}`, firstKey]);
        }
        if(!(file in curLevel.apply(improTrueKeysList, [i, `["skills"]`, firstKey])[type]))
        {
            curLevel.apply(improTrueKeysList, [i, `["skills"]["${type}"]["${file}"] = []`, firstKey]);
        }
        //技能字典，目前没用
        curLevel.apply(improTrueKeysList, [i, `["skills"]["${type}"]["${file}"].push(${skillId})`, firstKey]);
        //元素id
        curLevel.apply(improTrueKeysList, [i, `["show"]["files"].add("file_${typeId}_${fileId}");`, firstKey]);
        curLevel.apply(improTrueKeysList, [i, `["show"]["skills"].add("skill_${typeId}_${fileId}_${skillId}");`, firstKey]);
        //所有
        curLevel.apply(improTrueKeysList, [i, `["moreArr"]["files"].add("file_${typeId}_${fileId}");`, firstKey]);
        curLevel.apply(improTrueKeysList, [i, `["moreArr"]["skills"].add("skill_${typeId}_${fileId}_${skillId}");`, firstKey]);
        //未分类
        if(i+1>=splitKeys.length)
        {
            curLevel.apply(improTrueKeysList, [i, `["lessArr"]["files"].add("file_${typeId}_${fileId}");`, firstKey]);
            curLevel.apply(improTrueKeysList, [i, `["lessArr"]["skills"].add("skill_${typeId}_${fileId}_${skillId}");`, firstKey]);
        }
    });
}

//重构关键词列表
export function rebuildKeys(obj)
{
    Object.keys(obj).forEach((key) => {
        obj[key].subkeys = rebuildKeys(obj[key].subkeys);
        if(obj[key].subkeys.length > 0)
        {
            obj[key].subkeys.push({key:"未分类", subkeys:[], show:{files:obj[key].lessArr.files, skills:obj[key].lessArr.skills}});
            obj[key].subkeys.push({key:"所有", subkeys:[], show:{files:obj[key].moreArr.files, skills:obj[key].moreArr.skills}});
        }
    });

    let tempArray = Object.keys(obj).map((key) => {
        let temp = obj[key];
        temp.key = key;
        return temp;
    });
    return tempArray;
}

//响应关键词
export function showKeys(list)
{
    if(list.files == undefined || list.files.length == 0) return;
    $(`.fileText`).hide();
    $(`.skillText`).hide();
    $(`#${Array.from(list.files).join(",#")}`).show();
    $(`#${Array.from(list.skills).join(",#")}`).show();
}
