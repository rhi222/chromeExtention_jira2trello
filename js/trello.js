alert("before auth");
Trello.authorize({
	type: 'popup',
	name: 'nishiyama sample app',
	persist: true,
	scope: {
		read: 'true',
		write: 'true' },
	expiration: 'never',
	//success: authenticationSuccess,
	success: function() { onAuthorizeSuccessful(); },
	error: authenticationFailure
});
alert("after auth");

function onAuthorizeSuccessful() {
	alert("onAuthorizeSuccessful!!!!");
	//FIXME hard codeing
	//cf. https://customer.io/actions/trello/
	var myList = '5667d7e7c6b75b90d6abce14';
	var creationSuccess = function(data) {
		alert('Card created successfully. Data returned:' + JSON.stringify(data));
	};
	var newCard = {
		name: 'New Test Card',
		desc: 'This is the description of our new card.',
		// Place this card at the top of our list
		idList: myList,
		pos: 'top'
	};
	/* sample*/
	/*
	Trello.post("cards", {
		name: "Card created for test",
		desc: "this is a test",
		idlist: "myIDListInsertedHere",
		due: today,
		urlSource: thisUrl
	});
	*/
	Trello.post('/cards/', newCard, creationSuccess);
};

function authenticationFailure() {
	alert("Failed authentication");
};

onAuthorizeSuccessful();
