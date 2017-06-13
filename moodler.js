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
		downloadURL(cam1);
	}
	if (choice == 2) {
		downloadURL(cam2);
	}
	if (choice == 3) {
		downloadURL(cam1)
		downloadURL(cam2)
	}
}

function checkURL(url,cam) {
	var video = document.createElement('video');
	video.src = url;
	var check_vid = video.readyState; // just getting some feedback from the url.

		video.onload = function() {
			// irrelevant
		}

		video.onerror = function() {
			if (cam == 1) {
				show_buttons[0] = 0;
			}
			if (cam == 2) {
				show_buttons[1] = 0;
			}
		}
}

function enable_buttons() {
	
	console.log("in enable");
	if (show_buttons[0] == 1) {
		console.log("enabling part-1");
		$("#button-1").button("enable");
		$("#button-1").button("refresh");
	}
	
	if (show_buttons[1] == 1) {
		$("#button-2").button("enable");
		$("#button-2").button("refresh");

	}
	
	if (show_buttons[0] + show_buttons[1] == 2) {
		$("#button-both").button("enable");
		$("#button-both").button("refresh");

	}
}

function ender() {
	
		// leaving no trace!
		$("#MenuDialog").remove()
		
		return;
	}
	
function big_part() {
	
	if (show_buttons[0] + show_buttons[1] <= 1) {
		show_buttons[2] = 0;
	}

		
	console.log("creating dialog");
	console.log(show_buttons);
	var NewDialog = $('<div id="MenuDialog"><p style="text-align:center">Enjoy! :)</p></div>');
	NewDialog.attr('title','Moodler! @@oBit91').dialog({
		closeOnEscape: true,
		close: ender(),
		draggable: true,
		resizable: true,
		width: 500,
		zIndex:3999,
		modal: true,
		show: "blind",
        hide: "fade",
        autoOpen: false,
		buttons: [
			{
				id: "button-1",
				disabled: "true",
				text: "Part 1", 
				click: function() {
					chooseVids(1)
					$(this).dialog("close");
					ender();
					}
			},
			{
				id: "button-2",
				disabled: "true",
				text: "Part 2",
				click: function() {
					chooseVids(2)
					$(this).dialog("close");
					ender();
					}
			},
			{
				id: "button-both",
				disabled: "true",
				text: "Both Parts",
				click: function() {
					chooseVids(3)
					$(this).dialog("close");
					ender();
					}
			}		
		]
	});
	enable_buttons();
	setTimeout(function() {
		console.log("showing dialog");
		console.log($("#button-1").button("option"));
		NewDialog.dialog("open");
	}, 1000);
}

function main() {
		
	var text = document.getElementById("other").innerHTML;
	var start = text.search("video_server=")+13;
	var end = text.search(".mp4")+4;
	cam1 = text.substring(start,end);
	cam2 = cam1.replace('cam_1','cam_2');

	show_buttons = [1, 1, 1];
	checkURL(cam1,1);
	checkURL(cam2,2);
}

	
setTimeout(function() {
		big_part();
	}, 500);	

main();


