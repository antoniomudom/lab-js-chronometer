class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
    // ... your code goes here
  }

  start(printTimeCallback) {

     this.intervalId=setInterval(() => {
       this.currentTime++;
       if(printTimeCallback){
        printTimeCallback();
       }
    }, 1000)
    // Este lo he sacado gracias a las preguntas del final de las instrucciones
    //No obstante no me queda del todo claro el condicional
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2,"0")   // ... your code goes here
  }//Este lo hemos buscado la verdad porque no sabíamos con .Slice
  //Lo bueno es que hemos aprendido ya que entendemos el método toString y padStart


  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime=0;
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
