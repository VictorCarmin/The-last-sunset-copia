#pragma strict


	private var hit           : RaycastHit ;
	

function Start () {


}

function Update () {

	/*var fwd = transform.TransformDirection (Vector3.left);
	var esquina = transform.TransformDirection(Vector3(-1,1,0));
	var up = transform.TransformDirection (Vector3.up );
	
	if (Physics.Raycast(transform.position,fwd,hit,1)){	
		if(hit.collider.gameObject.tag == "jugador") { Matarpj(); }
		}
	if (Physics.Raycast(transform.position,esquina,hit,1)){	
		if(hit.collider.gameObject.tag == "jugador") { Matarpj(); }
		}
	if (Physics.Raycast(transform.position,up,hit,2)){	
		if(hit.collider.gameObject.tag == "jugador") { Matarpj(); }
		}
					
*/						
}


function OnCollisionEnter(other: Collision) {if(other.gameObject.tag == "jugador"){other.gameObject.tag = "jugador";}}

                                                                                                                       