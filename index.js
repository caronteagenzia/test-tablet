var pnt_sublime_perfezione
var pnt_eterno_riscatto
var pnt_equilibrio_celeste

var current_view
var array_views = [
	'start',
	'domanda-1',
	'domanda-2',
	'domanda-3',
	'domanda-4',
	'domanda-5',
	'domanda-6',
	'domanda-7',
	'final'
];

$(document).ready(function(){

	pnt_sublime_perfezione = 0
	pnt_eterno_riscatto = 0
	pnt_equilibrio_celeste = 0

	current_view = 0

	showCurrentView()


	$('.ui-btn').on('click', function(){

		current_view++
		showCurrentView()

		if( $(this).parent('.view').hasClass('start') ){

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-1') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-2') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-3') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_equilibrio_celeste++
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_sublime_perfezione++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-4') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-5') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
				pnt_equilibrio_celeste++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-6') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-7') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_eterno_riscatto++
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_equilibrio_celeste++
			}

			console.log('pnt_sublime_perfezione: '+pnt_sublime_perfezione)
			console.log('pnt_eterno_riscatto: '+pnt_eterno_riscatto)
			console.log('pnt_equilibrio_celeste: '+pnt_equilibrio_celeste)

			if( ( pnt_sublime_perfezione > pnt_eterno_riscatto ) && ( pnt_sublime_perfezione > pnt_equilibrio_celeste ) ){
				console.log('SUBLIME PERFEZIONE')
				$('#ending-1').addClass('ending-shown')
			}

			if( ( pnt_eterno_riscatto > pnt_sublime_perfezione ) && ( pnt_eterno_riscatto > pnt_equilibrio_celeste ) ){
				console.log('ETERNO RISCATTO')
				$('#ending-2').addClass('ending-shown')
			}

			if( ( pnt_equilibrio_celeste > pnt_sublime_perfezione ) && ( pnt_equilibrio_celeste > pnt_eterno_riscatto ) ){
				console.log('EQUILIBRIO CELESTE')
				$('#ending-3').addClass('ending-shown')
			}

		}

	})

	$('#btn-final').on('click', function(){

		reset()

	})

	function showCurrentView(){

		console.log( array_views[i] )

		for( var i = 0; i < array_views.length; i++ ){
			if( array_views[i] == array_views[current_view] ){
				$('.'+array_views[i]).removeClass('hidden-view')
				console.log(array_views[i])
			}
			else{
				$('.'+array_views[i]).addClass('hidden-view')
			}

		}

	}

	function reset(){

		$('.container-risultato').removeClass('ending-shown')

		current_view = 0
		pnt_sublime_perfezione = 0
		pnt_eterno_riscatto = 0
		pnt_equilibrio_celeste = 0
		showCurrentView()
	}

});
