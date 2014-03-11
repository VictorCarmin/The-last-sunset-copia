#pragma strict


	private var hit           : RaycastHit ;
	

function Start () {


}

function Update () {

	var fwd = transform.TransformDirection (Vector3.left);

	if (Physics.Raycast(transform.position,fwd,hit,1)){
		
		if(hit.collider.gameObject.tag == "jugador") { Matarpj(); }


		}
	
	
					
						
}



function Matarpj () {



	Destroy(hit.collider.gameObject);
	yield WaitForSeconds(1);
	Application.LoadLevel("e1");



}