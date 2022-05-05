$(document).ready(function(){

	var slider = document.getElementById("flying");
	var output = document.getElementById("demo");
	var val_type = $('input[name="type_roof_1"]').val();
	output.innerHTML = slider.value * val_type + ' ₽';
	var summ = output.innerHTML;


	slider.oninput = function() {
	  output.innerHTML = this.value * val_type + ' ₽';
	}
	
	var val_line = $('input[name="flevel"]').val();
	var val_type_1 = $('input[name="type_roof_1"]').val();

	sum_1 = parseInt(val_line) * parseInt(val_type_1) + ' ₽';

	$('#demo').html(sum_1)

  	var ii = 0; 
	/*Выбор типа крыши*/
	if(ii==0) {ii++;
	$('.type_roof_2_title').click(function(){ii++;
		$('.type_roof_2_title').css({'outline-color':'red'});
		$('.type_roof_1_title').css({'outline-color':'unset'});
		$('.materials_roof_1_title').css({'outline-color':'red'});
		$('.materials_roof_2_title').css({'outline-color':'unset'});
		var val_line = $('input[name="flevel"]').val();
		var val_type_2 = $('input[name="type_roof_2"]').val();
		sum_2 = parseInt(val_line) * parseInt(val_type_2);
		$('#demo').html(sum_2);
		var slider_2 = document.getElementById("flying");
		var output_2 = document.getElementById("demo");
		output_2.innerHTML = slider_2.value * val_type_2 + ' ₽';
		var summ_2 = output_2.innerHTML;


		slider_2.oninput = function() {
		  output_2.innerHTML = this.value * val_type_2 + ' ₽';
		}
		i--;
	});};
	if(ii==1) { ii--;
	$('.type_roof_1_title').click(function(){ii--;
		$('.type_roof_1_title').css({'outline-color':'red'});
		$('.type_roof_2_title').css({'outline-color':'unset'});
		$('.materials_roof_1_title').css({'outline-color':'red'});
		$('.materials_roof_2_title').css({'outline-color':'unset'});
		var val_line = $('input[name="flevel"]').val();
		var val_type_1 = $('input[name="type_roof_1"]').val();
		sum_1 = parseInt(val_line) * parseInt(val_type_1);
		$('#demo').html(sum_1);
		var slider_1 = document.getElementById("flying");
		var output_1 = document.getElementById("demo");
		output_1.innerHTML = slider_1.value * val_type_1 + ' ₽';
		var summ_1 = output_1.innerHTML;


		slider_1.oninput = function() {
		  output_1.innerHTML = this.value * val_type_1 + ' ₽';
		}
		i--;
	});};

	var i = 0;
	/*Выбор материала крыши*/
	
	$('.materials_roof_2_title').click(function(){i++;
		
		if(ii==1){
		$('.materials_roof_2_title').css({'outline-color':'red'});
		$('.materials_roof_1_title').css({'outline-color':'unset'});
		var val_line = $('input[name="flevel"]').val();
		var val_type_2m = $('input[name="materials_roof_2"]').val();
		var val_type_2 = $('input[name="type_roof_2"]').val();
		var ms2 = parseInt(val_type_2m) + parseInt(val_type_2);
		sum_2m = parseInt(val_line) * (parseInt(val_type_2m) + parseInt(val_type_2));
		$('#demo').html(sum_2m);
		var slider_2m = document.getElementById("flying");
		var output_2m = document.getElementById("demo");
		output_2m.innerHTML = sum_2m + ' ₽';
		var summ_2m = output_2m.innerHTML;

		 slider_2m.oninput = function() {
		  output_2m.innerHTML = this.value * ms2 + ' ₽';
		};};

		if(ii==0){
		$('.materials_roof_2_title').css({'outline-color':'red'});
		$('.materials_roof_1_title').css({'outline-color':'unset'});
		var val_line = $('input[name="flevel"]').val();
		var val_type_2m = $('input[name="materials_roof_2"]').val();
		var val_type_1 = $('input[name="type_roof_1"]').val();
		var ms1 = parseInt(val_type_2m) + parseInt(val_type_1);
		sum_2m = parseInt(val_line) * (parseInt(val_type_2m) + parseInt(val_type_1));
		$('#demo').html(sum_2m);
		var slider_2m = document.getElementById("flying");
		var output_2m = document.getElementById("demo");
		output_2m.innerHTML = sum_2m + ' ₽';
		slider_2m.oninput = function() {
		  output_2m.innerHTML = this.value * ms1 + ' ₽';
		};};

	});

	
	$('.materials_roof_1_title').click(function(){
		
		if(ii==1){
		$('.materials_roof_1_title').css({'outline-color':'red'});
		$('.materials_roof_2_title').css({'outline-color':'unset'});
		var val_line = $('input[name="flevel"]').val();
		var val_type_2 = $('input[name="type_roof_2"]').val();
		sum_2 = parseInt(val_line) * parseInt(val_type_2);
		$('#demo').html(sum_2);
		var slider_2 = document.getElementById("flying");
		var output_2 = document.getElementById("demo");
		output_2.innerHTML = slider_2.value * val_type_2 + ' ₽';
		var summ_2 = output_2.innerHTML;


		slider_2.oninput = function() {
		  output_2.innerHTML = this.value * val_type_2 + ' ₽';
		}}

		if(ii==0){
		$('.materials_roof_1_title').css({'outline-color':'red'});
		$('.materials_roof_2_title').css({'outline-color':'unset'});
		var val_line = $('input[name="flevel"]').val();
		var val_type_1 = $('input[name="type_roof_1"]').val();
		sum_1 = parseInt(val_line) * parseInt(val_type_1);
		$('#demo').html(sum_1);
		var slider_1 = document.getElementById("flying");
		var output_1 = document.getElementById("demo");
		output_1.innerHTML = slider_1.value * val_type_1 + ' ₽';
		var summ_1 = output_1.innerHTML;


		slider_1.oninput = function() {
		  output_1.innerHTML = this.value * val_type_1 + ' ₽';
		}
		};
	});
	
	 /*отправить значние в поле*/
	 
    $('.calc_button_call').click(function(){
        var primer = $('#demo').html();
        $('input[name="time"]').val(primer);
    });

		

});