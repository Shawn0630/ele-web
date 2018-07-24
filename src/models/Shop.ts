interface Shop {
    imgUrl: string;
    isBrand: boolean;
    shopName: string;
    starNum: number;
    monthlySales: number;
    initMoney: number;
    deliveryFee: number;
    distance: number;
    needTime: string;
    isBird: boolean;
    isOntime: boolean;
    isInsurance: boolean;
    needtip: boolean;
    isNewShop?: boolean;
    shopActivity?: Promotion[];
}

enum PromotionType {
    NEW = "new",
    SUBTRACTION = "subtraction",
    SPECIAL = "special",
    DISCOUNT = "discount"

}

interface Promotion {
    variety: PromotionType;
    slogan: string;
}

const mock: Shop[] = [
    {
        imgUrl: "http://images.cangdu.org/15cf6c700bb2135.jpg",
        isBrand: true,
        shopName: "效果演示",
        starNum: 4.6,
        monthlySales: 532,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1177.2,
        needTime: "20小时5分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true,
        isNewShop: true,
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
        ]
    },
    {
        imgUrl: "http://images.cangdu.org/15c58db523471.jpg",
        isBrand: true,
        shopName: "杨国福麻辣烫",
        starNum: 4.9,
        monthlySales: 353,
        initMoney: 20,
        deliveryFee: 5,
        distance: 2125.6,
        needTime: "31小时22分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15cc9bbe3981688.jpg",
        isBrand: true,
        shopName: "肯德基",
        starNum: 4.1,
        monthlySales: 57,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1216.2,
        needTime: "21小时9分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true,
        isNewShop: true
    },
    {
        imgUrl: "http://images.cangdu.org/15cee7825042013.jpg",
        isBrand: true,
        shopName: "麦当劳",
        starNum: 3.9,
        monthlySales: 221,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1181.1,
        needTime: "20小时19分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15c58dc33a774.jpg",
        isBrand: true,
        shopName: "hhhh",
        starNum: 3.7,
        monthlySales: 448,
        initMoney: 20,
        deliveryFee: 5,
        distance: 2131.3,
        needTime: "26小时58分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15d2c1713032620.png",
        isBrand: true,
        shopName: "嘿嘿嘿",
        starNum: 4.5,
        monthlySales: 912,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1182.4,
        needTime: "20小时20分钟",
        isBird: true,
        isOntime: true,
        isInsurance: false,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15d30a4acbb2676.png",
        isBrand: false,
        shopName: "白师傅",
        starNum: 4.4,
        monthlySales: 413,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1351.2,
        needTime: "21小时47分钟",
        isBird: false,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15c58db9ff372.jpg",
        isBrand: true,
        shopName: "北邮",
        starNum: 3.8,
        monthlySales: 142,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1200.2,
        needTime: "20小时39分钟",
        isBird: true,
        isOntime: false,
        isInsurance: false,
        needtip: false
    },
    {
        imgUrl: "http://images.cangdu.org/15cf6c700bb2135.jpg",
        isBrand: true,
        shopName: "效果演示",
        starNum: 4.6,
        monthlySales: 532,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1177.2,
        needTime: "20小时5分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15c58db523471.jpg",
        isBrand: true,
        shopName: "杨国福麻辣烫",
        starNum: 4.9,
        monthlySales: 353,
        initMoney: 20,
        deliveryFee: 5,
        distance: 2125.6,
        needTime: "31小时22分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15cc9bbe3981688.jpg",
        isBrand: true,
        shopName: "肯德基",
        starNum: 4.1,
        monthlySales: 57,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1216.2,
        needTime: "21小时9分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15cee7825042013.jpg",
        isBrand: true,
        shopName: "麦当劳",
        starNum: 3.9,
        monthlySales: 221,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1181.1,
        needTime: "20小时19分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15c58dc33a774.jpg",
        isBrand: true,
        shopName: "hhhh",
        starNum: 3.7,
        monthlySales: 448,
        initMoney: 20,
        deliveryFee: 5,
        distance: 2131.3,
        needTime: "26小时58分钟",
        isBird: true,
        isOntime: true,
        isInsurance: true,
        needtip: true
    },
    {
        imgUrl: "http://images.cangdu.org/15d2c1713032620.png",
        isBrand: true,
        shopName: "嘿嘿嘿",
        starNum: 4.5,
        monthlySales: 912,
        initMoney: 20,
        deliveryFee: 5,
        distance: 1182.4,
        needTime: "20小时20分钟",
        isBird: true,
        isOntime: true,
        isInsurance: false,
        needtip: true
    }
    ];

export {Shop, PromotionType, Promotion, mock};