#pragma strict
static var generar: boolean;
var haGenerado: boolean;
function Start () {
generar=false;
haGenerado=false;
}

function FixedUpdate () {

	transform.Translate(-7.5*Time.deltaTime, 0, 0);
	
if(haGenerado==false){
	if (transform.position.x<=0){
		generar=true;
		haGenerado=true;
		}
		
	}

if (transform.position.x<-30){
	Destroy(gameObject);
	}

}