import { coordinateData } from './coordinate-data'

export const convertData = function (data: any) {
  const res = []
  // console.log(data[0].name,'data');

  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    // console.log(geoCoord,'geoCoord');

    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)


      })
      // console.log(res,'res');

    }
    // console.log(res);

  }
  return res
}
