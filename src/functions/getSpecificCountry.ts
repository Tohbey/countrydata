import { CountryData, data } from "../data/countryData";

interface Query {
  type: "name" | "code" | "dial_code";
  value: string;
}
const getSpecificCountry = (query: Query, filters = []): CountryData => {
  const { type, value } = query;
  const country = data.find((dataObj: CountryData) => dataObj[type] === value);
  if (country) {
    if (filters.length) {
      let filteredCountry = {};
      filters.forEach((filter: string) => {
        filteredCountry[filter] = country[filter];
      });
      return filteredCountry;
    }
    return country;
  }
  return {};
};

export default getSpecificCountry;
