import request from '@/utils/request'

export default {
  //
    getTeacherPage(page, limit) {
        return request({
            url: `/eduservice/teacherfront/conditionPage/${page}/${limit}`,
            method: 'post'
        })
    },
    
    getTeacherInfo(teacherId) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
            method: 'get'
        })
    },
}
