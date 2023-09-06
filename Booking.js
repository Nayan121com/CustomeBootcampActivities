var bookingList = []

function showProducts() {
    var first_name=document.getElementById('first_name').value;
    var lat_name=document.getElementById('last_name').value;
    var age=document.getElementById('age').value;
    var leaving_from=document.getElementById('leaving_from').value;
    var going_to=document.getElementById('going_to').value;
    var classInput=document.getElementById('classInput').value;
    var from_date=document.getElementById('from_date').value;
    var to_date=document.getElementById('to_date').value;

    bookingList.push({
        "from_date":from_date,
        "flight_no":"1002",
        "hour_of_departure":"07H50",
        "hour_of_arrival":"10H05",
        "plane":"A220"
    });
    var tableHeader='<table><thead><tr><th>date</th><th>flight number</th><th>departunre hour</th><th>arrival hour</th</thead><tbody>'
    var tableBody='';
    for(let i=0;i<bookingList.length;i++){

        tableBody=tableBody+'<tr><td>'+bookingList[i].from_date+'</td><td>'+bookingList[i].flight_no+'</td><td>'+bookingList[i].hour_of_departure+'</td><td>'+bookingList[i].hour_of_arrival+'</td></tr>';

    }

    document.getElementById('bookingList').innerHTML=tableHeader+tableBody+'</tbody/table>';
}
