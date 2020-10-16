import request from '@/utils/request'

export default{
    getList() {
        return request({
          url: '/admin/edu/teacher/list',
          method: 'get'
        })
    },
    pageList(page = 1, size = 10, searchObj = {}) {
      return request({
        url: `/admin/edu/teacher/list/${page}/${size}`,
        method: 'get',
        params: searchObj
      })
  },
  removeById(id) {
    return request({
      url: `/admin/edu/teacher/remove/${id}`,
      method: 'Delete',
    })
  },
  save(teacher) {
    return request({
      url: 'admin/edu/teacher/add',
      method: "Post",
      data: teacher
    })
  },
  getById(id) {
    return request({
      url: `/admin/edu/teacher/get/${id}`,
        method: 'get'
    })
  },
  updateById(teacher) {
    return request({
      url: 'admin/edu/teacher/update',
      method: "Put",
      data: teacher
    })
  },
  batchRemove(idLIst) {
    return request({
      url: 'admin/edu/teacher/batch-remove',
      method: "Delete",
      data: idList
    })
  },
  getNameListByKey(nameKey) {
    return request({
      url: `admin/edu/teacher/list-name/${nameKey}`,
      method: "Get",
    })
  },
} 
