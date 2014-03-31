#pragma strict

function Start () {

}

function FixedUpdate () {

	transform.Rotate(0,0,100*Time.deltaTime,  Space.World);
	
	
	//transform.Translate(-7.5*Time.deltaTime, 0, 0,  Space.World);
	//transform.eulerAngles.z += 1;
}

function OnTriggerEnter (other:Collider){
//	Debug.Log("Coge");
	if(other.gameObject.name=="Personaje"){
		Destroy(gameObject);
		}
	}