import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {
  TIMEOUT,
  SUCC_CODE,
  HOME_RECOMMEND_PAGE_SIZE,
  jsonpOptions
} from './condig';
// import { resolve } from 'path';
// !get slider data ajax
export const getHomeSlider = () => {
  return (
    axios
      .get('https://www.imooc.com/api/home/slider', {
        timeout: TIMEOUT
        //   !十秒内算成功
      })
      .then(res => {
        if (res.data.code === SUCC_CODE) {
          return res.data.slider;
        }

        throw new Error('no valid data');
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
        return {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('assets/img/404.png')
        };
      })
      // !set show the resource of data after 1s we should add loading picture for it
      .then(data => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data);
          }, 1000);
        });
      })
  );
};

export const getHomeRecommend = (
  page = 1,
  psize = HOME_RECOMMEND_PAGE_SIZE
) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };

  return jsonp(url, params, jsonpOptions)
    .then(res => {
      if (res.code === '200') {
        return res;
      }

      throw new Error('没有成功获取到数据！');
    })
    .catch(err => {
      if (err) {
        console.log(err);
      }
    })
    .then(res => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(res);
          console.log(res);
        }, 1000);
      });
    });
};
