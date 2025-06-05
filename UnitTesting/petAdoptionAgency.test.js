const petAdoptionAgency = require('./petAdoptionAgency.js');
const { assert } = require('chai');

describe("petAdoptionAgency tests", () => {
    describe("isPetAvailable tests", () => {

        it("throws error", () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable(6, 'string', 10), "Invalid input");  
        });
        it('returns result', () => {
            assert.equal(petAdoptionAgency.isPetAvailable('pet', -2, false), `Sorry, there are no pet(s) available for adoption at the agency.`);
        });
        it('returns result', () => {
            assert.equal(petAdoptionAgency.isPetAvailable('pet', 1, true), `Great! We have 1 vaccinated pet(s) available for adoption at the agency.`);
        });
        it('returns result', () => {
            assert.equal(petAdoptionAgency.isPetAvailable('pet', 1, false), `Great! We have 1 pet(s) available for adoption, but they need vaccination.`);
        });
     });

    describe("getRecommendedPets tests", () => {
        let recommendedPets = [
            { name: 'Daisy', traits: 'cuddly' },
            { name: 'Puhi', traits: 'fluffy'},
        ];
     
        it("throws error", () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets('string', 6), "Invalid input");
        });
        it('returns result', () => {
            let recommendedPetsEmpty = [];
            assert.equal(petAdoptionAgency.getRecommendedPets(recommendedPetsEmpty, 'cuddly'), `Sorry, we currently have no recommended pets with the desired traits: cuddly.`);
        });
        it('returns result', () => {
            assert.equal(petAdoptionAgency.getRecommendedPets(recommendedPets, 'cuddly'), `Recommended pets with the desired traits (cuddly): Daisy`);
        });
     });

     describe("adoptPet tests", () => {
        it("throws error", () => {
            assert.throws(() => petAdoptionAgency.adoptPet(6, 10), "Invalid input");
        });
        it('returns result', () => {
            assert.equal(petAdoptionAgency.adoptPet('Daisy', 'Radi'), `Congratulations, Radi! You have adopted Daisy from the agency. Enjoy your time with your new furry friend!`);
        });
     });  
});
