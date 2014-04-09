#pragma strict

static var aux : GameObject;

var sc1: LanzarLaser;

public var lanzador: GameObject;

public var laser : GameObject ;
public var ondaLaser: GameObject;
public var velocidad = 5000 ;
function Start () {

}

function Update () {

}

function OnMouseDown() {

if (PersonajeFinal.carga>=1){
	var aux2: GameObject;
		PersonajeFinal.carga--;
		
		aux2 = Instantiate (ondaLaser, lanzador.transform.position, lanzador.transform.rotation);
		aux = Instantiate (laser, lanzador.transform.position, lanzador.transform.rotation);
		sc1.Ignorar();
		
		aux.rigidbody.velocity = transform.TransformDirection (Vector3(velocidad*Time.deltaTime,0,0));
		
		
	
	}

}