function openbox(id){
	display = document.getElementById(id).style.display;

	if(display=='none'){
		document.getElementById(id).style.display='block';
	}else{
		document.getElementById(id).style.display='none';
	}
}


// heightbox

function heightBox(id){
	height = document.getElementById(id).style.maxHeight;

	if(height=='0px'){
		document.getElementById(id).style.transition='transition: max-height .8s;';
		document.getElementById(id).style.maxHeight='500px';
	}else{
		document.getElementById(id).style.transition='transition: max-height .8s;';
		document.getElementById(id).style.maxHeight='0px';
	}
}