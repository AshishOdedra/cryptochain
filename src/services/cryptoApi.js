import  {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '860ec459a3mshfa6a745e27d8badp150569jsnce3715b8f666',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };