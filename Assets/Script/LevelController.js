#pragma strict
static var altura : int;
public var PlatPeq: GameObject;
public var PlatGra: GameObject;
public var PlatPeqEnem: GameObject;
public var PlatGraEnem: GameObject;
function Start () {
altura=0;
}

function Update () {
if(plataforma.generar==true){
Debug.Log("Genera");

//Altura 2
	if(altura==2){
		var plataformaZ= Random.Range(0,2);
		
			if(plataformaZ==0){
				// altura 2
				altura=2;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano= Random.Range(0,2);
					if(tamano==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo= Random.Range(0,11);
							if(enemigo<=9){
								Instantiate(PlatPeq, Vector3(17,10,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo==10){
								Instantiate(PlatPeqEnem, Vector3(17,10,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo1= Random.Range(0,11);
							if(enemigo1<=9){
								Instantiate(PlatGra, Vector3(17,10,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo1==10){
								Instantiate(PlatGraEnem, Vector3(17,10,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					}
						
			if(plataformaZ==1){
				// altura 1
				altura=1;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano1= Random.Range(0,2);
					if(tamano1==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo2= Random.Range(0,11);
							if(enemigo2<=9){
								Instantiate(PlatPeq, Vector3(17,5,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo2==10){
								Instantiate(PlatPeqEnem, Vector3(17,5,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano1==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo3= Random.Range(0,11);
							if(enemigo3<=9){
								Instantiate(PlatGra, Vector3(17,5,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo3==10){
								Instantiate(PlatGraEnem, Vector3(17,5,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
		
		}
//altura 1	
	if(altura==1){
		var plataforma1= Random.Range(0,3);
		
			if(plataforma1==0){
				// altura 2
				altura=2;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano2= Random.Range(0,2);
					if(tamano2==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo4= Random.Range(0,11);
							if(enemigo4<=9){
								Instantiate(PlatPeq, Vector3(17,10,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo4==10){
								Instantiate(PlatPeqEnem, Vector3(17,10,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano2==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo5= Random.Range(0,11);
							if(enemigo5<=9){
								Instantiate(PlatGra, Vector3(17,10,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo5==10){
								Instantiate(PlatGraEnem, Vector3(17,10,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					}
						
			if(plataforma1==1){
				// altura 1
				altura=1;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano3= Random.Range(0,2);
					if(tamano3==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo6= Random.Range(0,11);
							if(enemigo6<=9){
								Instantiate(PlatPeq, Vector3(17,5,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo6==10){
								Instantiate(PlatPeqEnem, Vector3(17,5,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano3==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo7= Random.Range(0,11);
							if(enemigo7<=9){
								Instantiate(PlatGra, Vector3(17,5,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo7==10){
								Instantiate(PlatGraEnem, Vector3(17,5,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
						
			if(plataforma1==2){
				// altura 0
				altura=0;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano4= Random.Range(0,2);
					if(tamano4==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo8= Random.Range(0,11);
							if(enemigo8<=9){
								Instantiate(PlatPeq, Vector3(17,0,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo8==10){
								Instantiate(PlatPeqEnem, Vector3(17,0,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano4==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigo9= Random.Range(0,11);
							if(enemigo9<=9){
								Instantiate(PlatGra, Vector3(17,0,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigo9==10){
								Instantiate(PlatGraEnem, Vector3(17,0,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
		
		
		
		}
		
	//altura 0	
	if(altura==0){
		var plataforma2= Random.Range(0,3);
		
			if(plataforma2==0){
				// altura 1
				altura=1;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano5= Random.Range(0,2);
					if(tamano5==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoA= Random.Range(0,11);
							if(enemigoA<=9){
								Instantiate(PlatPeq, Vector3(17,5,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoA==10){
								Instantiate(PlatPeqEnem, Vector3(17,5,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano5==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoB= Random.Range(0,11);
							if(enemigoB<=9){
								Instantiate(PlatGra, Vector3(17,5,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoB==10){
								Instantiate(PlatGraEnem, Vector3(17,5,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					}
						
			if(plataforma2==1){
				// altura 0
				altura=0;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano6= Random.Range(0,2);
					if(tamano6==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoC= Random.Range(0,11);
							if(enemigoC<=9){
								Instantiate(PlatPeq, Vector3(17,0,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoC==10){
								Instantiate(PlatPeqEnem, Vector3(17,0,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano6==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoD= Random.Range(0,11);
							if(enemigoD<=9){
								Instantiate(PlatGra, Vector3(17,0,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoD==10){
								Instantiate(PlatGraEnem, Vector3(17,0,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
						
			if(plataforma2==2){
				// altura -1
				altura=-1;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano7= Random.Range(0,2);
					if(tamano7==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoE= Random.Range(0,11);
							if(enemigoE<=9){
								Instantiate(PlatPeq, Vector3(17,-5,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoE==10){
								Instantiate(PlatPeqEnem, Vector3(17,-5,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano7==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoF= Random.Range(0,11);
							if(enemigoF<=9){
								Instantiate(PlatGra, Vector3(17,-5,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoF==10){
								Instantiate(PlatGraEnem, Vector3(17,-5,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
		
		
		
		}
		
//altura -1	
	if(altura==-1){
		var plataforma3= Random.Range(0,3);
		
			if(plataforma3==0){
				// altura 0
				altura=0;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano8= Random.Range(0,2);
					if(tamano8==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoG= Random.Range(0,11);
							if(enemigoG<=9){
								Instantiate(PlatPeq, Vector3(17,0,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoG==10){
								Instantiate(PlatPeqEnem, Vector3(17,0,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano8==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoH= Random.Range(0,11);
							if(enemigoH<=9){
								Instantiate(PlatGra, Vector3(17,0,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoH==10){
								Instantiate(PlatGraEnem, Vector3(17,0,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					}
						
			if(plataforma3==1){
				// altura -1
				altura=-1;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamano9= Random.Range(0,2);
					if(tamano9==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoI= Random.Range(0,11);
							if(enemigoI<=9){
								Instantiate(PlatPeq, Vector3(17,-5,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoI==10){
								Instantiate(PlatPeqEnem, Vector3(17,-5,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamano9==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoJ= Random.Range(0,11);
							if(enemigoJ<=9){
								Instantiate(PlatGra, Vector3(17,-5,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoJ==10){
								Instantiate(PlatGraEnem, Vector3(17,-5,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
						
			if(plataforma3==2){
				// altura -2
				altura=-2;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamanoA= Random.Range(0,2);
					if(tamanoA==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoK= Random.Range(0,11);
							if(enemigoK<=9){
								Instantiate(PlatPeq, Vector3(17,-10,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoK==10){
								Instantiate(PlatPeqEnem, Vector3(17,-10,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamanoA==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoL= Random.Range(0,11);
							if(enemigoL<=9){
								Instantiate(PlatGra, Vector3(17,-10,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoL==10){
								Instantiate(PlatGraEnem, Vector3(17,-10,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
		
		
		}
		
//altura -2
	if(altura==-2){
		var plataforma4= Random.Range(0,2);
		
			if(plataforma4==0){
				// altura -1
				altura=-1;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamanoB= Random.Range(0,2);
					if(tamanoB==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoM= Random.Range(0,11);
							if(enemigoM<=9){
								Instantiate(PlatPeq, Vector3(17,-5,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoM==10){
								Instantiate(PlatPeqEnem, Vector3(17,-5,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamanoB==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoN= Random.Range(0,11);
							if(enemigoN<=9){
								Instantiate(PlatGra, Vector3(17,-5,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoN==10){
								Instantiate(PlatGraEnem, Vector3(17,-5,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					}
						
			if(plataforma4==1){
				// altura -2
				altura=-2;
				//Generar tamaño. 0 es pequeña y 1 es grande
				var tamanoC= Random.Range(0,2);
					if(tamanoC==0){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoO= Random.Range(0,11);
							if(enemigoO<=9){
								Instantiate(PlatPeq, Vector3(17,-10,0), PlatPeq.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoO==10){
								Instantiate(PlatPeqEnem, Vector3(17,-10,0), PlatPeqEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					if(tamanoC==1){
						//Generar o no enemigo. de 0 a 9 sin, el 10 con enemigo
						var enemigoP= Random.Range(0,11);
							if(enemigoP<=9){
								Instantiate(PlatGra, Vector3(17,-10,0), PlatGra.transform.rotation);
								plataforma.generar=false;
								}
							if(enemigoP==10){
								Instantiate(PlatGraEnem, Vector3(17,-10,0), PlatGraEnem.transform.rotation);
								plataforma.generar=false;
								}
						}
					
					
				}
		
		
		
		}
	}
}