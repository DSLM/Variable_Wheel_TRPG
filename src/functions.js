export function skillsText(parent, name, data, typeNum)
{
    parent.append($(`<div id="file_${typeNum}_${data.id}" class="fileText">
        <div class="fileTitle">${name}</div>
        <div class="skillText" v-for="item in data" :id="item[2]" v-bind:key="item[2]" v-html="item[1].data">
        </div>
    </div>`));

    let newVue = new Vue({
        el: `#file_${typeNum}_${data.id}`,
        data: {
            data: data.skills.map(sk=> {return [sk.name,sk,`skill_${typeNum}_${data.id}_${sk.id}`];})
        }
    });
}

//真实关键词实例重构
export function trueKeysMenu(data, text)
{
    let keysMenu = [], otherId = [];
    Object.keys(data).forEach((k1) => {
            let tempF1 = {name:k1, data:[], show:[]};
            let keyList1 = data[k1].subkeys;
            let lessOne = [], moreOne = [];
            Object.keys(data[k1].types).forEach((type) => {
                Object.keys(data[k1].types[type]).forEach((file) => {
                    let fileObj = data[k1].types[type][file];
                    let typeId = text[type].id;
                    let fileId = text[type].files[file].id;
                    lessOne.push(`#file_${typeId}_${fileId}`);
                    moreOne.push(`#file_${typeId}_${fileId}`);
                    fileObj.forEach((skill) => {
                        console.log(text[type].files[file].skills);
                        console.log(type);
                        console.log(file);
                        console.log(skill);
                        let skillId = text[type].files[file].skills[skill-1].id;
                        lessOne.push(`#skill_${typeId}_${fileId}_${skillId}`);
                        moreOne.push(`#skill_${typeId}_${fileId}_${skillId}`);
                    });
                });
            });
            if(Object.keys(keyList1).length > 0)
            {
                let tempData = trueKeysMenu(keyList1, text);
                tempF1.data = tempData[0];
                for (var i = 0; i < tempData[1].length; i++) {
                    if (moreOne.indexOf(tempData[1][i]) == -1) moreOne.push(tempData[1][i]);
                }
                tempF1.data.push({name:"未分类", data:[], show:lessOne});
                tempF1.data.push({name:"所有", data:[], show:moreOne});
            }
            else
            {
                tempF1.show = lessOne;
            }
            keysMenu.push(tempF1);
            for (var i = 0; i < moreOne.length; i++) {
                if (otherId.indexOf(moreOne[i]) == -1) otherId.push(moreOne[i]);
            }
    });
    return [keysMenu, otherId];
}

//响应关键词
export function showKeys(list)
{
    if(list == undefined || list.length == 0) return;
    $(`.fileText`).hide();
    $(`.skillText`).hide();
    list.forEach((item) => {
        $(item).show();
    });
}
