var axios = require('axios');
var cheerio = require('cheerio');


const options = {
  method: 'GET',
  url: 'https://campus.quipper.com/search/schools',
  params: {province_id: 'all', page: '1', seed: '1625986877'}
};

const GetDataKampus = ()=>new Promise(
    (resolve,reject)=>{
        axios.request(options).then((response)=> {
            resolve(response.data);
            console.log(response);
          }).catch( (error)=> {
            reject(error);
          });
    }
)

module.exports= GetDataKampus;
