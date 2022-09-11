const Calculator = require("../calculator.tsx");
// import 해오는 과정 확인

describe("Calculator", () => {
  // test or it 둘다 가능 it은 3인칭 느낌임 여기선 Calculator을 가리킴
  // 지금보면 const cal = new Calculator(); 코드가 중복되는걸 알 수 있음
  // 이걸 변수로 빼서 쓰기엔 독립적으로 존재해야하기 때문에 불가능함
  // 각각의 테스트가 끝날 때 무언가 마무리 정리가 필요하다면 , afterEach
  // describe 안에서는 it을 사용해줌

  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  // 이럴때 쓰는게 beforeEach (테스트 전에 뭔가가 항상 동일하게 준비돼있어야함)
  // 얘로 인해서 calculator 함수는 모든 테스트가 수행이 되기전에 새로운 오브젝트를 만든다

  it("inits with 0", () => {
    // const cal = new Calculator();
    expect(cal.value).toBe(0);
  });
  // 0으로 초기화 시켜주는 로직

  it("sets", () => {
    // const cal = new Calculator();
    cal.set(9);
    expect(cal.value).toBe(9);
  });
  // set(여기에 들어가는 숫자로 세팅)

  it("clears", () => {
    // const cal = new Calculator();
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.add(1); //  Calculator 1로 설정
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("add는 절대 100을 넘을 수 없어", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
    // toThrow 에러 메시지랑 , calculator 에러메시지랑 같아야됨
  });

  it("subtracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiplys", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  // describe 안의 또 describe 로 묶을 수 있음 , 나누기는 로직이 많아서 또 묶겟음 내부에서
  describe("divides", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4/4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
/* describe const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});  여러 관련 테스트를 그룹화하는 블록을 만든다. 맛있지만 신맛이 없을 수 있다 
그럴 경우의 테스트 이 안에서의 여러 테스트를 이뤄지게 하는거같음 */
