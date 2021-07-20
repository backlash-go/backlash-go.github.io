const hashMap = [
    {logo: 'A', logType: "text", url: 'https://www.acfun.cn'},
    {logo: 'B', logType: "image", url: 'https://www.bilibili.com'}
]

const ob1 = {logo: 'A', logType: "text", url: 'https://www.acfun.cn'}


for (let k in ob1) {
    console.log(k)
}

hashMap.forEach((node,index) => {
    console.log(node.logo)
    console.log(index)
})

$('.addButton').on('click', () => {
    let url = window.prompt("请输入网站地址")

    console.log(url)
    const $siteList = $('.siteList')

    console.log($siteList)

    const $lastLi = $siteList.find('li.last')


    const $li = $(`<a href="${url}">
                <div class="site">
                    <div class="logo">${url[0]}</div>
                    <div class="link">${url}</div>
                </div>
            </a>`).insertBefore($lastLi)

})