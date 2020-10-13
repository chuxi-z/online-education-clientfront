import request from '@/utils/request'

export default {
  //根据手机号码发送短信
//   sendCode(mobile) {
//     return request({
//       url: `/edumsm/send/${mobile}`,
//       method: 'get'
//     })
//   },
  //用户注册
  registerMember(formItem) {
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data: formItem
    })
  }
}