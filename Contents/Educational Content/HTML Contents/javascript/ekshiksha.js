var titles = [['Time and Motion','समय और चाल','वेळ आणि गती'],['Force and Pressure','बल और दबाव','बळ आणि भार']];
var topic = ['Physics->Electricity','भौतिक विज्ञान->यांत्रिकी','भौतिक विज्ञान->यांत्रिकी'];
var urls = [['motion_and_time_en.html','motion_and_time_hi.html','motion_and_time_mr.html'],['Forces_Pressures_en.html','Forces_Pressures_hi.html','Forces_Pressures_mr.html']];
var currentURL = "";
var currentLang = "english";
$(document).ready(function () {
    currentLang = $(".textlang").val();
	$(".footerbox").width($("#maincontainer").width()-30);
    $("#tcontent").hide();
    hideBack();
    changeContent(currentLang);
    $(".textlang").change(function() {
        var lang = $(this).val();
		if(currentURL != "") {
		    var code = currentURL.substring(currentURL.lastIndexOf("_")+1,currentURL.lastIndexOf("."));
			var url = currentURL.substring(0,currentURL.lastIndexOf("_")+1);
			if(lang == "english") {
			    url = url + "en.html";    
			} else if(lang == "hindi") {
			    url = url + "hi.html";
			} else if(lang == "marathi") {
			    url = url + "mr.html";
			}
			openDoc(url);
		} else {
			changeContent(lang);
		}
    });
});

function changeContent(language) {
    currentURL = "";
    if(language == "english") {
        $("#titleone").text(titles[0][0]);
	    $("#titletwo").text(titles[1][0]);
        	$("#topicone").text(topic[0]);
		$("#topictwo").text(topic[0]);
		$("#titleone").attr("href","javascript:openDoc('"+urls[0][0]+"');");
		$("#titletwo").attr("href","javascript:openDoc('"+urls[1][0]+"');");
    } 
    else if(language == "hindi") {
        $("#titleone").text(titles[0][1]);
		$("#titletwo").text(titles[1][1]);
          $("#topicone").text(topic[1]);
		$("#topictwo").text(topic[1]);
		$("#titleone").attr("href","javascript:openDoc('"+urls[0][1]+"');");
		$("#titletwo").attr("href","javascript:openDoc('"+urls[1][1]+"');");
    } 
    else if (language == "marathi") {
       	$("#titleone").text(titles[0][2]);
		$("#titletwo").text(titles[1][2]);
        $("#topicone").text(topic[2]);
		$("#topictwo").text(topic[2]);
		$("#titleone").attr("href","javascript:openDoc('"+urls[0][2]+"');");
		$("#titletwo").attr("href","javascript:openDoc('"+urls[1][2]+"');");
    }
}

function openDoc(url) {
	currentURL = url;
    $("#docList").hide();
    showBack();
    $("#tcontent").show();
    $("#tcontent").html("");
    $("#tcontent").load(url);
}

function showTopic() {
    $("#tcontent").hide();
    hideBack();
    $("#docList").show();
	currentURL = "";
}

function showBack() {
    $("#showTopic").show();
}

function hideBack() {
    $("#showTopic").hide();
}





