#pragma strict
public var perso: GameObject;
function Start () {

}

function OnMouseDown() {



	if(PersonajeFinal.salto==true) {
		
			Debug.Log("Salto");
			
			
			perso.rigidbody.velocity =Vector3.zero;
			
			perso.rigidbody.AddForce(Vector3(0,12,0),ForceMode.Impulse);
 	
 	}

	if(PersonajeFinal.doblesalto==true) {
	
	 		Debug.Log("SaltoDoble");
	 		
	 		perso.rigidbody.velocity = Vector3.zero;;
	 	
	 		perso.rigidbody.AddForce(Vector3(0,12,0),ForceMode.Impulse);
	 	
	 		PersonajeFinal.doblesalto=false;
	 	
	 	}




	

}