// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "故事从2010年开始",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "我是小白还记得吗？",  // 同上...
        "2011",
        "看谁来了？",
        "哇~~~~",
        "2012年的圣诞",
        "2013年出发去->",
        "北京，北京",
        "卷发好美啊",
        "假装在2014年",
        "2015年的冰雪女王",
        "2016年的鲜花还是很好看的",
        "2017年3块钱的出租车？",
        "2018年这是那里？",
        "2019年还是很有型啊",
        "2020年的戈壁",
        "那么，2021年的呢？"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "故事从2010年开始": "./imgs/20100924_2.jpg",
        "我是小白还记得吗？": "./imgs/20111123.jpg",
        "2011": "./imgs/20111129.jpg",
        "看谁来了？": "./imgs/20120921.jpg",
        "哇~~~~": "./imgs/20121001.jpg",
        "2012年的圣诞": "./imgs/20121225.jpg",
        "2013年出发去->": "./imgs/20131020.jpg",
        "北京，北京": "./imgs/20131020_1.jpg",
        "卷发好美啊": "./imgs/20131020_2.jpg",
        "假装在2014年": "./imgs/285943422136044964.jpg",
        "2015年的冰雪女王": "./imgs/2015.jpg",
        "2016年的鲜花还是很好看的": "./imgs/2016.jpg",
        "2017年3块钱的出租车？": "./imgs/2017.jpg",
        "2018年这是那里？": "./imgs/20181003.jpg",
        "2019年还是很有型啊": "./imgs/20190201.jpg",
        "2020年的戈壁": "./imgs/2020.jpg"
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐起",
        bannar_coming: "Powered By 老公",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "惊不惊喜？",
    }
};
