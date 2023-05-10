class Thermostat {
  constructor() {
    this.currentTemp = 20;
    this.powerSave = true;
  }

  up() {
    if (this.powerSave && this.currentTemp < 25) {
      this.currentTemp += 1;
    } else if (!this.powerSave && this.currentTemp < 32) {
      this.currentTemp += 1;
    }
  }
}

module.exports = Thermostat;
