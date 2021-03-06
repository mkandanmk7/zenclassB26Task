// 1.Get all the countries from Asia continent /region using Filter function

var url="https://restcountries.eu/rest/v2/all"
      var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
          var data = JSON.parse(this.response);
         myfun(data)
         // console.log(data);
        };
        xhr.send();
        function myfun(a)
        {
          var b=a.filter(e=>{
              return e.region == "Asia"
          })
          console.log(b)
        }
		
// 2.Get all the countries with a population of less than 2 lakhs using Filter function
 function myfun(a)
        {
          var b=a.filter(e=>{
              return e.population < 200000
          })
          console.log(b)
          
          
// 3.Print the following details name, capital, flag using forEach function
 function myfun(a)
        {
          var b=a.forEach(e=>{
             console.log(e.name,e.capital,e.flag)
          })
          
          
// 4.Print the total population of countries using reduce function
function myfun(a)
         function myfun(a)
        {  
            let  b=a.reduce(function (total,current){
                
                console.log(typeof(total),typeof(current.population))
              return {population:total.population + current.population}
            },0)
          console.log(b)
        }
          
          
// 5.Print the country which uses US Dollars as currency.
			let  b=a.filter(function (current){
            return (current.currencies[0].name=="United States dollar")
          })
          console.log(b)
