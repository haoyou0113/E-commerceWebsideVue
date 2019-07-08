import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import { TIMEOUT, SUCC_CODE } from './condig';
import { resolve } from 'path';
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

export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };

  return jsonp(url, params, { param: 'callback' }).then(res => {
    console.log(res);
  });
};
