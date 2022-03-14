// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation) {
    return Math.abs(pickupLocation - 42); 
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet < 400) {
        return 0;
    }
    else if (feet > 400 && feet < 2000) {
        return (feet - 400) * .02;
    }
    else if (feet > 2000 && feet < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}


// describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });

//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });

//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });

//     it('does not allow rides over 2500 feet', function() {
//       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//     });
//   });