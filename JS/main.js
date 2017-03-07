/* Visibilidade */

Visibility.onVisible(function(){

	/* Animações da Home */

	setTimeout(function(){
		$(".introducao h1").addClass("animated fadeInDown");
	}, 200);

	setTimeout(function(){
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 200);

	setTimeout(function(){
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 200);

	setTimeout(function(){
		$(".animar").addClass("animated fadeInDown");
	}, 200);

	/* Animações das páginas internas */

	setTimeout(function(){
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);

	setTimeout(function(){
		$(".introducao-interna h1").addClass("animated fadeInDown");
	}, 400);

	setTimeout(function(){
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);

});

