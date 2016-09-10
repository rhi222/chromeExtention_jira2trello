$(function () {
	chrome.tabs.query({
			active: true,
			lastFocusedWindow: true
		},
		function(tabs) {
			var tab = tabs[0];
			console.log(tab);
			//console.log($('#description'));
			//$('#key-val').data('issue-key')
			$('#title').text(tab.title);
			//$('#detail').text(tab.title);
			$('#url').text(tab.url);
		}
	);
});
