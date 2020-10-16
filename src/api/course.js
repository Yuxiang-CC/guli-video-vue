import request from '@/utils/request'

export default {
    // 保存课程信息
    saveSourceInfo(courseInfo) {
        return request({
            url: '/admin/edu/course/save-course-info',
            method: 'Post',
            data: courseInfo
        })
    },
    // 根据Id获取课程信息
    getCourseInfoById(courseId) {
        return request({
            url: `/admin/edu/course/course-info/${courseId}`,
            method: 'Get'
        })
    },
    // 更新课程信息
    updateCourseInfoById(courseInfo) {
        return request({
            url: '/admin/edu/course/update-course-info',
            method: 'Put',
            data: courseInfo
        })
    },
    // 获取课程信息
    getListPage(page = 1, size = 10, searchObj = {}) {
        return request({
            url: `/admin/edu/course/list/${page}/${size}`,
            method: 'Get',
            params: searchObj
        })
    },
    // 根据Id删除课程信息
    removeCourseById(id) {
        return request({
            url: `/admin/edu/course/remove/${id}`,
            method: 'Delete',
        })
    },
    // 根据Id获取发布课程信息
    getCoursePublishById(id) {
        return request({
            url: `/admin/edu/course/course-publish/${id}`,
            method: 'Get',
        })
    },
    // 根据Id发布课程
    publishCourseById(id) {
        return request({
            url: `/admin/edu/course/publish-course/${id}`,
            method: 'Put',
        })
    }
    
}