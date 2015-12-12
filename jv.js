$(document).ready(function(){
 
  var miamiFacts = ["The light (object) was moving very fast and there was what appeared to be another object tailong it with a flashing white light, seems as if it was trying to catch up to it. At one point the bright light object tirned sharply to a southeast difection as its tail, aura, grew and i lost sight of it in that direction.","The United Launch Alliance Atlas 5 rocket blasted off from the Cape Canaveral Air Force ", "United Launch Alliance Atlas 5 rocket blasted off from the Cape Canaveral Air Force The United Launch Alliance Atlas 5 rocket blasted off from the Cape Canaveral Air Force"];
 
   var spacepopculturesmallcontainerFacts = ["The martian ", "Starwars", "Star trek"];
 
   var rosewellFacts = ["In July 1947 there were reports of an object that crashed in the general vicinity of Roswell, New Mexico, with some alleging that an extra-terrestrial spacecraft and its alien occupants had crashed there and were recovered by military personnel. The U.S. military maintains that what was recovered was debris from an experimental high-altitude surveillance balloon belonging to a classified program named Mogul", "There is a famous image of President Nixon talking to the Apollo 11 crew consisting of Michael Collins, Neil Armstrong and Buzz Aldrin. This continued until after the Apollo 14 crew returned safely. After this it was decided that the Moon did not contain any deadly diseases. The Apollo 13 crew, who had a malfunction and had to return to Earth, did not have to be quarantined after their re-entry as they didn’t actually walk on the moon." , "In a vacuum like space, when two pieces of metal touch each other they bond together. This is a process called cold welding. On the Earth because of the oxygen in our environment this does not happen naturally but it is used during some manufacturing processes."
]


 
   $('.miami').click(function() {
 
   var idx = Math.floor(Math.random() * 3);
     alert(miamiFacts[idx]);
   });
  $('.spacepopculture').click(function() {
    var idx = Math.floor(Math.random() * 3);
    alert(spacepopculturesmallcontainerFacts[idx]);
    });

  $('.roswell').click(function() {
    var idx = Math.floor(Math.random() * 3);
    alert(rosewellFacts[idx]);
  });
  
  
});

  
