const productService = require("../product_service_no_di.tsx");
const ProductClients = require("../product_client.tsx");
jest.mock("../product_client.tsx");

// 아래와 같은 이유로 가짜의 product_client 를 사용할거야 목으로 만들어준거임

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  // fetchItems 목으로 만들었음
  // fetchItems 를 실행하면 목함수가 비동기적으로 저 배열을 리턴해줄거임 (리턴은 생략)
  // 이제 이 함수와 목하고 있는 client를 연결해주면 된다.

  ProductClients.mockImplementation(() => {
    return {
      fetchItems,
      // ProductClients - fetchItems 연결
      // fetchItems - fetchItems . 키 밸류 같으니까 생략
    };
  });

  let productService;
  // 테스트하고자 하는건 ProductService인데,
  beforeEach(() => {
    productService = new ProductService();
    // 근데 이렇게 실행하게 되면 new ProductClient 에 의해서 fetchItems(함수)까지 실행이 됨
    // 내가 모르는 사이에 내부에서 함수 테스트가 실행되고 네트위크, 데이터 전송 실패 등 다른 이유로 문제가 생기면
    // 서비스에 대한 테스트코드가 실패하게 된다. // 네트위크에 의존하는 테스트 코드
    // 그래서 ProductClient 와 별개로 독립적으로 의존하지 않기위해서는
    // ProductClient 를 목으로 만들어주면 된다.

    it("should filter out only available items", async () => {
      const items = await productService.fetchAvailableItems;
      expect(items.length).toBe(1);
      expect(items).toEqual([
        {
          item: "🥛",
          available: true,
        },
      ]);
    });
  });
});

// 중간 정리 ProductService 를 테스트하고 싶은데 테스트를 하고자하는것 외에
// ProdcutClient , 그 안의 fetchItems 모든 의존성에 대해서 목처리한거임
// 우리가 원하는 테스트 로직이 filter 거쳐서 available이 true인 친구만 확인하길 원하는데
// 그 결과를 방해하는 요소들이 다 목처리 됐기때문에 영향을 끼치지 않음
// 모듈간의 의존성을 목을 통해 제거해준거임
