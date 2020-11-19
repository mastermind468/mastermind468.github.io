    var ep;
    var xrwma;
    var round =1;
    var kwdikos=[];
    var prospa8eia=["a","b","c","d"];
	var z=100;

    function paixnidi(){
	    statistics();
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		// true for mobile device
		z=65;
		window.alert("If not viewed properly, try enabling Desktop Site / Έκδοση για υπολογιστές from your browser settings. Enjoy !");
		}
        mege8os();
        ep = "mple";
        xrwma = "rgb(66, 63, 248)";
        document.getElementById("mple").style.border="8px solid #fdfdfd";
        for ( var i = 2; i < 9; i++ ){
            for ( var j = 1; j <5; j++ ){
                var temp=i.toString()+j.toString();
                document.getElementById(temp).disabled = true;
            }
        }
        for (var i=1; i < 5; i++) {
            kwdikos.push(tuxaioxrwma(0,5));
        }   
          
    }

    function epilogh(e){
        document.getElementById(ep).style.border="none";
        ep=e;
        document.getElementById(ep).style.border="8px solid #fdfdfd";
        switch (e) {
            case "kafe":
              xrwma ="rgb(128, 82, 48)";
              break;
            case "mple":
                xrwma="rgb(66, 63, 248)";
              break;
            case "prasino":
               xrwma="rgb(16, 216, 26)";
              break;
            case "kokkino":
                xrwma="rgb(235, 29, 29)";
              break;
            case "mob":
                xrwma="rgb(128, 47, 160)";
              break;
            case "kitrino":
                xrwma="rgb(236, 233, 19)";
              break;
        }             
    }

    function xrwmatismos(id) {
        if(round != 9){
            document.getElementById(id).style.backgroundColor=xrwma; 
            /*dhmiourgia pinaka me auta pou bazei o paikths */
            var pos=(id-round*10)-1;
            prospa8eia[pos]=ep;          
        }    
    }

    function test(){
        if(round != 9){
            var akurwsh =0;
            for ( var j = 1; j <5; j++ ){
                var temp=round.toString()+j.toString();
                if(document.getElementById(temp).style.backgroundColor == ""){
                    akurwsh++;
                }
            }
            if(akurwsh == 0){                       
                for ( var j = 1; j <5; j++ ){
                    var temp=round.toString()+j.toString();
                    document.getElementById(temp).disabled = true;
                }
                /*elegxos gia kokkina + aspra*/
                var ap =1;
                var tempkwdikos= Array.from(kwdikos);
                for (var i = 0; i < 4; i++) {
                    if(tempkwdikos[i]==prospa8eia[i]){
                        document.getElementById("a"+round.toString()+ap.toString()).style.backgroundColor="red";
                        ap++;
                        tempkwdikos[i]="diagrafh";
                        prospa8eia[i]="diagrafh";
                    }
                }
                if(ap==5){
                    /*WIN*/
                   apokaluyh();
                   document.getElementById("footer1").innerHTML=
                    '<button ><span id="prasino"class="selectdot">W</span></button>';
                    document.getElementById("footer2").innerHTML=
                    '<button ><span id="prasino"class="selectdot">O</span></button>';
                    document.getElementById("footer3").innerHTML=
                    '<button ><span id="prasino"class="selectdot">N</span></button>';
                    document.getElementById("footer4").innerHTML=
                    '<button  ><span id="prasino"class="selectdot"></span></button>';
                    document.getElementById("footer5").innerHTML=
                    '<button  ><span id="prasino"class="selectdot"></span></button>';
                    document.getElementById("footer6").innerHTML=
                    '<button id="f" onclick="f5()" ><span id="prasino"class="selectdot">>></span></button>';
                    document.getElementById("f").style.border="7px solid #fdfdfd";
                    document.getElementById("f").style.borderRadius="50%";
                    document.getElementById("r").innerHTML="";
                    return;
                }
                
                for (var i = 0; i < 4; i++) {
                    if(prospa8eia[i] != "diagrafh"){
                        for(var j=0;j<4;j++){
                            if(prospa8eia[i]==tempkwdikos[j]){
                               document.getElementById("a"+round.toString()+ap.toString()).style.backgroundColor="white";
                               ap++; 
                               tempkwdikos[j]="diagrafh";
                               prospa8eia[i]="diagrafh";
                               j+=4;
                            }
                        }                    
                    }
                }
                round++;
                if(round==9){
                    /*LOSE*/ 
                    apokaluyh();
                    document.getElementById("footer1").innerHTML=
                    '<button ><span id="kokkino"class="selectdot">L</span></button>';
                    document.getElementById("footer2").innerHTML=
                    '<button ><span id="kokkino"class="selectdot">O</span></button>';
                    document.getElementById("footer3").innerHTML=
                    '<button ><span id="kokkino"class="selectdot">S</span></button>';
                    document.getElementById("footer4").innerHTML=
                    '<button  ><span id="kokkino"class="selectdot">T</span></button>';
                    document.getElementById("footer5").innerHTML=
                    '<button  ><span id="kokkino"class="selectdot"></span></button>';
                    document.getElementById("footer6").innerHTML=
                    '<button id="f" onclick="f5()" ><span id="kokkino"class="selectdot">>></span></button>';
                    document.getElementById("f").style.border="7px solid #fdfdfd";
                    document.getElementById("f").style.borderRadius="50%";
                    document.getElementById("r").innerHTML="";
                    return;
                }else{
                    for ( var j = 1; j <5; j++ ){
                        var temp=round.toString()+j.toString();
                        document.getElementById(temp).disabled = false;
                    }
                }
            }
        }    
    }

    function tuxaioxrwma(min,max){
        var number=Math.floor(Math.random() * (max - min + 1) ) + min;
        switch(number){
            case 0:
            xr = "kafe";
            break;
            case 1:
            xr = "mple";
            break;
            case 2:
            xr = "prasino";
            break;
            case 3:
            xr = "kokkino";
            break;
            case 4:
            xr = "mob";
            break;
            case 5:
            xr = "kitrino";
        }
        return xr;
    }

    function apokaluyh(){
        var x ;
        for(var i=1;i<5;i++){
            switch (kwdikos[i-1]) {
                case "kafe":
                  x ="rgb(128, 82, 48)";
                  break;
                case "mple":
                    x="rgb(66, 63, 248)";
                  break;
                case "prasino":
                   x="rgb(16, 216, 26)";
                  break;
                case "kokkino":
                    x="rgb(235, 29, 29)";
                  break;
                case "mob":
                    x="rgb(128, 47, 160)";
                  break;
                case "kitrino":
                    x="rgb(236, 233, 19)";
                  break;
            }                                                                                                               
            document.getElementById("s"+i.toString()).innerHTML="";
            document.getElementById("s"+i.toString()).style.backgroundColor=x;
        }
    }

    function f5(){
        /*refresh*/location.reload();
    }
     
    function mege8os(){
		var w = innerWidth;
        var h = innerHeight; 
        if(w/h<600/1216){
            document.body.style.zoom=((w/600)*z)+"%";
        }else{
            document.body.style.zoom=((h/1216)*z)+"%";
        } 
    }
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbycWBiwxd_TZMZAk-uHeVnZCubmMr0McvCXxiHiA957Tne0T5M/exec';

function statistics(){
    var form = new FormData();
    form.append('ip(mastermind)',ip);
    form.append('innerWidth(mastermind)',innerWidth);
    form.append('innerHeight(mastermind)',innerHeight);
    form.append('screenWidth(mastermind)',screen.width);
    form.append('screenHeight(mastermind)',screen.height);
    fetch(scriptURL, { method: 'POST', body: form });
}

var ip;
function getIP(json) {
    ip = json.ip;
  }
