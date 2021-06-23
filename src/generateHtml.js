// generate Html

const Employee = require("../lib/Employee");

const cardEmployee = function (emp, role) {
  let s1='';
  let s2='';

  if (role === "Manager") {
     s1=`<span class="fs-5"><i class="fa fa-coffee"> </i> Manager</span>`;
     s2=`<li class="list-group-item lh-1"><span id="span-label">Office Number:</span> ${emp.officeNumber}</li>`;
  }
  else if (role === "Engineer") {
    s1=`<span class="fs-5"><i class="fa fa-glasses"> </i> Engineer</span>`;
    s2=`<li class="list-group-item lh-1"><span id="span-label">Github:</span> <a href="https//github.com/${emp.github}">${emp.github}</a></li>`;
  }
  else if (role === "Intern") {
    s1=`<span class="fs-5"><i class="fa fa-user-graduate"> </i> Intern</span>`;
    s2=`<li class="list-group-item lh-1"><span id="span-label">School:</span>  ${emp.school}</a></p>`;
  }

  return `
   <div class ="col-4 mt-4">
     <div class="card h-100">
        <div class="card-header">
            <h3>${emp.name}</h3>
            ${s1}
        </div>
      
        <div class="card-body bg-light">
           <ul class="list-group list-group-flush">
            <li class="list-group-item lh-1"><span id="span-label">ID: </span> ${emp.id}</li>
            <li class="list-group-item lh-1"><span id="span-label">Email: </span> <a hred="mailto:${emp.email}">${emp.email}</a></li>
            ${s2}
           </ul>
        </div>
    </div>
  </div>
  `;
}

const generatePage = function (cards) {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Team Profile" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
 
    <title>Team Profile</title>
  </head>

  <body>
      <header>
          <nav class="navbar navbar-dark bg-danger" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center text-white text-center">My Team</span>
          </nav>
      </header>

      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${cards}
              </div>
          </div>
      </main>
  
      <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/js/bootstrap.min.js" integrity="sha512-EKWWs1ZcA2ZY9lbLISPz8aGR2+L7JVYqBAYTq5AXgBkSjRSuQEGqWx8R1zAX16KdXPaCjOCaKE8MCpU0wcHlHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> 
      </body>

 </html>
`;  

}

generateHtml = (data) => {
   page = [];
   let  emp = new Employee();

   for (let i=0; i<data.length; i++){
     emp = data[i];
     page.push(cardEmployee(emp, emp.getRol()));
   }

   const empCards = page.join('');
   return generatePage(empCards);
}

module.exports = generateHtml;
