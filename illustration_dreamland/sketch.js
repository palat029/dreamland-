// DREAMLAND

var BackgroundCityImage;
var Box1Image;
var CloudOneImage;
var CloudTwoImage;
var girlImage;
var AngryTeacher;
var AngryTeacherSchool;
var BackgroundPirate;
var CityBackground;
var BoatG;
var BackgroundSchool;
var EndPage;
var FriendStanding;
var GirlStanding;
var IdeaGirl;
var LightBulbYellow;
var LightBulbGray;
var PirateBoat;
var PirateBoy;
var PirateGirl;
var SadGirl;
var TeacherSword;
var WaveBack;
var WaveFront;
var ArmPirate;

var x = 100;
var y = 100;

var CloudOne = -100;
var CloudTwo = 600;

var currentPage = "DayDreamLand";

function preload() {
	BackgroundCityImage = loadImage("Images/BackgroundCity.png");
	BackgroundSchoolImage = loadImage("Images/BackgroundSchool.png");
	BackgroundPirateImage = loadImage("Images/BackgroundPirate.png");
	CityBackgroundImage = loadImage("Images/CityBackground.png");
	Box1Image = loadImage("Images/Box1.png");
	CloudOneImage = loadImage("Images/CloudOne.png");
	CloudTwoImage = loadImage("Images/CloudTwo.png");
	girlImage = loadImage("Images/girl.png");
	SadGirlImage = loadImage("Images/SadGirl.png");
	PirateGirlImage = loadImage("Images/PirateGirl.png");
	IdeaGirlImage = loadImage("Images/IdeaGirl.png");
	GirlStandingImage = loadImage("Images/GirlStanding.png");
	FriendStandingImage = loadImage("Images/FriendStanding.png");
	WaveBackImage = loadImage("Images/WaveBack.png");
	WaveFrontImage = loadImage("Images/WaveFront.png");
	TeacherSwordImage = loadImage("Images/TeacherSword.png");
	AngryTeacherImage = loadImage("Images/AngryTeacher.png");
	AngryTeacherSchoolImage = loadImage("Images/AngryTeacherSchool.png");
	BoatGImage = loadImage("Images/BoatG.png");
	PirateBoatImage = loadImage("Images/PirateBoat.png");
	PirateBoyImage = loadImage("Images/PirateBoy.png");
	LightBulbGrayImage = loadImage("Images/LightBulbGray.png");
	LightBulbYellowImage = loadImage("Images/LightBulbYellow.png");
	EndPageImage = loadImage("Images/EndPage.png");
	ArmPirateImage = loadImage("Images/ArmPirate.png");

}

function setup() {
	// create a place to draw
	createCanvas(750, 600);

}

function mousePressed() {
	if (currentPage === "DayDreamLand") {
		currentPage = "Alone";
	} else if (currentPage === "Alone") {
		currentPage = "SadSchool";
	} else if (currentPage === "SadSchool") {
		currentPage = "IdeaDust";
	} else if (currentPage === "IdeaDust") {
		currentPage = "PirateShip";
	} else if (currentPage === "PirateShip") {
		currentPage = "HappySchool";
	} else if (currentPage === "HappySchool") {
		currentPage = "DayDreamLand";
	}
}

function draw() {
	if (currentPage === "DayDreamLand") {
		drawPageDayDreamLand();
	} else if (currentPage === "Alone") {
		drawPageAloneScene();
	} else if (currentPage === "SadSchool") {
		drawPageSadSchoolScene();
	} else if (currentPage === "IdeaDust") {
		drawPageIdeaDustScene();
	} else if (currentPage === "PirateShip") {
		drawPagePirateShipScene();
	} else if (currentPage === "HappySchool") {
		drawPageHappySchoolScene();

	}
}

function drawPageDayDreamLand() {
	image(BackgroundCityImage, 0, 0);



	// move girl from left, up, down, right

	if (keyIsDown(LEFT_ARROW)) {
		x -= 5;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		x += 5;
	}
	if (keyIsDown(UP_ARROW)) {
		y -= 5;
		// [...];
	}
	if (keyIsDown(DOWN_ARROW)) {
		y += 5;
	}


	// restrict movement from going past ground and clouds

	if (y > 50) {
		y = 50;
	}
	if (y < 0) {
		y = 0;
	}
	if (x > 650) {
		x = 650;
	}
	if (x < 0) {
		x = 0;
	}

	// go over box
	var drawX = x;
	var drawY = y;
	if (x > 400 && x < 600) {
		drawY = -10;
	}

	fill(255, 0, 0);

	// ellipse(x, y, 30, 30);
	// noFill();
	image(girlImage, drawX, drawY + 250);
	image(Box1Image, 500, 500);

	// clouds
	CloudOne += 0.8;
	if (CloudOne > 800) {
		CloudOne = -200;
	}
	image(CloudOneImage, CloudOne, 100);

	CloudTwo += 0.5;
	if (CloudTwo > 800) {
		CloudTwo = -200;
	}
	image(CloudTwoImage, CloudTwo, 50);



}

function drawPageAloneScene() {
	image(BackgroundCityImage, 0, 0);
	image(GirlStandingImage, 200, 300);
	image(FriendStandingImage, 50, 300);

	// clouds
	CloudOne += 0.8;
	if (CloudOne > 800) {
		CloudOne = -200;
	}
	image(CloudOneImage, CloudOne, 100);

	CloudTwo += 0.5;
	if (CloudTwo > 800) {
		CloudTwo = -200;
	}
	image(CloudTwoImage, CloudTwo, 50);



}

function drawPageSadSchoolScene() {
	image(BackgroundSchoolImage, 0, 0);
	image(AngryTeacherSchoolImage, 50, 250);
	image(SadGirlImage, 200, 300);
}

function drawPageIdeaDustScene() {
	background(100, 100, 100);
	image(IdeaGirlImage, 20, 20);
	if (keyIsDown(RIGHT_ARROW)) {
		image(LightBulbYellowImage, 500, 100);
	} else {
		image(LightBulbGrayImage, 500, 100);
	}
}

function drawPagePirateShipScene() {
	image(BackgroundPirateImage, 0, 0);
	// clouds
	CloudOne += 0.8;
	if (CloudOne > 800) {
		CloudOne = -200;
	}
	image(CloudOneImage, CloudOne, 100);

	CloudTwo += 0.5;
	if (CloudTwo > 800) {
		CloudTwo = -200;
	}
	image(CloudTwoImage, CloudTwo, 50);
	//Waves
	image(ArmPirateImage, 400, 258 + random(0.5, 1));
	image(WaveBackImage, 0, 360 + random(0, 10));
	image(BoatGImage, 50 + random(0, 1), 145);
	image(PirateBoatImage, 500 + random(0, 1), 200);
	image(WaveFrontImage, 0, 360 + random(0, 5));
	//scene
	image(AngryTeacherImage, 50, 108);
	image(TeacherSwordImage, 200, 195);
	image(PirateGirlImage, 100, 160);
	image(PirateBoyImage, 500, 168);


}

function drawPageHappySchoolScene() {
	image(EndPageImage, 0, 0);


}
