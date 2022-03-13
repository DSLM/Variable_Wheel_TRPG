//响应关键词
export function showKeys(list, len)
{
    if(list.files == undefined || list.files.length == 0 || len != 0) return;
    $(`.fileText`).hide();
    $(`.skillText`).hide();
    $(`#${Array.from(list.files).join(",#")}`).show();
    $(`#${Array.from(list.skills).join(",#")}`).show();
}
