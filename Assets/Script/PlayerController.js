#pragma strict

var input : float; //función para añadir movimiento al eje horizontal. las variables float funcionan con decimales.
static var salto: boolean; //función para añadir salto. Las variables boolean tienen dos comandos: true y false.
var vel: float; //función para añadir velocidad
static var doblesalto: boolean;

function Start () { //función Start se utiliza para que todo cmando introducido en ella se ejecute 1 vez al primer frame de ejecutarse el juego

	salto=true; //al estar dentro de la funcion start, salto empezará en el estado "true" de su variable boolean
	doblesalto=false;
}

function Update () { //La función update aplica por cada frame de juego los comandos que se hallan dentro de ella.
	
	if (salto==true) { vel=0.1; } //el comando "if" se utiliza para añadir condicionantes. Si "1" sucede, entonces ocurrirá "2". El comando "else" se utiliza cuando la condición de "if" falla.
								// es decir: Si no sucediera "1", entonces "2" tampoco sucedería; y por tanto "3" (que iría con "else") sí ocurriría.
	else {vel=0.07;}
	
	input = Input.GetAxis("Horizontal"); //con ello asignamos a la variable input un valor de eje horizontal X entre +1 y -1.
	//Debug.Log(input); //Debug.Log sirve para mostrar lo pedido (en este caso los valores de input) en la consola.
	
	transform.Translate(input*vel,0,0); //crea traslación al objeto al que se le asigne el comando. Aquí el movimiento será para X el valor de input oscilante entre -1 y +1 por la velocidad, de valor 0.1. 
										//el eje Y y Z no variarán.
	
	
	if (transform.position.y<-3){ //Con ello intentamos aplicar una especie de "Game over", provocando el reinicio del nivel al caer desde cierta altura, o mejor dicho, cuando el objeto tenga una variable Y menor
	                              //que -3, se provocará la carga de la escena "supermario".
	
		Application.LoadLevel("supermario");
		
		}
		
	
	if (Input.GetButtonDown("Jump")&&salto==true){ // Con && añades dos condicionantes al comando "if". Es decir: cuando "1" y "2" sucedan, ocurrirá "3". A más &&, más condicionantes.
	
		rigidbody.AddForce(Vector3(input*2,8,0),ForceMode.Impulse); //con este comando añades al cuerpo rígido una fuerza lateral de 2 multiplicado por el valor de input, para X; 8 para Y, y 0 para Z. Esta fuerza se tratará como un impulso.
		
		
		}
	

	if (Input.GetButtonDown("Jump")&&doblesalto==true){
		rigidbody.AddForce(Vector3(input*1,7.5,0),ForceMode.Impulse);
		doblesalto=false;
		}
}
	
function OnCollisionEnter (other:Collision) {// La función OnCollisionEnter es una función que activa sus comandos de su interior cuando se produce una colisión. En general es una colisión con cualquier objeto,
											//pero si se añade other:Collision puedes añadir una excepción para un objeto determinado, como hacemos en el siguiente comando.
salto=true;//mientras tengas una colisión, salto será true.

	if (other.gameObject.name=="Enemigo"){//si el objeto de excepción se llama "enemigo", se reiniciará el nivel, como por la muerte por caída.
			
			Application.LoadLevel("supermario");
			
		}
			
			
			
	
}
function OnCollisionExit () {// función que aplica sus comandos al salir de la colisión.
salto=false;// si sales de una colisión, salto se volverá false.

doblesalto=true;
}

function OnCollisionStay(other:Collision){//función que aplica sus comandos mientras se mantenga la colisión.
	
	
	
}