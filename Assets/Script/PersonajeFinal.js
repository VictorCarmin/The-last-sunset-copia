﻿#pragma strict
public var monedas: GameObject;

static var coins: int;

static var salto: boolean;

static var doblesalto : boolean;

var termina: Vector3;

static var puntos: int;

public var particulaMoneda : GameObject;

public var puntosgui: GameObject;

public var puntostot: GameObject;

public var puntosmax: GameObject;

public var laser : GameObject ;

public var velocidad = 20 ;

static var PuntuacionTotal : int;

static var PuntuacionMaxima : int;

static var carga: int;

function Start () {
		
		coins = 0;
		
		carga=5;

		puntos = 0;
		
		PuntuacionTotal=0;

		doblesalto=false;

}

function Update () {

	

//	Debug.Log(carga);
	
	Puntuacion();
 PuntuacionTotal = puntos;
 
 if (PuntuacionTotal > PuntuacionMaxima){ PuntuacionMaxima=PuntuacionTotal;}
	
	Physics.gravity = Vector3(0, -20.0, 0);
	if(transform.position.y <= -6){
	Morir();
	}

	/*if(Input.GetButtonDown("Jump")&&salto==true) {
		
			Debug.Log("Salto");
			
			rigidbody.velocity =Vector3.zero;
			
			rigidbody.AddForce(Vector3(0,12,0),ForceMode.Impulse);
 	
 	}

	if(Input.GetButtonDown("Jump")&&doblesalto==true) {
	
	 		Debug.Log("SaltoDoble");
	 		
	 		rigidbody.velocity = Vector3.zero;;
	 	
	 		rigidbody.AddForce(Vector3(0,12,0),ForceMode.Impulse);
	 	
	 		doblesalto=false;
	 	
	 	}*/
 	
 		PintarLinea();
 	
 		EmitirRayo();
 	
 		DetectarEnemigos();
 
		                                                                                                                                                                                                                                                                                                                                                                                                                                                      
		
 	
 }


function FixedUpdate(){

	

 /*Puntuacion();
 PuntuacionTotal = puntos;
 
 if (PuntuacionTotal > PuntuacionMaxima){ PuntuacionMaxima=PuntuacionTotal;}
 
*/
}
function Morir(){
	Application.LoadLevel("e1");


}
function DetectarEnemigos(){

		if(Physics.Raycast (transform.position,Vector3(1,1,0),1)){
	
		//Debug.Log("Muerte");
	 
	 	Morir();
	}

}

function EmitirRayo () {

		Physics.Raycast (transform.position,Vector3(1,1,0),1);
	
	
}
function PintarLinea () {	
	
		termina = transform.position;
	
		termina.z = termina.z +0.4;
	
		termina.y = termina.y +0.35;
	
		termina.x = termina.x +0.35;
	
		Debug.DrawRay (transform.position,Vector3(0.4,0.4,0),Color.green);
	
		Debug.DrawRay (transform.position,Vector3(0,0.35,0),Color.green);
	
		Debug.DrawRay (transform.position,Vector3(0.35,0,0),Color.green);
	
	}

function OnCollisionEnter(other: Collision){
		
		salto=true;
		
		doblesalto=false;
		
	
		if( other.gameObject.name =="Enemigo"){
	 Debug.Log("HAHAHHAHAH");
		Morir();
		}
	
	//if( other.gameObject.name=="bateria"){
		
		//carga=5;
		
		//}
}

function OnTriggerEnter(other: Collider){
	if( other.gameObject.name=="Coin"){
		coins++;
		Instantiate(particulaMoneda, other.transform.position, other.transform.rotation);
		}
		
	if( other.gameObject.name=="bateria"){
		
		carga=5;
		Destroy(other.gameObject);
		}
}

function OnCollisionExit(){

		salto=false;

		doblesalto=true;

}
/*function LanzarLaser(){



	if(Input.GetButtonDown("Fire1")&&carga>=1){
	 	
	 		
	 		//Debug.Log("Laser");
	 	
	 		var aux : GameObject;
	 	
	 		aux = Instantiate (laser, transform.position, transform.rotation);
	 	
	 		aux.rigidbody.velocity = transform.TransformDirection (Vector3(0,0,velocidad));
	 	
	 		Physics.IgnoreCollision(aux.collider, transform.root.collider);

		
	}
}*/
function Puntuacion(){

		puntos = puntos + 1.5;

		puntosgui.guiText.text = "PUNTOS: "+puntos.ToString();
		
		puntostot.guiText.text = "PUNTOS TOTALES: "+PuntuacionTotal.ToString();
		
		puntosmax.guiText.text = "RECORD: "+PuntuacionMaxima.ToString();
			
//		Debug.Log(coins);
		
		monedas.guiText.text = "MONEDAS: "+coins.ToString();

}