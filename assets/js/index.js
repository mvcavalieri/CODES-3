document.addEventListener('DOMContentLoaded',function(){

	let db = coDesConnect('https://app-codes-a3e27.firebaseio.com/')

	db.download('/',function(data){
		let context = data["Aparelho"]["celular"]["iphone"]["duvidas"]

		/* Referente à lista de categorias*/
		coDesReplace('.categorias-pai',context)
		console.log(context)
	})

})