import request from '@/utils/request'

export default {

    createDaily(date) {
        return request({
            // baseURL: 'http://localhost:9010',
            url: `/admin/statistics/daily/create/${date}`,
            method: 'get'
        })
    }
}
