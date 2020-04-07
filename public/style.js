$(()=>{
  var country=$('#country');
  var btn=$('#btn');
  var tableh=$('#thead')
  var tableb=$('#tbody')
  
      var conname=country.val()
      var val=conname.charAt(0).toUpperCase()+conname.substring(1).toLowerCase();
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
   

    mydata=data;
    tableh.children().remove()
    tableb.children().remove()

     tableh.attr({"class":"table-secondary"})
     tableh.append($('<tr>').append($('<th>').html('country  &#8645;').attr({"class":"sort"})).append($('<th>').html('total-cases  &#8645;').attr({"class":"sort"})).append($('<th>').html('active-cases  &#8645;').attr({"class":"sort"})).append($('<th>').html('total-deaths  &#8645;').attr({"class":"sort"})).append($('<th>').html('cases-today  &#8645;').attr({"class":"sort"})).append($('<th>').html('deaths-today  &#8645;').attr({"class":"sort"})).append($('<th>').html('recovered  &#8645;').attr({"class":"sort"})))
    
   $('#thead tr').attr({"class":"p-3 mb-2 bg-dark text-white"})
   
   const arraydata=[];

 
  for(i=0;i<=216;i++)
  {
      arraydata.push(mydata.response[i])
      tableb.append($('<tr>').append($('<td>').text(mydata.response[i].country).attr({"class":"table-info"})).append($('<td>').text(mydata.response[i].cases.total)).append($('<td>').text(mydata.response[i].cases.active)).append($('<td>').text(mydata.response[i].deaths.total)).append($('<td>').text(mydata.response[i].cases.new).attr({"class":"table-danger"})).append($('<td>').text(mydata.response[i].deaths.new)).append($('<td>').text(mydata.response[i].cases.recovered).attr({"class":"table-success"})))
      
      

  }
 













//click
    $('.sort').click((event)=>{
         
         
      y= event.target.textContent.split(' ')[0]
     
   if(y=="country"){
    arraydata.sort((a,b)=>{
    x=a.country.localeCompare(b.country);
    return x;
   

    })


   }
      else if(y=="total-cases"){
          arraydata.sort((a,b)=>{
             return b.cases.total-a.cases.total
          })
      }
      else if(y=="active-cases"){
       arraydata.sort((a,b)=>{
           return b.cases.active-a.cases.active
        }) 
      }
      else if(y=="total-deaths"){
       arraydata.sort((a,b)=>{
           return b.deaths.total-a.deaths.total
        })
      }
      else if(y=="cases-today"){
       arraydata.sort((a,b)=>{
           return b.cases.new-a.cases.new
        })
      }
      else if(y=="deaths-today"){
        arraydata.sort((a,b)=>{
           return b.deaths.new-a.deaths.new
        })
      }
      else if(y=="recovered"){
       arraydata.sort((a,b)=>{
           return b.cases.recovered-a.cases.recovered
        })
      }   
      
      tableb.children().remove();
     
      for(i=0;i<=216;i++)
      {   
       
          tableb.append($('<tr>').append($('<td>').text(arraydata[i].country).attr({"class":"table-info"})).append($('<td>').text(arraydata[i].cases.total)).append($('<td>').text(arraydata[i].cases.active)).append($('<td>').text(arraydata[i].deaths.total)).append($('<td>').text(arraydata[i].cases.new).attr({"class":"table-danger"})).append($('<td>').text(arraydata[i].deaths.new)).append($('<td>').text(arraydata[i].cases.recovered).attr({"class":"table-success"})))
         
  
  
      }
      
   })

  });
})














 
      
