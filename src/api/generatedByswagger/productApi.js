
// Product api
// Product
import request from '../../utils/request';
// Collections with related products page list

export function getCollectionsWithRelatedProducts(params,config = {}){
  return request(
    {
      url: `/collections-with-related-products`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// sync lifestyle

export function getLifestyleSync(config = {}){
  return request(
    {
      url: `/lifestyle-sync`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
// Collection  page

export function getPoxGoods(params,config = {}){
  return request(
    {
      url: `/pox-goods`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Collection detail by extnernalId

export function getPoxGoodsDetailExtnernalIdExtnernalId(extnernalId,config = {}){
  return request(
    {
      url: `/pox-goods-detail/extnernalId/${extnernalId}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Collection detail

export function getPoxGoodsDetailId(id,config = {}){
  return request(
    {
      url: `/pox-goods-detail/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// Pox goods info page query

export function getPoxGoodsInfo(params,config = {}){
  return request(
    {
      url: `/pox-goods-info`,
      method: 'GET',
      params
    },
    {
      ...config
    }
  )
}
// Pox goods info details

export function getPoxGoodsInfoId(id,config = {}){
  return request(
    {
      url: `/pox-goods-info/${id}`,
      method: 'GET', 
    },
    {
      ...config
    }
  )
}
// syncPoxGoods

export function getPoxGoodsSync(config = {}){
  return request(
    {
      url: `/pox-goods-sync`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}
// ProductFinder page list

export function postProductFinder(data,config = {}){
  return request(
    {
      url: `/product-finder`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}
// sync species code

export function getSpeciesCodeSync(config = {}){
  return request(
    {
      url: `/species-code-sync`,
      method: 'GET',
    },
    {
      ...config
    }
  )
}