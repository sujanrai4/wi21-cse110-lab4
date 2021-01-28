/********************************************************
	Author: Sujan Rai
	UCSD email: srai@ucsd.edu
	Date: 1/28/2021

*********************************************************/

/*
	Demonstrates the for-in loop for CSE110 lab4 question 18
*/

let statistics = {
	redCars: 21,
	blueCars: 45,
	greenCars: 12,
	raceCars: 5,
	blackCaars: 40,
	rareCars: 2,

};

for(car in statistics) {
	if(('r' == car.charAt(0)) || ( statistics[car] % 2 == 1))
		console.log(statistics[car]);

}
