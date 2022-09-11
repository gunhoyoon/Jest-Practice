function fetchProduct(error) {
  if (error === "error") {
    // error 라는 인자가 error라는 문자열이라면 실패하는 프로미스를 리턴
    return Promise.reject("network error");
  }
  return Promise.resolve({ item: "Milk", price: 200 });
  // 아니라면 성공하는 프로미스를 리턴.
}

module.exports = fetchProduct;

// 비동기적인 코드 테스트
//
