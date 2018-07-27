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

                    /** Properties of a Shop. */
                    interface IShop {

                        /** Shop imgUrl */
                        imgUrl?: (string|null);

                        /** Shop isBrand */
                        isBrand?: (boolean|null);

                        /** Shop shopName */
                        shopName?: (string|null);

                        /** Shop starNum */
                        starNum?: (number|null);

                        /** Shop monthlySales */
                        monthlySales?: (number|null);

                        /** Shop initMoney */
                        initMoney?: (number|null);

                        /** Shop deliveryFee */
                        deliveryFee?: (number|null);

                        /** Shop distance */
                        distance?: (number|null);

                        /** Shop needTime */
                        needTime?: (string|null);

                        /** Shop isBird */
                        isBird?: (boolean|null);

                        /** Shop isOntime */
                        isOntime?: (boolean|null);

                        /** Shop isInsurance */
                        isInsurance?: (boolean|null);

                        /** Shop needtip */
                        needtip?: (boolean|null);

                        /** Shop isNewShop */
                        isNewShop?: (boolean|null);

                        /** Shop shopActivity */
                        shopActivity?: (com.ele.model.dto.ele.IPromotion[]|null);
                    }

                    /** Represents a Shop. */
                    class Shop implements IShop {

                        /**
                         * Constructs a new Shop.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.ele.model.dto.ele.IShop);

                        /** Shop imgUrl. */
                        public imgUrl: string;

                        /** Shop isBrand. */
                        public isBrand: boolean;

                        /** Shop shopName. */
                        public shopName: string;

                        /** Shop starNum. */
                        public starNum: number;

                        /** Shop monthlySales. */
                        public monthlySales: number;

                        /** Shop initMoney. */
                        public initMoney: number;

                        /** Shop deliveryFee. */
                        public deliveryFee: number;

                        /** Shop distance. */
                        public distance: number;

                        /** Shop needTime. */
                        public needTime: string;

                        /** Shop isBird. */
                        public isBird: boolean;

                        /** Shop isOntime. */
                        public isOntime: boolean;

                        /** Shop isInsurance. */
                        public isInsurance: boolean;

                        /** Shop needtip. */
                        public needtip: boolean;

                        /** Shop isNewShop. */
                        public isNewShop: boolean;

                        /** Shop shopActivity. */
                        public shopActivity: com.ele.model.dto.ele.IPromotion[];

                        /**
                         * Creates a new Shop instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Shop instance
                         */
                        public static create(properties?: com.ele.model.dto.ele.IShop): com.ele.model.dto.ele.Shop;

                        /**
                         * Encodes the specified Shop message. Does not implicitly {@link com.ele.model.dto.ele.Shop.verify|verify} messages.
                         * @param message Shop message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.ele.model.dto.ele.IShop, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Shop message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Shop.verify|verify} messages.
                         * @param message Shop message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.ele.model.dto.ele.IShop, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Shop message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Shop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.ele.model.dto.ele.Shop;

                        /**
                         * Decodes a Shop message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Shop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.ele.model.dto.ele.Shop;

                        /**
                         * Verifies a Shop message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Shop message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Shop
                         */
                        public static fromObject(object: { [k: string]: any }): com.ele.model.dto.ele.Shop;

                        /**
                         * Creates a plain object from a Shop message. Also converts values to other types if specified.
                         * @param message Shop
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.ele.model.dto.ele.Shop, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Shop to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}
