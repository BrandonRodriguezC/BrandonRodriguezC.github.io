var info=[];
fetch('https://api.github.com/users/BrandonRodriguezC/repos')
.then(response => response.json()).then(data => {
  info=data;
  console.log(info[0]);
  for (var i=0; i<info.length; i++) {
    $("#github-projects").append("<div class='grid' id='box"+i+"'></div>");
    $("#box"+i).append("<a href='"+info[i].clone_url+"'><h1>"+info[i].name+"</h1></a>");
    $("#box"+i).append("<p>"+info[i].description+"</p>");
  };
}).catch(error => console.error(error))

