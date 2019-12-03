function hello() {
  console.log("Hello", this);
}

let person = {
  name: "Bulat",
  age: 19,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

let lena = {
  name: "Elena",
  age: 23
}

let fnLenaInfoLog = person.logInfo.bind(lena);
fnLenaInfoLog("Frontend", "8-123-123-12");