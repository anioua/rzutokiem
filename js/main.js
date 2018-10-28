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

            //            console.log(data[0].data);

        })

        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/usd/', function (data) {
            $('#USDcode').html(data.code);
            $('#USDpriceAsk').html(data.rates[0].ask);
            $('#USDpriceBid').html(data.rates[0].bid);
        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/eur/', function (data) {
            $('#EURcode').html(data.code);
            $('#EURpriceAsk').html(data.rates[0].ask);
            $('#EURpriceBid').html(data.rates[0].bid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/gbp/', function (data) {
            $('#GBPcode').html(data.code);
            $('#GBPpriceAsk').html(data.rates[0].ask);
            $('#GBPpriceBid').html(data.rates[0].bid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/chf/', function (data) {
            $('#CHFcode').html(data.code);
            $('#CHFpriceAsk').html(data.rates[0].ask);
            $('#CHFpriceBid').html(data.rates[0].bid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/jpy/', function (data) {
            $('#JPYcode').html(data.code);
            $('#JPYpriceAsk').html(data.rates[0].ask);
            $('#JPYpriceBid').html(data.rates[0].bid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/huf/', function (data) {
            $('#HUFcode').html(data.code);
            $('#HUFpriceAsk').html(data.rates[0].ask);
            $('#HUFpriceBid').html(data.rates[0].bid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/czk/', function (data) {
            $('#CZKcode').html(data.code);
            $('#CZKpriceAsk').html(data.rates[0].ask);
            $('#CZKpriceBid').html(data.rates[0].bid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/nok/', function (data) {
            $('#NOKcode').html(data.code);
            $('#NOKpriceAsk').html(data.rates[0].ask);
            $('#NOKpriceBid').html(data.rates[0].bid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/hrk/', function (data) {
            $('#HRKcode').html(data.code);
            $('#HRKpriceAsk').html(data.rates[0].ask);
            $('#HRKpriceBid').html(data.rates[0].bid);

        })

    }





    //lotto http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames  
    //    https://app.lotto.pl/wyniki/?type=dl






    ajaxWeather();
    setInterval(ajaxWeather, 2700000);
    ajaxCurrency();
    setInterval(ajaxCurrency, 2700000);


})
