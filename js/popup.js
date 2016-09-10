$(function () {
	chrome.tabs.getSelected(null, function(tab) {
		//$('#key-val').data('issue-key')
		$('#title').text(tab.title);
		//$('#url').text(tab.url);
	});
});
