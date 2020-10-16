import request from '@/utils/request'

export default {
    removeVodById(id) {
        return request({
            // baseURL: 'http://localhost:8012/',
            baseURL: 'http://127.0.0.1:9010',
            url: `/admin/vod/file/remove/${id}`,
            method: 'Delete',
        })
    }

}