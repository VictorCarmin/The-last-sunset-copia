#pragma strict

function Start () {

}

function Update () {
	var personaje=gameObject.Find("Personaje");
	transform.position= personaje.transform.position;
	transform.position.z=55;
	transform.position.y=personaje.transform.position.y/3;
}