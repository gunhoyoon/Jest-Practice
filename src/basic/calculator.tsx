class calculator {
  value;

  constructor() {
    this.value = 0;
  }

  set(num) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }

  add(num) {
    const sum = this.value + num;
    if (sum > 100) {
      throw new Error("Value can not be greater than 100");
    } // 여기서 던져주는 error 메시지가 이 코드의 테스트코드에서도 동시에 메시자를 던져줘야함
    this.value = sum;
  }

  subtract(num) {
    this.value = this.value - num;
  }

  multiply(num) {
    this.value = this.value * num;
  }

  divide(num) {
    this.value = this.value / num;
  }
}

module.exports = calculator;

// 동기적인 코드 테스트
