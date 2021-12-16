import CryptoJS from 'crypto-js';

/* 加密工具类 */
export const AES = {
    /**
     * AES 加密
     * @param data 需要加密的数据
     * @param secretKey 秘钥
     * */
    encrypt(data, secretKey) {
        let utf8Data = CryptoJS.enc.Utf8.parse(data);
        let utf8SecretKey  = CryptoJS.enc.Utf8.parse(secretKey);
        var encrypted = CryptoJS.AES.encrypt(utf8Data, utf8SecretKey, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        return encrypted.toString();
    },
    /**
     * AES 解密
     * @param data 需要加密的数据
     * @param secretKey 秘钥
     * */
    decrypt(data, secretKey) {
        var utf8SecretKey  = CryptoJS.enc.Utf8.parse(secretKey);
        var decrypt = CryptoJS.AES.decrypt(data, utf8SecretKey, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
}

export const MD5 = {
    /**
     * MD5 单向加密
     * @param data 需要加密的数据
     * */
    encrypt(data) {
        return CryptoJS.MD5(data).toString();/* toString后会变成Hex 32位字符串*/
    }
}

export default {
    MD5,
    AES
}

