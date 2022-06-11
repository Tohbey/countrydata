# js-countrydata
A utility library that provides country codes, name, flags and currency.

## Installation

```shell
# with npm
npm install js-countrydata

# with yarn
yarn add js-countrydata
```

## Usage

```js
import { getAllCountries, getSpecificCountry, getSpecifiedCountries } from "js-countrydata";

const countries = getAllCountries(); // returns [{ name: "Algeria", flag: "🇩🇿", code: "DZ", dial_code: "+213" }, ...]
const specificCountry = getSpecificCountry({type: "code", value: "ID"}, ["name", "flag"]) // returns { name: "Indonesia", flag: "🇮🇩" }
const specifiedCountries = getSpecifiedCountries([{type: "code", value: "ID"}, {type: "dial_code", value: "+250"}], ["name", "flag"]) // returns [{name: 'Indonesia', flag: '🇮🇩'}, {name: 'Rwanda', flag: '🇷🇼'}]
```

## Arguments

The method accept optional arguments that are specific to this method.

| Argument                      | type     | default      | notes                                                                                   |
| ------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------- |
| filters                   | array    | ["name","flag","code","dial_code"]| Contains an array of keys that should be returned                           |
| query                     | object   | none                              | Required when invoking getSpecificCountry and getSpecifiedCountries methods  |


## License

MIT
