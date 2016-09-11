/* trello.js
 * make new card using trello api
 */

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
function authenticationFailure() {
	alert("Failed authentication");
};
*/
alert("start trello.js");

function createCard(cardInfo) {
	alert("start do post");
	//FIXME hard codeing //var token = Trello.token();
	var myAppKey = '26354b78b272424132568887c9814aa8';
	var myToken = '194b776780a5f76a7370be06eb9633c19055ba4584fbe9d2cc3ca1806ca6ad6c';
	//cf. https://customer.io/actions/trello/
	var myList = '5667d7e7c6b75b90d6abce14';
	var dueDate = cardInfo[0];
	var jiraTitle = cardInfo[1];
	var link = cardInfo[2];
	var description = cardInfo[3];

	var newCard = {
		key: myAppKey,
		token: myToken,
		idList: myList,
		name: jiraTitle,
		desc: description,
		// Place this card at the top of our list
		pos: 'top',
		urlSource: link,
		due: dueDate
	};

	var url = 'https://trello.com/1/cards';
	//only post method can access
	//httpGet(url);
	$.post(url, newCard, function(data, status){
		alert('Card created successfully. Data returned:' + JSON.stringify(data));
	});
	alert("Trello.post done");
};

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.send( null );
	return xmlHttp.responseText;
};
var cardInfo = chrome.extension.getBackgroundPage().parsedItems;

alert("cardInfo at trello.js");
alert(cardInfo);
createCard(cardInfo);

