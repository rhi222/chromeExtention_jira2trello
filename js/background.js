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
alert("start background.js");

var parsedItems = [];
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		parsedItems = [];
		alert("addListener");
		parsedItems.push(request.due);
		parsedItems.push(request.name);
		parsedItems.push(request.urlSource);
		parsedItems.push(request.desc);
		sendResponse({messeage: 'finish'});
});
alert("endline background.js");
