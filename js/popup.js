$(function () {
	chrome.tabs.query({
			active: true,
			lastFocusedWindow: true
		},
		function(tabs) {
			var tab = tabs[0];
			//$('#key-val').data('issue-key')
			$('#title').text(tab.title);
			//$('#url').text(tab.url);
		}
	);
});
