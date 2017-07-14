$(document).ready(function(){
	$('.button-collapse').sideNav();

	$('select').material_select();

	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

	onsubmit();
	searchdates();
});  


function validate(){
	let especialidad = $("#especialidad option:selected" ).text();
	let fecha = $('#appointment-date').val();

	if(especialidad == null || especialidad == ''){
		alert('Debe elegir una especialidad para consultar');
	}else if(fecha == null || fecha == ''){
		alert('Debe elegir fecha para consultar')
	}else {
		searchdates();
	}
}

function searchdates(){
	let dates = get_dates();
	let container = $('#take_appointment');
}

function onsubmit(){
	$('#searchAvailability').click(function(event) {
		$('#searchAvailability').addClass('hidden');
		validate();
		$('#appointments').removeClass('hidden');
		payment();

	});

function payment(){
		$('.hour-card').on('click',function(){
			$('#appointments').addClass('hidden');
			$('#payment').removeClass('hidden');
		});
	}
}	