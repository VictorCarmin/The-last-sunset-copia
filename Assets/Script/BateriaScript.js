﻿#pragma strict
var bat5: GameObject;
var bat4 : GameObject;
var bat3: GameObject;
var bat2: GameObject;
var bat1: GameObject;
var bat0: GameObject;

function Start () {

}

function Update () {

if(Input.GetButtonDown("Fire1")&&PersonajeFinal.carga==5){

	PersonajeFinal.carga=4;
	
	Instantiate(bat4, transform.position, transform.rotation);
	
	Destroy(gameObject);
	
	} 
else{
	if(Input.GetButtonDown("Fire1")&&PersonajeFinal.carga==4){

	PersonajeFinal.carga=3;
	
	Instantiate(bat3, transform.position, transform.rotation);
	
	Destroy(gameObject);
	
	}

	else{ 
	
		if(Input.GetButtonDown("Fire1")&&PersonajeFinal.carga==3){

		PersonajeFinal.carga=2;
		
		Instantiate(bat2, transform.position, transform.rotation);
		
		Destroy(gameObject);
		
		} 
		
		else{
	
			if(Input.GetButtonDown("Fire1")&&PersonajeFinal.carga==2){

				PersonajeFinal.carga=1;
				
				Instantiate(bat1, transform.position, transform.rotation);
				
				Destroy(gameObject);
				
				} 
				
				else{
				
					if(Input.GetButtonDown("Fire1")&&PersonajeFinal.carga==1){

						PersonajeFinal.carga=0;
						
						Instantiate(bat0, transform.position, transform.rotation);
						
						Destroy(gameObject);
						
						} 
					}
				}
			}
		}

}