const add = require("../add");
// add.tsx에서 export한 걸 import 하기 = require
test("adds 1 + 2 to equal 3", () => {
  // 테스트 코드 작성
  expect(add(1, 2)).toBe(3);
  // add(1,2) 를 수행했을 때(expect) 그 결과는 3이 돼야 한다(toBe)
});

// "adds 1 + 2 to equal 3" 테스트의 이름.
// 이 테스트를 설명하는 이름으로 해두면 좋을 듯
