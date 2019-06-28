/* onclick's */

var printTeamNameButton = document.getElementById("printTeamName");
printTeamNameButton.onclick = function() {
                            printTeamName(teamName);
                          }

var printTeamMemberButton = document.getElementById("printTeamMember");
printTeamMemberButton.onclick = function() {
                           printTeamMember(teamMembers)
                          }

var printIntroductionButton = document.getElementById("printIntroduction");
printIntroductionButton.onclick = function() {
                           printIntroduction(teamName,teamMembers)
                          }

