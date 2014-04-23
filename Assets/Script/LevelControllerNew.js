#pragma strict

public var plataformas= new GameObject[10];
public var frecuenciaPlataforma : float= 1.0;
private var siguientePlataforma : float=0.0;
var altura: int;
var posicion: int;

function Start () {
posicion=0;
frecuenciaPlataforma=0.0;
}

function FixedUpdate () {

//	Debug.Log(Time.timeSinceLevelLoad);
	
	var random = Random.Range (0,10);
	var plat : GameObject;
	plat = plataformas[random];


	if(Time.timeSinceLevelLoad>siguientePlataforma){
		plat = plataformas[random];
		
		Debug.Log("Instantiate");
		Debug.Log(plat);
		Instantiate(plat, Vector3(35,altura,0), plat.transform.rotation);
		PosicionPlataforma();
		siguientePlataforma= Time.timeSinceLevelLoad+ frecuenciaPlataforma;
	}	
	var tiempoPlataforma = Random.Range (0,3);
	if(tiempoPlataforma==0){frecuenciaPlataforma=1.5;}
	if(tiempoPlataforma==1){frecuenciaPlataforma=1.75;}
	if(tiempoPlataforma==2){frecuenciaPlataforma=2.0;}
}

function PosicionPlataforma (){

//	Debug.Log(posicion);
	var posActual = posicion;
	
	if (posActual==0){ posicion0 ();}
	if (posActual==1){ posicion1 ();}
	if (posActual==2){ posicion2 ();}
	if (posActual==3){ posicion3 ();}
	if (posActual==4){ posicion4 ();}
	
	
	
	
}

function posicion0 (){
	var alturaA= Random.Range(0,2);
	if(alturaA==0){ altura=0; posicion=0;}
	if(alturaA==1){ altura=5; posicion=1;}
}

function posicion1 (){
	var alturaB= Random.Range(0,3);
	if(alturaB==0){ altura=0; posicion=0;}
	if(alturaB==1){ altura=5; posicion=1;}
	if(alturaB==2){ altura=10;posicion=2;}
}

function posicion2 (){
	var alturaC= Random.Range(0,3);
	if(alturaC==0){ altura=5; posicion=1;}
	if(alturaC==1){ altura=10; posicion=2;}
	if(alturaC==2){ altura=15;posicion=3;}
}

function posicion3 (){
	var alturaD= Random.Range(0,3);
	if(alturaD==0){ altura=10; posicion=2;}
	if(alturaD==1){ altura=15; posicion=3;}
	if(alturaD==2){ altura=20;posicion=4;}
}

function posicion4 (){
	var alturaE= Random.Range(0,2);
	if(alturaE==0){ altura=15; posicion=3;}
	if(alturaE==1){ altura=20; posicion=4;}
}