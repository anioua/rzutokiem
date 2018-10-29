let town = "polska";

function showValue(id) {
    town = document.getElementById(id).value;

    ajaxWeather();
}

function ajaxWeather() {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + town + '&APPID=3c8664b6dcbd1f5c9db7d62c98ea4508&units=metric&lang=pl ', function (data) {
        console.log(data);

        $('#miasto').html(data.name);

        var temperature = data.main.temp;
        temperature = temperature.toFixed(0);
        $('#temperatura').html(temperature);

        $('#cisnienie').html(data.main.pressure);
        $('#wilgotnosc').html(data.main.humidity);
        $('#p').html(data.main.humidity);
        $('#opis').html(data.weather[0].description);

        var cloudIcon = data.weather[0].icon;
        $('#cloudIcon img').attr("src", "http://openweathermap.org/img/w/" + cloudIcon + ".png");

    })

}

$(document).ready(function () {



    function ajaxCurrency() {

        $.getJSON('http://api.nbp.pl/api/cenyzlota', function (data) {

            $('#AUprice').html(data[0].cena);
            //Wyliczona w NBP cena 1 g złota (w próbie 1000)


        })
        
        
    function currencyFixTwo(currency) {
        var fixedCurrency = currency.toFixed(2);
        return fixedCurrency;
    }

        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/usd/', function (data) {
            $('#USDcode').html(data.code);
            
            var usdFixedAsk = currencyFixTwo(data.rates[0].ask);
            var usdFixedBid = currencyFixTwo(data.rates[0].bid);
                     
            $('#USDpriceAsk').html(usdFixedAsk);
            $('#USDpriceBid').html(usdFixedBid);
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/eur/', function (data) {
            $('#EURcode').html(data.code);
            
            var eurFixedAsk = currencyFixTwo(data.rates[0].ask);
            var eurFixedBid = currencyFixTwo(data.rates[0].bid);
            
            $('#EURpriceAsk').html(eurFixedAsk);
            $('#EURpriceBid').html(eurFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/gbp/', function (data) {
            $('#GBPcode').html(data.code);
            
            var gbpFixedAsk = currencyFixTwo(data.rates[0].ask);
            var gbpFixedBid = currencyFixTwo(data.rates[0].bid);
            
            $('#GBPpriceAsk').html(gbpFixedAsk);
            $('#GBPpriceBid').html(gbpFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/chf/', function (data) {
            $('#CHFcode').html(data.code);
            
            var chfFixedAsk = currencyFixTwo(data.rates[0].ask);
            var chfFixedBid = currencyFixTwo(data.rates[0].bid);
            
            $('#CHFpriceAsk').html(chfFixedAsk);
            $('#CHFpriceBid').html(chfFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/jpy/', function (data) {
            $('#JPYcode').html(data.code);
            
            var jpyFixedAsk = currencyFixTwo(data.rates[0].ask);
            var jpyFixedBid = currencyFixTwo(data.rates[0].bid);
            
            $('#JPYpriceAsk').html(jpyFixedAsk);
            $('#JPYpriceBid').html(jpyFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/huf/', function (data) {
            $('#HUFcode').html(data.code);
            
            var hufFixedAsk = currencyFixTwo(data.rates[0].ask);
            var hufFixedBid = currencyFixTwo(data.rates[0].bid);
            
            $('#HUFpriceAsk').html(hufFixedAsk);
            $('#HUFpriceBid').html(hufFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/czk/', function (data) {
            $('#CZKcode').html(data.code);
            
            var czkFixedAsk = currencyFixTwo(data.rates[0].ask);
            var czkFixedBid = currencyFixTwo(data.rates[0].bid);
            
            $('#CZKpriceAsk').html(czkFixedAsk);
            $('#CZKpriceBid').html(czkFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/nok/', function (data) {
            $('#NOKcode').html(data.code);
            
            var nokFixedAsk = currencyFixTwo(data.rates[0].ask);
            var nokFixedBid = currencyFixTwo(data.rates[0].bid);
            
            $('#NOKpriceAsk').html(nokFixedAsk);
            $('#NOKpriceBid').html(nokFixedBid);

        })
        
    }





    //lotto http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames  
    //    https://app.lotto.pl/wyniki/?type=dl






    ajaxWeather();
    setInterval(ajaxWeather, 2700000);
    ajaxCurrency();
    setInterval(ajaxCurrency, 2700000);


})
