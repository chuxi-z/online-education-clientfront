import request from '@/utils/request'
export default {
    //热门名师和课程
    getIndexData() {
        return request({
          url: '/eduservice/indexfront/index',
          method: 'get'
        })
    },
    
}