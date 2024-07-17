
const callAPi = async () =>{
  const res = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
  const response=await res.json();
  console.log(response)
  response.sort((a, b) => a.NRR - b.NRR);
  response.map((item)=>{
    const tr =document.createElement('tr');
    tr.innerHTML = `<td>${item.No}</td>
                    <td>${item.Team}</td> 
                    <td> ${item.Matches} </td> 
                    <td> ${item.Won} </td> 
                    <td> ${item.Lost} </td> 
                    <td> ${item.Tied} </td> 
                    <td> ${item.NRR} </td> 
                    <td> ${item.Points} </td>`
    document.querySelector("tbody").appendChild(tr)
    })
  }
  callAPi();