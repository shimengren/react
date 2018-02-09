import Fetch from 'cross-fetch';

function commonRequest(url,params,method = 'GET',contentType = 'application/json '){
    method = method;
    var fetchConfig = {
        method:method,
        credential: 'include',
    }
    let requestUrl = url;
    let paramsString = '';
    if(Object.keys(params).length !== 0){
        var values = [];
        for (let i in params){
          values.push(`${i}=${encodeURIComponent(params[i])}`);
        }
        paramsString = values.join('&');
    }
    if(method === 'POST'){
        if(contentType === 'application/x-www-form-urlencoded'){
             fetchConfig.body = paramsString;
        } else if(contentType === 'application/json'){
            fetchConfig.body = JSON.stringify(params);
        }
    } else {
        requestUrl = `${requestUrl}?${paramsString}`
    }
    return Fetch(requestUrl,fetchConfig).then((response) =>{
         if(response.ok){
             return response.json();
         } else {
             return Promise.reject(response)
         }
    }).catch(err => {console.log('err', err)})
}
// 定义相关的请求方法

const getList = (pageIndex,pageSize = 10) => commonRequest('/api/admin/company/list',{
    pageIndex,
    pageSize
});

export default {
    getList
}

