/**
 * @author Benjamin Berman
 * © 2014 All Rights Reserved
 **/
Template.game.game = function () {
    return Games.findOne({_id:getCurrentGameId()});
};

Template.game.title = function() {
    var g = Games.findOne({_id:getCurrentGameId()});
    if (g)
        return g.title;
    else
        return "REDACTED.";
};

Template.game.round = function() {
    var g = Games.findOne({_id:getCurrentGameId()});
    if (g)
        return g.round+1;
    else
        return 1;
};

Template.game.isOpen = function() {
    var g = Games.findOne({_id:getCurrentGameId()});
    if (g) {
        return g.open || true;
    } else {
        return false;
    }
};

Template.game.isOwner = function() {
    return false;
//		var g = Games.findOne({_id:getCurrentGameId()});
//		if (g) {
//			if (g.ownerId) {
//				return EJSON.equals(g.ownerId, playerIdForUserId(getCurrentGameId(),Meteor.userId()));
//			} else {
//				return false;
//			}
//		} else {
//			return false;
//		}
};

Template.game.lastVote = function() {
    return Votes.findOne({gameId:getCurrentGameId(),round:Session.get(ROUND)-1});
};

Template.game.rendered = refreshListviewsAndCreateButtons;
Template.game.created = defaultCreated;

Template.registerHelper("gameGame",Template.game.game);
Template.registerHelper("gameTitle",Template.game.title);
Template.registerHelper("gameIsOpen",Template.game.isOpen);
Template.registerHelper("gameRound",Template.game.round);
Template.registerHelper("gameIsOwner",Template.game.isOwner);
Template.registerHelper("gameLastVote",Template.game.lastVote);