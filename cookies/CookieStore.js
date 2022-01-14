const isDecode = typeof document !== "undefined"

export function getCookieFromCookieStore(cName) {
    const name = cName + "=";
    const cDecoded = isDecode ? decodeURIComponent(document.cookie) : ";";
    const cArr = cDecoded.split("; ");
    let res;
    cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
}


export function setCookieInCookieStore(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    if (isDecode) {
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";

    }

}


export function deleteCookieFromCookieStore(cName) {
    document.cookie = cName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

export function deleteAllCookiesFromCookieStore() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}