const Thermostat = require("../library/thermostat");

describe("Thermostat", () => {
  it("calls up function twice and returns temperture", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });
});
