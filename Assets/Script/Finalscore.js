#pragma strict


	
	private	var Mejorpartida : int;
	
	public var puntuacionpartida : GameObject;
	public var puntuacionmejor   : GameObject;




function Start () {

	//PlayerPrefs.DeleteAll();

	// Puntuacion
	
	 Mejorpartida = PlayerPrefs.GetInt("Puntuacion");

	if (PersonajeFinal.puntos > Mejorpartida){ PlayerPrefs.SetInt("Puntuacion", PersonajeFinal.puntos); Mejorpartida = PersonajeFinal.puntos;}
	
	Puntuaciondelapartida();
	
	
}	
function Puntuaciondelapartida(){


		puntuacionpartida.guiText.text = "Score: "+ PersonajeFinal.puntos;
		puntuacionmejor.guiText.text = "BEST SCORE: "+ Mejorpartida;



}

function Update () {

	
	


}