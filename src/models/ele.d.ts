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
                        variety?: (com.ele.model.dto.ele.PromotionType|null);

                        /** Promotion slogan */
                        slogan?: (string|null);
                    }

                    /** Represents a Promotion. */
                    class Promotion implements IPromotion {

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

                    /** Properties of a ShopProfile. */
                    interface IShopProfile {

                        /** ShopProfile imgUrl */
                        imgUrl?: (string|null);

                        /** ShopProfile isBrand */
                        isBrand?: (boolean|null);

                        /** ShopProfile shopName */
                        shopName?: (string|null);

                        /** ShopProfile starNum */
                        starNum?: (number|null);

                        /** ShopProfile monthlySales */
                        monthlySales?: (number|null);

                        /** ShopProfile initMoney */
                        initMoney?: (number|null);

                        /** ShopProfile deliveryFee */
                        deliveryFee?: (number|null);

                        /** ShopProfile distance */
                        distance?: (number|null);

                        /** ShopProfile needTime */
                        needTime?: (string|null);

                        /** ShopProfile isBird */
                        isBird?: (boolean|null);

                        /** ShopProfile isOntime */
                        isOntime?: (boolean|null);

                        /** ShopProfile isInsurance */
                        isInsurance?: (boolean|null);

                        /** ShopProfile needtip */
                        needtip?: (boolean|null);

                        /** ShopProfile isNewShop */
                        isNewShop?: (boolean|null);

                        /** ShopProfile shopActivity */
                        shopActivity?: (com.ele.model.dto.ele.IPromotion[]|null);
                    }

                    /** Represents a ShopProfile. */
                    class ShopProfile implements IShopProfile {

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
                }
            }
        }
    }
}
