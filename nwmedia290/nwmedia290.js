
window.onload = function () {

  $('#selectRace').change(changeIntroPortrait);
  $('#selectGender').change(changeIntroPortrait);

  // Enable click-to-play and -pause functionality on video
  $("#video").click(function() {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });

};

var audio = new Audio('audio/mixkit-negative-answer-lose-2032.wav');
var selectedGender;
var selectedRace;

changeIntroPortrait = function(){
    $('#introPortrait')[0].style.opacity = 1

    selectedGender = $("#selectGender").val();
    selectedRace = $("#selectRace").val();

    var portrait_filename = "images/" + selectedRace + "_" + selectedGender + ".jpg"
    $('#introPortrait')[0].src = portrait_filename    

  }

const all_sections = ["intro", "new_exec", "economy", "crim", "military", "protest", "climate", "cyber", "beginning", "conclusion"];
const all_sections_no_intro = all_sections.slice(1);


var video = document.getElementById('video');
var video_source = $('#video source')[0];

loadSpeech = function(event, back=false) {
  // If there is a video playing, pause it
  video.pause()
  // if (speaking_video_id != "") {
  //   $(speaking_video_id)[0].pause()
  // }

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

  selectedGender = $("#selectGender").val();
  selectedRace = $("#selectRace").val();

  var video_filename = "videos/" + selectedRace + "_" + selectedGender + "_intro.mov"
  video_source.setAttribute('src', video_filename);

  video.load();

  if (back == false) {
    video.play()
  }
}

const visited_sections = [];

loadSection = function(event, warn=false) {
  // If there is a video playing, pause it
  video.pause()
  // if (speaking_video_id != "") {
  //   $(speaking_video_id)[0].pause()
  // }

  console.log("LOADING SECTION");

  var section = event.target.id
  console.log(section)
  section = section.substring(0, section.length - 5); // Remove "_link"

  // Determine if this is the first time we've visited this section
  console.log(visited_sections)
  console.log(visited_sections)
  if (visited_sections.indexOf(section) > -1) {
    console.log("repeat visit")
    var visited = true
  } else {
    console.log("first visit")
    var visited = false;
    visited_sections.push(section);
    console.log(visited_sections)
  }

  const i_remove = all_sections.indexOf(section);
  const sections_to_hide = all_sections;
  if (i_remove > -1) {
    sections_to_hide.splice(i_remove, 1); // 2nd parameter means remove one item only
  }

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
    console.log("autoplaying!")
    video.play()
  }
}

