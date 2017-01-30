$(function(){
	var all_countries; 	
	$.ajax({
		url:"https://restcountries.eu/rest/v1/all",
		success:function(response){
			all_countries = response;
			// console.log(all_countries);
			countries=[]; 
			$.each(all_countries,function(index,value){
			countries.push(all_countries[index].name);
			});
			var country = $("#country");
			var list = "" ;
			$.each(countries,function(index,value){
				list+="<option>"+value+"</option>";
			});
			country.append(list);
		}
	});
	
	
});