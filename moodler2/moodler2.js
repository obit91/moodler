function downloadURL(url, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

function chooseVids(choice) {
	if (choice == 1) {
		downloadURL(url);
	}
	if (choice == 2) {
		downloadURL(url2);
	}
	if (choice == 3) {
		downloadURL(url)
		downloadURL(url2)
	}
}

$(document).ready(function () {
	
	text = document.getElementById("other").innerHTML;
	start = text.search("video_server=")+13;
	end = text.search(".mp4")+4;
	url = text.substring(start,end);
	url2 = url.replace('cam_1','cam_2');

	var NewDialog = $('<div id="MenuDialog"><p>This is your dialog content, which can be multiline and dynamic.</p></div>');
	NewDialog.dialog({
	autoOpen: true, 
	draggable: true,
	resizable: true,
	width: 500,
	zIndex:3999,
	modal: false,
	buttons: [
		{text: "Part 1", click: function() {chooseVids(1)}},
		{text: "Part 2", click: function() {chooseVids(2)}},
		{text: "Both Parts", click: function() {chooseVids(3)}}		
		]
	});
	NewDialog.dialog("open");
});