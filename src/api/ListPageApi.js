import request from '../utils/request.js'


export function getDatasetListApi(params) {
  return new Promise((resolve, reject) => {
    request({
      url: '/search',
      method: 'get',
      params: params
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}

export function getDatasetByKeywordApi(keyWord, pageIndex, pageSize) {
  return new Promise((resolve, reject) => {
    request({
      url: '/datasetSearch',
      method: 'get',
      params: {
        keyWord: keyWord,
        pageIndex: pageIndex,
        pageSize: pageSize 
      }
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}

export function getDatasetAll(pageIndex, pageSize) {
  return new Promise((resolve, reject) => {
    request({
      url: '/datasetView',
      method: 'get',
      params: {
        pageIndex: pageIndex,
        pageSize: pageSize 
      }
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}


export function getDatasetByDepartment(sourceName, pageIndex, pageSize) {
  return new Promise((resolve, reject) => {
    request({
      url: '/datasetDepartment',
      method: 'get',
      params: {
        sourceName: sourceName,
        pageIndex: pageIndex,
        pageSize: pageSize 
      }
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}