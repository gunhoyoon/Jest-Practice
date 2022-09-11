const ProductClient1 = require("./product_client");
class ProductService {
  productClient;
  constructor() {
    this.productClient = new ProductClient1();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems() // 우리가 원하는 데이터를 가져와서
      .then((items) => items.filter((item) => item.available));
    // available이 true인 친구들만 filter하는지 확인하고 싶음
    // 그렇기 때문에 fetchItems 도 목을 사용해 가품을 만들거임
  }
}

module.exports = ProductService;
// 경로 진짜 개빡치네 넘어감 일단
