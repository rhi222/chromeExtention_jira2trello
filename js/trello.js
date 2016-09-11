// only first time, you need get token by Trello.authorize();
/*
Trello.authorize({
	//type: 'redirect',
	type: 'popup',
	name: 'nishiyama sample app',
	persist: true,
	scope: {
		read: 'true',
		write: 'true' },
	expiration: 'never',
	interactive:true,
	success: onAuthorizeSuccessful,
	error: authenticationFailure
});
*/
alert("start trello.js");

var parsedItems = [];
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		var dueDate = request.dueDate;
		var jiraTitle = request.jiraTitle;
		alert("addListener jiraTitle");
		alert(request.due);
		parsedItems.push(request.due);
		parsedItems.push(request.name);
		sendResponse({messeage: 'finish'});
});


function onAuthorizeSuccessful(cardInfo) {
	alert("start do post");
	//FIXME hard codeing
	//var token = Trello.token();
	var token = '194b776780a5f76a7370be06eb9633c19055ba4584fbe9d2cc3ca1806ca6ad6c';

	//cf. https://customer.io/actions/trello/
	var myList = '5667d7e7c6b75b90d6abce14';
	var url = 'https://trello.com/1/cards';
	var dueDate = cardInfo[0];
	var jiraTitle = cardInfo[1];
	var newCard = {
		key: '26354b78b272424132568887c9814aa8',
		token: '194b776780a5f76a7370be06eb9633c19055ba4584fbe9d2cc3ca1806ca6ad6c',
		idList: myList,
		name: jiraTitle,
		desc: 'This is the description of our new card.',
		// Place this card at the top of our list
		pos: 'top',
		urlSource: 'http://www.forcia.com/',
		due: dueDate
	};
	//only post method can access
	//httpGet(url);
	$.post(url, newCard, function(data, status){
		alert('Card created successfully. Data returned:' + JSON.stringify(data));
	});
	alert("Trello.post done");
};

function authenticationFailure() {
	alert("Failed authentication");
};

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.send( null );
	return xmlHttp.responseText;
};
var cardInfo = chrome.extension.getBackgroundPage().parsedItems;

alert("cardInfo");
alert(cardInfo);
onAuthorizeSuccessful(cardInfo);

