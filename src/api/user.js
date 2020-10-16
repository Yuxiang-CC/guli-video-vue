import request from '@/utils/request'

export function login(data) {
    return request({
        // baseURL: 'localhost:8010',
        url: '/admin/edu/user/login',
        method: 'post',
        data: data
    })
}

export function getInfo(token) {
    return request({
        // baseURL: 'localhost:8010',
        url: '/admin/edu/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        // baseURL: 'localhost:8010',
        url: '/admin/edu/user/logout',
        method: 'post'
    })
}