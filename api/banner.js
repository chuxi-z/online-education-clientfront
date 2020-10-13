import request from '@/utils/request'
export default {
  getBannerList() {
    return request({
      url: '/educms/bannerFront/getAllBanner',
      method: 'get'
    })
  }
}