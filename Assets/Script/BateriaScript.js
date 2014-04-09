#pragma strict
var bat5: GameObject;
var bat4 : GameObject;
var bat3: GameObject;
var bat2: GameObject;
var bat1: GameObject;
var bat0: GameObject;

function Start () {

}

function Update () {

if(PersonajeFinal.carga==4){

	PersonajeFinal.carga=4;
	
	Instantiate(bat4, transform.position, transform.rotation);
	
	Destroy(gameObject);
	
	} 
else{
	if(PersonajeFinal.carga==3){

	
	
	Instantiate(bat3, transform.position, transform.rotation);
	
	Destroy(gameObject);
	
	}

	else{ 
	
		if(PersonajeFinal.carga==2){

		
		
		Instantiate(bat2, transform.position, transform.rotation);
		
		Destroy(gameObject);
		
		} 
		
		else{
	
			if(PersonajeFinal.carga==1){

			
				
				Instantiate(bat1, transform.position, transform.rotation);
				
				Destroy(gameObject);
				
				} 
				
				else{
				
					if(PersonajeFinal.carga==0){

						
						
						Instantiate(bat0, transform.position, transform.rotation);
						
						Destroy(gameObject);
						
						} 
					}
				}
			}
		}

}