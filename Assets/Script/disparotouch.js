#pragma strict

var siguienteRayo: float=0.0;
var frecuenciaRayo: float=0.2;

public var lanzador: GameObject;

public var laser : GameObject ;
public var ondaLaser: GameObject;
public var velocidad = 5000 ;

private var solo1 = false;

function Start () {


}

function Update () {

}

function OnMouseDown() {

if (PersonajeFinal.carga>=1 &&Time.timeSinceLevelLoad>siguienteRayo){
	siguienteRayo= Time.timeSinceLevelLoad+ frecuenciaRayo;
	var aux2: GameObject;
	var aux : GameObject;
		PersonajeFinal.carga--;
		
		
		aux2 = Instantiate (ondaLaser, lanzador.transform.position, lanzador.transform.rotation);
		aux = Instantiate (laser, lanzador.transform.position, lanzador.transform.rotation);
		
		
		aux.rigidbody.velocity = transform.TransformDirection (Vector3(velocidad*Time.deltaTime,0,0));
		
		
	
	}

}