 // data (variables)
 var teamName = `SWN2 => Still Without Name in Week 2`;
 var teamMembers= [`Nelson Najarro`,`There\'s no one more yet`];

 // functions
 function printTeamName(strTeamName){
    console.log(`Hello Our team name is:  + ${strTeamName}`);
   }
   function printTeamMember(arrayTeamMembers){
    var i = 0;
     console.log(`Team members:`);
     for (i=0;i<arrayTeamMembers.length;i++){
       console.log(`${arrayTeamMembers[i]}`);
     }
   } 
  function printIntroduction(strTeamName,arrayTeamMembers) {
    printTeamName(strTeamName);
    printTeamMember(arrayTeamMembers);
  }

/* onclick's */