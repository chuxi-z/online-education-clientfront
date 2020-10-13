import request from '@/utils/request'

export default {
    
    //获取页面课程
    getFrontCourseCondition(page, limit, courseQuery) {
        return request({
            url: `/eduservice/courseFront/getFrontCoursePage/${page}/${limit}`,
            method: 'post',
            data: courseQuery
        })
    },
    
    //查询分类
    getAllSubject() {
        return request({
            url: '/eduservice/subject/getAllSubject',
            method: 'get'
        })
    },

    //课程详情
    getCourseFrontInfo(courseId){
        return request({
            url: `/eduservice/courseFront/getFrontCourseInfo/${courseId}`,
            method: 'get'
        })
    }
}