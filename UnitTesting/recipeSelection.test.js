let recipeSelection = require('./recipeSelection.js');
let { assert } = require('chai');

describe("recipeSelection tests", () => {
    describe("isTypeSuitable tests", () => {

        it("Should throw error when parameter non-string", () => {
            assert.throw(() => recipeSelection.isTypeSuitable(6,6), 'Invalid input');
        });
        it("should return Not for vegetarians", () => {
            assert.equal(recipeSelection.isTypeSuitable('Meat', 'Vegetarian'), 'This recipe is not suitable for vegetarians');
        });
        it("Should return Not for Vegans", () => {
            assert.equal(recipeSelection.isTypeSuitable('Meat', 'Vegan'), "This recipe is not suitable for vegans");
        });
        it("Should return Not for Vegans", () => {
            assert.equal(recipeSelection.isTypeSuitable('Dairy', 'Vegan'), "This recipe is not suitable for vegans");
        });
        it('Should return Yes in any other cases', () => {
            assert.equal(recipeSelection.isTypeSuitable('banana', 'Vegetarian'), "This recipe is suitable for your dietary restriction");
        })
     });

    describe("isItAffordable tests", () => {
        it("Should throw error with non-number parameter", () => {
            assert.throw(() => recipeSelection.isItAffordable('string', 'string'), 'Invalid input');
        });
        it('should return Not enough budget', () => {
            assert.equal(recipeSelection.isItAffordable(6, 4), "You don't have enough budget to afford this recipe");
        });
        it('should return Ingredients bought', () => {
            assert.equal(recipeSelection.isItAffordable(4, 6), "Recipe ingredients bought. You have 2$ left");
        })
     });


     describe("getRecipesByCategory tests", () => {
        let recipesArray = [
            { title: "Recipe 1", category: "1" },
            { title: "Recipe 2", category: "2" },
            { title: "Recipe 3", category: "3" }
        ];
        it("should throw error with non-valid parameters", () => {
            assert.throw(() => recipeSelection.getRecipesByCategory([], 6), 'Invalid input');
        });
        it("should throw error with non-valid parameters", () => {
            assert.throw(() => recipeSelection.getRecipesByCategory({}, 'string'), 'Invalid input');
        });
        it('should return data with correct parameters', () => {
            assert.deepEqual(recipeSelection.getRecipesByCategory(recipesArray, '1'), ["Recipe 1"]);
        });
        it('should throw error with incorrect parameters', () => {
            assert.throw(() => recipeSelection.getRecipesByCategory(recipesArray, 1 ), 'Invalid input');
        });
      
     });
});
