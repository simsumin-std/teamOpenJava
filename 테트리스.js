var init=false;
    var myCanvas;
    var Context;

    function Init()
    {
        if(init==flase)
        {
            myCanvas=document.getElementById("MyCanvas")
            Context=myCavas.getContext("2d");
            init=ture;
            
        }
    }

    function Run()
    {
        onDraw();
    }

    function onDraw()
    {
        if(init==false)return;

        Context.strokeStyle="#000"; //색상
        Context.lineWidth=1; //선두께
        Context.strokeRect(0, 0, myCanvas.width-1,myCanvas.height-1); //테두리만 있는 사각형
    }
$(document).ready(function(){ //자동 실행 함수
    Init();
    setInterval(Run,100); //내부 함수 주기적으로 실행
});

var square;

function square_init()
{
	suqre=new Array();
	for(i=0;i<20;++i) //전위 연산자
	{
		square.push(new Array(10));
		for(j=0;j<10;++j)
		square[i][j]=0; //배열 초기화
	}
}