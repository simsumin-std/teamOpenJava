var nickname = $("#name").val();
var chatcontent = "dd";
var total = "";

$("#chatc")

var setf = function() 
{
	nickname = $("#name").val();
	alert("닉네임이 \"" + nickname + "\"으로 설정되었습니다.");
}

var enterf = function()
{
	chatcontent = $("#chatc").val();
	total = "<p>" + "<span style='color:#2F64B9'>" + nickname + "</span>" + " : " + chatcontent
	$("#starter").append(total);

	$("#chat_board").scrollTop($("#chat_board")[0].scrollHeight); // 스크롤바 아래로 갱신!	

	$("#chatc").val("");
}

$("#idset").bind("click", setf);
$("#enter").bind("click", enterf);
$("#chatc").keypress(function(e)
{
	var key = e.which;
	if(key == 15)
	{
		$("#enter").trigger("click");
	}
});