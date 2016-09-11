/* background.js
 * keep info
 *
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
