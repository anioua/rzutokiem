function ajaxActualLocation() {
    $.getJSON('http://ip-api.com/json', function (data) {

        var town = data.city;
        if (town == "unidentified") {
            town = "Poland";
        }


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


        $.getJSON('http://api.waqi.info/feed/Gdynia/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc0').html(locationName.substring(0, 6));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 0);

        })

        $.getJSON('http://api.waqi.info/feed/Kraków/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc1').html(locationName.substring(0, 6));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 1);

        })

        $.getJSON('http://api.waqi.info/feed/Warsaw/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc2').html(locationName.substring(14, 23));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 2);

        })
        $.getJSON('http://api.waqi.info/feed/Wrocław/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc3').html(locationName.substring(0, 7));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 3);

        })
        $.getJSON('http://api.waqi.info/feed/Poznań/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc4').html(locationName.substring(0, 6));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 4);

        })
        $.getJSON('http://api.waqi.info/feed/Szczecin/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc5').html(locationName.substring(0, 8));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 5);

        })
        $.getJSON('http://api.waqi.info/feed/białystok/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc6').html(locationName.substring(0, 9));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 6);

        })
        $.getJSON('http://api.waqi.info/feed/Lublin/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc7').html(locationName.substring(0, 6));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 7);

        })
        $.getJSON('http://api.waqi.info/feed/Rzeszów/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc8').html(locationName.substring(0, 7));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 8);

        })
        $.getJSON('http://api.waqi.info/feed/Zakopane/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc9').html(locationName.substring(0, 8));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 9);

        })
        $.getJSON('http://api.waqi.info/feed/Katowice/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc10').html(locationName.substring(0, 8));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 10);

        })
        $.getJSON('http://api.waqi.info/feed/Łódź/?token=05af933043bbb0a65856da8ed3808470c0e6bc59', function (data) {

            var locationName = data.data.city.name;
            $('#miastoJakosc11').html(locationName.substring(0, 4));

            airQuality = data.data.aqi;
            airQualityColor(airQuality, 11);

        })

        function airQualityColor(color, rowNo) {

            if (color <= 15) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#116a25");
                $('#daneJakosci' + rowNo).html("Doskonała");

            }

            if ((color > 15) & (color <= 50)) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#13b739");
                $('#daneJakosci' + rowNo).html("Bardzo dobra");

            }

            if ((color > 50) && (color <= 100)) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#ffca18");
                $('#daneJakosci' + rowNo).html("Umiarkowana");

            }
            if ((color > 100) && (color <= 150)) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#ff5618");
                $('#daneJakosci' + rowNo).html("Niezdrowa");

            }
            if ((color > 150) && (color <= 200)) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#ff0b0b");
                $('#daneJakosci' + rowNo).html("Zła");

            }
            if ((color > 200) && (color <= 299)) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#6a4ad4");
                $('#daneJakosci' + rowNo).html("Bardzo niezdrowa");

            }
            if (color >= 300) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#690000");
                $('#daneJakosci' + rowNo).html("Niebezpieczna");

            }

            if (color == null) {
                $('#jakosPowietrzaKolor' + rowNo + '').css("backgroundColor", "#808080");
                $('#daneJakosci' + rowNo).html("Brak danych");

            }
        }


    }

    function news() {
        $.getJSON('https://newsapi.org/v2/top-headlines?country=pl&apiKey=8762cdced47449a9b03528bdbb6d371c', function (data) {

            console.log(data);
            $('.newsImg0').attr('src',data.articles[0].urlToImage);
            $('.newsText0').html(data.articles[0].title);

        })
        $.getJSON('https://newsapi.org/v2/top-headlines?country=pl&apiKey=8762cdced47449a9b03528bdbb6d371c', function (data) {
            
            $('.newsImg1').attr('src',data.articles[1].urlToImage);
            $('.newsText1').html(data.articles[1].title);
            
        })
        $.getJSON('https://newsapi.org/v2/top-headlines?country=pl&apiKey=8762cdced47449a9b03528bdbb6d371c', function (data) {

            $('.newsImg2').attr('src',data.articles[2].urlToImage);
            $('.newsText2').html(data.articles[2].title);

        })
        $.getJSON('https://newsapi.org/v2/top-headlines?country=pl&apiKey=8762cdced47449a9b03528bdbb6d371c', function (data) {
            
            $('.newsImg3').attr('src',data.articles[3].urlToImage);
            $('.newsText3').html(data.articles[3].title);

        })
        $.getJSON('https://newsapi.org/v2/top-headlines?country=pl&apiKey=8762cdced47449a9b03528bdbb6d371c', function (data) {

            $('.newsImg4').attr('src',data.articles[4].urlToImage);
            $('.newsText4').html(data.articles[4].title);

        })
        $.getJSON('https://newsapi.org/v2/top-headlines?country=pl&apiKey=8762cdced47449a9b03528bdbb6d371c', function (data) {

            $('.newsImg5').attr('src',data.articles[5].urlToImage);
            $('.newsText5').html(data.articles[5].title);

        })

    }


    //        8762cdced47449a9b03528bdbb6d371c newsapi




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
    news();
    setInterval(news, 2700000);


})
