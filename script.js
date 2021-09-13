active_arr=['HOME','CONTACT','ABOUT']
function setactive(id){
   document.getElementById(id).classList.add('all');
   index=active_arr.indexOf(id);
   if(index==1){
   	 document.getElementById('HOME').classList.remove('all');
   	 document.getElementById('ABOUT').classList.remove('all');
   	 document.getElementById('contactcontent').classList.remove('active');
   	 document.getElementById('homecontent').classList.add('active');
   	 document.getElementById('aboutcontent').classList.add('active');
   	 
   	 
   }
   if(index==0){
   	 document.getElementById('CONTACT').classList.remove('all');
   	 document.getElementById('ABOUT').classList.remove('all');
   	 document.getElementById('homecontent').classList.remove('active');
   	 document.getElementById('contactcontent').classList.add('active');
   	 document.getElementById('aboutcontent').classList.add('active');
   }
  if(index==2){
   	 document.getElementById('HOME').classList.remove('all');
   	 document.getElementById('CONTACT').classList.remove('all');
   	 document.getElementById('aboutcontent').classList.remove('active');
   	 document.getElementById('homecontent').classList.add('active');
   	 document.getElementById('contactcontent').classList.add('active');
   }

}
