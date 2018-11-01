function ajaxActualLocation() {
    $.getJSON('http://ip-api.com/json', function (data) {

        var town = data.city;

        ajaxWeather(town);
    })
}


function showValue(id) {
    town = document.getElementById(id).value;
    ajaxWeather(town);

}

function ajaxWeather(town) {
    town = town;

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + town + '&APPID=3c8664b6dcbd1f5c9db7d62c98ea4508&units=metric&lang=pl ', function (data) {


        $('#miasto').html(data.name);

        var temperature = data.main.temp;
        temperature = temperature.toFixed(0);
        $('#temperatura').html(temperature);

        $('#cisnienie').html(data.main.pressure);
        $('#wilgotnosc').html(data.main.humidity);
        $('#wiatr').html(data.wind.speed);
        $('#opis').html(data.weather[0].description);

        var cloudIcon = data.weather[0].icon;
        $('#cloudIcon img').attr("src", "http://openweathermap.org/img/w/" + cloudIcon + ".png");

    })


}

$(document).ready(function () {



    function ajaxCurrency() {

        $.getJSON('http://api.nbp.pl/api/cenyzlota', function (data) {

            $('#AUprice').html(data[0].cena);

        })


        function currencyFixTwo(currency) {
            var fixedCurrency = currency.toFixed(2);
            return fixedCurrency;
        }

        function currencyFixThree(currency) {
            var fixedCurrency = currency.toFixed(3);
            return fixedCurrency;
        }

        function currencyFixFour(currency) {
            var fixedCurrency = currency.toFixed(4);
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

            var jpyFixedAsk = currencyFixFour(data.rates[0].ask);
            var jpyFixedBid = currencyFixFour(data.rates[0].bid);

            $('#JPYpriceAsk').html(jpyFixedAsk);
            $('#JPYpriceBid').html(jpyFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/huf/', function (data) {
            $('#HUFcode').html(data.code);

            var hufFixedAsk = currencyFixFour(data.rates[0].ask);
            var hufFixedBid = currencyFixFour(data.rates[0].bid);

            $('#HUFpriceAsk').html(hufFixedAsk);
            $('#HUFpriceBid').html(hufFixedBid);

        })
        $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/czk/', function (data) {
            $('#CZKcode').html(data.code);

            var czkFixedAsk = currencyFixThree(data.rates[0].ask);
            var czkFixedBid = currencyFixThree(data.rates[0].bid);

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

    function ajaxPollution() {

        var airQuality = "";


        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/station/findAll', function (data) {

            console.log(data);
            $('#miastoJakosc0').html(data[103].city.name);
            $('#miastoJakosc1').html(data[82].city.name);
            $('#miastoJakosc2').html(data[112].city.name);
            $('#miastoJakosc3').html(data[117].city.name);
            $('#miastoJakosc4').html(data[54].city.name);
            $('#miastoJakosc5').html(data[2].city.name);
            $('#miastoJakosc6').html(data[30].city.name);
            $('#miastoJakosc7').html(data[47].city.name);
            $('#miastoJakosc8').html(data[38].city.name);
            $('#miastoJakosc9').html(data[77].city.name);
            $('#miastoJakosc10').html(data[142].city.name);
            $('#miastoJakosc11').html(data[91].city.name);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/739', function (data) {

            airQuality = $('#daneJakosci0').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,0);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10121', function (data) {

            airQuality = $('#daneJakosci1').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,1);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/459', function (data) {

            airQuality = $('#daneJakosci2').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,2);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/530', function (data) {

            airQuality = $('#daneJakosci3').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,3);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/813', function (data) {

            airQuality = $('#daneJakosci4').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,4);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/129', function (data) {

            airQuality = $('#daneJakosci5').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,5);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/671', function (data) {

            airQuality = $('#daneJakosci6').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,6);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/987', function (data) {

            airQuality = $('#daneJakosci7').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,7);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/944', function (data) {

            airQuality = $('#daneJakosci8').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,8);

        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/877', function (data) {

            airQuality = $('#daneJakosci9').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,9);
        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/145', function (data) {

            airQuality = $('#daneJakosci10').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,10);
        })
        $.getJSON('http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/609', function (data) {

            airQuality = $('#daneJakosci11').html(data.stIndexLevel.indexLevelName);
            airQualityColor(airQuality[0].innerHTML,11);
        })

function airQualityColor(color,rowNo) {

                if (color == "Dobry") {
                    $('#jakosPowietrzaKolor'+rowNo+'').css("backgroundColor", "#13b739");

                }
                if (color == "Umiarkowany") {
                    $('#jakosPowietrzaKolor'+rowNo+'').css("backgroundColor", "#ffca18");

                }
                if (color == "Zły") {
                    $('#jakosPowietrzaKolor'+rowNo+'').css("backgroundColor", "#ff0b0b");

                }
                if (color == "Brak indeksu") {
                    $('#jakosPowietrzaKolor'+rowNo+'').css("backgroundColor", "#808080");

                }
            }

    }


    //    function ajaxHolidays() {
    //
    //        $.getJSON('https://www.calendarindex.com/api/v1/holidays?country=PL&year=2018&api_key=fe7e61b366fc7b5ef6d65d01171aa3fc83945bf6', function (data) {
    //
    //            console.log(data);
    //            $('#dataSwieta').html(data.response.holidays[0].date);
    //            $('#nazwaSwieta').html(data.response.holidays[0].name);
    //
    //
    //        })
    //    }



    //lotto http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames  
    //    https://app.lotto.pl/wyniki/?type=dl


    ajaxActualLocation();
    setInterval(ajaxWeather, 2700000);
    ajaxPollution();
    setInterval(ajaxPollution, 2700000);
    //    ajaxHolidays();
    ajaxCurrency();
    setInterval(ajaxCurrency, 2700000);


})
