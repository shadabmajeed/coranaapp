$(()=>{
var country=$('#country');
var btn=$('#btn');
var tableh=$('#thead')
var tableb=$('#tbody')

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
           tableh.append($('<tr>').append($('<th>').html('country  &#8645;').attr({"class":"sort"})).append($('<th>').html('total-cases  &#8645;').attr({"class":"sort"})).append($('<th>').html('active-cases  &#8645;').attr({"class":"sort"})).append($('<th>').html('total-deaths  &#8645;').attr({"class":"sort"})).append($('<th>').html('cases-today  &#8645;').attr({"class":"sort"})).append($('<th>').html('deaths-today  &#8645;').attr({"class":"sort"})).append($('<th>').html('recovered  &#8645;').attr({"class":"sort"})))
          
         $('#thead tr').attr({"class":"p-3 mb-2 bg-dark text-white"})
         
         const arraydata=[];

       
        for(i=1;i<=182;i++)
        {
            arraydata.push(mydata.countryitems[0][i])
            tableb.append($('<tr>').append($('<td>').text(mydata.countryitems[0][i].title).attr({"class":"table-info"})).append($('<td>').text(mydata.countryitems[0][i].total_cases)).append($('<td>').text(mydata.countryitems[0][i].total_active_cases)).append($('<td>').text(mydata.countryitems[0][i].total_deaths)).append($('<td>').text(mydata.countryitems[0][i].total_new_cases_today).attr({"class":"table-danger"})).append($('<td>').text(mydata.countryitems[0][i].total_new_deaths_today)).append($('<td>').text(mydata.countryitems[0][i].total_recovered).attr({"class":"table-success"})))
            
            
    
        }
       
       
        
   
       $('.sort').click((event)=>{
       
       
       y= event.target.textContent.split(' ')[0]
       console.log(y)
    if(y=="country"){}
       else if(y=="total-cases"){
           arraydata.sort((a,b)=>{
              return b.total_cases-a.total_cases
           })
       }
       else if(y=="active-cases"){
        arraydata.sort((a,b)=>{
            return b.total_active_cases-a.total_active_cases
         }) 
       }
       else if(y=="total-deaths"){
        arraydata.sort((a,b)=>{
            return b.total_deaths-a.total_deaths
         })
       }
       else if(y=="cases-today"){
        arraydata.sort((a,b)=>{
            return b.total_new_cases_today-a.total_new_cases_today
         })
       }
       else if(y=="deaths-today"){
         arraydata.sort((a,b)=>{
            return b.total_new_deaths_today-a.total_new_deaths_today
         })
       }
       else if(y=="recovered"){
        arraydata.sort((a,b)=>{
            return b.total_recovered-a.total_recovered
         })
       }   
       
       tableb.children().remove();
      
       for(i=1;i<=182;i++)
       {   console.log(arraydata.length)
        
           tableb.append($('<tr>').append($('<td>').text(arraydata[i].title).attr({"class":"table-info"})).append($('<td>').text(arraydata[i].total_cases)).append($('<td>').text(arraydata[i].total_active_cases)).append($('<td>').text(arraydata[i].total_deaths)).append($('<td>').text(arraydata[i].total_new_cases_today).attr({"class":"table-danger"})).append($('<td>').text(arraydata[i].total_new_deaths_today)).append($('<td>').text(arraydata[i].total_recovered).attr({"class":"table-success"})))
          
   
   
       }
       
    })





        }
      });
    









})
