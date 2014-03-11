//	OnTouchDown.js
//	Allows "OnMouseDown()" events to work on the iPhone.
//	Attack to the main camera.
 
#pragma strict
#pragma implicit
#pragma downcast
 
function Update () {
	// Code for OnMouseDown in the iPhone. Unquote to test.
	var hit : RaycastHit;
	for (var i = 0; i < Input.touchCount; ++i) {
		if (Input.GetTouch(i).phase == TouchPhase.Began) {
		// Construct a ray from the current touch coordinates
		var ray = camera.ScreenPointToRay (Input.GetTouch(i).position);
		if (Physics.Raycast (ray,hit)) {
			hit.transform.gameObject.SendMessage("OnMouseDown");
	      }
	   }
   }
}