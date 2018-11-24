const { flow, groupBy, map, mapKeys, mapValues } = require("lodash/fp");

function groupData(rawData){
    return flow([
        groupAndNormalize,
        mapValues(peopleToNames),
    ])(rawData);
}

function groupAndNormalize(data){
    return flow([
        groupBy("role"),
        mapKeys(pluralize),
    ])(data);
}

function peopleToNames(people){
    return map("name")(people);
}

function pluralize(key){
    return `${key}s`;
}

module.exports = {
    groupData
};
