import { Component } from '@angular/core';

import Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  selectedOption:any;
  constructor()
  {
    
}
// selectvalue(value)
// {
//   console.log("Inside value",value)
// }


somethingChanged(value)
{
  this.selectedOption=value;
  console.log("The Value is",value);
  this.getMyProperty(value);
}
getMyProperty(FilterName)
{
  console.log("On Key up Event",this.selectedOption,"The FIlterName is",FilterName,this.selectedOption);
  if(this.selectedOption == 'Name')
  {
    console.log("Filter to be applied is Name Filter");
    var input, filter, table, tr, td, i, txtValue;
          input=document.getElementById('myInput');
           console.log("THe Input is",input.value);
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          ///console.log('tr',tr)
          for (i = 0; i < tr.length; i++) 
          {
              td = tr[i].getElementsByTagName("td")[0];
              //console.log(td,i)
             if (td) 
                {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) 
                     {
                        tr[i].style.display = "";
                     } 
              else 
                {
                      tr[i].style.display = "none";
                }
                }       
          }
  
  }
  else if(this.selectedOption == 'Country')
  {
          console.log("The Value of Filter is Country");
          var input, filter, table, tr, td, i, txtValue;
          input=document.getElementById('myInput');
          // console.log("THe Input is",input.value);
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          ///console.log('tr',tr)
          for (i = 0; i < tr.length; i++) 
          {
              td = tr[i].getElementsByTagName("td")[1];
              //console.log(td,i)
             if (td) 
                {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) 
                     {
                        tr[i].style.display = "";
                     } 
              else 
                {
                      tr[i].style.display = "none";
                }
                }       
          }
  
  }
}
} 