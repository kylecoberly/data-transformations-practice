const { groupData } = require("../functions/group-data");
const assert = require("assert");

describe("#groupData", () => {
    it("groups data", () => {
        const rawData = [{
            name: "Kyle Coberly",
            role: "teacher"
        }, {
            name: "Elyse Coberly",
            role: "teacher"
        }, {
            name: "Duncan Coberly",
            role: "student"
        }, {
            name: "Miles Coberly",
            role: "student"
        }];
        const transformedData = {
            teachers: ["Kyle Coberly", "Elyse Coberly"],
            students: ["Duncan Coberly", "Miles Coberly"],
        };
        assert.deepEqual(groupData(rawData), transformedData);
    });
});
