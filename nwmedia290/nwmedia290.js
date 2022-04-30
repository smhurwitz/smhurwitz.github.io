// Initialize global vars
var audio = new Audio('audio/mixkit-negative-answer-lose-2032.wav');
var selectedGender;
var selectedRace;
var placeholder_img
var visited_sections = [];
var table_cell_disp = "table-cell"
var isMobile = false;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    console.log("mobile!")
    isMobile = true;
    table_cell_disp = "block";
}

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

    if (selectedRace == "asian") {
      $("#select_article")[0].innerHTML = "an"
    } else {
      $("#select_article")[0].innerHTML = "a"
    }

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

  if (selectedRace_modal == "asian") {
    $("#select_article_modal")[0].innerHTML = "an"
  } else {
    $("#select_article_modal")[0].innerHTML = "a"
  }

  console.log(selectedGender_modal, selectedRace_modal)

  if (selectedGender_modal == "" || selectedRace_modal == "") {
    portrait_filename = "images/blank_portrait.png"
    $('#introPortrait_modal')[0].style.opacity = .5
    $("#modalConfirmButton")[0].disabled = true; 
  } else {
    portrait_filename = "images/" + selectedRace_modal + "_" + selectedGender_modal + ".jpg"
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

  $('#video_col')[0].style.display = table_cell_disp;
  $('#intro')[0].style.display = table_cell_disp;

  if (back == true) {
    // Hide all other sections
    for (const id of all_sections_no_intro) {
      jquery_str = "#" + id;
      $(jquery_str)[0].style.display = "none";
    }

    // Scroll to desired link
    if (isMobile == true) {
      location.hash = "#speech"
    } else {
      location.hash = jquery_str + "_link";
    }
    

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
  $(jquery_str)[0].style.display = table_cell_disp;

  // Scroll to top of text
  if (isMobile == true) {
    location.hash = "#speech"
  } else {
    location.hash = jquery_str;
  }

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

