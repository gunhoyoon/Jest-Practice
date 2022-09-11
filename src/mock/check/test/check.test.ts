const check = require("../check");
// 어디 위치인지 잘 보고 경로 설정

/* const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();

// With a mock implementation:
const returnsTrue = jest.fn(() => true);
console.log(returnsTrue(2)); // true; */

describe("check", () => {
  // 묶어주기
  let onSuccess;
  let onFail;

  beforeEach(() => {}); // 기본값 설정 // 목 사용
  onSuccess = jest.fn();
  onFail = jest.fn();

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    // api
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // true 이기때문에 onSuccess 함수가 1번 호출되어야한다.

    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    // api
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // calls의 첫번째 호출된 함수의 첫번째 인자는 yes가 되어야한다 .

    // expect(onFail.mock.calls.length).toBe(0);
    // api
    expect(onFail).toHaveBeenCalledTimes(0);
    // false 이기때문에 onFail 함수가 0번 호출되어야한다.
  });

  it("should call onSuccess when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);

    expect(onFail).toHaveBeenCalledWith("no");

    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
