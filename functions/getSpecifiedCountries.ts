import { CountryData, data } from "../data/countryData";

interface Query {
  type: "name" | "code" | "dial_code";
  value: string;
}

const getCountries = (query: Query[]): CountryData[] => {
  if (query.length) {
    const countries = [];
    query.forEach((queryObj: Query) => {
      const { type, value } = queryObj;
      const country = data.find(
        (dataObj: CountryData) => dataObj[type] === value
      );
      if (country) {
        countries.push(country);
      }
    });
    return countries;
  }
  return [];
};

const getSpecifiedCountries = (query: Query[], filters = []): CountryData[] => {
  const countries = getCountries(query);

  if (filters.length) {
    const filteredData: CountryData[] = [];
    countries.forEach((dataObj: CountryData) => {
      let obj = {};
      filters.forEach((filter: string) => {
        obj[filter] = dataObj[filter];
      });
      filteredData.push(obj);
    });
    return filteredData;
  }
  return countries;
};

export default getSpecifiedCountries;
