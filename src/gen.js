function next(){
    console.log(c)
    arr.push(document.getElementsByClassName('name')[c].value)
    localStorage.setItem("arr", JSON.stringify(arr))
    var time = document.getElementsByClassName('sTime')[0].value
    var classes = document.getElementsByClassName('nClasses')[0].value
    var duration = document.getElementsByClassName('lunchDuration')[0].value
    var classDur = document.getElementById('classDuration').value
    console.log(time)
    localStorage.setItem("time", time)
    localStorage.setItem("nClass", classes)
    localStorage.setItem("duration", duration)
    localStorage.setItem("classDur", classDur)

    window.location.replace("02.html")

}

function print(){
    // console.log("?")
    var time = Number(localStorage.getItem("time"))
    // console.log(typeof time)
    var nClass = Number(localStorage.getItem("nClass"))
    var duration = Number(localStorage.getItem("duration"))
    var classDuration = Number(localStorage.getItem('classDur'))
    var subjectsRaw = localStorage.getItem("arr")
    var subjects = JSON.parse(subjectsRaw)
    localStorage.clear()
    var days = ['Monday', 'Tuesdaay', 'Wednesday', 'Thursday', 'Friday']
    var zero = '0'
    var hour = ' '
    var minute = ' '
    var html = "<table border = 1 id = table class = table table-bordered table-stripped>"
    html += '<thead class=thead-dark><tr><th>Days/Time</th>'

    for (let i = 0; i < nClass+1; i++) {
        if (i == ((nClass/2))) {
            var h = Math.floor(time/60)
            var min = time % 60
            time += duration
            if (Math.floor(h / 10) == 0) {
                hour = zero.concat(h.toString());
            }else{
                hour = h.toString()
            }
            if(Math.floor(min / 10) == 0){
                minute = zero.concat(min.toString())
                console.log(minute)
            }else{
                minute = min.toString()
            }
            console.log(hour)
        }else{
            var h = Math.floor(time/60)
            var min = time % 60
            time += classDuration
            if (Math.floor(h / 10) == 0) {
                hour = zero.concat(h.toString());
            }else{
                hour = h.toString()
            }
            if(Math.floor(min / 10) == 0){
                minute = zero.concat(min.toString())
                console.log(minute)
            }else{
                minute = min.toString()
            }
        }
        html += '<th>' + hour + ':' + minute + '</th>'
    }
    html += '</tr></thead>'

    for (var i = 1; i <= 5; i++) {
        html += "<tbody><tr><th>" + days[i-1] + '</th>'
        for (let j = 1; j < nClass; j++) {
             console.log('test2')
            if (j == nClass/2) {
                html += '<td>' + subjects[Math.floor(Math.random() * subjects.length + 0)] + '</td>' + '<td> Lunch </td>' + '<td>' + subjects[Math.floor(Math.random() * subjects.length + 0)] + '</td>'
            } else {
                html += '<td>' + subjects[Math.floor(Math.random() * subjects.length + 0)] + '</td>'
            }
        }
    html += "</tr></tbody>"
  }
  html += "</table>"
  document.getElementById("tt").innerHTML = html;
    // document.write('<table border = 1>' + table + '</table>')
    // document.write = "<table border = 1>"
    // document.write = "<tr><td>foo</td></tr>"
    // document.write = "</table>"
}