import request from '@/utils/request'

export default {
    saveChapterInfo(chapterInfo) {
        return request({
            url: '/admin/edu/chapter/save',
            method: 'Post',
            data: chapterInfo
        })
    },
    getChapterById(id) {
        return request({
            url: `/admin/edu/chapter/get/${id}`,
            method: 'get'
        })
    },
    updateChapterById(chapterInfo) {
        return request({
            url: '/admin/edu/chapter/update',
            method: 'Put',
            data: chapterInfo
        })
    },
    removeChapterById(id) {
        return request({
            url: `/admin/edu/chapter/remove/${id}`,
            method: 'Delete'
        })
    },
    getNestedListById(courseId) {
        return request({
            url: `/admin/edu/chapter/nested-list/${courseId}`,
            method: 'Get'
        })
    }
}