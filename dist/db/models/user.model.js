"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const user_types_1 = require("../../modules/user/user.types");
const encryption_1 = require("../../utils/security/encryption");
const userSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: function () {
            this.provider == user_types_1.ProviderEnum.system ? true : false;
        }
    },
    phone: {
        type: String,
        set(value) {
            //return "0"
            return (0, encryption_1.encryption)(value);
        },
        get(value) {
            //return "0"
            return (0, encryption_1.decryption)(value);
        }
    },
    age: Number,
    profileImage: {
        type: String,
        // required:true
    },
    gender: {
        type: Number,
        enum: user_types_1.GenderEnum
    },
    provider: {
        type: Number,
        enum: user_types_1.ProviderEnum,
        default: user_types_1.ProviderEnum.system,
    },
    role: {
        type: Number,
        enum: user_types_1.RoleEnum,
        default: user_types_1.RoleEnum.user
    },
    bio: String,
    userName: {
        type: String,
        required: function () {
            this.provider == user_types_1.ProviderEnum.system ? true : false;
        },
        //unique:true
    },
    confirmedAt: {
        type: Date,
    },
    blockedAt: {
        type: Date,
    },
    //otp: otpSchema
}, {
    timestamps: true,
    strict: true,
    strictQuery: true,
    optimisticConcurrency: true,
    toJSON: {
        virtuals: true,
        getters: true,
        transform(doc, ret) {
            delete ret.id;
            delete ret.password;
            return ret;
        }
    },
    toObject: {
        virtuals: true,
        getters: true,
        transform(doc, ret) {
            delete ret.id;
            return ret;
        }
    },
    virtuals: {
        fullname: {
            get() {
                return this.firstname + " " + this.lastname;
            },
            set(value) {
                const [firstname, lastname] = value.split(" ");
                if (!firstname || !lastname) {
                    throw new Error("Invalid full name format.");
                }
                this.set("firstname", firstname);
                this.set("lastname", lastname);
            }
        }
    }
});
exports.userModel = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.model.js.map