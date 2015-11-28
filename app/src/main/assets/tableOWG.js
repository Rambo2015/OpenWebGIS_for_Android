﻿/*

  Copyright (c) 2015, OpenWebGIS, Fedor Kolomeyko <openwebgisnew@gmail.com>
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

  1. Redistributions of source code must retain the above copyright notice, this list of
     conditions and the following disclaimer.

  2. Redistributions in binary form must reproduce the above copyright notice, this list
     of conditions and the following disclaimer in the documentation and/or other materials
     provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


 */
var layerNameTable;
var arrFeaturesTable;
var forEdit=0;
var eee;
var sortTable_A=0;
var sortTable_D=0;
var dTheta=0.05;
var SumdTheta=0;
var SumdThetaT=0;
var SumdThetaY=0;
var SumdThetaTY=0;
var Axe='x';
var Protate;
var Protate2;
var Protate2Z;
var rtt;
var Legend3dObj;
var arrayFeatZcolor=[];
var arrayFeatZIshod=[];
var arrayFeatZfunc=[];
var function3dGfunction3dG;
var MainPointIndex=0;
var colorMap=["#060", "#090", "#0C0", "#0F0", "#9F0", "#9C0", "#990", "#960", "#930", "#900", "#C00"];
var AsDes=0;
var colorXmain="#000000";
var fileZIP;

//document.getElementById("pField").appendChild(t);
////end clear select list
/*function getAndroidVar(toast) {
    window.OpenLayers.VERSION_NUMBER=toast;
 }*/
function initTable(){
//getAndroidVar();
////Get FeatureType/////////////////////////////////////
var EditLayerList;

 var body = document.body
 var docElem = document.documentElement
 var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
 var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
 var clientTop = docElem.clientTop || body.clientTop || 0
 var clientLeft = docElem.clientLeft || body.clientLeft || 0
 var topTop = 0 + scrollTop - clientTop
 var leftLeft =0 + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");
DivEditeLeg.id="id_optionsChart";
DivEditeLeg.style.width=400;
DivEditeLeg.style.height=400;
DivEditeLeg.className="id_divOptionsChart";
DivEditeLeg.style.position="absolute";
DivEditeLeg.style.display="none";
DivEditeLeg.style.left=Math.round(document.body.clientWidth/2-100);
DivEditeLeg.style.top=Math.round(document.body.clientHeight/2-0.00);
DivEditeLeg.innerHTML='<div id="id_id_divOptionsChartLeg" style="background:#ffffff; color:#0000ff;z-index: 300001;position:relative;'+
'px;overflow:hidden; border: 1px solid black; width:600px;height:200px;"><img onclick="closeRemoveChartOptWin()" src="openlayers/theme/default/img/close.gif" style="position:relative; top:3px left:50px;float:right; cursor:pointer"><a style="position:relative; top:20px"></a>'+'<div id="id_id_divOptionsChartLeg2" style="top:10px;position:relative"></div><br>'+
'<div> <p>'+
'<button type="button" onclick="OKRemOptCh()">Close</button><button type="button" onclick="ApplyChart()">Create Chart</button></p></div>'
'</div>';
body.appendChild(DivEditeLeg);
var htmlRemL='';
htmlRemL+='<div style="float:left"><a>Axis X</a></div><div title="select color of Axis X" id="fieldChartXColor" onclick="clickDivColor3dt(this)"'+' style="position:relative;width:10px;height:10px;cursor:pointer;background:#bbbbbb; border:1px double black; float:left"></div><div "'+' style="float:left"><a>.value:</a></div><div title="select color of value" id="fieldChartVColor" onclick="clickDivColor3dt(this)" '+' style="position:relative;width:10px;height:10px;cursor:pointer;background:#bbbbbb; border:1px double black;float:left"></div><br>'+
'<div style="float:left"><a>Axis Y</a>'+
'</div><div title="select color of Axis Y" id="fieldChartYColor" onclick="clickDivColor3dt(this)"'+
'style="position:relative;width:10px;height:10px;cursor:pointer;background:#bbbbbb; border:1px double black;float:left"></div><br>'+
'<div style="float:left"><a>type of chart</a><select id="typeChartGis">'+
'<option selected value="line">line</option>'+
'<option value="bar_graph">bar_graph</option>'+
'</select></div>';
document.getElementById("id_id_divOptionsChartLeg2").innerHTML=htmlRemL;



if (editlayerMainName!=0 || editlayerMainName!=undefined)
{

  
    var featureTypes2=0;
for (var ak in edilayerMainLayer.features[0].attributes)
{
 var tt2=document.createElement('option');tt2.value=ak;tt2.text=ak;
document.getElementById("fieldChartX").appendChild(tt2);
var tt3=document.createElement('option');tt3.value=ak;tt3.text=ak;
document.getElementById("fieldChartY").appendChild(tt3);
var tt4=document.createElement('option');tt4.value=ak;tt4.text=ak;
document.getElementById("fieldChartZ").appendChild(tt4);
}
if(featureTypes2==0)
{
for (var ak in edilayerMainLayer.features[0].attributes)
{   var tt=document.createElement('option');
tt.value=ak;
tt.text=ak;
document.getElementById("pFieldTable").appendChild(tt);


              } ///end for (var ak in edilayerMainLayer.features[0].attributes)
}
}//end if(featureTypes2[0])

}  ///end function


function OKclose()
{document.getElementById("id_tableOWG").parentNode.removeChild(document.getElementById("id_tableOWG"));}
////////////////////////////////////Chart
function OptionFuncChart()
{if(document.getElementById("id_optionsChart").style.display=='none'){document.getElementById("id_optionsChart").style.display='block'}
else{document.getElementById("id_optionsChart").style.display='none'}
}
function closeRemoveChartOptWin()
{document.getElementById("id_optionsChart").style.display='none';
}
function OKRemOptCh()
{document.getElementById("id_optionsChart").style.display='none';}
function RemoveChart()
{
if(document.getElementById('id_ NewChartImage'))
{
document.getElementById('id_ NewChartImage').parentNode.removeChild(document.getElementById('id_ NewChartImage'));
document.getElementById("table").style.top="20px"

}


}
function inRadG(num) {
    //translate angle from rad to grad
    return num * Math.PI / 180;
}



function draw(Axe)
{    
Axe=Axe;
 var myWinChartKV=window;
 var drawingCanvas0 = myWinChartKV.document.getElementById('id_canvas1Chart');
drawingCanvas0.style.display="block";

var context = drawingCanvas0.getContext('2d');
//context.translate(drawingCanvas0.width/2, drawingCanvas0.height/2); 
context.lineWidth = 1.5;
          context.lineCap = 'butt';
//context.clearRect(0, 0, drawingCanvas0.width, drawingCanvas0.height);
var ctx=context;
rtt=Protate;
ctx.fillRect(0, 0, 10, 10);
  
rtt=Protate2;


 
context.lineWidth = 1.5;
 

 ////ZZZZZZZZZZZZZZ


       var SumAngle=Math.abs(SumdThetaT)+Math.abs(SumdThetaTY);
//alert("Sum "+SumAngle+" X "+SumdThetaT+"Y "+SumdThetaTY);
//alert("P "+Protate[0][0]+","+Protate[1][0]+","+Protate[2][0]);
//alert("P2Z "+Protate2Z[0][0]+","+Protate2Z[1][0]+","+Protate2Z[2][0]);
//var t=(Protate2Z[0][0]-Protate[0][0])+(Protate2Z[1][0]-Protate[1][0])+(Protate2Z[2][0]-Protate[2][0]);
var drawingCanvas3d = document.getElementById('id_canvas1Chart');


//alert(Protate2Z[2][0]+" , "+Protate[2][0]);
rtt=Protate;
//alert(Protate2Z[2][0]-Protate[2][0]);
var rast=(0-Protate2Z[2][0]);

//if(Math.abs(Protate2Z[2][0])<Math.abs(Protate[2][0])){rast=(Protate[2][0]-Protate2Z[2][0]);}
if((rast>0))
{
for (var i =0; i <Protate.length-2; i++)
  {
for(var h=0; h<Protate[i].length;h++)
  { ctx.fillStyle=arrayFeatZcolor[h].backgr;ctx.fillRect(Protate[i][h], Protate[i+1][h], arrayFeatZcolor[h].size, arrayFeatZcolor[h].size);  } //data point
  }
}


  for (var i =0; i <Protate2Z.length-2; i++)
  {
for(var h=0; h<Protate2Z[i].length;h++)
  { 
context.lineWidth = 1.5;
          context.lineCap = 'butt';
        context.beginPath();

        context.beginPath();
          context.moveTo(0, 0);
   context.lineTo(Protate2Z[i][h], Protate2Z[i+1][h]);
    context.lineWidth = 1.5;
//context.moveTo(0, 0);
    //context.lineTo(Protate2Z[i][h+1], Protate2Z[i+1][h+1]);
     context.stroke(); }
  }  


 for (var i =0; i <Protate2.length-2; i++)
  {context.lineWidth = 1.5;
for(var h=0; h<Protate2[i].length-2;h++)
  { 
context.lineWidth = 1.5;
          context.lineCap = 'butt';
        context.beginPath();

        context.beginPath();
          context.moveTo(0, 0);    context.lineWidth = 1.5;
   context.lineTo(Protate2[i][h], Protate2[i+1][h]);


context.moveTo(0, 0);
  context.lineTo(Protate2[i][h+1], Protate2[i+1][h+1]);
   //context.lineWidth = 0.5;
//context.lineTo(Protate2[i][h+1], Protate2[i+1][h]);
//context.lineTo(Protate2[i][h], Protate2[i+1][h]);
//context.moveTo(0, 0);
rtt=Protate2;
//alert("fg");
 context.stroke();

context.beginPath();
context.lineWidth = 0.5;
context.moveTo(0, 0); 
 context.lineTo(Protate2[i][h], Protate2[i+1][h]);
context.moveTo(0, 0);
  context.lineTo(Protate2[i][h+1], Protate2[i+1][h+1]);

//context.moveTo(Protate2[i][h+1], Protate2[i+1][h+1]);
context.lineTo(Protate2[0][2], Protate2[1][2]);

//context.moveTo(Protate2[i][h], Protate2[i+1][h]);
//context.lineTo(Protate2[0][2], Protate2[1][2]);
context.lineTo(Protate2[i][h], Protate2[i+1][h]);
context.closePath();
context.fillStyle="rgba(100,150,185,0.80)";

context.fill(); 
 context.stroke();
     //context.stroke(); 
    //context.fillStyle='#b1afa6';context.fillRect(Protate[i][h]/2, Protate2[i+1][h+1]/2, drawingCanvas0.width/2, drawingCanvas0.height/2);
                                                  }
  }   
rtt=Protate;
//alert("jkl");
context.fillStyle='#000000';
//ctx.fillStyle = "#00F";
    //ctx.strokeStyle = "#F00";
    ctx.font = "italic 12pt Arial";
context.fillText('x', Protate2[0][1]-8, Protate2[1][1]-6);
context.fillText('y', Protate2[0][0]-8, Protate2[1][0]-6);
context.fillText('z', Protate2Z[0][0]+4, Protate2Z[1][0]-6);

   if(rast<0){
   
for (var i =0; i <Protate.length-2; i++)
  {
// ctx.fillStyle = this.points[i].color; 
for(var h=0; h<Protate[i].length;h++)
  { ctx.fillStyle=arrayFeatZcolor[h].backgr;ctx.fillRect(Protate[i][h], Protate[i+1][h], arrayFeatZcolor[h].size, arrayFeatZcolor[h].size);  } //data point
  }
}

 

  }

function erase()
{

var myWinChartKV=window;
 var drawingCanvas0 = myWinChartKV.document.getElementById('id_canvas1Chart');
var context = drawingCanvas0.getContext('2d');
context.clearRect(-drawingCanvas0.width/2, -drawingCanvas0.height/2, drawingCanvas0.width, drawingCanvas0.height);

}

 // -----------------------------------------------------------------------------------------------------
      function multiplyMatrix(U,S)
{
var rowsA = U.length,
        rowsB = S.length,
        colsB,        
        C = new Array(rowsA);
colsB = S[0].length;
if(!S[0].length){colsB=1;}

    for (var i=0; i<rowsA; i++)
        { C[i] = new Array(colsB) }
    for (var k=0; k<colsB; k++)
        { for (var i=0; i<rowsA; i++)
              { var temp = parseFloat(0);
                for (var j=0; j<rowsB; j++)
                    {
                    //  if(U[i].length&&S[1])
                //  {temp = (temp + U[i][j]*S[j][k])}
                 // else{temp =parseFloat(temp) +parseFloat(U[i])*parseFloat(S[j][k]))}
if(!U[1]&&!S[0][1])
              {temp = (parseFloat(temp) + parseFloat(U[i][j])*parseFloat(S[j]))}
                 else{ if(S[1]){temp = (parseFloat(temp) + parseFloat(U[i][j])*parseFloat(S[j][k]))}
                    else{temp =(parseFloat(temp)+parseFloat(U[i])*parseFloat(S[j][k]));}}
                                 }
                C[i][k] = parseFloat(temp); 
              }
        }
//rtt=C;
//alert("C ");


return C;


}

     function multipleMat(R,ArryXYZ,Axis,AxisZ)
      /*
        Assumes that R is a 3 x 3 matrix and that this.points (i.e., P) is a 3 x n matrix. This method performs P = R * P.
      */
      {
        var Px = 0, Py = 0, Pz = 0; // Variables to hold temporary results.
        var P = ArryXYZ; // P is a pointer to the set of surface points (i.e., the set of 3 x 1 vectors).
/*rtt=P;
alert("P");
        var sum; // The sum for each row/column matrix product.
  
        for (var V = 0; V < P.length; V++) // For all 3 x 1 vectors in the point list.
        {
for(var t=0;t<P[V].length;t++){
          Px = P[V][t], Py = P[V][t], Pz = P[V][t];
          for (var Rrow = 0; Rrow < 3; Rrow++) // For each row in the R matrix.
          {
            sum = (R[Rrow][0] * Px) + (R[Rrow][1] * Py) + (R[Rrow][2] * Pz);
            P[V][Rrow] = sum;
          }
               }// t
        }  */
Protate=multiplyMatrix(R,P);
Protate2=multiplyMatrix(R,Axis);
Protate2Z=multiplyMatrix(R,AxisZ)

   
      }
      
      // -----------------------------------------------------------------------------------------------------

  function xRotate(sign,ArryXYZ,Axis,AxisZ)
      /*
        Assumes "sign" is either 1 or -1, which is used to rotate the surface "clockwise" or "counterclockwise".
      */
      {
        var Rx = [ [0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0] ]; // Create an initialized 3 x 3 rotation matrix.
                           
        Rx[0][0] = 1;
        Rx[0][1] = 0; // Redundant but helps with clarity.
        Rx[0][2] = 0; 
        Rx[1][0] = 0; 
        Rx[1][1] = Math.cos( sign*dTheta );
        Rx[1][2] = -Math.sin( sign*dTheta );
        Rx[2][0] = 0; 
        Rx[2][1] = Math.sin( sign*dTheta );
        Rx[2][2] = Math.cos( sign*dTheta );
  
      multipleMat(Rx,ArryXYZ,Axis,AxisZ); // If P is the set of surface points, then this method performs the matrix multiplcation: Rx * P
        erase(); // Note that one could use two canvases to speed things up, which also eliminates the need to erase.

Axe="x";
SumdTheta=parseFloat(SumdTheta)+(sign)*parseFloat(dTheta);
SumdThetaT=parseFloat(SumdTheta *180/ Math.PI);
if(Math.abs(parseFloat(SumdThetaT))>parseFloat(360)){SumdTheta=0;}
if(Math.abs(parseFloat(SumdThetaT))>parseFloat(360)){SumdThetaT=parseFloat(SumdThetaT)-parseFloat(360);}
//alert(SumdThetaT);
     draw(Axe);
      }
         
      // -----------------------------------------------------------------------------------------------------
         
        function yRotate(sign,ArryXYZ,Axis,AxisZ)
      /*
        Assumes "sign" is either 1 or -1, which is used to rotate the surface "clockwise" or "counterclockwise".
      */      
      {
        var Ry = [ [0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0] ]; // Create an initialized 3 x 3 rotation matrix.
                           
        Ry[0][0] = Math.cos( sign*dTheta );
        Ry[0][1] = 0; // Redundant but helps with clarity.
        Ry[0][2] = Math.sin( sign*dTheta );
        Ry[1][0] = 0; 
        Ry[1][1] = 1;
        Ry[1][2] = 0; 
        Ry[2][0] = -Math.sin( sign*dTheta );
        Ry[2][1] = 0; 
        Ry[2][2] = Math.cos( sign*dTheta );
        
        multipleMat(Ry,ArryXYZ,Axis,AxisZ); // If P is the set of surface points, then this method performs the matrix multiplcation: Rx * P
   
      erase(); // Note that one could use two canvases to speed things up, which also eliminates the need to erase.
Axe="y";    

SumdThetaY=parseFloat(SumdThetaY)+(sign)*parseFloat(dTheta);
SumdThetaTY=parseFloat(SumdThetaY *180/ Math.PI);
if(Math.abs(parseFloat(SumdThetaTY))>parseFloat(360)){SumdThetaY=0;}
if(Math.abs(parseFloat(SumdThetaTY))>parseFloat(360)){SumdThetaTY=parseFloat(SumdThetaTY)-parseFloat(360);}
  draw(Axe);

      }
 
      // -----------------------------------------------------------------------------------------------------
         
        function zRotate(sign,ArryXYZ,Axis,AxisZ)
      /*
        Assumes "sign" is either 1 or -1, which is used to rotate the surface "clockwise" or "counterclockwise".
      */      
      {
        var Rz = [ [0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0] ]; // Create an initialized 3 x 3 rotation matrix.
                           
        Rz[0][0] = Math.cos( sign*dTheta );
        Rz[0][1] = -Math.sin( sign*dTheta );        
        Rz[0][2] = 0; // Redundant but helps with clarity.
        Rz[1][0] = Math.sin( sign*dTheta );
        Rz[1][1] = Math.cos( sign*dTheta );
        Rz[1][2] = 0;
        Rz[2][0] = 0
        Rz[2][1] = 0;
        Rz[2][2] = 1;
        
        multipleMat(Rz,ArryXYZ,Axis,AxisZ); // If P is the set of surface points, then this method performs the matrix multiplcation: Rx * P
       erase(); // Note that one could use two canvases to speed things up, which also eliminates the need to erase.
       draw(ArryXYZ);
      }
function xRotateZaxis(sign,Zaxis)
      /*
        Assumes "sign" is either 1 or -1, which is used to rotate the surface "clockwise" or "counterclockwise".
      */
      {
        var Rx = [ [0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0] ]; // Create an initialized 3 x 3 rotation matrix.
                           
        Rx[0][0] = 1;
        Rx[0][1] = 0; // Redundant but helps with clarity.
        Rx[0][2] = 0; 
        Rx[1][0] = 0; 
        Rx[1][1] = Math.cos( sign*1.5708 );
        Rx[1][2] = -Math.sin( sign*1.5708 );
        Rx[2][0] = 0; 
        Rx[2][1] = Math.sin( sign*1.5708 );
        Rx[2][2] = Math.cos( sign*1.5708 );
Protate2Z=multiplyMatrix(Rx,Zaxis)
//return Protate2Z;
      //multipleMat(Rx,ArryXYZ,Axis); // If P is the set of surface points, then this method performs the matrix multiplcation: Rx * P
        //erase(); // Note that one could use two canvases to speed things up, which also eliminates the need to erase.

     //draw(ArryXYZ);
      }
function closeColor()
{if(document.getElementById('id_divEditeLegColor'))
{document.getElementById('id_divEditeLegColor').parentNode.removeChild(document.getElementById('id_divEditeLegColor'));}
}
function clickDivColor3dt(elem)
{


var bbox = elem.getBoundingClientRect();
	     //set position 
	    var body = document.body
	    var docElem = document.documentElement
	     //get prokrutka
	    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
	    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
	     //get sdvig
	    var clientTop = docElem.clientTop || body.clientTop || 0
	    var clientLeft = docElem.clientLeft || body.clientLeft || 0
	     
	    var topTop  = bbox.top +  scrollTop - clientTop
	    var leftLeft = bbox.left + scrollLeft - clientLeft
  
	//var bgColor=document.getElementById("external_control2").style.background;
var DivEditeLeg=document.createElement("div");
DivEditeLeg.id="id_divEditeLegColor";
DivEditeLeg.innerHTML='<div id="id_divColorc" style="background:#97d9e0; color:#0000ff;width:380px;z-index: 300002;height:40px;position:absolute;left:'+Math.round(leftLeft+10)+'px;top:'+Math.round(topTop+10)+
'px;overflow:hidden; border: 1px solid black;"><img onclick="closeColor()" src="openlayers/theme/default/img/close.gif" style="position:relative; top:5px;float:right; cursor:pointer"><a style="position:relative; top:20px"></a><div id="paletteC"></div></div>';
if(!document.getElementById("id_divEditeLegColor"))
{body.appendChild(DivEditeLeg);drawPalettet(elem); }

}
function drawPalettet(elem) {var out = "";
	for (var i = 0; i < 360; i++) {
		out += "<div id='id_palettcolortable_"+i+"' onclick='selectColor(this);' style='background-color:" + HSLToRGB(i, 100, 100) + "'><\/div>";
	}	document.getElementById("paletteC").innerHTML = out;


for(var i = 0; i < 360; i++)
{document.getElementById("id_palettcolortable_"+i).onclick=function(){var nelem=elem;selectColor(this,nelem);}}

//document.getElementById("id_palettcolortable").onclick=function(){var nelem=elem;selectColor(this,nelem);}
}
function selectColor(div,nelem) {
	colorElemWin = div.style.backgroundColor;
	colorElemWin = rgbNormal(colorElemWin);
nelem.style.background=colorElemWin; 
nelem.tempColorGIS=colorElemWin;
}

function rgbNormal(color) {
	color = color.toString();
	var re = /rgb\((.*?)\)/i;
	if(re.test(color)) {
		compose = RegExp.$1.split(",");
		var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		var result = "#";	for (var i = 0; i < compose.length; i++) {
			rgb = parseInt(compose[i]);result += hex[parseInt(rgb / 16)] + hex[rgb % 16];
		}
		return result;
	} else return color;
}
function HSLToRGB(Hue, Saturation, Luminance) {
	var R, G, B;
	var nH, nS, nL;
	var nF, nP, nQ, nT;
	var lH;
	if (Saturation > 0) {
		nH = Hue / 60;nL = Luminance / 100;nS = Saturation / 100;
		
		lH = parseInt(nH);	nF = nH - lH;nP = nL * (1 - nS);
		nQ = nL * (1 - nS * nF);nT = nL * (1 - nS * (1 - nF));
		switch (lH) {
			case 0:
				R = nL * 255;G = nT * 255;B = nP * 255;
			break;
			case 1:
				R = nQ * 255;G = nL * 255;B = nP * 255;
			break;
			case 2:
				R = nP * 255;G = nL * 255;B = nT * 255;
			break;
			case 3:
				R = nP * 255;G = nQ * 255;B = nL * 255;
			break;
			case 4:
				R = nT * 255;G = nP * 255;B = nL * 255;
			break;
			case 5:
				R = nL * 255;G = nP * 255;B = nQ * 255;
			break;
		}
	} else {
		R = (Luminance * 255) / 100;	G = R;B = R;
	}
	return RGBToLongSafe(R, G, B);
}
	
function RGBToLongSafe(R, G, B) {
	R = parseInt(xLimit(R, 0, 255));
	G = parseInt(xLimit(G, 0, 255));
	B = parseInt(xLimit(B, 0, 255));
	return decToHex([R,G,B]);
}
function decToHex(decArray) {
	var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	var out = "#";	for (var i = 0; i < decArray.length; i++) {
		dec = parseInt(decArray[i]);out += hex[parseInt(dec / 16)] + hex[dec % 16];
	}
	return out;
}
	
function xLimit(Value, Lower, Higher) {
	if (Value < Lower) Value = Lower;
	if (Value > Higher) Value = Higher;
	return Value;
}

function Change3dclassification()
{

if(document.getElementById('Id_Chart3dClass_inputs'))
{document.getElementById('Id_Chart3dClass_inputs').parentNode.removeChild(document.getElementById('Id_Chart3dClass_inputs'));}
if(document.getElementById("Id_Chart3dClass_GIS"))
{var count=document.getElementById("Id_Chart3dClass_GIS").value;
var max=document.getElementById("Id_Chart3dClassMax_GIS").innerHTML;
var min=document.getElementById("Id_Chart3dClassMin_GIS").innerHTML;
var dopstv=(max-min)/(count);

}
var arrayclass=document.createElement('div');
arrayclass.id="Id_Chart3dClass_inputs";
document.getElementById('id_Chart3dbutton_GIS').appendChild(arrayclass);
for(var i=0;i<count;i++)
      {
           var inputv=this.document.createElement('input');
inputv.type='text';
inputv.size="4";
inputv.id="IdChart3dClass_"+i+"_1";inputv.value=parseFloat(min)+dopstv*i;
var inputv2=this.document.createElement('input');
inputv2.type='text';
inputv2.size="4"
inputv2.id="IdChart3dClass_"+i+"_2";inputv2.value=parseFloat(inputv.value)+dopstv;
var inputva=this.document.createElement('a');
 inputva.innerHTML="from ";
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputva);
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputv);
var inputva=this.document.createElement('a');
 inputva.innerHTML="to ";
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputva);
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputv2);
var inputDiv=this.document.createElement('div');
inputDiv.id="IdChart3dClassDivColor_"+i;
inputDiv.style.width="10px";
inputDiv.style.height="10px";
inputDiv.onclick=function(){clickDivColor3dt(this);}
inputDiv.style.border="1px double black";
inputDiv.style.cursor="pointer";
inputDiv.style.background="#bbbbbb";

var inputvS=this.document.createElement('a');
 inputvS.innerHTML=" size ";
var inputvSize=this.document.createElement('input');
inputvSize.type='text';
inputvSize.size="3";
inputvSize.value="2";
inputvSize.id="IdChart3dLabSize_"+i;
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputvS);
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputvSize);
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputDiv);
var br1=this.document.createElement('br');

document.getElementById("Id_Chart3dClass_inputs").appendChild(br1);
     }
var inputvApl=this.document.createElement('input');
inputvApl.type='button';
inputvApl.value="Apply Legend";
inputvApl.onclick=function(){ApplyLegend3d();};
document.getElementById("Id_Chart3dClass_inputs").appendChild(inputvApl);
}

function ApplyLegend3d()
{
Legend3dObj=[];
var count=document.getElementById("Id_Chart3dClass_GIS").value;
for(var i=0;i<count;i++)
      { 
var legobj={};
 legobj.from=document.getElementById("IdChart3dClass_"+i+"_1").value;
legobj.to=document.getElementById("IdChart3dClass_"+i+"_2").value;
if(!document.getElementById("IdChart3dClassDivColor_"+i).tempColorGIS)
{document.getElementById("IdChart3dClassDivColor_"+i).tempColorGIS="#bbbbbb";}
legobj.background=document.getElementById("IdChart3dClassDivColor_"+i).tempColorGIS;


legobj.size=document.getElementById("IdChart3dLabSize_"+i).value;
Legend3dObj.push(legobj)

              }
rtt=Legend3dObj;
var Zobj={}
Zobj.backgr="#000000";
Zobj.size="2";
arrayFeatZcolor=[];
arrayFeatZIshod=[];
var arrayFeatIs=edilayerMainLayer.features;
if(document.getElementById("classFunCountCheck3d")&&arrayFeatZfunc.length>0)
{arrayFeatIs=arrayFeatZfunc;}
var fieldZvalueZClassification=document.getElementById("Id_Chart3dClassZlabel_GIS").value;
if(document.getElementById("classFunCountCheck3d").checked==true)
{ApplyChart();}
for(var s=0; s<arrayFeatIs.length;s++)
{arrayFeatZIshod.push(parseFloat(arrayFeatIs[s].attributes[fieldZvalueZClassification]));}
if(Legend3dObj&&Legend3dObj.length>0)
{
for(var g=0;g<arrayFeatZIshod.length;g++)
{var Zobj={};Zobj.backgr="#000000";Zobj.size="2";
  for(var ll=0; ll<Legend3dObj.length;ll++)
{
if(arrayFeatZIshod[g]<parseFloat(Legend3dObj[ll].to)&&arrayFeatZIshod[g]>=parseFloat(Legend3dObj[ll].from))
{Zobj.backgr=Legend3dObj[ll].background;Zobj.size=Legend3dObj[ll].size;}}arrayFeatZcolor.push(Zobj);}

}
erase();
draw();
}
function Change3dClassZlabel()
{
var arrayFeat=edilayerMainLayer.features;
var fieldZ=document.getElementById("Id_Chart3dClassZlabel_GIS").value;

var minDistC = parseFloat(arrayFeat[0].attributes[fieldZ]);
            var  maxDistC = parseFloat(minDistC) ;
           for (ia = 1; ia <  arrayFeat.length; ++ia) { var NumSS=arrayFeat[ia].attributes[fieldZ];
           if (NumSS>parseFloat(maxDistC) ) maxDistC =  parseFloat(NumSS);
           if( NumSS<parseFloat(minDistC) ) minDistC  = parseFloat(NumSS);    }


document.getElementById("Id_Chart3dClassMax_GIS").innerHTML=maxDistC;
document.getElementById("Id_Chart3dClassMin_GIS").innerHTML=minDistC;

}


function ApplyChart(myWinSsqlBioTable_Layer,sqlFeatures,fieldSel)
{
var start = performance.now();

SumdTheta=0; // angle for 3d rad
SumdThetaT=0 // angle for 3d grad
SumdThetaY=0; // angle for 3d rad
SumdThetaTY=0 // angle for 3d grad

arrayFeatZfunc=[];
var fieldSel=document.getElementById('fieldChartY').value;
var fieldSel2=document.getElementById('fieldChartX').value;
var fieldZ=document.getElementById('fieldChartZ').value;
var arrayFeat=edilayerMainLayer.features;
var formatArF = new OpenLayers.Format.GeoJSON({});var jsonstrAF=formatArF.write(arrayFeat);arrayFeat=formatArF.read(jsonstrAF); 
if(document.getElementById('id_IntervalXs').value!=="0"&&document.getElementById('id_IntervalXs').value!=="")
{ var newarrayFeatsx=[];var ArrayFeaturesbx=[];var sumEl=0;
var minDistC = parseFloat(arrayFeat[0].attributes[fieldSel2]);
 var maxDistC = parseFloat(minDistC) ;
 for (ia = 1; ia < arrayFeat.length; ++ia) { var NumSS=arrayFeat[ia].attributes[fieldSel2];
 if (NumSS>parseFloat(maxDistC) ) {maxDistC = parseFloat(NumSS);}
 if( NumSS<parseFloat(minDistC) ) {minDistC = parseFloat(NumSS);}
 }
 var cenInt=maxDistC/parseFloat(document.getElementById('id_IntervalXs').value);
 for(var x0=minDistC;x0<=maxDistC;x0=x0+cenInt)
{sumEl=0;for(var x=0;x<arrayFeat.length;x++)
{
if(parseFloat(arrayFeat[x].attributes[fieldSel2])>=x0&&parseFloat(arrayFeat[x].attributes[fieldSel2])<(x0+cenInt))
{sumEl=sumEl+parseFloat(arrayFeat[x].attributes[fieldSel]);}
}
newarrayFeatsx.push([sumEl,x0+cenInt]);
}

for(var ti=0;ti<newarrayFeatsx.length;ti++)
{var pointsbx=new OpenLayers.Geometry.Point(0, 0);
var first_point= new OpenLayers.Feature.Vector(pointsbx);
first_point.attributes=JSON.parse(JSON.stringify(arrayFeat[0].attributes));first_point.attributes[fieldSel2]=newarrayFeatsx[ti][1]; first_point.attributes[fieldSel]=newarrayFeatsx[ti][0];
ArrayFeaturesbx.push(first_point);};arrayFeat=ArrayFeaturesbx;
}
var tyTemp;
Legend3dObj= tyTemp;

// sort array Features by string is selected X is string
if(fieldZ==0){for(var x=0;x<arrayFeat.length;x++){
if(arrayFeat[x].attributes[fieldSel2]!==''){
if(typeof(arrayFeat[x].attributes[fieldSel2])=="string"&&isNaN(arrayFeat[x].attributes[fieldSel2]*1.0)==true){
arrayFeat.sort(function(a,b){ 
   if(a.attributes[fieldSel2] < b.attributes[fieldSel2]) 
      return -1 
   if(a.attributes[fieldSel2] > b.attributes[fieldSel2]) 
      return 1 
   return 0 
});
  } // end sort array Features by string is selected X is string
break; }}///end

for(var x=0;x<arrayFeat.length;x++){
if(arrayFeat[x].attributes[fieldSel2]!==''){
if(typeof(arrayFeat[x].attributes[fieldSel2])=="number"||isNaN(arrayFeat[x].attributes[fieldSel2]*1.0)!==true){ // sort array Features by string is selected X is number
arrayFeat.sort(function(a, b) {
    // Сортируем по преобразованному полю с датой 
    return (a.attributes[fieldSel2] - b.attributes[fieldSel2]) ;});
 }
break; }}///end

 var drawingCanvas0 = document.getElementById('id_canvas1Chart');
drawingCanvas0.style.display="none";}
if(fieldZ!=0)

{
if(document.getElementById("classFunCountCheck3d")&&document.getElementById("classFunCountCheck3d").checked==true)
{arrayFeat=[];
arrayFeatZfunc=[];

var strCalcFunc=document.getElementById("id_ValueFunction3d").value;
function3dG=strCalcFunc;
//var res = strCalcFunc.match(/.+/ig);
var ary=['abs','acos','asin','atan','atan2','exp','min','random','sqrt','log','round','floor','ceil','sin','cos','tan','pow','max'];
for(var nm=0;nm<ary.length;nm++)
{var regC = new RegExp(ary[nm], 'ig'); 
strCalcFunc=strCalcFunc.replace(regC,'Math.'+ary[nm]);
}
var res= strCalcFunc.match(/\([^(]*?\)\^[0-9]*/ig); 
rtt=res;
//alert("fgh");
var strCalcFunc2=strCalcFunc;
if(res)
{

for(it=0;it<res.length;it++){
var tempstr1=res[it].split('^')[0];
var tempstr2=res[it].split('^')[1];
var regC2 = new RegExp(res[it], 'ig');
//rtt=regC2;alert("stop1");
strCalcFunc2=strCalcFunc2.replace(res[it],'Math.pow('+tempstr1+','+tempstr2+')'); 
}
}
//strCalcFunc=strCalcFunc.replace(regC,'pow'+regC);
var regC3 = new RegExp('x', 'ig'); 
strCalcFunc2=strCalcFunc2.replace(regC3,'kl');
var regC3 = new RegExp('y', 'ig'); 
strCalcFunc2=strCalcFunc2.replace(regC3,'kl2');
strCalcFunc=strCalcFunc2;
rtt=strCalcFunc;

//alert("stop");

for(var kl=parseFloat(document.getElementById("id_classFunCount2").value);kl<=parseFloat(document.getElementById("id_classFunCount").value);kl++){
for(var kl2=parseFloat(document.getElementById("id_classFunCount2").value);kl2<=parseFloat(document.getElementById("id_classFunCount").value);kl2++){
//alert(kl+"  "+kl2+" "+strCalcFunc);
var attributes={};attributes.attributes={};attributes.attributes[fieldZ]=eval(strCalcFunc);

//alert(attributes.attributes[fieldZ]);
//if(isNaN((4*Math.sin(Math.sqrt(parseFloat(kl)*parseFloat(kl) + kl2*kl2)))/(Math.sqrt(kl*kl + kl2*kl2)))){alert(Math.sin(Math.sqrt(parseFloat(kl)*parseFloat(kl) + kl2*kl2)));alert((Math.sqrt(kl*kl + kl2*kl2)));alert("kl "+kl+"kl2 "+kl2);}
attributes.attributes[fieldSel]=kl2;
attributes.attributes[fieldSel2]=kl;
arrayFeat.push(attributes);arrayFeatZfunc.push(attributes);}}
rtt=arrayFeat;
//alert("ghh");
}


Protate=[];
Protate2=[];
Protate2Z=[];
var arrayFeatZ=[];
arrayFeatZIshod=[];


var arrayFeatY1=[];//for 3d
var arrayFeatX1=[];
var arrayFeatXYZ=[];

 var drawingCanvas3d = document.getElementById('id_canvas1Chart');
arrayFeatZcolor=[];

var minDistC = parseFloat(arrayFeat[0].attributes[fieldSel]);var minDistCx = parseFloat(arrayFeat[0].attributes[fieldSel2]);var minDistCz = parseFloat(arrayFeat[0].attributes[fieldZ]);
            var  maxDistC = parseFloat(minDistC) ;var  maxDistCx = parseFloat(minDistCx) ;var  maxDistCz = parseFloat(minDistCz) ;
           for (ia = 1; ia <  arrayFeat.length; ++ia) { var NumSS=arrayFeat[ia].attributes[fieldSel];var NumSSx=arrayFeat[ia].attributes[fieldSel2];var NumSSz=arrayFeat[ia].attributes[fieldZ];
           if (NumSS>parseFloat(maxDistC) ) maxDistC =  parseFloat(NumSS);
           if( NumSS<parseFloat(minDistC) ) minDistC  = parseFloat(NumSS);   
           if (NumSSx>parseFloat(maxDistCx) ) maxDistCx =  parseFloat(NumSSx);
           if( NumSSx<parseFloat(minDistCx) ) minDistCx  = parseFloat(NumSSx); 
           if (NumSSz>parseFloat(maxDistCz) ) maxDistCz =  parseFloat(NumSSz);
           if( NumSSz<parseFloat(minDistCz) ) minDistCz  = parseFloat(NumSSz); 

 }
var cen3d=(maxDistC-minDistC)/(drawingCanvas3d.height/2);var cen3dx=(maxDistCx-minDistCx)/(drawingCanvas3d.width/2);
var cen3dz=(maxDistCz-minDistCz)/(drawingCanvas3d.height/2);var valdel=drawingCanvas3d.height/2;
for(var s=0; s<arrayFeat.length;s++)
{//var attributes={};attributes.attributes={};attributes.attributes[fieldSel]=arrayFeat[s].attributes[fieldSel];
//attributes.attributes["CountAtlT"]=0;
//attributes.attributes[fieldSel]=arrayFeat[s].attributes[fieldSel];
var yi=(maxDistC-parseFloat(arrayFeat[s].attributes[fieldSel]))/cen3d;
yi=(drawingCanvas3d.height/2)-yi;
arrayFeatY1.push(yi);
var xi=(maxDistCx-parseFloat(arrayFeat[s].attributes[fieldSel2]))/cen3dx;
xi=(drawingCanvas3d.width/2)-xi;
arrayFeatX1.push(xi);

var zi=(maxDistCz-parseFloat(arrayFeat[s].attributes[fieldZ]))/cen3dz;
var Zobj={}

//Zobj.Z=zi;
Zobj.backgr="#000000";
Zobj.size="2";
arrayFeatZcolor.push(Zobj);
//arrayFeatZ.push(arrayFeat[s].attributes[fieldZ]);
zi=(valdel)-zi;
arrayFeatZ.push(zi);
arrayFeatZIshod.push(parseFloat(arrayFeat[s].attributes[fieldZ]));
//arrayFeatY1.push(arrayFeat[s].attributes[fieldSel]);
}

//arrayFeatY1.reverse();
var end =  performance.now()  // log end timestamp
var diff = end - start;console.log("time1:"+diff);
//arrayFeatXYZ=[arrayFeatX1,arrayFeatY1,arrayFeatZ];
//arrayFeatX1.reverse();


arrayFeatXYZ[0]=[];
arrayFeatXYZ[1]=[];
arrayFeatXYZ[2]=[];
arrayFeatXYZ[0]=arrayFeatX1;
arrayFeatXYZ[1]=arrayFeatY1;
arrayFeatXYZ[2]=arrayFeatZ;

 var myWinChartKV=window;
 var drawingCanvas0 = myWinChartKV.document.getElementById('id_canvas1Chart');
if(drawingCanvas0.style.display=="none")
{drawingCanvas0.style.display="block";}

var context = drawingCanvas0.getContext('2d');
drawingCanvas0.width= drawingCanvas0.width;
context.translate(drawingCanvas0.width/2, drawingCanvas0.height/2); 



}
        

if(fieldZ!=0)

{
if(document.getElementById('id_Chart3dbutton_GIS'))
{document.getElementById('id_Chart3dbutton_GIS').parentNode.removeChild(document.getElementById('id_Chart3dbutton_GIS'));}
var buttonArray=this.document.createElement('div');
buttonArray.id="id_Chart3dbutton_GIS";


document.getElementById('id_ChartBlock').appendChild(buttonArray);
var ButtonRot=this.document.createElement('input');
ButtonRot.type='button';
ButtonRot.id="id_Chart3dX_GIS"
ButtonRot.value='X+';
var myWinChartKV=window;
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(ButtonRot);
Protate=arrayFeatXYZ;


Protate2=[[0,drawingCanvas0.width/2,drawingCanvas0.width/2],[drawingCanvas0.height/2,0,drawingCanvas0.height/2],[0,0,0]];
Protate2Z=[[0,drawingCanvas0.width/2],[drawingCanvas0.height/2,0],[0,0]];
xRotateZaxis(parseInt(1),Protate2Z);
rtt=Protate2Z;
//alert("fff");
ButtonRot.onclick=function(){xRotate(parseInt(1),Protate,Protate2,Protate2Z)}

var ButtonRotXminus=this.document.createElement('input');
ButtonRotXminus.type='button';
ButtonRotXminus.value='X-';
var myWinChartKV=window;
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(ButtonRotXminus);
ButtonRotXminus.onclick=function(){xRotate(parseInt(-1),Protate,Protate2,Protate2Z)}
var br1=this.document.createElement('br');
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(br1);

var ButtonRotY=this.document.createElement('input');
ButtonRotY.type='button';
ButtonRotY.value='Y+'
var myWinChartKV=window;
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(ButtonRotY);
ButtonRotY.onclick=function(){yRotate(parseInt(1),Protate,Protate2,Protate2Z)}

var ButtonRotY2=this.document.createElement('input');
ButtonRotY2.type='button';
ButtonRotY2.value='Y-'
var myWinChartKV=window;
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(ButtonRotY2);
ButtonRotY2.onclick=function(){yRotate(parseInt(-1),Protate,Protate2,Protate2Z)}
var br1=this.document.createElement('br');
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(br1);

var ButtonRotZ=this.document.createElement('input');
ButtonRotZ.type='button';
ButtonRotZ.value='Z+'
var myWinChartKV=window;
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(ButtonRotZ);
ButtonRotZ.onclick=function(){zRotate(parseInt(1),Protate,Protate2,Protate2Z)}

var ButtonRotZ2=this.document.createElement('input');
ButtonRotZ2.type='button';
ButtonRotZ2.value='Z-'
var myWinChartKV=window;
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(ButtonRotZ2);
ButtonRotZ2.onclick=function(){zRotate(parseInt(-1),Protate,Protate2,Protate2Z)}
var br1=this.document.createElement('br');
 myWinChartKV.document.getElementById('id_Chart3dbutton_GIS').appendChild(br1);
var classN=this.document.createElement('select');
classN.id="Id_Chart3dClass_GIS";
classN.onchange=function(){Change3dclassification()};


var classNt=this.document.createElement('a');
classNt.innerHTML="number of classification";
document.getElementById('id_Chart3dbutton_GIS').appendChild(classN);
document.getElementById('id_Chart3dbutton_GIS').appendChild(classNt);
var tt2=document.createElement('option');tt2.value=0;tt2.text='.';
var classNZ=this.document.createElement('select');
classNZ.id="Id_Chart3dClassZlabel_GIS";
classNZ.onchange=function(){Change3dClassZlabel()};
document.getElementById("id_Chart3dbutton_GIS").appendChild(classNZ);
for(var ii=0; ii<=20;ii++)
{
  var tt2=document.createElement('option');tt2.value=ii;tt2.text=ii;
document.getElementById("Id_Chart3dClass_GIS").appendChild(tt2);
}
for (var ak in arrayFeat[0].attributes)
{
 var tt2=document.createElement('option');tt2.value=ak;tt2.text=ak;
document.getElementById("Id_Chart3dClassZlabel_GIS").appendChild(tt2);
if (ak==document.getElementById("fieldChartZ").value){tt2.selected=true;}
}
var classMint=this.document.createElement('a');
classMint.innerHTML="Min:";
document.getElementById('id_Chart3dbutton_GIS').appendChild(classMint);
var classMinV=this.document.createElement('a');
classMinV.id="Id_Chart3dClassMin_GIS";
var minDistC = parseFloat(arrayFeat[0].attributes[fieldZ]);
            var  maxDistC = parseFloat(minDistC) ;
           for (ia = 1; ia <  arrayFeat.length; ++ia) { var NumSS=arrayFeat[ia].attributes[fieldZ];
           if (NumSS>parseFloat(maxDistC) ) maxDistC =  parseFloat(NumSS);
           if( NumSS<parseFloat(minDistC) ) minDistC  = parseFloat(NumSS);    }

classMinV.innerHTML=minDistC;
document.getElementById('id_Chart3dbutton_GIS').appendChild(classMinV);
var classMaxt=this.document.createElement('a');
classMaxt.innerHTML="; Max:";
document.getElementById('id_Chart3dbutton_GIS').appendChild(classMaxt);
var classMinVmax=this.document.createElement('a');
classMinVmax.id="Id_Chart3dClassMax_GIS";
classMinVmax.innerHTML=maxDistC;
document.getElementById('id_Chart3dbutton_GIS').appendChild(classMinVmax);
var classFunkt=this.document.createElement('a');
classFunkt.innerHTML="     ||make chart with this 3d function:"
var classFunc=this.document.createElement('input');
classFunc.type="text";
classFunc.id="id_ValueFunction3d";
classFunc.size="35";
classFunc.title="In this inputbox you can insert function to draw 3d chart and then click the button Apply Legend.You can use mathematical functions: abs,acos,asin,atan,atan2,exp,min,random,sqrt,log,round,floor,ceil,sin,cos,tan,pow,max. sqrt is a square root.^- is exponentiation (power);For example, if x=2: (x)^2=4, sin(x)=0.909; Important: it's always necessary to use brackets when powering x or y. For example: (x)^2,(y)^3,(x+1)^4. Use the same way with other mathematical functions. For example: sin(x), cos((x+1)^2).";
classFunc.style.position='absolute';
classFunc.style.left='500px';
classFunc.style.top='737px';
if(function3dG)
{classFunc.value=function3dG;}
else{classFunc.value="(x)^2+(y)^2";}
var classFunktX=this.document.createElement('a');
classFunktX.innerHTML="Count by x and y axis:";
classFunktX.style.position='absolute';
classFunktX.style.left='500px';
classFunktX.style.top='770px';
var classFunktX2=this.document.createElement('a');
classFunktX2.innerHTML="start value x and y axis:";
classFunktX2.style.position='absolute';
classFunktX2.style.left='700px';
classFunktX2.style.top='770px';

var classFunCount2=this.document.createElement('input');
classFunCount2.type="text";
classFunCount2.value="-10";
classFunCount2.id="id_classFunCount2";
classFunCount2.size="4";
classFunCount2.style.position='absolute';
classFunCount2.style.left='700px';
classFunCount2.style.top='790px';

var classFunCount=this.document.createElement('input');
classFunCount.type="text";
classFunCount.value="10";
classFunCount.id="id_classFunCount";
classFunCount.size="4";
classFunCount.style.position='absolute';
classFunCount.style.left='500px';
classFunCount.style.top='790px';
var classFunCountCheck=this.document.createElement('input');
classFunCountCheck.type="checkbox";
classFunCountCheck.id="classFunCountCheck3d";
classFunCountCheck.style.position='relative';
classFunCountCheck.style.left='20px';
classFunCountCheck.title='check to compute function';
document.getElementById('id_Chart3dbutton_GIS').appendChild(classFunkt);
document.getElementById('id_Chart3dbutton_GIS').appendChild(classFunc);
document.getElementById('id_Chart3dbutton_GIS').appendChild(classFunktX);
document.getElementById('id_Chart3dbutton_GIS').appendChild(classFunCount);
document.getElementById('id_Chart3dbutton_GIS').appendChild(classFunktX2);
document.getElementById('id_Chart3dbutton_GIS').appendChild(classFunCount2);

document.getElementById('id_Chart3dbutton_GIS').appendChild(classFunCountCheck);
draw();
return;
}

document.getElementById('id_canvas1Chart').style.display="none";
document.getElementById('id_canvas1Chart').width= document.getElementById('id_canvas1Chart').width;
if(document.getElementById('id_Chart3dbutton_GIS'))
{document.getElementById('id_Chart3dbutton_GIS').parentNode.removeChild(document.getElementById('id_Chart3dbutton_GIS'));}

if(document.getElementById('id_repeatV').checked==true){
var arrayFeat3=[];
var arrayFeatY=[];


//arrayFeat2[0]=attributes;
//arrayFeat2=arrayFeat.slice(0); 
for(var s=0; s<arrayFeat.length;s++)
{var attributes={};attributes.attributes={};attributes.attributes[fieldSel2]=arrayFeat[s].attributes[fieldSel2];
attributes.attributes["CountAtlT"]=0;
attributes.attributes[fieldSel]=arrayFeat[s].attributes[fieldSel];arrayFeat3.push(attributes);}




var arrayFeat2=[]; 
//arrayFeat2= [].concat(arrayFeat);
for (var s=0; s<arrayFeat3.length;s++)
{var k=0;for (var ss=0; ss<arrayFeat3.length;ss++)
{if(arrayFeat3[s].attributes[fieldSel2]==arrayFeat3[ss].attributes[fieldSel2]&&s!==ss){arrayFeat3[ss].attributes[fieldSel2]='';}
}}
//count by Y
var k=0;
for (var s=0; s<arrayFeat3.length;s++)
{for (var ss=0; ss<arrayFeat3.length;ss++)
{if(arrayFeat3[s].attributes[fieldSel]==arrayFeat3[ss].attributes[fieldSel])
{var is_unique = true;for(var tt=0;tt<=arrayFeatY.length;tt++)
{if(arrayFeatY[tt]&&arrayFeatY[tt].attributes[fieldSel]==arrayFeat3[ss].attributes[fieldSel]){k++;arrayFeatY[tt].attributes["CountAtlT"]=k; is_unique=false;break;}}
      if(is_unique)
{k=1;arrayFeatY.push(arrayFeat3[ss]);rtt=arrayFeatY;}break;}
}}


/////

for(var f=0;f<arrayFeat3.length;f++)
{if(arrayFeat3[f].attributes[fieldSel2]==''){ continue}
else{arrayFeat2.push(arrayFeat3[f])}}



}// end // new array fpr repeat value X in one
if(document.getElementById('id_CorrRegV').checked==true){

if(document.getElementById("fieldChartX").value=="0"||document.getElementById("fieldChartY").value=="0")
{alert("select value");return;}
var countV1=0;var feat1='';
var mLayers=arrayFeat;
countV1=mLayers.length;feat1=mLayers;
if(isNaN(mLayers[0].attributes[document.getElementById("fieldChartY").value]*1)==true){alert("Error value is string");return;} 

var countV2=0;var feat2='';

countV2=mLayers.length;feat2=mLayers;
if(isNaN(mLayers[0].attributes[document.getElementById("fieldChartX").value]*1)==true){alert("Error value is string");return;} 
if(countV1!=countV2){alert("number of first value not equal number of second value");return;}

var mean1=0;var mean2=0; sumV1V2=0; squaredVal1=0;squaredVal2=0;
for (var i=0;i<feat1.length;i++)
{mean1+=parseFloat(feat1[i].attributes[document.getElementById("fieldChartY").value]);
sumV1V2+=parseFloat(feat1[i].attributes[document.getElementById("fieldChartY").value])*parseFloat(feat2[i].attributes[document.getElementById("fieldChartX").value]);
squaredVal1+=parseFloat(feat1[i].attributes[document.getElementById("fieldChartY").value])*parseFloat(feat1[i].attributes[document.getElementById("fieldChartY").value]);
mean2+=parseFloat(feat2[i].attributes[document.getElementById("fieldChartX").value]);
squaredVal2+=parseFloat(feat2[i].attributes[document.getElementById("fieldChartX").value])*parseFloat(feat2[i].attributes[document.getElementById("fieldChartX").value]);
}

mean1=mean1/feat1.length;
mean2=mean2/feat2.length;
sumV1V2=sumV1V2/feat1.length;
variance1=(squaredVal1/feat1.length)-(mean1*mean1);
variance2=(squaredVal2/feat1.length)-(mean2*mean2);
CoefCorr=(sumV1V2-(mean1*mean2))/ (Math.pow(variance1,0.5)*Math.pow(variance2,0.5));
//coeff regression
var b=(sumV1V2-(mean1*mean2))/variance2;
var a=mean1-b*mean2;
//document.getElementById("id_textCorrel").value='correlation coefficient: '+CoefCorr+'\n'+'variance1: '+variance1+'\n'+'variance2:' //+variance2+'\n'+'regression equation: //'+document.getElementById("CorrLayerValue1").value+'='+a+'+'+b+'*'+document.getElementById("CorrLayerValue2").value;




}


var myWinChartKV=window;
 var drawingCanvas0 = myWinChartKV.document.getElementById('id_canvas1Chart');
var context = drawingCanvas0.getContext('2d');
context.clearRect(0, 0, drawingCanvas0.width, drawingCanvas0.height);
context.lineWidth = 1.5;
          context.lineCap = 'butt';
        context.beginPath();
          context.moveTo(40, 0);
if(document.getElementById('fieldChartXColor').style.background=='#bbbbbb')
{context.strokeStyle=colorXmain;}
else{context.strokeStyle=document.getElementById('fieldChartXColor').tempColorGIS;}

   context.lineTo(40, 420);context.stroke();
context.beginPath();
context.strokeStyle=colorXmain;
if(document.getElementById('fieldChartYColor').style.background=='#bbbbbb')
{context.strokeStyle=colorXmain;}
else{context.strokeStyle=document.getElementById('fieldChartYColor').tempColorGIS;}
context.moveTo(40, 420);
    context.lineWidth = 1.5;
    context.lineTo(1000, 420);
     context.stroke();
context.strokeStyle=colorXmain;
////find min and max on charts
  var minDistC = parseFloat(arrayFeat[0].attributes[fieldSel]);
            var  maxDistC = parseFloat(minDistC) ;
           for (ia = 1; ia <  arrayFeat.length; ++ia) { var NumSS=arrayFeat[ia].attributes[fieldSel];
           if (NumSS>parseFloat(maxDistC) ) maxDistC =  parseFloat(NumSS);
           if( NumSS<parseFloat(minDistC) ) minDistC  = parseFloat(NumSS);
          }
//var cenDel=(maxDistC-minDistC)/(myWinChartKV.document.getElementById('id_canvas1Chart').height-20);
var cenDel=parseFloat((maxDistC-minDistC)/(440-20));

///mark axis Y
context.font = "bold 9px sans-serif";
context.textAlign = "right";
context.textBaseline = "bottom";
var YtextP1=(maxDistC-minDistC)/10;
for( var Yt=0;Yt<=11;Yt++){YtextP=(maxDistC-(minDistC+(YtextP1*Yt)))/cenDel
context.fillText((minDistC+(YtextP1*Yt)).toFixed(2), 40,YtextP+11);context.lineWidth=1;context.beginPath();context.moveTo(30,YtextP);context.lineTo(45,YtextP);context.stroke();}
//end mark axis Y
///mark axis X
var Xa=0 //mark spustja 3 interval
var arrayFeatForMarkX=[];
if(document.getElementById('id_repeatV').checked==true){arrayFeatForMarkX=arrayFeat2.slice(0);}
else{arrayFeatForMarkX=arrayFeat.slice(0);}

var LenX=(myWinChartKV.document.getElementById('id_canvas1Chart').width-30)/arrayFeatForMarkX.length;var AxY=440-10;
for(var i=0; i<arrayFeatForMarkX.length; i++)
{context.font = "bold 9px sans-serif";
context.textAlign = "right";
context.textBaseline = "bottom";
//var AxY=myWinChartKV.document.getElementById('id_canvas1Chart').height-10;


//LenX=LenX-0.35;
Xa=Xa+1;var TextMy1=arrayFeatForMarkX[i].attributes[fieldSel2];TextMy1=TextMy1.toString(); //var tAr=TextMy1.split(''); 
//var TextMy2=arrayFeat[i].attributes["Year"];
var interX=parseInt(document.getElementById('id_IntervalX').value);
if(Xa==0||Xa==interX||i==arrayFeatForMarkX.length-1)
{var NewAxY=AxY;context.save(); context.translate(parseFloat(LenX*i+40),NewAxY);context.rotate(-Math.PI/2);
context.fillText(TextMy1, 0, 0); 

//context.translate(parseFloat(LenX*i+40)/2,NewAxY*2);//context.rotate(inRadG(-90));
//context.rotate(0);
context.restore();
}
if(Xa==interX){Xa=0;}
context.lineWidth = 1;
context.beginPath()
//context.moveTo(LenX*i+30, myWinChartKV.document.getElementById('id_canvas1Chart').height-20);
context.moveTo(LenX*i+40, 440-20);
//context.lineTo(LenX*i+30, myWinChartKV.document.getElementById('id_canvas1Chart').height-24);context.stroke();}
context.lineTo(LenX*i+40, 440-24);context.stroke();}

////end mark axis X
var mapHtml='<map name="MapChartBioSvodTable">';
if(document.getElementById('fieldChartVColor').style.background=='#bbbbbb') 
{context.strokeStyle=colorXmain;}
else{context.strokeStyle=document.getElementById('fieldChartVColor').tempColorGIS;context.fillStyle=document.getElementById('fieldChartVColor').tempColorGIS;}

  if(document.getElementById('id_repeatV').checked==true){ var k=0;
    
if(document.getElementById('id_CorrRegV').checked==true)
{
var DivAreaLeg=document.createElement("textarea");
DivAreaLeg.id="id_correlDiv_textarea";
DivAreaLeg.style.width=250;
DivAreaLeg.style.height=80;
if(!document.getElementById("id_correlDiv_textarea")){document.getElementById("id_correlDiv").appendChild(DivAreaLeg);}
document.getElementById("id_correlDiv_textarea").value='correlation coefficient: '+CoefCorr+'\n'+'varianceY: '+variance1+'\n'+'varianceX:' +variance2+'\n'+'regression equation: '+document.getElementById("fieldChartY").value+'='+a+'+'+b+'*'+document.getElementById("fieldChartX").value;

var adCorr=a+b*parseFloat(arrayFeat[0].attributes[fieldSel2]);var NumberChartC=(maxDistC-adCorr)/parseFloat(cenDel);context.fillRect(LenX*0+40, NumberChartC, 3, 3);
context.beginPath();context.moveTo(LenX*0+40, NumberChartC);var adCorr2=a+b*parseFloat(arrayFeat[arrayFeat.length-1].attributes[fieldSel2]); 
var NumberChartC2=(maxDistC-adCorr2)/cenDel;
context.lineTo(LenX*((arrayFeat2.length-1))+40, NumberChartC2);context.stroke();}
    for(var hX=0; hX<arrayFeat2.length;hX++){

for(var h=0; h<arrayFeat.length;h++)
{  
   var ad=arrayFeat[h].attributes[fieldSel];
     if(arrayFeat[h+1]){ var ad2=parseFloat(arrayFeat[h+1].attributes[fieldSel]);}
     var NumberChart=(maxDistC-ad)/cenDel;
if(arrayFeat2[hX].attributes[fieldSel2]==arrayFeat[h].attributes[fieldSel2]){
//if(arrayFeat[h-1]&&arrayFeat[h-1].attributes[fieldSel2]==arrayFeat[h].attributes[fieldSel2])
for(var hjk=0; hjk<arrayFeatY.length;hjk++)
{if(arrayFeatY[hjk].attributes[fieldSel]==arrayFeat[h].attributes[fieldSel]){k=arrayFeatY[hjk].attributes["CountAtlT"]; if(k==0){k=1;}}}
     context.fillRect(LenX*hX+40, NumberChart, 3, 3);
mapHtml+='<area coords="'+parseFloat(LenX*hX+40)+','+NumberChart+',4" shape="circle" title="'+fieldSel2+' '+arrayFeat2[hX].attributes[fieldSel2]+':'+arrayFeat[h].attributes[fieldSel]+' count:'+k+'">';
context.lineWidth =1;/*context.beginPath();context.moveTo(LenX*h+40, NumberChart);if(ad2||ad2==0){var NumberChart2=(parseFloat(maxDistC)-parseFloat(ad2))/parseFloat(cenDel);context.lineTo(LenX*(h+1)+40, NumberChart2);}context.stroke();*/
   }//end if(arrayFeat2[hX].attributes[fieldSel2]==arrayFeat[h].attributes[fieldSel2]){

} //end for(var h=0; h<arrayFeat.length;h++);
    }/// end for(var hX=0; hX<arrayFeat2.length;hX++){
 
  }//end if(document.getElementById('id_repeatV').checked==true){ -svertka

else{
if(document.getElementById('id_CorrRegV').checked==true)
{
var DivAreaLeg=document.createElement("textarea");
DivAreaLeg.id="id_correlDiv_textarea";
DivAreaLeg.style.width=250;
DivAreaLeg.style.height=80;
if(!document.getElementById("id_correlDiv_textarea")){document.getElementById("id_correlDiv").appendChild(DivAreaLeg);}
document.getElementById("id_correlDiv_textarea").value='correlation coefficient: '+CoefCorr+'\n'+'varianceY: '+variance1+'\n'+'varianceX:' +variance2+'\n'+'regression equation: '+document.getElementById("fieldChartY").value+'='+a+'+'+b+'*'+document.getElementById("fieldChartX").value;

var adCorr=a+b*parseFloat(arrayFeat[0].attributes[fieldSel2]);var NumberChartC=(maxDistC-adCorr)/cenDel;context.fillRect(LenX*0+40, NumberChartC, 3, 3);
context.beginPath();context.moveTo(LenX*0+40, NumberChartC);var adCorr2=a+b*parseFloat(arrayFeat[arrayFeat.length-1].attributes[fieldSel2]); 
var NumberChartC2=(maxDistC-adCorr2)/cenDel;
context.lineTo(LenX*((arrayFeat.length-1))+40, NumberChartC2);context.stroke();}
for(var h=0; h<arrayFeat.length;h++)
{    var ad=arrayFeat[h].attributes[fieldSel];
     if(arrayFeat[h+1]){ var ad2=parseFloat(arrayFeat[h+1].attributes[fieldSel]);}
     var NumberChart=(maxDistC-ad)/cenDel;
if(document.getElementById("typeChartGis").value=='line')
{context.fillRect(LenX*h+40, NumberChart, 3, 3);} 


if(document.getElementById("typeChartGis").value=='line')
{mapHtml+='<area coords="'+parseFloat(LenX*h+40)+','+NumberChart+',4" shape="circle" title="'+fieldSel2+' '+arrayFeat[h].attributes[fieldSel2]+':'+arrayFeat[h].attributes[fieldSel]+'">';}

if(document.getElementById("typeChartGis").value=='bar_graph')
{mapHtml+='<area coords="'+parseFloat(LenX*h+40)+','+NumberChart+','+parseFloat(LenX*(h+1)+40)+',420" shape="rect" title="'+fieldSel2+' '+arrayFeat[h].attributes[fieldSel2]+':'+arrayFeat[h].attributes[fieldSel]+'">';}
if(document.getElementById("typeChartGis").value=='line')
{context.lineWidth =1;context.beginPath();context.moveTo(LenX*h+40, NumberChart);if(ad2||ad2==0){var NumberChart2=(parseFloat(maxDistC)-parseFloat(ad2))/cenDel;if(h!=arrayFeat.length-1){context.lineTo(LenX*(h+1)+40, NumberChart2);}}context.stroke();}
if(document.getElementById("typeChartGis").value=='bar_graph')
{if(ad2||ad2==0)
{
var NumberChart2=(parseFloat(maxDistC)-parseFloat(ad2))/cenDel;
}
var ghj=(440-24-NumberChart); if(ghj<0){ghj=0;}
context.fillRect((LenX*h+40), NumberChart, (LenX*(h+1)+40-(LenX*h+40)), ghj);
context.strokeStyle='#bbbbbb';context.strokeRect((LenX*h+40), NumberChart, (LenX*(h+1)+40-(LenX*h+40)), ghj);
}
} //end for(var h=0; h<arrayFeat.length;h++);
  }//end else if(document.getElementById('id_repeatV').checked==true){ -svertka
mapHtml+='</map>';
var strDataURI = drawingCanvas0.toDataURL();
//myWinChartKV.document.getElementById('id_canvas1Chart').parentNode.removeChild(myWinChartKV.document.getElementById('id_canvas1Chart'));
//rtt=strDataURI;
//alert("vot");
var NewMapChartImage=this.document.createElement('div');
NewMapChartImage.id='id_NewMapChartImage';
NewMapChartImage.innerHTML=mapHtml;
if(myWinChartKV.document.getElementById('id_NewMapChartImage'))
{myWinChartKV.document.getElementById('id_NewMapChartImage').parentNode.removeChild(myWinChartKV.document.getElementById('id_NewMapChartImage'));}
myWinChartKV.document.getElementById('id_ChartBlock').appendChild(NewMapChartImage);

var NewChartImage=this.document.createElement('img');
 NewChartImage.id='id_ NewChartImage';
NewChartImage.src=strDataURI;
NewChartImage.setAttribute("usemap", '#MapChartBioSvodTable');
if(myWinChartKV.document.getElementById('id_ NewChartImage'))
{myWinChartKV.document.getElementById('id_ NewChartImage').parentNode.removeChild(myWinChartKV.document.getElementById('id_ NewChartImage'));}
myWinChartKV.document.getElementById('id_ChartBlock').appendChild(NewChartImage);
document.getElementById("table").style.top="550px"





}



///////////////end Chart
function OverTableMnu(row)
{ row.style.backgroundColor='#F2FAC8';}
function OutTableMnu(row)
{row.style.backgroundColor='#E5FB71';
/*if(document.getElementById("select_feat_map_id").checked==true)
{
edilayerMainLayer.selectedFeatures=[];edilayerMainLayer.redraw();
}*/
}
function clickTableMnu(row)
{row.style.backgroundColor='#B9D046';
if(document.getElementById("select_feat_map_id").checked==true)
{var ind=0;var indtrue=0;for (var i=0; i<edilayerMainLayer.selectedFeatures.length;i++)
{edilayerMainLayer.selectedFeatures[i].renderIntent="default";};edilayerMainLayer.selectedFeatures=[];
 for (var i=0; i<edilayerMainLayer.features.length; i++)
                  {indtrue=0; for (var a in edilayerMainLayer.features[i].attributes)
                       {if(edilayerMainLayer.features[i].attributes[a]+" "==row.cells[ind].innerHTML+" ")
                       {indtrue++;}else{indtrue=0;}
                       ind++;
                                 }      
                                 if(indtrue==ind){edilayerMainLayer.features[i].renderIntent="select";edilayerMainLayer.selectedFeatures.push(edilayerMainLayer.features[i]);};ind=0; indtrue=0;
                            }edilayerMainLayer.redraw();
}
}
function OpenTable()
{
var urlText='';




var tableString;
tableString='<table width="10%" border="1" cellspacing="0" cellpadding="1"><tr align="center" bgcolor="#FFDB73" style="color:#000000">';

//alert( arrFeaturesTable[0].childNodes.length); 
if(urlText=='')
{ 
if(document.getElementById("sortA").checked==true)
 {if(document.getElementById("pFieldTable").value!=0){           var DistArr=[]; var oj = []; //oj - array  including sort features
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ DistArr.push(parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))}
DistArr.sort(function(a,b){return a-b;});
rtt=DistArr;

l=0;
for (var j=0;j<DistArr.length;j++) 
{
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ //alert(DistArr[j]+"   "+edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value])
if(DistArr[j]==parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))
{ var sdf=0; for(var k=0;k<oj.length;k++){ if(oj[k].id==edilayerMainLayer.features[jk].id){sdf=1;}} if(sdf==0){oj[l]=edilayerMainLayer.features[jk];l++;             }    }
    }

}
                     }/// end if(document.getElementById("pFieldTable").value!=0
}
///////////// end if sortA

if(document.getElementById("sortD").checked==true)
 {if(document.getElementById("pFieldTable").value!=0){           var DistArr=[]; var oj = []; //oj - array  including sort features
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ DistArr.push(parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))}
DistArr.sort(function(a,b){return a-b;});
DistArr.reverse();
rtt=DistArr;

var oj = [];l=0;
for (var j=0;j<DistArr.length;j++) 
{
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ //alert(DistArr[j]+"   "+edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value])
if(DistArr[j]==parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))
{ var sdf=0; for(var k=0;k<oj.length;k++){ if(oj[k].id==edilayerMainLayer.features[jk].id){sdf=1;}} if(sdf==0){oj[l]=edilayerMainLayer.features[jk];l++;             }    }
    }

}
                       }/// end if(document.getElementById("pFieldTable").value!=0
}
////////// end if sortD
var CountfeatureTable=edilayerMainLayer.features.length;
var cc=document.getElementById("pCount").value;
if(document.getElementById("pCount").value!="All")
{if(edilayerMainLayer.features.length>=parseFloat(cc)){CountfeatureTable=parseFloat(document.getElementById("pCount").value)}}

for (var ak in edilayerMainLayer.features[0].attributes)
    {tableString+='<td id="tableWebGIS14'+ak+'" title="click to sort" style="font-size: 80%; font-family: sans-serif;cursor:pointer">'+ak+'</td>';}
          tableString+='</tr>';
for (var jk=0;jk<CountfeatureTable;jk++) {tableString+='<tr align="center" bgcolor="#E5FB71" style="color:#000000" onmouseover=OverTableMnu(this); onmouseout=OutTableMnu(this);onclick=function(){clickTableMnu(this)};>';
for (var ak in edilayerMainLayer.features[jk].attributes)
{     if (forEdit!=1)
      {if(document.getElementById("sortA").checked==true || document.getElementById("sortD").checked==true) {tableString+='<td style="font-size: 60%; font-family: sans-serif">'+oj[jk].attributes[ak]+'</td>';} else {tableString+='<td style="font-size: 60%; font-family: sans-serif">'+edilayerMainLayer.features[jk].attributes[ak]+'</td>';}} else
{  if(document.getElementById("sortA").checked==true || document.getElementById("sortD").checked==true){for(var k=0;k<oj.length;k++){ if(oj[jk].id==edilayerMainLayer.features[k].id){tableString+='<td style="font-size: 60%; font-family: sans-serif">'+ '<textarea style="height:20px; width:100px" id='+k+'_'+ak+' value="'+oj[jk].attributes[ak]+'">'+oj[jk].attributes[ak]+'</textarea><div title="add image or video" onclick="addtableimage(this)" style="float:right; cursor:pointer;width: 20px; height: 15px;background:#0000ff"></div></td>';}}} else {    tableString+='<td style="font-size: 60%; font-family: sans-serif">'+ '<textarea style="height:20px; width:100px" id='+jk+'_'+ak+' value="'+edilayerMainLayer.features[jk].attributes[ak]+'" >'+edilayerMainLayer.features[jk].attributes[ak]+'</textarea><div title="add image or video" onclick="addtableimage(this)" style="float:right; cursor:pointer;width: 20px; height: 15px;background:#0000ff"></div></td>';}    }
       }tableString+='</tr>';}
tableString+='</tr>';
tableString+='</table>';
//alert(tableString);
document.getElementById("table").innerHTML=tableString;       
for (var ig in edilayerMainLayer.features[0].attributes)
{document.getElementById("tableWebGIS14"+ig).onclick=function(){clickOnColumnTable(this);}
}

        } ///end else if (arrFeaturesTable[0])
}
function addtableimage(e)
{ var td=e; 
var bbox = e.getBoundingClientRect();
 var body = document.body
 var docElem = document.documentElement
 var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
 var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
 var clientTop = docElem.clientTop || body.clientTop || 0
 var clientLeft = docElem.clientLeft || body.clientLeft || 0
 var topTop = bbox.top + scrollTop - clientTop
 var leftLeft = bbox.left + scrollLeft - clientLeft
var DivEditeLeg=document.createElement("div");
DivEditeLeg.id="id_divTableImage";
//DivEditeLeg.onmousedown=function(event){drags(event)};
//DivEditeLeg.onmouseup=function(e){enddrag()};
DivEditeLeg.className="id_divRoutLegMain";
DivEditeLeg.style.position="absolute";
DivEditeLeg.style.top="0px";
DivEditeLeg.innerHTML='<div id="id_divTableImageLeg" style="background:#ffffff; color:#0000ff;z-index: 6000;position:absolute;left:'+Math.round(leftLeft+20)+'px;top:'+Math.round(topTop-10)+
'px;overflow:hidden; border: 1px solid black;"><img onclick="closeTableImageWin()" src="openlayers/theme/default/img/close.gif" style="position:relative; top:10px;float:right; cursor:pointer"><a style="position:relative; top:20px"><br>'+
'<a>Select image file:</a><br>'+
'<input title="Select image file from your computer" style="color:transparent" type="file" id="file_idImageTable"><input type="checkbox" id="id_imageTableUpload" value="checkbox"/>Upload image to OpenWebGIS'+'<br>'+
'Or insert URL of image:<textarea id="id_imageTableTextArea" style="width: 250px; height: 20px;font-size:11px"></textarea><br>'+
'Or insert URL of Video:<textarea id="id_VideoTableTextArea" value="" style="width: 250px; height: 20px;font-size:11px"></textarea><br>'+
'<a>width:</a><input type="text" size="5" id="id_imageTableWidth" value="50"/><br>'+
'<a>height:</a><input type="text" size="5" id="id_imageTableHeight" value="50"/><br>'+
'<input type="checkbox" id="id_imageTableorSize"  onchange="" value="checkbox"/>Leave original size<br>'+
'<p> <button type=button id= "id_OK_ImageTable" onclick=OK_ImageTable()>OK</button></p>';
'</div>';
if(!document.getElementById("id_divTableImageLeg"))
{body.appendChild(DivEditeLeg); }
document.getElementById('file_idImageTable').addEventListener('change', readSingleFileImage, false);
document.getElementById('file_idImageTable').onclick=function(){ AndroidFileChooser()}
document.getElementById('id_OK_ImageTable').onclick=function(){OK_ImageTable(td);}
var c; fileZIP=c;
}
function closeTableImageWin()
{document.getElementById("id_divTableImage").parentNode.removeChild(document.getElementById("id_divTableImage"));}
function readSingleFileImage(evt)
{fileZIP = evt.target.files[0]; }
function OK_ImageTable(td)
{var w=document.getElementById("id_imageTableWidth").value; var h=document.getElementById("id_imageTableHeight").value;
var myUrl0='';
myUrl0=document.getElementById("id_VideoTableTextArea").value; 
if(myUrl0!=='')
{var ddsst='';if(myUrl0.search(/youtube/g)!==-1){ddsst='//';if(myUrl0.search(/watch\?v=/g)!==-1){var tsy00=myUrl0.split('https://')[1];var tsy=myUrl0.split('http://')[1];if(typeof tsy00=='undefined' ){}else{tsy=tsy00;}if(typeof tsy=='undefined' ){tsy=myUrl0} tsy0=tsy.split('watch?v=')[0];tsy1=tsy.split('watch?v=')[1];myUrl0=tsy0+'embed/'+tsy1;}}
if(myUrl0.search(/youtu.be/g)!==-1){ddsst='//';var tsy=myUrl0.split('http://')[1];if(typeof tsy=='undefined' ){tsy=myUrl0} tsy0=tsy.split('youtu.be/')[1];myUrl0='www.youtube.com/embed/'+tsy0;}

td.previousElementSibling.value="<iframe width="+w+" height="+h+" src="+ddsst+myUrl0+" frameborder=0 allowfullscreen></iframe>";  closeTableImageWin();return;}
if(fileZIP){if(fileZIP.type=="image/jpeg"||fileZIP.type=="image/png"||fileZIP.type=="image/tiff"||fileZIP.type=="image/gif"||fileZIP.type=="image/bmp"||fileZIP.type=="image/tif"){} else{alert("ERROR. file is not image");return;}}
myUrl=document.getElementById("id_imageTableTextArea").value; 

if(myUrl.length==0)
{
var contents;
 if (fileZIP) {
 var r = new FileReader();
 r.onload = function(e) { contents = e.target.result;
 if(document.getElementById('id_imageTableorSize').checked==true)
 {var imgN=document.createElement("img"); imgN.src=contents;w=imgN.width; h=imgN.height;}
  if(document.getElementById('id_imageTableUpload').checked==true)
 { if(fileZIP.size>8000000){alert("size of the file could not be more than 8 MB"); return;}
 try {var xmlhttp =new XMLHttpRequest();}
catch (e) {alert("error");}
xmlhttp.open('POST','/image.php?rand='+Math.random(), true);
xmlhttp.setRequestHeader("Cache-Control", "no-cache"); xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function(){if(xmlhttp.readyState == 4&&xmlhttp.status == 200) {
if(xmlhttp==''){alert("no data");return;}
td.previousElementSibling.value="<img src="+window.location.origin+"/images/"+xmlhttp.responseText+" style=width:"+w+"px;height:"+h+"px>";}}
alert("This function works only in online web version of OpenWebGIS")
{return;xmlhttp.send('value='+contents+'&name='+fileZIP.name);} }
 else
{td.previousElementSibling.value="<img src="+contents+" style=width:"+w+"px;height:"+h+"px>";}
closeTableImageWin();
 } 
 r.readAsDataURL(fileZIP); } else {  if (AndroidfileZIP!==''){ if(document.getElementById('id_imageTableorSize').checked==true)
 {var imgN=document.createElement("img"); imgN.src=AndroidfileZIP;w=imgN.width; h=imgN.height;}
  if(document.getElementById('id_imageTableUpload').checked==true)
 { if(fileZIP.size>8000000){alert("size of the file could not be more than 8 MB"); return;}
 try {var xmlhttp =new XMLHttpRequest();}
catch (e) {alert("error");}
xmlhttp.open('POST','/image.php?rand='+Math.random(), true);
xmlhttp.setRequestHeader("Cache-Control", "no-cache"); xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xmlhttp.onreadystatechange = function(){if(xmlhttp.readyState == 4&&xmlhttp.status == 200) {
if(xmlhttp==''){alert("no data");return;}
td.previousElementSibling.value="<img src="+window.location.origin+"/images/"+xmlhttp.responseText+" style=width:"+w+"px;height:"+h+"px>";}}
alert("This function works only in online web version of OpenWebGIS")
{return;xmlhttp.send('value='+AndroidfileZIP+'&name='+fileZIP.name);} }
 else
{td.previousElementSibling.value="<img src="+AndroidfileZIP+" style=width:"+w+"px;height:"+h+"px>";}
closeTableImageWin();}
 else{alert("Failed to load file");} }
 }
 else{
 if(myUrl.length<5)
{alert("error in the url"); return;}
 if(document.getElementById('id_imageTableorSize').checked==true)
 {var imgN=document.createElement("img");
 imgN.src=document.getElementById("id_imageTableTextArea").value;w=imgN.width; h=imgN.height;}
 td.previousElementSibling.value="<img src="+document.getElementById("id_imageTableTextArea").value+" style=width:"+w+"px;height:"+h+"px>";
 closeTableImageWin();
 }
 

}
function clickOnColumnTable(elem)
{
var field=elem.id.split('tableWebGIS14')[1];
// Сортируем по полю название вида
if(isNaN(parseFloat(1*edilayerMainLayer.features[0].attributes[field]))==true)
{if(AsDes==0){edilayerMainLayer.features.sort(function(a,b){ 
   if(a.attributes[field] < b.attributes[field]) 
      return -1 
   if(a.attributes[field] > b.attributes[field]) 
      return 1 
   return 0 
});AsDes=1;}
else
{
edilayerMainLayer.features.sort(function(a,b){ 
if(a.attributes[field] > b.attributes[field]) 
return -1 
if(a.attributes[field] < b.attributes[field]) 
return 1 
return 0 
});AsDes=0;
}


}
else{

if(AsDes==0){edilayerMainLayer.features.sort(function(a, b) {
 return (parseFloat(a.attributes[field]) - parseFloat(b.attributes[field])) ;});AsDes=1}
else
{edilayerMainLayer.features.sort(function(a, b) {
 return (parseFloat(b.attributes[field]) - parseFloat(a.attributes[field])) ;});AsDes=0}

}

OpenTable();

}
function Applyfilter()
{
if(document.getElementById("pFieldTable").value!=0 && document.getElementById("pOperTable").value!=0)
{
var urlText='';


if(urlText=='')
{
if(document.getElementById("sortA").checked==true)
 {if(document.getElementById("pFieldTable").value!=0){           var DistArr=[]; var oj = []; //oj - array  including sort features
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ DistArr.push(parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))}
DistArr.sort(function(a,b){return a-b;});
rtt=DistArr;

l=0;
for (var j=0;j<DistArr.length;j++) 
{
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ //alert(DistArr[j]+"   "+edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value])
if(DistArr[j]==parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))
{ var sdf=0; for(var k=0;k<oj.length;k++){ if(oj[k].id==edilayerMainLayer.features[jk].id){sdf=1;}} if(sdf==0){oj[l]=edilayerMainLayer.features[jk];l++;             }    }
    }

}
                         }/// end if(document.getElementById("pFieldTable").value!=0
}
///////////// end if sortA

if(document.getElementById("sortD").checked==true)
 {if(document.getElementById("pFieldTable").value!=0){           var DistArr=[]; var oj = []; //oj - array  including sort features
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ DistArr.push(parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))}
DistArr.sort(function(a,b){return a-b;});
DistArr.reverse();
rtt=DistArr;

var oj = [];l=0;
for (var j=0;j<DistArr.length;j++) 
{
for (var jk=0;jk<edilayerMainLayer.features.length;jk++)
{ //alert(DistArr[j]+"   "+edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value])
if(DistArr[j]==parseFloat(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]))
{ var sdf=0; for(var k=0;k<oj.length;k++){ if(oj[k].id==edilayerMainLayer.features[jk].id){sdf=1;}} if(sdf==0){oj[l]=edilayerMainLayer.features[jk];l++;             }    }
    }

}
                    }/// end if(document.getElementById("pFieldTable").value!=0
}
////////// end if sortD
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CountfeatureTable=edilayerMainLayer.features.length;
var cc=document.getElementById("pCount").value;
if(document.getElementById("pCount").value!="All")
{if(edilayerMainLayer.features.length>=parseFloat(cc)){CountfeatureTable=parseFloat(document.getElementById("pCount").value)}}


var tableString='<table width="10%" border="1" cellspacing="0" cellpadding="1"><tr align="center" bgcolor="#FFDB73">'; 
for (var ak in edilayerMainLayer.features[0].attributes)
    {tableString+='<td style="font-size: 80%; font-family: sans-serif">'+ak+'</td>';}
          tableString+='</tr>'; var metka=0;
for (var jk=0;jk<CountfeatureTable;jk++) {if (metka==0){ tableString+='<tr align="center" bgcolor="#E5FB71" style="color:#000000" onmouseover=OverTableMnu(this); onmouseout=OutTableMnu(this);onclick=function(){clickTableMnu(this)};>';}
for (var ak in edilayerMainLayer.features[jk].attributes)
{
metka=1;

  if (forEdit!=1)
      {if(document.getElementById("sortA").checked==true || document.getElementById("sortD").checked==true) {var strTab='<td style="font-size: 60%; font-family: sans-serif">'+oj[jk].attributes[ak]+'</td>';} else {var strTab='<td style="font-size: 60%; font-family: sans-serif">'+edilayerMainLayer.features[jk].attributes[ak]+'</td>';}} else
{  if(document.getElementById("sortA").checked==true || document.getElementById("sortD").checked==true){for(var k=0;k<oj.length;k++){ if(oj[jk].id==edilayerMainLayer.features[k].id){var strTab='<td style="font-size: 60%; font-family: sans-serif">'+ '<input id='+k+'_'+ak+' type="text" size="10" value='+oj[jk].attributes[ak]+'></td>';}}} else {    var strTab='<td style="font-size: 60%; font-family: sans-serif">'+ '<input id='+jk+'_'+ak+' type="text" size="10" value='+edilayerMainLayer.features[jk].attributes[ak]+'></td>';}    }

/*if(forEdit!=1)
//{var strTab='<td style="font-size: 60%; font-family: sans-serif">'+edilayerMainLayer.features[jk].attributes[ak]+'</td>';}
//else
//{var strTab='<td style="font-size: 60%; font-family: sans-serif">'+ '<input id='+jk+'_'+ak+' type="text" size="10" value='+edilayerMainLayer.features[jk].attributes[ak]+'></td>';}**/
////////////////////////////////{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{
          if(document.getElementById("sortA").checked==true || document.getElementById("sortD").checked==true)
               {
if(document.getElementById("pOperTable").value=='>')
{ if(oj[jk].attributes[document.getElementById("pFieldTable").value]> parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='<')
{ if(oj[jk].attributes[document.getElementById("pFieldTable").value]< parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='>=')
{ if(oj[jk].attributes[document.getElementById("pFieldTable").value]>= parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='<=')
{ if(oj[jk].attributes[document.getElementById("pFieldTable").value]<=parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='==')
{ if(oj[jk].attributes[document.getElementById("pFieldTable").value]==parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }

                  } 
          else
       {
if(document.getElementById("pOperTable").value=='>')
{ if(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]> parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='<')
{ if(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]< parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='>=')
{ if(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]>= parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='<=')
{ if(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]<=parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
if(document.getElementById("pOperTable").value=='==')
{ if(edilayerMainLayer.features[jk].attributes[document.getElementById("pFieldTable").value]==parseFloat(document.getElementById("pInputFilterTable").value)){tableString+=strTab; metka=0;}     }
        }
////////////////////////////////{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{


}///     if(document.getElementById("pOperTable").value!=0 && document.getElementById("pInputFilterTable").value!=0)              
}}
tableString+='</tr>';
tableString+='</table>';
//alert(tableString);
document.getElementById("table").innerHTML=tableString;
}//////////////////////////////////////////////////////////////////////////////////////////////// end cheking for filling field name and value for filter
if(document.getElementById("select_feat_map_id").checked==true)
{
var tablSel=document.getElementById("table").childNodes[0].childNodes[0].childNodes;
var ind=0; var indtrue=0;
for (var i=0; i<edilayerMainLayer.selectedFeatures.length;i++)
{edilayerMainLayer.selectedFeatures[i].renderIntent="default";};edilayerMainLayer.selectedFeatures=[];
 for (var i=0; i<edilayerMainLayer.features.length; i++)
                  { for(var j=1;j<tablSel.length-1;j++)
{var row=tablSel[j]; ind=0; indtrue=0; for (var a in edilayerMainLayer.features[i].attributes)
         {if(edilayerMainLayer.features[i].attributes[a]+" "==row.cells[ind].innerHTML+" ")
            {indtrue++;}else{indtrue=0;}
                       ind++;
                             }      
                                 if(indtrue==ind){edilayerMainLayer.features[i].renderIntent="select";edilayerMainLayer.selectedFeatures.push(edilayerMainLayer.features[i]);};ind=0; indtrue=0; }
                          }
edilayerMainLayer.redraw();


}
}////end Applyfilter

function EditTable()/////////////////////////////////////////////////////////////////////////////////////////////Edit table
{ if (edilayerMainLayer.features.length==0)// check for enable feature. if layer no visible because if layer non visible no one time then feature not exist
{edilayerMainLayer.setVisibility(true);edilayerMainLayer.setVisibility(false);}
document.getElementById("block_UpdateTable").style.display="block";
if(document.getElementById("pFieldTable").value!=0 && document.getElementById("pOperTable").value!=0)
{
forEdit=1;
Applyfilter();
forEdit=0; 
}
else
{ forEdit=1;OpenTable();forEdit=0;}

}///////end edite
function UpdateTable()
{

var g='';
if(g=='')
{
var metkaSave=0;           
   for (var i=0; i<edilayerMainLayer.features.length; i++)
                  { for (var a in edilayerMainLayer.features[i].attributes)
                       {var idt=i+'_'+(a);
                            //alert(idt);
                                  if(document.getElementById(idt))
                           {   var inputCheck=document.getElementById(idt).value;
               if (edilayerMainLayer.features[i].attributes[a]!=inputCheck)
                       {
                                edilayerMainLayer.features[i].attributes[a]=inputCheck;
edilayerMainLayer.features[i].state = OpenLayers.State.UPDATE;
                                       metkaSave=1;                                  

                                        } //end if (edilayerMainLayer.features[i].attributes[a]!=inputCheck)
                                      } /// end if(document.getElementById(idt))
                                 }      //// end for (var a in edilayerMainLayer.features[i].attributes)
                            } //end for (var i=0; i<edilayerMainLayer.features.length; i++)

if( metkaSave==1)
{ 
if(edilayerMainLayer.protocol){if(edilayerMainLayer.protocol.featureNS)
{saveStrategy.layer=edilayerMainLayer;saveStrategy.save();}}
alert("All done. Reopen table");

}
}


}////////end function Update

function SortA()
{
if(document.getElementById("sortA").checked==true)
{sortTable_A=1;
sortTable_D=0;}
else{sortTable_A=0;}
if(document.getElementById("sortD").checked==true)
{document.getElementById("sortD").checked=false}
}
function SortD()
{
if(document.getElementById("sortD").checked==true)
{sortTable_A=0;
sortTable_D=1;}
else{sortTable_D=0;}
if(document.getElementById("sortA").checked==true)
{document.getElementById("sortA").checked=false}
}
function ApplyCalc()
{var meanField1;
var meanField2;
var flagError=0;
var rt=document.getElementById("textCalc").value.split('=')[0];
var owgstr=document.getElementById("textCalc").value.split('mean(')[0];
if(typeof document.getElementById("textCalc").value.split('mean(')[0]!=='undefined'&&document.getElementById("textCalc").value!==owgstr)
{var sum=0;var objMean={};var countM=0;
var smean=document.getElementById("textCalc").value.split('mean(')[1];

if(typeof smean!=='undefined'&&smean.split(',')[0])
{meanField1=smean.split(',')[0];if(typeof smean.split(',')[1]!=='undefined'){meanField2=smean.split(',')[1].split(')')[0];}
if(typeof smean.split(',')[1]=='undefined')
{meanField1=smean.split(')')[0];for (var b=0; b<edilayerMainLayer.features.length; b++)
{countM++;sum=sum+parseFloat(edilayerMainLayer.features[b].attributes[meanField1]);}
for (var b=0; b<edilayerMainLayer.features.length; b++)
edilayerMainLayer.features[b].attributes[rt]=sum/countM;
alert("All done. Reopen table");return;
}

for (var b=0; b<edilayerMainLayer.features.length; b++){objMean[edilayerMainLayer.features[b].attributes[meanField1]]='';}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1])
{countM++;sum=sum+parseFloat(edilayerMainLayer.features[b].attributes[meanField2]);}
}
objMean[h]=sum/countM;countM=0;sum=0;


}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1]){edilayerMainLayer.features[b].attributes[rt]=objMean[h];}}
}


}
else{}
alert("All done. Reopen table");return;
}
//count
var owgstr=document.getElementById("textCalc").value.split('count(')[0];
if(typeof document.getElementById("textCalc").value.split('count(')[0]!=='undefined'&&document.getElementById("textCalc").value!==owgstr)
{var sum=0;var objMean={};var countM=0;
var smean=document.getElementById("textCalc").value.split('count(')[1];

if(typeof smean!=='undefined'&&smean.split(',')[0])
{meanField1=smean.split(',')[0];if(typeof smean.split(',')[1]!=='undefined'){meanField2=smean.split(',')[1].split(')')[0];}
if(typeof smean.split(',')[1]=='undefined')
{meanField1=smean.split(')')[0];for (var b=0; b<edilayerMainLayer.features.length; b++)
{countM++;sum=sum+parseFloat(edilayerMainLayer.features[b].attributes[meanField1]);}
for (var b=0; b<edilayerMainLayer.features.length; b++)
edilayerMainLayer.features[b].attributes[rt]=countM;
alert("All done. Reopen table");return;
}

for (var b=0; b<edilayerMainLayer.features.length; b++){objMean[edilayerMainLayer.features[b].attributes[meanField1]]='';}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1])
{countM++;sum=sum+parseFloat(edilayerMainLayer.features[b].attributes[meanField2]);}
}
objMean[h]=countM;countM=0;sum=0;


}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1]){edilayerMainLayer.features[b].attributes[rt]=objMean[h];}}
}


}
else{}
alert("All done. Reopen table");return;
}
//min
var owgstr=document.getElementById("textCalc").value.split('min(')[0];
if(typeof document.getElementById("textCalc").value.split('min(')[0]!=='undefined'&&document.getElementById("textCalc").value!==owgstr)
{var sum=[];var objMean={};var countM=0;
var smean=document.getElementById("textCalc").value.split('min(')[1];

if(typeof smean!=='undefined'&&smean.split(',')[0])
{meanField1=smean.split(',')[0];if(typeof smean.split(',')[1]!=='undefined'){meanField2=smean.split(',')[1].split(')')[0];}
if(typeof smean.split(',')[1]=='undefined')
{meanField1=smean.split(')')[0];
for (var b=0; b<edilayerMainLayer.features.length; b++)
{sum.push(parseFloat(edilayerMainLayer.features[b].attributes[meanField1]));
;}
for (var b=0; b<edilayerMainLayer.features.length; b++)
{edilayerMainLayer.features[b].attributes[rt]=Math.min.apply(0,sum);}
alert("All done. Reopen table");return;
}

for (var b=0; b<edilayerMainLayer.features.length; b++){objMean[edilayerMainLayer.features[b].attributes[meanField1]]='';}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1])
{sum.push(parseFloat(edilayerMainLayer.features[b].attributes[meanField2]));

}}
objMean[h]=Math.min.apply(0,sum);
}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1]){edilayerMainLayer.features[b].attributes[rt]=objMean[h];}}
}


}
else{}
alert("All done. Reopen table");return;
}
//max
var owgstr=document.getElementById("textCalc").value.split('max(')[0];
if(typeof document.getElementById("textCalc").value.split('max(')[0]!=='undefined'&&document.getElementById("textCalc").value!==owgstr)
{var sum=[];var objMean={};var countM=0;
var smean=document.getElementById("textCalc").value.split('max(')[1];

if(typeof smean!=='undefined'&&smean.split(',')[0])
{meanField1=smean.split(',')[0];if(typeof smean.split(',')[1]!=='undefined'){meanField2=smean.split(',')[1].split(')')[0];}
if(typeof smean.split(',')[1]=='undefined')
{meanField1=smean.split(')')[0];
for (var b=0; b<edilayerMainLayer.features.length; b++)
{sum.push(parseFloat(edilayerMainLayer.features[b].attributes[meanField1]));
;}
for (var b=0; b<edilayerMainLayer.features.length; b++)
{edilayerMainLayer.features[b].attributes[rt]=Math.max.apply(0,sum);sum=[];}
alert("All done. Reopen table");return;
}

for (var b=0; b<edilayerMainLayer.features.length; b++){objMean[edilayerMainLayer.features[b].attributes[meanField1]]='';}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1])
{sum.push(parseFloat(edilayerMainLayer.features[b].attributes[meanField2]));

}}
objMean[h]=Math.max.apply(0,sum);sum=[];
}
for (h in objMean)
{
for (var b=0; b<edilayerMainLayer.features.length; b++)
{if(h==edilayerMainLayer.features[b].attributes[meanField1]){edilayerMainLayer.features[b].attributes[rt]=objMean[h];}}
}


}
else{}
alert("All done. Reopen table");return;
}
for (var b=0; b<edilayerMainLayer.features.length; b++)
{
//for ( var ttt in edilayerMainLayer.features[b].attributes)
//edilayerMainLayer.features[b].attributes["CALC"]=edilayerMainLayer.features[b].attributes["LATITUDE"]/edilayerMainLayer.features[b].attributes["LONGITUDE"];
//edilayerMainLayer.features[b].data["CALC"]=edilayerMainLayer.features[b].attributes["LATITUDE"]/edilayerMainLayer.features[b].attributes["LONGITUDE"];

var strCalc=document.getElementById("textCalc").value;
var strCalcMain=strCalc.split('=');
strCalc=strCalcMain[1];

var res = strCalc.match(/\[.*?\]/ig);
if(res)
{
var strCalc2=strCalc;
//'edilayerMainLayer.features[b].attributes['+'"'+res[it]+'"'+']'
for(it=0;it<res.length;it++)
{var str=res[it].split('[')[1].split(']')[0];str2='\\'+'['+str+'\\'+']';var regC = new RegExp(str2, 'ig'); 
if (document.getElementById("CheckSaveTextAtt").checked==false){strCalc2=strCalc2.replace(regC,'parseFloat(edilayerMainLayer.features[b].attributes['+'"'+str+'"'+'])')}
else
{strCalc2=strCalc2.replace(regC,'edilayerMainLayer.features[b].attributes['+'"'+str+'"'+'].toString()')}

}//end for(it=0;it<res.length;it++)
} //end if(res)
else{var strCalc2=strCalc;}
strCalcMain[0]=strCalcMain[0];
//alert(strCalc2);
edilayerMainLayer.features[b].attributes[strCalcMain[0]]=eval(strCalc2);
if (document.getElementById("CheckSaveOldAtt").checked==true)
{edilayerMainLayer.features[b].state = OpenLayers.State.UPDATE;}
var prov=parseInt(-100);
if(typeof(edilayerMainLayer.features[b].attributes[strCalcMain[0]])=='string'){ prov=edilayerMainLayer.features[b].attributes[strCalcMain[0]].indexOf('NaN');}

if(isNaN(edilayerMainLayer.features[b].attributes[strCalcMain[0]])&&typeof(edilayerMainLayer.features[b].attributes[strCalcMain[0]])!='string')
{flagError=1;}
if(prov!==parseInt(-1)&&prov!==parseInt(-100))
{flagError=1;}
//alert(strCalc2);
//var tyC=strCalc.match(\/[.*?\/]/i);

//rtt=res;
//eee=edilayerMainLayer.features[b];
}
if(flagError==1)
{alert("ERROR. Names of attributes are not written in capital letters or other error");}
else
{

if (document.getElementById("CheckSaveOldAtt").checked==true)
{saveStrategy.layer=edilayerMainLayer;saveStrategy.save();}
alert("All done. Reopen table");
}
 }//////end apply calc
///////////
