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

$('.dropdown-button').dropdown({  
      inDuration: 300,  
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );	