$(document).ready(function(){
    
    function ajaxWeather() {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Cracow&APPID=3c8664b6dcbd1f5c9db7d62c98ea4508&units=metric', function(data){
           $('#temperatura').html(data.main.temp); 
        
        })
        
    }
   
    
    function ajaxCurrency() {
        
        $.getJSON('http://api.nbp.pl/api/cenyzlota', function(data){
            
            $('#AUprice').html(data[0].cena);
            //Wyliczona w NBP cena 1 g złota (w próbie 1000)
            
//            console.log(data[0].data);
            
        })
        
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/usd/', function(data){
            $('#USDcode').html(data.code);
            $('#USDpriceAsk').html(data.rates[0].ask);
            $('#USDpriceBid').html(data.rates[0].bid);  
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/eur/', function(data){
            $('#EURcode').html(data.code);
            $('#EURpriceAsk').html(data.rates[0].ask);
            $('#EURpriceBid').html(data.rates[0].bid);  
 
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/gbp/', function(data){
            $('#GBPcode').html(data.code);
            $('#GBPpriceAsk').html(data.rates[0].ask);
            $('#GBPpriceBid').html(data.rates[0].bid);  
 
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/chf/', function(data){
            $('#CHFcode').html(data.code);
            $('#CHFpriceAsk').html(data.rates[0].ask);
            $('#CHFpriceBid').html(data.rates[0].bid);  
 
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/jpy/', function(data){
            $('#JPYcode').html(data.code);
            $('#JPYpriceAsk').html(data.rates[0].ask);
            $('#JPYpriceBid').html(data.rates[0].bid);  
 
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/huf/', function(data){
            $('#HUFcode').html(data.code);
            $('#HUFpriceAsk').html(data.rates[0].ask);
            $('#HUFpriceBid').html(data.rates[0].bid);  
 
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/czk/', function(data){
            $('#CZKcode').html(data.code);
            $('#CZKpriceAsk').html(data.rates[0].ask);
            $('#CZKpriceBid').html(data.rates[0].bid);  
 
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/nok/', function(data){
            $('#NOKcode').html(data.code);
            $('#NOKpriceAsk').html(data.rates[0].ask);
            $('#NOKpriceBid').html(data.rates[0].bid);  
 
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/hrk/', function(data){
            $('#HRKcode').html(data.code);
            $('#HRKpriceAsk').html(data.rates[0].ask);
            $('#HRKpriceBid').html(data.rates[0].bid);  
 
        })
        
    }
    
    
    
    
    
  //lotto http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames  
    
    
    
    
    
    
  ajaxWeather(); 
setInterval(ajaxWeather, 10000);
  ajaxCurrency();  
  setInterval(ajaxCurrency, 200000);
    
})