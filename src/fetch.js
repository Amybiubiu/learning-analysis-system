const preUrl = 'http://rap2api.taobao.org/app/mock/286372'

const Fetch = (url, data = {}, method = 'GET') => {
    return fetch(preUrl+url, {
        // body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        },
        method: method
    }).then(res => {
        switch (res.status) {
            case 200:
              return res.json()
              // if (res.data) {
              //   return res.data;
              // } else {
              //   return res.code; // 业务逻辑错误，返回业务错误码
              // }
            case 400:
              throw new Error('没有权限访问');
            case 401:
              throw new Error('未授权');
            case 404:
              throw new Error('not found');
            case 500:
              throw new Error('服务器错误');
            default:
              throw new Error('未知错误');
          }
    })
}

export default Fetch