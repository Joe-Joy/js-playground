class Tv {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.maxChannel = 50;
    this.minVolume = 0;
    this.maxVolume = 50;
  }

  setVolume(volume) {
    if (volume) {
      if (volume >= this.maxVolume) {
        return "volume is reached maximum volume"
      } else {
        return "volume is  " + volume
        }
    } else {
        return "volume is reached minimum volume"
    }
  }
  getVolume() {
      return this.setVolume();
  }

  setChannel(channel) {
      if(channel){
          if(channel >= this.maxChannel){
              return "channel is reached maximum limit"
          }else{
              return "Current channel is " + channel;
          }
      } else {
          return "the tv was offstate";
      }
  }

  getChannel(c) {
      return this.setChannel(c);
  }

  reset() {
      return {
          volume: this.maxVolume,
          channel: this.channel
      }
  }

  status(){
      return {
          brand: this.brand,
          channel: 8,
          volume: 75
      }

  }
}

var one = new Tv("panasonic");
var test=one.status();


console.log(test.volume)

