$(()=>{

  var country=$('#country');
  var btn=$('#btn');
  var tableh=$('#thead')
  var tableb=$('#tbody')
  $('#countrydetails').hide()
//india

//india ends

 //world 
      
      var mydata;
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-193.p.rapidapi.com/statistics",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "178daf1067msh9a869b74211b0b1p16b4f8jsna837fd521321"
    }
  }
  
  $.ajax(settings).done(function (data) {

   //search 
btn.click(()=>{
  var conname=country.val()
      var val=conname.charAt(0).toUpperCase()+conname.substring(1).toLowerCase();
  x=$('#countrydetails')
  flag=false;
  mydata.response.find((found)=>{
    if (found.country==val)
    {
     flag=true;
 
     x.html(
      `<b>Country</b> :${found.country}<br>
      Total Cases :${found.cases.total}<br>
      Active Cases :${found.cases.active}<br>
      Total Deaths :${found.deaths.total}<br>
      <b>Cases Today</b> :${found.cases.new}<br>
      <b>Deaths Today</b> :${found.deaths.new}<br>
      Total Recovered :${found.cases.recovered}<br>`
      
    
      
    
     )
    }

  })
 if(flag==false){x.text("sorry no result found")}

  x.slideDown(800)

})



//search ends

//focus
country.focus(()=>{
  $('#countrydetails').slideUp()


})
//




    mydata=data;
    tableh.children().remove()
    tableb.children().remove()

     tableh.attr({"class":"table-secondary"})
     tableh.append($('<tr>').append($('<th>').html('<b>Country<br><b> &#8645;').attr({"class":"sort"})).append($('<th>').html('<b>Total<br>Cases<b> &#8645;').attr({"class":"sort"})).append($('<th>').html('<b>Active<br>Cases<b> &#8645;').attr({"class":"sort"})).append($('<th>').html('<b>Total<br>Deaths<b> &#8645;').attr({"class":"sort"})).append($('<th>').html('<b>Cases<br>Today<b> &#8645;').attr({"class":"sort"})).append($('<th>').html('<b>Deaths<br>Today<b> &#8645;').attr({"class":"sort"})).append($('<th>').html('<b>Recovered <br><b> &#8645;').attr({"class":"sort"})))
    
   $('#thead tr').attr({"class":"p-3 mb-2 bg-dark text-white"})
   
   const arraydata=[];
    
   const len=mydata.response.length;
  for(i=0;i<len;i++)
  {   if(mydata.response[i].country=="World"||mydata.response[i].country=="All"||mydata.response[i].country.charAt(0)=="-"){ continue;}
      arraydata.push(mydata.response[i])
      tableb.append($('<tr>').append($('<td>').text(mydata.response[i].country).attr({"class":"table-info"})).append($('<td>').text(mydata.response[i].cases.total)).append($('<td>').text(mydata.response[i].cases.active)).append($('<td>').text(mydata.response[i].deaths.total)).append($('<td>').text(mydata.response[i].cases.new).attr({"class":"table-danger"})).append($('<td>').text(mydata.response[i].deaths.new)).append($('<td>').text(mydata.response[i].cases.recovered).attr({"class":"table-success"})))
      
      

  }
 
 //world ends

//click
    $('.sort').click((event)=>{
         
         
      y= event.target.textContent.split(' ')[0]
      
     
   if(y=="Country"){
    arraydata.sort((a,b)=>{
    x=a.country.localeCompare(b.country);
    return x;
   

    })


   }
      else if(y=="TotalCases"){
          arraydata.sort((a,b)=>{
             return b.cases.total-a.cases.total
          })
      }
      else if(y=="ActiveCases"){
       arraydata.sort((a,b)=>{
           return b.cases.active-a.cases.active
        }) 
      }
      else if(y=="TotalDeaths"){
       arraydata.sort((a,b)=>{
           return b.deaths.total-a.deaths.total
        })
      }
      else if(y=="CasesToday"){ 
       arraydata.sort((a,b)=>{
           return b.cases.new-a.cases.new
        })
      }
      else if(y=="DeathsToday"){
        arraydata.sort((a,b)=>{
           return b.deaths.new-a.deaths.new
        })
      }
      else if(y=="Recovered"){
       arraydata.sort((a,b)=>{
           return b.cases.recovered-a.cases.recovered
        })
      }   
     
      tableb.children().remove();
     const datalen=arraydata.length;
     
      for(i=0;i<datalen;i++)
      {   
       
          tableb.append($('<tr>').append($('<td>').text(arraydata[i].country).attr({"class":"table-info"})).append($('<td>').text(arraydata[i].cases.total)).append($('<td>').text(arraydata[i].cases.active)).append($('<td>').text(arraydata[i].deaths.total)).append($('<td>').text(arraydata[i].cases.new).attr({"class":"table-danger"})).append($('<td>').text(arraydata[i].deaths.new)).append($('<td>').text(arraydata[i].cases.recovered).attr({"class":"table-success"})))
         
  
  
      }
      
   })
//click ends



  });
})














 
      
