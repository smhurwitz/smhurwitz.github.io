// Initialize global vars
var audio = new Audio('audio/mixkit-negative-answer-lose-2032.wav');
var selectedGender;
var selectedRace;
var placeholder_img
var visited_sections = [];

window.onload = function () {

  // Re-init dropdowns
  $("#selectGender")[0].value = ""
  $("#selectRace")[0].value = ""
  $("#continueButton")[0].disabled = true; 
  $("#selectGender_modal")[0].value = ""
  $("#selectRace_modal")[0].value = ""
  $("#modalConfirmButton")[0].disabled = true; 

  // Set up event listeners from dropdowns
  $('#selectRace').change(changeIntroPortrait);
  $('#selectGender').change(changeIntroPortrait);

  $('#selectRace_modal').change(changeModalPortrait);
  $('#selectGender_modal').change(changeModalPortrait);

  // Enable click-to-play and -pause functionality on video
  $("#video").click(function() {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });

  placeholder_img = $("#loadingPlaceholder")[0]

};

var audio = new Audio('audio/mixkit-negative-answer-lose-2032.wav');
var selectedGender;
var selectedRace;

changeIntroPortrait = function(){
    
    selectedGender = $("#selectGender").val();
    selectedRace = $("#selectRace").val();
    var portrait_filename

    if (selectedGender == "" || selectedRace == "") {
      portrait_filename = "images/blank_portrait.png"
      $('#introPortrait')[0].style.opacity = .5
      $("#continueButton")[0].disabled = true; 
    } else {
      portrait_filename = "images/" + selectedRace + "_" + selectedGender + ".jpg"
      $('#introPortrait')[0].style.opacity = 1
      $("#continueButton")[0].disabled = false; 
    }
    $('#introPortrait')[0].src = portrait_filename    

  }

changeModalPortrait = function(){
  
  var selectedGender_modal = $("#selectGender_modal").val();
  var selectedRace_modal = $("#selectRace_modal").val();
  var portrait_filename

  console.log(selectedGender_modal, selectedRace_modal)

  if (selectedGender_modal == "" || selectedRace_modal == "") {
    console.log("not valid")
    portrait_filename = "images/blank_portrait.png"
    $('#introPortrait_modal')[0].style.opacity = .5
    $("#modalConfirmButton")[0].disabled = true; 
  } else {
    console.log("valid")
    portrait_filename = "images/" + selectedRace_modal + "_" + selectedGender_modal + ".jpg"
    console.log($('#introPortrait_modal'))
    console.log($('#introPortrait_modal')[0])
    $('#introPortrait_modal')[0].style.opacity = 1
    $("#modalConfirmButton")[0].disabled = false; 
  }
  $('#introPortrait_modal')[0].src = portrait_filename    

}

updateAvatar = function() {
  video.pause()
  console.log("selected avatar")
  selectedGender = $("#selectGender_modal").val();
  selectedRace = $("#selectRace_modal").val();
  placeholder_img.src = "images/" + selectedRace + "_" + selectedGender + ".jpg"

  var current_src = video_source.src;
  video_name_end = current_src.split("man")[1];
  video_filename = "videos/" + selectedRace + "_" + selectedGender + video_name_end
  console.log(video_filename)

  video_source.setAttribute('src', video_filename);
  video.poster = "images/" + selectedRace + "_" + selectedGender + ".jpg"

  video.load();

  visited_sections = [];

  $('#reselectModal').modal('hide')
};


const all_sections_no_intro = ["new_exec", "economy", "crim", "military", "protest", "climate", "cyber", "beginning", "conclusion"];

var video = document.getElementById('video');
var video_source = $('#video source')[0];

loadSpeech = function(event, back=false) {
  // If there is a video playing, pause it
  if (back==true) {
    video.pause()
  }

  if (back==false) {
    placeholder_img.src = "images/" + selectedRace + "_" + selectedGender + ".jpg"
  }

  placeholder_img.style.display = "block"
  console.log("loading speech intro; showing placeholder")

  $('#faceSelect')[0].style.display = "none"
  $('#speech')[0].style.display = "block"

  $('#video_col')[0].style.display = "table-cell"
  $('#intro')[0].style.display = "table-cell"

  if (back == true) {
    // Hide all other sections
    for (const id of all_sections_no_intro) {
      jquery_str = "#" + id;
      $(jquery_str)[0].style.display = "none";
    }

    // Scroll to desired link
    location.hash = jquery_str + "_link";

  }

  var video_filename = "videos/" + selectedRace + "_" + selectedGender + "_intro.mov"
  video_source.setAttribute('src', video_filename);
  video.poster = "images/" + selectedRace + "_" + selectedGender + ".jpg"

  video.load();

  // Set up video events
  $("#video").on("loadstart", function() { placeholder_img.style.display = "block"; console.log("loading; showing placeholder");} );
  $("#video").on("loadeddata", function() { placeholder_img.style.display = "none"; console.log("hiding placeholder"); } );

  if (back == false) {
    video.play()
  }
}



loadSection = function(event, warn=false) {
  // If there is a video playing, pause it
  video.pause()

  placeholder_img.style.display = "block"
  console.log("switching sections; showing placeholder")

  var section = event.target.id
  section = section.split("_link")[0]; // Remove "_link"
  console.log("switching to section:" + section)

  // Determine if this is the first time we've visited this section
  if (visited_sections.indexOf(section) > -1) {
    var visited = true
  } else {
    var visited = false;
    visited_sections.push(section);
  }

  const sections_to_hide = ["intro", "new_exec", "economy", "crim", "military", "protest", "climate", "cyber", "beginning", "conclusion"];
  const i_remove = sections_to_hide.indexOf(section);
  sections_to_hide.splice(i_remove, 1); 

  for (const id of sections_to_hide) {
    jquery_str = "#" + id
    $(jquery_str)[0].style.display = "none"
  }

  jquery_str = "#" + section
  $(jquery_str)[0].style.display = "table-cell"

  // Scroll to top of text
  location.hash = jquery_str;

  if (warn == true) {
    audio.play();
  }

  var video_filename = "videos/" + selectedRace + "_" + selectedGender + "_" + section + ".mov"
  video_source.setAttribute('src', video_filename);

  video.load();

  if (visited == false) {
    video.play()
  }
}

