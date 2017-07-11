$(document).ready(function(){
	$('.button-collapse').sideNav();

	 $('select').material_select();

	 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
	});

	onsubmit();
});        

	function validate(){
   		let especialidad = $( "#especialidad option:selected" ).text();
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
		let mainsection = $('#main-section');
		console.log(dates);

		$.each(dates, function(index,hours ) {
			 mainsection.append($('<div class="col m3 s3 hour-card"> + (hours[index].day) + (hours[index].hour) + <div>'));
		});
	}

	function onsubmit(){
		$('#search').click(function(event) {
			validate();
		});
	}