
// 3 tipos de variables 
// public -> Todo el mundo puede leerla
// private -> Sólo este script puede leerla y modificarla
// static -> Todo el mundo puede leerla y moificarla    


public var laser : GameObject ;
public var velocidad = 500 ;
	
function Update () {

	if (Input.GetButtonDown("Fire1")){
	
		var aux : GameObject;
		
		// Instantiate devuelve un GameObject (el objeto instanciado en la escena)
		// Instantiate necesita 3 parámetros :
		// 1.- El prefab que vamos a poner en la escena
		// 2.- La posición que en la que queremos ponerlo
		// 3.- La rotación que queremos que tenga
		
		aux = Instantiate (laser, transform.position, transform.rotation);
		
		// Le damos al rigidbody la velocidad correspondiente a la velocidad del misil
		// TransformDirection transforma la dirección
		
		aux.rigidbody.velocity = transform.TransformDirection (Vector3(velocidad,0,0));
		
		Physics.IgnoreCollision(aux.collider, transform.root.collider);
	
	}


}


	