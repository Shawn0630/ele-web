/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.ele = (function() {

        /**
         * Namespace ele.
         * @memberof com
         * @namespace
         */
        var ele = {};

        ele.model = (function() {

            /**
             * Namespace model.
             * @memberof com.ele
             * @namespace
             */
            var model = {};

            model.dto = (function() {

                /**
                 * Namespace dto.
                 * @memberof com.ele.model
                 * @namespace
                 */
                var dto = {};

                dto.ele = (function() {

                    /**
                     * Namespace ele.
                     * @memberof com.ele.model.dto
                     * @namespace
                     */
                    var ele = {};

                    /**
                     * PromotionType enum.
                     * @name com.ele.model.dto.ele.PromotionType
                     * @enum {string}
                     * @property {number} NEW=0 NEW value
                     * @property {number} SUBTRACTION=1 SUBTRACTION value
                     * @property {number} SPECIAL=2 SPECIAL value
                     * @property {number} DISCOUNT=3 DISCOUNT value
                     */
                    ele.PromotionType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "NEW"] = 0;
                        values[valuesById[1] = "SUBTRACTION"] = 1;
                        values[valuesById[2] = "SPECIAL"] = 2;
                        values[valuesById[3] = "DISCOUNT"] = 3;
                        return values;
                    })();

                    ele.Promotion = (function() {

                        /**
                         * Properties of a Promotion.
                         * @memberof com.ele.model.dto.ele
                         * @interface IPromotion
                         * @property {com.ele.model.dto.ele.PromotionType|null} [variety] Promotion variety
                         * @property {string|null} [slogan] Promotion slogan
                         */

                        /**
                         * Constructs a new Promotion.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a Promotion.
                         * @implements IPromotion
                         * @constructor
                         * @param {com.ele.model.dto.ele.IPromotion=} [properties] Properties to set
                         */
                        function Promotion(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Promotion variety.
                         * @member {com.ele.model.dto.ele.PromotionType} variety
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @instance
                         */
                        Promotion.prototype.variety = 0;

                        /**
                         * Promotion slogan.
                         * @member {string} slogan
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @instance
                         */
                        Promotion.prototype.slogan = "";

                        /**
                         * Creates a new Promotion instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.IPromotion=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion instance
                         */
                        Promotion.create = function create(properties) {
                            return new Promotion(properties);
                        };

                        /**
                         * Encodes the specified Promotion message. Does not implicitly {@link com.ele.model.dto.ele.Promotion.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.IPromotion} message Promotion message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Promotion.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.variety != null && message.hasOwnProperty("variety"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.variety);
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.slogan);
                            return writer;
                        };

                        /**
                         * Encodes the specified Promotion message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Promotion.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.IPromotion} message Promotion message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Promotion.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Promotion message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Promotion.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.Promotion();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.variety = reader.int32();
                                    break;
                                case 2:
                                    message.slogan = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Promotion message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Promotion.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Promotion message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Promotion.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.variety != null && message.hasOwnProperty("variety"))
                                switch (message.variety) {
                                default:
                                    return "variety: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                                }
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                if (!$util.isString(message.slogan))
                                    return "slogan: string expected";
                            return null;
                        };

                        /**
                         * Creates a Promotion message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.Promotion} Promotion
                         */
                        Promotion.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.Promotion)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.Promotion();
                            switch (object.variety) {
                            case "NEW":
                            case 0:
                                message.variety = 0;
                                break;
                            case "SUBTRACTION":
                            case 1:
                                message.variety = 1;
                                break;
                            case "SPECIAL":
                            case 2:
                                message.variety = 2;
                                break;
                            case "DISCOUNT":
                            case 3:
                                message.variety = 3;
                                break;
                            }
                            if (object.slogan != null)
                                message.slogan = String(object.slogan);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Promotion message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @static
                         * @param {com.ele.model.dto.ele.Promotion} message Promotion
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Promotion.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.variety = options.enums === String ? "NEW" : 0;
                                object.slogan = "";
                            }
                            if (message.variety != null && message.hasOwnProperty("variety"))
                                object.variety = options.enums === String ? $root.com.ele.model.dto.ele.PromotionType[message.variety] : message.variety;
                            if (message.slogan != null && message.hasOwnProperty("slogan"))
                                object.slogan = message.slogan;
                            return object;
                        };

                        /**
                         * Converts this Promotion to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.Promotion
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Promotion.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Promotion;
                    })();

                    ele.Shop = (function() {

                        /**
                         * Properties of a Shop.
                         * @memberof com.ele.model.dto.ele
                         * @interface IShop
                         * @property {string|null} [imgUrl] Shop imgUrl
                         * @property {boolean|null} [isBrand] Shop isBrand
                         * @property {string|null} [shopName] Shop shopName
                         * @property {number|null} [starNum] Shop starNum
                         * @property {number|null} [monthlySales] Shop monthlySales
                         * @property {number|null} [initMoney] Shop initMoney
                         * @property {number|null} [deliveryFee] Shop deliveryFee
                         * @property {number|null} [distance] Shop distance
                         * @property {string|null} [needTime] Shop needTime
                         * @property {boolean|null} [isBird] Shop isBird
                         * @property {boolean|null} [isOntime] Shop isOntime
                         * @property {boolean|null} [isInsurance] Shop isInsurance
                         * @property {boolean|null} [needtip] Shop needtip
                         * @property {boolean|null} [isNewShop] Shop isNewShop
                         * @property {Array.<com.ele.model.dto.ele.IPromotion>|null} [shopActivity] Shop shopActivity
                         */

                        /**
                         * Constructs a new Shop.
                         * @memberof com.ele.model.dto.ele
                         * @classdesc Represents a Shop.
                         * @implements IShop
                         * @constructor
                         * @param {com.ele.model.dto.ele.IShop=} [properties] Properties to set
                         */
                        function Shop(properties) {
                            this.shopActivity = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Shop imgUrl.
                         * @member {string} imgUrl
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.imgUrl = "";

                        /**
                         * Shop isBrand.
                         * @member {boolean} isBrand
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.isBrand = false;

                        /**
                         * Shop shopName.
                         * @member {string} shopName
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.shopName = "";

                        /**
                         * Shop starNum.
                         * @member {number} starNum
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.starNum = 0;

                        /**
                         * Shop monthlySales.
                         * @member {number} monthlySales
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.monthlySales = 0;

                        /**
                         * Shop initMoney.
                         * @member {number} initMoney
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.initMoney = 0;

                        /**
                         * Shop deliveryFee.
                         * @member {number} deliveryFee
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.deliveryFee = 0;

                        /**
                         * Shop distance.
                         * @member {number} distance
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.distance = 0;

                        /**
                         * Shop needTime.
                         * @member {string} needTime
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.needTime = "";

                        /**
                         * Shop isBird.
                         * @member {boolean} isBird
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.isBird = false;

                        /**
                         * Shop isOntime.
                         * @member {boolean} isOntime
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.isOntime = false;

                        /**
                         * Shop isInsurance.
                         * @member {boolean} isInsurance
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.isInsurance = false;

                        /**
                         * Shop needtip.
                         * @member {boolean} needtip
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.needtip = false;

                        /**
                         * Shop isNewShop.
                         * @member {boolean} isNewShop
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.isNewShop = false;

                        /**
                         * Shop shopActivity.
                         * @member {Array.<com.ele.model.dto.ele.IPromotion>} shopActivity
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         */
                        Shop.prototype.shopActivity = $util.emptyArray;

                        /**
                         * Creates a new Shop instance using the specified properties.
                         * @function create
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {com.ele.model.dto.ele.IShop=} [properties] Properties to set
                         * @returns {com.ele.model.dto.ele.Shop} Shop instance
                         */
                        Shop.create = function create(properties) {
                            return new Shop(properties);
                        };

                        /**
                         * Encodes the specified Shop message. Does not implicitly {@link com.ele.model.dto.ele.Shop.verify|verify} messages.
                         * @function encode
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {com.ele.model.dto.ele.IShop} message Shop message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Shop.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imgUrl);
                            if (message.isBrand != null && message.hasOwnProperty("isBrand"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isBrand);
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.shopName);
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                writer.uint32(/* id 4, wireType 1 =*/33).double(message.starNum);
                            if (message.monthlySales != null && message.hasOwnProperty("monthlySales"))
                                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.monthlySales);
                            if (message.initMoney != null && message.hasOwnProperty("initMoney"))
                                writer.uint32(/* id 6, wireType 1 =*/49).double(message.initMoney);
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                writer.uint32(/* id 7, wireType 1 =*/57).double(message.deliveryFee);
                            if (message.distance != null && message.hasOwnProperty("distance"))
                                writer.uint32(/* id 8, wireType 1 =*/65).double(message.distance);
                            if (message.needTime != null && message.hasOwnProperty("needTime"))
                                writer.uint32(/* id 9, wireType 2 =*/74).string(message.needTime);
                            if (message.isBird != null && message.hasOwnProperty("isBird"))
                                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isBird);
                            if (message.isOntime != null && message.hasOwnProperty("isOntime"))
                                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isOntime);
                            if (message.isInsurance != null && message.hasOwnProperty("isInsurance"))
                                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isInsurance);
                            if (message.needtip != null && message.hasOwnProperty("needtip"))
                                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.needtip);
                            if (message.isNewShop != null && message.hasOwnProperty("isNewShop"))
                                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isNewShop);
                            if (message.shopActivity != null && message.shopActivity.length)
                                for (var i = 0; i < message.shopActivity.length; ++i)
                                    $root.com.ele.model.dto.ele.Promotion.encode(message.shopActivity[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Shop message, length delimited. Does not implicitly {@link com.ele.model.dto.ele.Shop.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {com.ele.model.dto.ele.IShop} message Shop message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Shop.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Shop message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.ele.model.dto.ele.Shop} Shop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Shop.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.ele.model.dto.ele.Shop();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.imgUrl = reader.string();
                                    break;
                                case 2:
                                    message.isBrand = reader.bool();
                                    break;
                                case 3:
                                    message.shopName = reader.string();
                                    break;
                                case 4:
                                    message.starNum = reader.double();
                                    break;
                                case 5:
                                    message.monthlySales = reader.uint32();
                                    break;
                                case 6:
                                    message.initMoney = reader.double();
                                    break;
                                case 7:
                                    message.deliveryFee = reader.double();
                                    break;
                                case 8:
                                    message.distance = reader.double();
                                    break;
                                case 9:
                                    message.needTime = reader.string();
                                    break;
                                case 10:
                                    message.isBird = reader.bool();
                                    break;
                                case 11:
                                    message.isOntime = reader.bool();
                                    break;
                                case 12:
                                    message.isInsurance = reader.bool();
                                    break;
                                case 13:
                                    message.needtip = reader.bool();
                                    break;
                                case 14:
                                    message.isNewShop = reader.bool();
                                    break;
                                case 15:
                                    if (!(message.shopActivity && message.shopActivity.length))
                                        message.shopActivity = [];
                                    message.shopActivity.push($root.com.ele.model.dto.ele.Promotion.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Shop message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.ele.model.dto.ele.Shop} Shop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Shop.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Shop message.
                         * @function verify
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Shop.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                if (!$util.isString(message.imgUrl))
                                    return "imgUrl: string expected";
                            if (message.isBrand != null && message.hasOwnProperty("isBrand"))
                                if (typeof message.isBrand !== "boolean")
                                    return "isBrand: boolean expected";
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                if (!$util.isString(message.shopName))
                                    return "shopName: string expected";
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                if (typeof message.starNum !== "number")
                                    return "starNum: number expected";
                            if (message.monthlySales != null && message.hasOwnProperty("monthlySales"))
                                if (!$util.isInteger(message.monthlySales))
                                    return "monthlySales: integer expected";
                            if (message.initMoney != null && message.hasOwnProperty("initMoney"))
                                if (typeof message.initMoney !== "number")
                                    return "initMoney: number expected";
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                if (typeof message.deliveryFee !== "number")
                                    return "deliveryFee: number expected";
                            if (message.distance != null && message.hasOwnProperty("distance"))
                                if (typeof message.distance !== "number")
                                    return "distance: number expected";
                            if (message.needTime != null && message.hasOwnProperty("needTime"))
                                if (!$util.isString(message.needTime))
                                    return "needTime: string expected";
                            if (message.isBird != null && message.hasOwnProperty("isBird"))
                                if (typeof message.isBird !== "boolean")
                                    return "isBird: boolean expected";
                            if (message.isOntime != null && message.hasOwnProperty("isOntime"))
                                if (typeof message.isOntime !== "boolean")
                                    return "isOntime: boolean expected";
                            if (message.isInsurance != null && message.hasOwnProperty("isInsurance"))
                                if (typeof message.isInsurance !== "boolean")
                                    return "isInsurance: boolean expected";
                            if (message.needtip != null && message.hasOwnProperty("needtip"))
                                if (typeof message.needtip !== "boolean")
                                    return "needtip: boolean expected";
                            if (message.isNewShop != null && message.hasOwnProperty("isNewShop"))
                                if (typeof message.isNewShop !== "boolean")
                                    return "isNewShop: boolean expected";
                            if (message.shopActivity != null && message.hasOwnProperty("shopActivity")) {
                                if (!Array.isArray(message.shopActivity))
                                    return "shopActivity: array expected";
                                for (var i = 0; i < message.shopActivity.length; ++i) {
                                    var error = $root.com.ele.model.dto.ele.Promotion.verify(message.shopActivity[i]);
                                    if (error)
                                        return "shopActivity." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a Shop message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.ele.model.dto.ele.Shop} Shop
                         */
                        Shop.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.ele.model.dto.ele.Shop)
                                return object;
                            var message = new $root.com.ele.model.dto.ele.Shop();
                            if (object.imgUrl != null)
                                message.imgUrl = String(object.imgUrl);
                            if (object.isBrand != null)
                                message.isBrand = Boolean(object.isBrand);
                            if (object.shopName != null)
                                message.shopName = String(object.shopName);
                            if (object.starNum != null)
                                message.starNum = Number(object.starNum);
                            if (object.monthlySales != null)
                                message.monthlySales = object.monthlySales >>> 0;
                            if (object.initMoney != null)
                                message.initMoney = Number(object.initMoney);
                            if (object.deliveryFee != null)
                                message.deliveryFee = Number(object.deliveryFee);
                            if (object.distance != null)
                                message.distance = Number(object.distance);
                            if (object.needTime != null)
                                message.needTime = String(object.needTime);
                            if (object.isBird != null)
                                message.isBird = Boolean(object.isBird);
                            if (object.isOntime != null)
                                message.isOntime = Boolean(object.isOntime);
                            if (object.isInsurance != null)
                                message.isInsurance = Boolean(object.isInsurance);
                            if (object.needtip != null)
                                message.needtip = Boolean(object.needtip);
                            if (object.isNewShop != null)
                                message.isNewShop = Boolean(object.isNewShop);
                            if (object.shopActivity) {
                                if (!Array.isArray(object.shopActivity))
                                    throw TypeError(".com.ele.model.dto.ele.Shop.shopActivity: array expected");
                                message.shopActivity = [];
                                for (var i = 0; i < object.shopActivity.length; ++i) {
                                    if (typeof object.shopActivity[i] !== "object")
                                        throw TypeError(".com.ele.model.dto.ele.Shop.shopActivity: object expected");
                                    message.shopActivity[i] = $root.com.ele.model.dto.ele.Promotion.fromObject(object.shopActivity[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Shop message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.ele.model.dto.ele.Shop
                         * @static
                         * @param {com.ele.model.dto.ele.Shop} message Shop
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Shop.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.shopActivity = [];
                            if (options.defaults) {
                                object.imgUrl = "";
                                object.isBrand = false;
                                object.shopName = "";
                                object.starNum = 0;
                                object.monthlySales = 0;
                                object.initMoney = 0;
                                object.deliveryFee = 0;
                                object.distance = 0;
                                object.needTime = "";
                                object.isBird = false;
                                object.isOntime = false;
                                object.isInsurance = false;
                                object.needtip = false;
                                object.isNewShop = false;
                            }
                            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                                object.imgUrl = message.imgUrl;
                            if (message.isBrand != null && message.hasOwnProperty("isBrand"))
                                object.isBrand = message.isBrand;
                            if (message.shopName != null && message.hasOwnProperty("shopName"))
                                object.shopName = message.shopName;
                            if (message.starNum != null && message.hasOwnProperty("starNum"))
                                object.starNum = options.json && !isFinite(message.starNum) ? String(message.starNum) : message.starNum;
                            if (message.monthlySales != null && message.hasOwnProperty("monthlySales"))
                                object.monthlySales = message.monthlySales;
                            if (message.initMoney != null && message.hasOwnProperty("initMoney"))
                                object.initMoney = options.json && !isFinite(message.initMoney) ? String(message.initMoney) : message.initMoney;
                            if (message.deliveryFee != null && message.hasOwnProperty("deliveryFee"))
                                object.deliveryFee = options.json && !isFinite(message.deliveryFee) ? String(message.deliveryFee) : message.deliveryFee;
                            if (message.distance != null && message.hasOwnProperty("distance"))
                                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
                            if (message.needTime != null && message.hasOwnProperty("needTime"))
                                object.needTime = message.needTime;
                            if (message.isBird != null && message.hasOwnProperty("isBird"))
                                object.isBird = message.isBird;
                            if (message.isOntime != null && message.hasOwnProperty("isOntime"))
                                object.isOntime = message.isOntime;
                            if (message.isInsurance != null && message.hasOwnProperty("isInsurance"))
                                object.isInsurance = message.isInsurance;
                            if (message.needtip != null && message.hasOwnProperty("needtip"))
                                object.needtip = message.needtip;
                            if (message.isNewShop != null && message.hasOwnProperty("isNewShop"))
                                object.isNewShop = message.isNewShop;
                            if (message.shopActivity && message.shopActivity.length) {
                                object.shopActivity = [];
                                for (var j = 0; j < message.shopActivity.length; ++j)
                                    object.shopActivity[j] = $root.com.ele.model.dto.ele.Promotion.toObject(message.shopActivity[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this Shop to JSON.
                         * @function toJSON
                         * @memberof com.ele.model.dto.ele.Shop
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Shop.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Shop;
                    })();

                    return ele;
                })();

                return dto;
            })();

            return model;
        })();

        return ele;
    })();

    return com;
})();

module.exports = $root;
