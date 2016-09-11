/* contentscript.js
 * here, get some dom contents
 */
alert("contentscript start");
var dueDate = $("#due-date time").attr("datetime");
var jiraTitle = $("title").text();
var link = $(location).attr('href');
var description = $("#description-val").text();


chrome.runtime.sendMessage({"due": dueDate, "name": jiraTitle, "urlSource": link, "desc": description }, function(response) {
	alert('res = ' + response.messeage);
});
