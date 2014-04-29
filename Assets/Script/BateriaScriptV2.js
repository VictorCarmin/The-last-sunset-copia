#pragma strict

public var arrayTexturas = new Texture2D[5];

function Start () {

	transform.position.x = 0;
	transform.position.y = 1;

}

function Update () {


	//guiTexture.texture = arrayTexturas[3];
	
if(PersonajeFinal.carga==5){

	PersonajeFinal.carga=5;
	
	guiTexture.texture = arrayTexturas[0];
	
	
	} 
else{



	if(PersonajeFinal.carga==4){

		PersonajeFinal.carga=4;
		
		guiTexture.texture = arrayTexturas[1];
		
		
		} 
	else{
		if(PersonajeFinal.carga==3){

		
		guiTexture.texture = arrayTexturas[2];
	
		
		
		}

		else{ 
		
			if(PersonajeFinal.carga==2){

			
			
		guiTexture.texture = arrayTexturas[3];
			
			
			} 
			
			else{
		
				if(PersonajeFinal.carga==1){

				
					
					guiTexture.texture = arrayTexturas[4];
					
					} 
					
					else{
					
						if(PersonajeFinal.carga==0){

							
							
							guiTexture.texture = arrayTexturas[5];
							
							
							
							} 
						}
					}
				}
			}

	}

}