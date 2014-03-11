#pragma strict

function Start () {

}

function Update () {

	var personaje=gameObject.Find("Personaje");
	transform.position= personaje.transform.position;
	transform.position.z=-15;
	transform.position.y=personaje.transform.position.y+1.75;
	transform.position.x=personaje.transform.position.x+5.5;
	if (personaje.transform.position.y<0){ transform.position.y=1.794;}


}