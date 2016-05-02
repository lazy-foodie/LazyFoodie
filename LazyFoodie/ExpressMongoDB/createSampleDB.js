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
			url: "www.cluck.com",
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
			url: "www.oink.com",
			name: "Roasted Pork"
		},
		{
			recipeId: 3,
			url: "www.bah.com",
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
			url: "www.cluck.com",
			name: "Roasted Chicken"
		},
		{
			recipeId: 2,
			url: "www.oink.com",
			name: "Roasted Pork"
		},
		{
			recipeId: 3,
			url: "www.bah.com",
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
	imageUrl: "www.cluck.com",
	attributes:
		 [ {
			cuisine: "Caveman",
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
	  recipeId: 2
}
)
recipesCollection.insert(
{
	  name: "Roasted Lamb",
	  description: "You roast some lamb.",
	  recipeId: 3
}
)