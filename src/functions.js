//响应关键词
export function showKeys(list, len)
{
    if(len != 0) return;
    $(`.fileText`).hide();
    $(`.skillText`).hide();
    $(`.itemText`).hide();
    Object.keys(list).forEach((item) => {
        $(`#${Array.from(list[item]).join(",#")}`).show();
    });
}
