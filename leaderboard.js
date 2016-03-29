PlayersList = new Mongo.Collection('players');
if (Meteor.isClient){
	//console.log('Hello Client!');
	//Template.leaderboard.player = function(){ return "Some other text" }
	Template.leaderboard.helpers({
		'player' : function(){
			return PlayersList.find();
		},
		'otherHelperFunction': function(){
			return "Some other function";
		}
	});
		
	
}
if (Meteor.isServer) {
	//console.log('Hello Server!');
}