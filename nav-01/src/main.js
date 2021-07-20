const $siteList = $('.siteList');
const $lastLi = $siteList.find('li.last');

const hashMap = [
    {logo: 'A', logType: "text", url: 'https://www.acfun.cn'},
    {logo: 'B', logType: "image", url: 'https://www.bilibili.com'}
];


const render = () => {
    $siteList.find('li:not(.last)').remove();

    hashMap.forEach((node) => {
        const $li = $(`<li><a href="${node.url}">
                <div class="site">
                    <div class="logo">${node.logo}</div>
                    <div class="link">${node.url}</div>
                </div>
            </a></li>`).insertBefore($lastLi);
    });
};

render();


$('.addButton').on('click', () => {
    let url = window.prompt("请输入网站地址");

    hashMap.push({
        logo: url[0],
        logType: 'text',
        url: url
    });

    render();

});