db = db.getSiblingDB('sampleDB')
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.insert(
{
	userId : 1,
	firstName : "Emma",
	lastName : "Ogilvie",
	email : "fake@gmail.com",
	developer: false,
	favorites: 
		[ {
			recipeId: 1,
			url: "http://www.desibucket.com/db2/01/30302/30302-640x512.jpg",
			name: "Roasted Chicken"
		} ],
}
)
usersCollection.insert(
{
	userId : 2,
	firstName : "Ems",
	lastName : "Ogs",
	email : "fakefake@gmail.com",
	developer: true, 
	favorites: 
		[ {
			recipeId: 2,
			url: "http://www.animalsdb.com/wp-content/uploads/2015/08/Pig-In-Water.jpg", 
			name: "Roasted Pork"
		},
		{
			recipeId: 3,
			url: "http://www.metalsucks.net/wp-content/uploads/2015/07/sheep-redorbit.jpg",
			name: "Roasted Lamb"
		} ],
}
)
usersCollection.insert(
{
	userId : 3,
	firstName : "Em",
	lastName : "Ogies",
	email : "fakefakefake@gmail.com",
	developer: false,
	favorites: 
		[ {
			recipeId: 1,
			url: "http://www.desibucket.com/db2/01/30302/30302-640x512.jpg",
			name: "Roasted Chicken"
		},
		{
			recipeId: 2,
			url: "http://www.animalsdb.com/wp-content/uploads/2015/08/Pig-In-Water.jpg",
			name: "Roasted Pork"
		},
		{
			recipeId: 3,
			url: "http://www.metalsucks.net/wp-content/uploads/2015/07/sheep-redorbit.jpg",
			name: "Roasted Lamb"
		} ],
}
)
db.createCollection('recipes')
recipesCollection = db.getCollection("recipes")
recipesCollection.remove({})
recipesCollection.insert(
{
	  name: "Roasted Chicken",
	  description: "You roast some chicken.",
	  recipeId: 1,
	  ingredients:
	  	[
	  		"Chicken",
	  		"BUTTER"
	  	],
	rating: 100,
	sourceUrl: "www.getThatChicky.com",
	imageUrl: "http://www.desibucket.com/db2/01/30302/30302-640x512.jpg",
	attributes:
		 [ {
			cuisine: "White Cavemen",
			holiday: "Every Holiday",
			course: "Breakfast"
		} ],		
	totalTime: "5 minutes"
}
)
recipesCollection.insert(
{
	  name: "Roasted Pork",
	  description: "You roast some pork.",
	  recipeId: 2,
	  ingredients:
	  	[
	  		"Pork",
	  		"BUTTER"
	  	],
	rating: 100,
	sourceUrl: "www.getThatPiggy.com",
	imageUrl: "http://www.animalsdb.com/wp-content/uploads/2015/08/Pig-In-Water.jpg",
	attributes:
		 [ {
			cuisine: "French Cavemen",
			holiday: "Every Holiday",
			course: "Breakfast"
		} ],		
	totalTime: "5 minutes"
}
)
recipesCollection.insert(
{
	  name: "Roasted Lamb",
	  description: "You roast some lamb.",
	  recipeId: 3,
	  ingredients:
	  	[
	  		"Lamb",
	  		"BUTTER"
	  	],
	rating: 100,
	sourceUrl: "www.getThatLambsy.com",
	imageUrl: "http://www.metalsucks.net/wp-content/uploads/2015/07/sheep-redorbit.jpg",
	attributes:
		 [ {
			cuisine: "Mediterranean Cavemen",
			holiday: "Every Holiday",
			course: "Breakfast"
		} ],		
	totalTime: "5 minutes"
}
)