$(()=>{
var country=$('#country');
var btn=$('#btn');
var tableh=$('#thead')
var tableb=$('#tbody')
btn.click(()=>{})
    var conname=country.val()
    var val=conname.charAt(0).toUpperCase()+conname.substring(1).toLowerCase();
    var mydata;
    $.ajax({
        url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
        dataType: 'json',
        success: function(data) {
          mydata=data;
          tableh.children().remove()
          tableb.children().remove()
   
           tableh.attr({"class":"table-secondary"})
           tableh.append($('<tr>').append($('<th>').text('country')).append($('<th>').text('totalcases')).append($('<th>').text('active cases')).append($('<th>').text('deaths')).append($('<th>').text('new cases today')).append($('<th>').text('new deaths today')).append($('<th>').text('recovered')))
          
         $('#thead tr').attr({"class":"p-3 mb-2 bg-dark text-white"})
         $('#body tr').attr({"class":"table-active"})
   
   
       for(i=1;i<=182;i++)
       {
         
           tableb.append($('<tr>').append($('<td>').text(mydata.countryitems[0][i].title).attr({"class":"table-info"})).append($('<td>').text(mydata.countryitems[0][i].total_cases)).append($('<td>').text(mydata.countryitems[0][i].total_active_cases)).append($('<td>').text(mydata.countryitems[0][i].total_deaths)).append($('<td>').text(mydata.countryitems[0][i].total_new_cases_today).attr({"class":"table-danger"})).append($('<td>').text(mydata.countryitems[0][i].total_new_deaths_today)).append($('<td>').text(mydata.countryitems[0][i].total_recovered).attr({"class":"table-success"})))
          
   
   
       }
          
        }
      });
    









})
