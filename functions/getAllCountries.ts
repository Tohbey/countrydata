import { CountryData, data } from "../data/countryData";

const getAllCountries = (filters = []): CountryData[] => {
  if (filters.length) {
    const filteredData: CountryData[] = [];
    data.forEach((dataObj: CountryData) => {
      let obj: CountryData = {};
      filters.forEach((filter: string) => {
        obj[filter] = dataObj[filter];
      });
      filteredData.push(obj);
    });
    return filteredData;
  }
  return data;
};

export default getAllCountries;
