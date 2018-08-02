import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace ele. */
    namespace ele {

        /** Namespace model. */
        namespace model {

            /** Namespace dto. */
            namespace dto {

                /** Namespace ele. */
                namespace ele {

                    /** PromotionType enum. */
                    enum PromotionType {
                        NEW = 0,
                        SUBTRACTION = 1,
                        SPECIAL = 2,
                        DISCOUNT = 3
                    }

                    /** Properties of a Promotion. */
                    interface IPromotion {

                        /** Promotion variety */
                        variety?: com.ele.model.dto.ele.PromotionType;

                        /** Promotion slogan */
                        slogan?: string;
                    }

                    /** Represents a Promotion. */
                    class Promotion {

                        /**
                         * Constructs a new Promotion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IPromotion);

                        /** Promotion variety. */
                        public variety: com.ele.model.dto.ele.PromotionType;

                        /** Promotion slogan. */
                        public slogan: string;

                        /**
                         * Creates a new Promotion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Promotion instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IPromotion): com.ele.model.dto.ele.Promotion;

                        /**
                         * Encodes the specified Promotion message. Does not implicitly {@link com.ele.model.dto.ele.Promotion.verify|verify} messages.
                         * @param message Promotion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IPromotion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Promotion message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Promotion.verify|verify} messages.
                         * @param message Promotion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IPromotion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Promotion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Promotion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.Promotion;

                        /**
                         * Decodes a Promotion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Promotion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.Promotion;

                        /**
                         * Verifies a Promotion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Promotion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Promotion
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.Promotion;

                        /**
                         * Creates a plain object from a Promotion message. Also converts values to other types if specified.
                         * @param message Promotion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.Promotion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Promotion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Good. */
                    interface IGood {

                        /** Good imgUrl */
                        imgUrl?: string;

                        /** Good name */
                        name?: string;

                        /** Good desc */
                        desc?: string;

                        /** Good monthSale */
                        monthSale?: number;

                        /** Good favorableRate */
                        favorableRate?: number;

                        /** Good oriPrice */
                        oriPrice?: number;

                        /** Good nowPrice */
                        nowPrice?: number;

                        /** Good orderNum */
                        orderNum?: number;
                    }

                    /** Represents a Good. */
                    class Good {

                        /**
                         * Constructs a new Good.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IGood);

                        /** Good imgUrl. */
                        public imgUrl: string;

                        /** Good name. */
                        public name: string;

                        /** Good desc. */
                        public desc: string;

                        /** Good monthSale. */
                        public monthSale: number;

                        /** Good favorableRate. */
                        public favorableRate: number;

                        /** Good oriPrice. */
                        public oriPrice: number;

                        /** Good nowPrice. */
                        public nowPrice: number;

                        /** Good orderNum. */
                        public orderNum: number;

                        /**
                         * Creates a new Good instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Good instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IGood): com.ele.model.dto.ele.Good;

                        /**
                         * Encodes the specified Good message. Does not implicitly {@link com.ele.model.dto.ele.Good.verify|verify} messages.
                         * @param message Good message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IGood, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Good message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Good.verify|verify} messages.
                         * @param message Good message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IGood, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Good message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Good
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.Good;

                        /**
                         * Decodes a Good message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Good
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.Good;

                        /**
                         * Verifies a Good message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Good message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Good
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.Good;

                        /**
                         * Creates a plain object from a Good message. Also converts values to other types if specified.
                         * @param message Good
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.Good, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Good to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Variety. */
                    interface IVariety {

                        /** Variety name */
                        name?: string;

                        /** Variety orderNum */
                        orderNum?: number;

                        /** Variety desc */
                        desc?: string;

                        /** Variety goodList */
                        goodList?: com.ele.model.dto.ele.IGood[];
                    }

                    /** Represents a Variety. */
                    class Variety {

                        /**
                         * Constructs a new Variety.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IVariety);

                        /** Variety name. */
                        public name: string;

                        /** Variety orderNum. */
                        public orderNum: number;

                        /** Variety desc. */
                        public desc: string;

                        /** Variety goodList. */
                        public goodList: com.ele.model.dto.ele.IGood[];

                        /**
                         * Creates a new Variety instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Variety instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IVariety): com.ele.model.dto.ele.Variety;

                        /**
                         * Encodes the specified Variety message. Does not implicitly {@link com.ele.model.dto.ele.Variety.verify|verify} messages.
                         * @param message Variety message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IVariety, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Variety message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Variety.verify|verify} messages.
                         * @param message Variety message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IVariety, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Variety message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Variety
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.Variety;

                        /**
                         * Decodes a Variety message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Variety
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.Variety;

                        /**
                         * Verifies a Variety message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Variety message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Variety
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.Variety;

                        /**
                         * Creates a plain object from a Variety message. Also converts values to other types if specified.
                         * @param message Variety
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.Variety, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Variety to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ShopProfile. */
                    interface IShopProfile {

                        /** ShopProfile imgUrl */
                        imgUrl?: string;

                        /** ShopProfile isBrand */
                        isBrand?: boolean;

                        /** ShopProfile shopName */
                        shopName?: string;

                        /** ShopProfile starNum */
                        starNum?: number;

                        /** ShopProfile monthlySales */
                        monthlySales?: number;

                        /** ShopProfile initMoney */
                        initMoney?: number;

                        /** ShopProfile deliveryFee */
                        deliveryFee?: number;

                        /** ShopProfile distance */
                        distance?: number;

                        /** ShopProfile needTime */
                        needTime?: string;

                        /** ShopProfile isBird */
                        isBird?: boolean;

                        /** ShopProfile isOntime */
                        isOntime?: boolean;

                        /** ShopProfile isInsurance */
                        isInsurance?: boolean;

                        /** ShopProfile needtip */
                        needtip?: boolean;

                        /** ShopProfile isNewShop */
                        isNewShop?: boolean;

                        /** ShopProfile shopActivity */
                        shopActivity?: com.ele.model.dto.ele.IPromotion[];
                    }

                    /** Represents a ShopProfile. */
                    class ShopProfile {

                        /**
                         * Constructs a new ShopProfile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IShopProfile);

                        /** ShopProfile imgUrl. */
                        public imgUrl: string;

                        /** ShopProfile isBrand. */
                        public isBrand: boolean;

                        /** ShopProfile shopName. */
                        public shopName: string;

                        /** ShopProfile starNum. */
                        public starNum: number;

                        /** ShopProfile monthlySales. */
                        public monthlySales: number;

                        /** ShopProfile initMoney. */
                        public initMoney: number;

                        /** ShopProfile deliveryFee. */
                        public deliveryFee: number;

                        /** ShopProfile distance. */
                        public distance: number;

                        /** ShopProfile needTime. */
                        public needTime: string;

                        /** ShopProfile isBird. */
                        public isBird: boolean;

                        /** ShopProfile isOntime. */
                        public isOntime: boolean;

                        /** ShopProfile isInsurance. */
                        public isInsurance: boolean;

                        /** ShopProfile needtip. */
                        public needtip: boolean;

                        /** ShopProfile isNewShop. */
                        public isNewShop: boolean;

                        /** ShopProfile shopActivity. */
                        public shopActivity: com.ele.model.dto.ele.IPromotion[];

                        /**
                         * Creates a new ShopProfile instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShopProfile instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IShopProfile): com.ele.model.dto.ele.ShopProfile;

                        /**
                         * Encodes the specified ShopProfile message. Does not implicitly {@link com.ele.model.dto.ele.ShopProfile.verify|verify} messages.
                         * @param message ShopProfile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IShopProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShopProfile message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.ShopProfile.verify|verify} messages.
                         * @param message ShopProfile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IShopProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShopProfile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShopProfile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.ShopProfile;

                        /**
                         * Decodes a ShopProfile message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShopProfile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.ShopProfile;

                        /**
                         * Verifies a ShopProfile message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShopProfile message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShopProfile
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.ShopProfile;

                        /**
                         * Creates a plain object from a ShopProfile message. Also converts values to other types if specified.
                         * @param message ShopProfile
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.ShopProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShopProfile to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ShopDetail. */
                    interface IShopDetail {

                        /** ShopDetail shopImgUrl */
                        shopImgUrl?: string;

                        /** ShopDetail shopName */
                        shopName?: string;

                        /** ShopDetail shopAddress */
                        shopAddress?: string;

                        /** ShopDetail shopService */
                        shopService?: string;

                        /** ShopDetail announcement */
                        announcement?: string;

                        /** ShopDetail openTime */
                        openTime?: string;

                        /** ShopDetail slogan */
                        slogan?: string;

                        /** ShopDetail starNum */
                        starNum?: number;

                        /** ShopDetail deliveryFee */
                        deliveryFee?: number;

                        /** ShopDetail sendThreshold */
                        sendThreshold?: number;

                        /** ShopDetail activityNum */
                        activityNum?: number;

                        /** ShopDetail shopActivity */
                        shopActivity?: com.ele.model.dto.ele.IPromotion[];

                        /** ShopDetail varietyList */
                        varietyList?: com.ele.model.dto.ele.IVariety[];
                    }

                    /** Represents a ShopDetail. */
                    class ShopDetail {

                        /**
                         * Constructs a new ShopDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IShopDetail);

                        /** ShopDetail shopImgUrl. */
                        public shopImgUrl: string;

                        /** ShopDetail shopName. */
                        public shopName: string;

                        /** ShopDetail shopAddress. */
                        public shopAddress: string;

                        /** ShopDetail shopService. */
                        public shopService: string;

                        /** ShopDetail announcement. */
                        public announcement: string;

                        /** ShopDetail openTime. */
                        public openTime: string;

                        /** ShopDetail slogan. */
                        public slogan: string;

                        /** ShopDetail starNum. */
                        public starNum: number;

                        /** ShopDetail deliveryFee. */
                        public deliveryFee: number;

                        /** ShopDetail sendThreshold. */
                        public sendThreshold: number;

                        /** ShopDetail activityNum. */
                        public activityNum: number;

                        /** ShopDetail shopActivity. */
                        public shopActivity: com.ele.model.dto.ele.IPromotion[];

                        /** ShopDetail varietyList. */
                        public varietyList: com.ele.model.dto.ele.IVariety[];

                        /**
                         * Creates a new ShopDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShopDetail instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IShopDetail): com.ele.model.dto.ele.ShopDetail;

                        /**
                         * Encodes the specified ShopDetail message. Does not implicitly {@link com.ele.model.dto.ele.ShopDetail.verify|verify} messages.
                         * @param message ShopDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IShopDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShopDetail message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.ShopDetail.verify|verify} messages.
                         * @param message ShopDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IShopDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShopDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShopDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.ShopDetail;

                        /**
                         * Decodes a ShopDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShopDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.ShopDetail;

                        /**
                         * Verifies a ShopDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShopDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShopDetail
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.ShopDetail;

                        /**
                         * Creates a plain object from a ShopDetail message. Also converts values to other types if specified.
                         * @param message ShopDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.ShopDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShopDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EvaluationStamp. */
                    interface IEvaluationStamp {

                        /** EvaluationStamp name */
                        name?: string;

                        /** EvaluationStamp num */
                        num?: number;
                    }

                    /** Represents an EvaluationStamp. */
                    class EvaluationStamp {

                        /**
                         * Constructs a new EvaluationStamp.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IEvaluationStamp);

                        /** EvaluationStamp name. */
                        public name: string;

                        /** EvaluationStamp num. */
                        public num: number;

                        /**
                         * Creates a new EvaluationStamp instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EvaluationStamp instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IEvaluationStamp): com.ele.model.dto.ele.EvaluationStamp;

                        /**
                         * Encodes the specified EvaluationStamp message. Does not implicitly {@link com.ele.model.dto.ele.EvaluationStamp.verify|verify} messages.
                         * @param message EvaluationStamp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IEvaluationStamp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EvaluationStamp message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.EvaluationStamp.verify|verify} messages.
                         * @param message EvaluationStamp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IEvaluationStamp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EvaluationStamp message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EvaluationStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.EvaluationStamp;

                        /**
                         * Decodes an EvaluationStamp message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EvaluationStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.EvaluationStamp;

                        /**
                         * Verifies an EvaluationStamp message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EvaluationStamp message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EvaluationStamp
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.EvaluationStamp;

                        /**
                         * Creates a plain object from an EvaluationStamp message. Also converts values to other types if specified.
                         * @param message EvaluationStamp
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.EvaluationStamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EvaluationStamp to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EvaluationComment. */
                    interface IEvaluationComment {

                        /** EvaluationComment profileImg */
                        profileImg?: string;

                        /** EvaluationComment name */
                        name?: string;

                        /** EvaluationComment time */
                        time?: string;

                        /** EvaluationComment foods */
                        foods?: string[];

                        /** EvaluationComment content */
                        content?: string;

                        /** EvaluationComment costTime */
                        costTime?: string;

                        /** EvaluationComment star */
                        star?: number;
                    }

                    /** Represents an EvaluationComment. */
                    class EvaluationComment {

                        /**
                         * Constructs a new EvaluationComment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IEvaluationComment);

                        /** EvaluationComment profileImg. */
                        public profileImg: string;

                        /** EvaluationComment name. */
                        public name: string;

                        /** EvaluationComment time. */
                        public time: string;

                        /** EvaluationComment foods. */
                        public foods: string[];

                        /** EvaluationComment content. */
                        public content: string;

                        /** EvaluationComment costTime. */
                        public costTime: string;

                        /** EvaluationComment star. */
                        public star: number;

                        /**
                         * Creates a new EvaluationComment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EvaluationComment instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IEvaluationComment): com.ele.model.dto.ele.EvaluationComment;

                        /**
                         * Encodes the specified EvaluationComment message. Does not implicitly {@link com.ele.model.dto.ele.EvaluationComment.verify|verify} messages.
                         * @param message EvaluationComment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IEvaluationComment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EvaluationComment message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.EvaluationComment.verify|verify} messages.
                         * @param message EvaluationComment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IEvaluationComment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EvaluationComment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EvaluationComment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.EvaluationComment;

                        /**
                         * Decodes an EvaluationComment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EvaluationComment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.EvaluationComment;

                        /**
                         * Verifies an EvaluationComment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EvaluationComment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EvaluationComment
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.EvaluationComment;

                        /**
                         * Creates a plain object from an EvaluationComment message. Also converts values to other types if specified.
                         * @param message EvaluationComment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.EvaluationComment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EvaluationComment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ShopEvaluation. */
                    interface IShopEvaluation {

                        /** ShopEvaluation score */
                        score?: number;

                        /** ShopEvaluation ratio */
                        ratio?: number;

                        /** ShopEvaluation service */
                        service?: number;

                        /** ShopEvaluation dish */
                        dish?: number;

                        /** ShopEvaluation time */
                        time?: number;

                        /** ShopEvaluation stamps */
                        stamps?: com.ele.model.dto.ele.IEvaluationStamp[];

                        /** ShopEvaluation comments */
                        comments?: com.ele.model.dto.ele.IEvaluationComment[];
                    }

                    /** Represents a ShopEvaluation. */
                    class ShopEvaluation {

                        /**
                         * Constructs a new ShopEvaluation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IShopEvaluation);

                        /** ShopEvaluation score. */
                        public score: number;

                        /** ShopEvaluation ratio. */
                        public ratio: number;

                        /** ShopEvaluation service. */
                        public service: number;

                        /** ShopEvaluation dish. */
                        public dish: number;

                        /** ShopEvaluation time. */
                        public time: number;

                        /** ShopEvaluation stamps. */
                        public stamps: com.ele.model.dto.ele.IEvaluationStamp[];

                        /** ShopEvaluation comments. */
                        public comments: com.ele.model.dto.ele.IEvaluationComment[];

                        /**
                         * Creates a new ShopEvaluation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShopEvaluation instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IShopEvaluation): com.ele.model.dto.ele.ShopEvaluation;

                        /**
                         * Encodes the specified ShopEvaluation message. Does not implicitly {@link com.ele.model.dto.ele.ShopEvaluation.verify|verify} messages.
                         * @param message ShopEvaluation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IShopEvaluation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShopEvaluation message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.ShopEvaluation.verify|verify} messages.
                         * @param message ShopEvaluation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IShopEvaluation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShopEvaluation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShopEvaluation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.ShopEvaluation;

                        /**
                         * Decodes a ShopEvaluation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShopEvaluation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.ShopEvaluation;

                        /**
                         * Verifies a ShopEvaluation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShopEvaluation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShopEvaluation
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.ShopEvaluation;

                        /**
                         * Creates a plain object from a ShopEvaluation message. Also converts values to other types if specified.
                         * @param message ShopEvaluation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.ShopEvaluation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShopEvaluation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}
