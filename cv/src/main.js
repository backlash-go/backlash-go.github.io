let str = `
/*你好我是前端新人
接下来我要加样式
首先我要准备一个DIV
*/
#div1 {
    width: 200px;
    height: 200px;
}
/*
变八卦
*/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

#div1::before {
        content: '';
        display: block;
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background: black;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 100%);    }

    #div1::after{
        content: '';
        display: block;
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        bottom: 0;
        background: white;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 17%, rgba(255,255,255,1) 17%, rgba(255,255,255,1) 100%);
    }
`;

let n = 0;
let s = document.querySelector("#demo");
let style = document.querySelector("#style");

let str2 = "";

let setUp = () => {
    setTimeout(() => {
        if (str.length === 0 || n >= str.length) {
            return;
        }

        if (str[n] === "\n") {
            str2 += "<br>";
        } else if (str[n] === " ") {
            str2 += "&nbsp";
        } else {
            str2 += str[n];
        }
        s.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        //滚动到最下面
        window.scrollTo(0, 99999);
        s.scrollTo(0, 99999);
        n += 1;

        setUp();
    }, 10);
};

setUp();
