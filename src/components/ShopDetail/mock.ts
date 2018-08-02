import { com } from "../../models/ele";
import PromotionType = com.ele.model.dto.ele.PromotionType;
import IShopDetail = com.ele.model.dto.ele.IShopDetail;
import IShopEvalution = com.ele.model.dto.ele.IShopEvaluation;

const mockShop: IShopDetail = {
    shopImgUrl: "https://fuss10.elemecdn.com/d/ab/865960541f74551858f8ed9d3685bjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
    shopName: "港岛记（北京知春路店）",
    shopAddress: "北京市海淀区中关村大街15 - 9号F1-R133、R137、R138",
    shopService: "蜂鸟专送／34分钟送达／配送费¥5",
    announcement: "公告：新店开张！感谢惠顾！如有特殊需求，请备注或打电话告诉我们，谢谢大家",
    openTime: "10:55-14:25,16:30-21:30",
    slogan: "新店开张！感谢惠顾！如有特殊需求，请备注或打电话告诉我们，谢谢大家",
    starNum: 4.5,
    deliveryFee: 5,
    sendThreshold: 20,
    activityNum: 10,
    shopActivity: [
        {
            variety: PromotionType.NEW,
            slogan: "新用户下单立减17.0元"
        },
        {
            variety: PromotionType.SUBTRACTION,
            slogan: "满40减20"
        },
        {
            variety: PromotionType.SPECIAL,
            slogan: "16元特惠"
        },
        {
            variety: PromotionType.DISCOUNT,
            slogan: "五折美食"
        }
    ],
    varietyList: [
        {
            name: "热销",
            orderNum: 0,
            desc: "大家喜欢吃，才叫真好吃。",
            goodList: [
                {
                    imgUrl: "https://fuss10.elemecdn.com/e/a6/71c3838c9b0da0b4fd06551974c83jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "港仔咖喱鱼饭",
                    monthSale: 823,
                    favorableRate: 97,
                    nowPrice: 9.5,
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/6/90/a5123e470c258ee2076b70d83ad07jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "黯然销魂叉烧饭",
                    monthSale: 790,
                    favorableRate: 93,
                    nowPrice: 25,
                    desc: "正宗香港叉烧，百年匠艺，配以青菜、三色豆及鸭蛋，极致鲜美。",
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/f/fe/1f2fc911702a1c9094a57b8696b30jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "港岛至尊五宝饭",
                    monthSale: 790,
                    favorableRate: 93,
                    nowPrice: 25,
                    desc: "正宗香港叉烧，百年匠艺，配以青菜、三色豆及鸭蛋，极致鲜美。",
                    orderNum: 0
                }
            ]
        },
        {
            name: "优惠",
            orderNum: 0,
            desc: "美味又实惠, 大家快来抢!",
            goodList: [
                {
                    imgUrl: "https://fuss10.elemecdn.com/6/f0/9efa380c91193250bc0eea48810fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "太婆豉汁排骨饭+栗米猪骨汤",
                    monthSale: 99,
                    favorableRate: 83,
                    oriPrice: 41,
                    nowPrice: 20.5,
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/9/7a/a0a69449d3d04ac810704ca7240ccjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "老豆肉饼叉烧拼饭+经典柠檬茶",
                    monthSale: 76,
                    favorableRate: 87,
                    oriPrice: 40.5,
                    nowPrice: 20.25,
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/d/b3/91e034d3ec58b999c793ce0750ae4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "港仔咖喱鱼蛋饭+手工拉奶茶",
                    monthSale: 140,
                    favorableRate: 82,
                    oriPrice: 38.5,
                    nowPrice: 19.25,
                    orderNum: 0
                }
            ]
        },
        {
            name: "超值套餐",
            orderNum: 0,
            goodList: [
                {
                    imgUrl: "https://fuss10.elemecdn.com/d/ab/96e34a07ba430ce43d0ac4963b0e3jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "港岛至尊五宝饭+栗米猪骨汤",
                    monthSale: 141,
                    favorableRate: 96,
                    nowPrice: 40,
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/e/1c/0737aaafa53df963fa92e33ed2d30jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "正点手搣盐焗鸡饭+手工拉奶茶",
                    monthSale: 42,
                    favorableRate: 90,
                    nowPrice: 37,
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/0/95/210eb6f303d012acb48b74f58d4e0jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "黯然销魂叉烧饭+手工拉奶茶",
                    monthSale: 300,
                    favorableRate: 94,
                    nowPrice: 39,
                    orderNum: 0
                }
            ]
        },
        {
            name: "港式烧味",
            orderNum: 0,
            goodList: [
                {
                    imgUrl: "https://fuss10.elemecdn.com/6/90/a5123e470c258ee2076b70d83ad07jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "黯然销魂叉烧饭",
                    desc: "正宗香港叉烧，百年匠艺，配以青菜、三色豆及鸭蛋，极致鲜美。",
                    monthSale: 790,
                    favorableRate: 93,
                    nowPrice: 25,
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/6/a8/e501e87f10cc1df4a6702920ebf77jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "好靓蜜汁双翼饭",
                    desc: "两对甜蜜鸡翅，配以青菜、三色豆及鸭蛋，甜蜜不失清爽。",
                    monthSale: 39,
                    favorableRate: 100,
                    nowPrice: 28,
                    orderNum: 0
                },
                {
                    imgUrl: "https://fuss10.elemecdn.com/9/5a/4d424a7cb4f2cb171e7ea6c64db3bjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                    name: "太婆豉汁排骨饭",
                    desc: "地道香港豉汁排骨，配以青菜、三色豆及鸭蛋，回忆老味道。",
                    monthSale: 71,
                    favorableRate: 100,
                    nowPrice: 28,
                    orderNum: 0
                }
            ]
        }
    ]
};

const mockEvaluation: IShopEvalution = {
    score: 4.6,
    ratio: 49,
    service: 4.6,
    dish: 4.7,
    time: 49,
     stamps: [
        {
            name: "全部",
            num: 470
        },
        {
            name: "满意",
            num: 454
        },
        {
            name: "不满意",
            num: 16
        },
        {
            name: "有图",
            num: 2
        },
        {
            name: "全部",
            num: 470
        },
        {
            name: "满意",
            num: 454
        },
        {
            name: "2333",
            num: 16
        },
        {
            name: "有图",
            num: 2
        }
    ],
    comments: [
        {
            profileImg: "https://fuss10.elemecdn.com/b/db/1d59ab8629efb12d92fc47a0b83c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/",
            name: "匿名用户",
            time: "2017-07-22",
            foods: ["可乐asdads", "烤翅", "汉堡", "薯条"],
            content: "整体很好很满意就是我们吃完突然发现少一道菜鸭脖没有给不过吃的还很开心就算了希望下次认真对待哦",
            costTime: "50",
            star: 4.7
        },
        {
            profileImg: "https://fuss10.elemecdn.com/b/db/1d59ab8629efb12d92fc47a0b83c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/",
            name: "匿名用户",
            time: "2017-07-22",
            foods: ["可乐", "烤翅"],
            star: 2
        },
        {
            profileImg: "https://fuss10.elemecdn.com/b/db/1d59ab8629efb12d92fc47a0b83c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/",
            name: "匿名用户",
            time: "2017-07-22",
            foods: ["可乐", "烤翅", "汉堡"],
            star: 3
        }
    ]
};

export { mockShop, mockEvaluation };
