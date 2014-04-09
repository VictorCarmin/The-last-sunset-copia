#pragma strict

function Start () {

}

function Update () {

DestruirLaser();
}

function OnCollisionEnter(other:Collision){
		
	if(other.gameObject.name=="Cube"){

		Destroy(other.gameObject);
	}
	Destroy(gameObject);

}
function DestruirLaser(){

		if (transform.position.x>= 50){
		
		Destroy(gameObject);
		
	}

}
		
	