//实现本地存储

export function getStore(key) {
    return localStorage.getItem(key);
}

export function setStore(key,value) {
    localStorage.setItem(key,value);
}