const FetchProduct = require("../async.tsx");
// import 해오는 과정임 require(경로)

describe("Async", () => {
  // 혼동하면 안되는게 describe 를 사용한 이유는 여러가지 이
  // 비동기를 테스트하는 코드를 작성할거기 때문임

  // 1. 비동기코드를 테스트할때 이 코드가 실행되면 it에서 FetchProduct를 실행하고 그냥 끝나버림
  // 2. it도 그냥 끝나버리고 실제 로직상에서 expect를 거치지 않고 그냥 끝나버린거임 즉 문제도 발생을 안함

  it("async-done", (done) => {
    FetchProduct().then((item) => {
      // 객체의 내용이 같은지를 확인하려면 toEqual을 써야 한다
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });
  // 1. 수동적으로 끝내는 시점을 명시해둔다. //
  // done이라는 인자를 받아서 expect가 끝내는 시점 이후에 호출하기.
  // 근데 이건 코드가 좋지 않음 지저분함 // 테스트 시간도 오래걸림

  it("async-return", () => {
    return FetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });
  // 2. 프로미스 자체를 리턴하기 (매우 간단)

  it("async-await", async () => {
    const product = await FetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });
  // 3. async , await 사용하기

  it("async-resolves", () => {
    return expect(FetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  it("async-reject", () => {
    return expect(FetchProduct("error")).rejects.toBe("network error");
    // 실패시 코드기 때문에 에러 메시지 동일하게 만들어주기
  });
  // 4. resolves , reject api 사용하기
});

// toBe  / toEqual
// test("toBe는 obj가 같은 객체를 가리키고 있는지 확인한다", () => {
//   const obj = {};

//   expect(obj).toBe(obj); // true
// });

// test("객체의 내용이 같더라도 서로 다른 메모리에 있는 객체이기 때문에 toBe를 쓰면 false가 나온다.", () => {
//   expect({ name: "John" }).toBe({ name: "John" }); // false
// });

// test("대신에 객체의 내용이 같은지를 확인하려면 toEqual을 써야 한다", () => {
//   const obj = {};

//   expect({ name: "John" }).toEqual({ name: "John" }); // true
// });
