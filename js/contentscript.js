alert("contentscript start");
var dueDate = $("#due-date time").attr("datetime");
alert("due = " + dueDate);
var jiraTitle = $("title").text();
alert("name = " + jiraTitle);
var link = $(location).attr('href');
var description = $("#description-val").text();


chrome.runtime.sendMessage({"due": dueDate, "name": jiraTitle, "urlSource": link, "desc": description }, function(response) {
	alert('res = ' + response.messeage);
});
