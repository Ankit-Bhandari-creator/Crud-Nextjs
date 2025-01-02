const storage_key = "login-info"

export function setStorage(data) {
    localStorage.setItem(storage_key, JSON.stringify(data))
}

export function getToken() {
    console.log("tester")
    // return JSON.parse(localStorage.getItem(storage_key).token)
    return JSON.parse(localStorage.getItem(storage_key)).access_token
}

export function getStorage() {
    return JSON.parse(localStorage.getItem(storage_key))
}