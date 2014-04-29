#pragma strict

function Start () {

}

function Update () {

	var personaje=gameObject.Find("Personaje");
	transform.position= personaje.transform.position;
	transform.position.z=-10.5;
	transform.position.y=personaje.transform.position.y+1;
	transform.position.x=personaje.transform.position.x+6;
	if (personaje.transform.position.y<0){ transform.position.y=1.004;}


}