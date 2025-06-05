let onlineStore = require('./onlineStore.js');
let { assert } = require('chai');

describe('tests for onlineStore', () => {
    describe('isProductAvailable tests', () => {
    it('should return "Great! Product is available for purchase." with correct parameters', () => {
        assert.equal(onlineStore.isProductAvailable('Product', 5), "Great! Product is available for purchase.");
    });
    it('should return "Sorry, Product is currently out of stock." when stockQuantity is less than 0', () => {
        assert.equal(onlineStore.isProductAvailable('Product', -2), "Sorry, Product is currently out of stock.");
    });
    it('should return "Invalid input." if parameter is non-string', () => {
        assert.throws(() => onlineStore.isProductAvailable(6,6), "Invalid input.")
    });
    it('should return "Invalid input." if parameter is non-number', () => {
        assert.throws(() => onlineStore.isProductAvailable('string','string'), "Invalid input.")
    });   
});
  describe('canAffordProduct tests', () => {
    it('should return "Invalid input." if parameter is non-number', () => {
        assert.throws(() => onlineStore.canAffordProduct('string','string'), 'Invalid input.');
    });
    it('should return "You don\'t have sufficient funds to buy this product." if balance is neg number', () => {
        assert.equal(onlineStore.canAffordProduct(5,3), "You don't have sufficient funds to buy this product.");
    });
    it('should return "Product purchased. Your remaining balance is $2." if balance is pos number', () => {
        assert.equal(onlineStore.canAffordProduct(3,5), "Product purchased. Your remaining balance is $2.");
    });
  });
  describe('getRecommendedProducts', () => {
    const productList = [
        { name: "Product A", category: "Category 1" },
        { name: "Product B", category: "Category 2" },
        { name: "Product C", category: "Category 1" },
    ];

    it("should return a list of recommended products in the specified category", function() {
        const result = onlineStore.getRecommendedProducts(productList, "Category 1");
        assert.equal(result, "Recommended products in the Category 1 category: Product A, Product C");
    });

    it("should return 'Sorry, we currently have no recommended products in the Category 3 category.' when no recommended products", function() {
        const result = onlineStore.getRecommendedProducts(productList, "Category 3");
        assert.equal(result, "Sorry, we currently have no recommended products in the Category 3 category.");
    });
    
    it('should return "Invalid input." if parameter is non-string', () => {
        assert.throws(() => onlineStore.getRecommendedProducts([], 6), "Invalid input.");
    });
    it('should return "Invalid input." if parameter is non-array', () => {
        assert.throws(() => onlineStore.getRecommendedProducts({}, 'string'), "Invalid input.");
    });
  })

});