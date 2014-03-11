#pragma strict


	
	private	var Mejorpartida : int;
	
	public var puntuacionpartida : GameObject;
	public var puntuacionmejor   : GameObject;




function Start () {

	// Puntuacion
	
	 Mejorpartida = PlayerPrefs.GetInt("Puntuacion");

	if (PersonajeFinal.puntos > Mejorpartida){ PlayerPrefs.SetInt("Puntuacion", PersonajeFinal.puntos);}
	
	Puntuaciondelapartida();
	
	
}	
function Puntuaciondelapartida(){


		puntuacionpartida.guiText.text = "Score: "+ PersonajeFinal.puntos;
		puntuacionmejor.guiText.text = "BEST SACORE: "+ Mejorpartida;



}

function Update () {

	
	


}