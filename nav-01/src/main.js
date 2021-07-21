const $siteList = $('.siteList');
const $lastLi = $siteList.find('li.last');

const x = localStorage.getItem("x")

const xObject = JSON.parse(x)

const hashMap = xObject || [
    {logo: 'A', logType: "text", url: 'https://www.acfun.cn'},
    {logo: 'B', logType: "image", url: 'https://www.bilibili.com'}
];

const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '') // 删除 / 开头的内容
}

const render = () => {
    $siteList.find('li:not(.last)').remove();

    hashMap.forEach((node, index) => {
        const $li = $(`<li><a href="${node.url}">
                <div class="site">
                    <div class="logo">${node.logo}</div>
                    <div class="link">${simplifyUrl(node.url)}</div>
                    <div class="close">
                      <svg class="icon" aria-hidden="true">
                         <use xlink:href="#icon-cangpeitubiao_shanchu"></use>
                      </svg>
                    </div>
                </div>
            </a></li>`).insertBefore($lastLi);


        $li.on('click', '.close', (e) => {
            e.preventDefault()
            console.log(hashMap)
            hashMap.splice(index, 1)
            render()
        })

    });
};


render();


$('.addButton').on('click', () => {
    let url = window.prompt("请输入网站地址");

    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        logType: 'text',
        url: url
    });

    render();

});


// $('.site').on('click','.close', (e) => {
//     e.preventDefault()
// })


window.onbeforeunload = () => {
    console.log("页面要关闭了");
    const str = JSON.stringify(hashMap)
    localStorage.setItem("x", str)
}