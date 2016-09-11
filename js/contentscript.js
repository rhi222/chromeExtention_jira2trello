alert("contentscript start");
var dueDate = $("#due-date time").attr("datetime");
alert("due = " + dueDate);
var jiraTitle = $("title").text();
alert("name = " + jiraTitle);


chrome.runtime.sendMessage({"due": dueDate, "name": jiraTitle }, function(response) {
	alert('res = ' + response.messeage);
});
