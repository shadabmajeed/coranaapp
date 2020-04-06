$(()=>{
var country=$('#country');
var btn=$('#btn');
var tableh=$('#thead')
var tableb=$('#tbody')
$('#lastupdate').hide()
btn.click(()=>{
    var conname=country.val()
    var val=conname.charAt(0).toUpperCase()+conname.substring(1).toLowerCase();
   
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${val}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "178daf1067msh9a869b74211b0b1p16b4f8jsna837fd521321"
        }
    }
    
    $.ajax(settings).done(function (response) {
       if(response.message!="OK"){console.log("country not found")}
       else{
        
       tableh.children().remove()
       tableb.children().remove()

        tableh.attr({"class":"table-secondary"})
        tableh.append($('<tr>').append($('<th>').text('city')).append($('<th>').text('confirmed')).append($('<th>').text('deaths')).append($('<th>').text('recovered')))
        $('#lastupdate').text("Last-Update:  "+response.data.covid19Stats[0].lastUpdate).show()
        


    for(x of response.data.covid19Stats)
    {
      var city=x.keyId.split(','[0])
        tableb.append($('<tr>').append($('<td>').text(city).attr({"class":"table-info"})).append($('<td>').text(x.confirmed).attr({"class":"warning"})).append($('<td>').text(x.deaths).attr({"class":"bg-danger"})).append($('<td>').text(x.recovered).attr({"class":"bg-success"})))
       


    }
 }
        
    });
    


})






})
