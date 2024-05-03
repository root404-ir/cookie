function setCookie(cname, cvalue, expireday) {
    let d = new Date()
    d.setTime(d.getTime() + expireday * 24 * 60 * 60 * 1000)
    let expires = "expires=" + d.toGMTString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}
function getCookie(cname) {
    let name = cname + "="
    let deecode_cookie = decodeURIComponent(document.cookie)
    let cook = deecode_cookie.split(';')
    for (let i = 0; i < cook.length; i++) {
        let c = cook[i]
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
        return ""
    }
}
function checkCookie() {
    let user = getCookie("username")
    if (user != "") {
        alert("welcome again" + user)
    }
    else {
        user = prompt("please enter your name", "")
        if (user != "" && user != null) {
            setCookie('username', user, 3)
        }
    }
}