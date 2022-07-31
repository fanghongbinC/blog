import digest from "../plugins/digest";

import {showToast} from "../plugins/toast/index";

export const STORAGE_KEY = 'user_auth_login'


/** 加密秘钥 长度必须是 4的倍数 */
const SECRET_KEY = "yxn4018b"

/** 登录过期时间 小时 */
const TIME_OUT_HOUR = 24

const userList={
    "admin" : "admin"  // 账号 和 未混淆的密码
}
// Do user authorization verify

/**
其实这里，我们也可以根据自己的需要，给拿到的auth对象进一步做判断，
 当然要怎么搞就看你自己了。比如我会加一个过期时间，一个小时过期：
*/
export function checkAuth ()
{

    var auth = null

        // node 里没有 localStorage
        auth = JSON.parse(localStorage.getItem(STORAGE_KEY))

    // console.log(auth)

    if(auth && auth.time){
        var preTime = new Date(auth.time).getTime()
        var nowTime = new Date().getTime() - TIME_OUT_HOUR * (60*60*1000)

        //解密失败 也是非法秘钥
        try {
            var _name = digest.AES.decrypt(auth.key,SECRET_KEY);
            if(_name !== auth.name){
                showToast("非法秘钥");
                return false;
            }
        }catch (e){
                showToast("非法秘钥");
                return false;
        }

        //有效时间已过
        if(nowTime > preTime)
        {
            showToast("登录有效时间已过");
            return false;
        }

        return auth && Object.keys(auth).length
    }
    else
    {
            showToast("未登录")


        return false;
    }
}

/** 登录
 * @return Boolean true 代表登录成功
 * */
export function login(userName,password){

    /** 是否 匹配*/
    var isMatchUser = false

    //确认是否 账号是否在默认密码内
    for(var key in userList)
    {
        var tempUser = key;
        var tempPassword = userList[key]
        var password_rule = passwordRule(tempPassword);
        if(userName === tempUser && password_rule === password)
        {
            isMatchUser = true
            break;
        }
    }
    // 账号匹配成功
    if(isMatchUser){

        const data = JSON.stringify({
            name: userName,
            time: new Date().getTime(),
            key : digest.AES.encrypt(userName,SECRET_KEY)  //识别是否正规 生成的秘钥
        })

        // 设置 登录授权
        localStorage.setItem(STORAGE_KEY, data)
        return  true
    }

    showToast("账号密码 错误");
    return  false


}

/**
 * 实时变更 账号的密码
 * 密码加密规则
 * */
function passwordRule(password){

    const  rule = ["password","d","h"]
    let   newPassword = "";
    for (let string of rule) {
        switch (string){
            case "y" : newPassword += (new Date().getFullYear() )  //年
                break;
            case "M" : newPassword += (new Date().getMonth() )  //月
                break;
            case "d" : newPassword += (new Date().getDate() )  //日
                break;
            case "h" :  newPassword += (new Date().getHours() )  //小时
                break;
            case "m" : newPassword += (new Date().getMinutes() )  //分
                break;
            case "s" : newPassword += (new Date().getSeconds() )  //秒
                break;
            case "q" :  newPassword += Math.floor((new Date().getMonth()+3)/3)  //季度
                break;
            case "password" : newPassword += password  //时间密码
                break;
            default :

        }
    }
    return newPassword;

}



