
window.onload = function () {

  $('#selectRace').change(changeIntroPortrait);
  $('#selectGender').change(changeIntroPortrait);

  $('#continueButton').click(loadSpeech)
};

changeIntroPortrait = function(){
    $('#introPortrait')[0].style.opacity = 1

    var selectedGender = $("#selectGender").val();
    var selectedRace = $("#selectRace").val();

    var video1 = ""

    if (selectedGender == "Woman") {
      if (selectedRace == "Black") {
        $('#introPortrait')[0].src = "/images/nwmedia290/black-woman.jpg"
        // video1 = "/images/nwmedia290/videos/black-woman-1.mp4"
      } else if (selectedRace == "White") {
        $('#introPortrait')[0].src = "/images/nwmedia290/white-woman.jpg"
      } else if (selectedRace == "Latinx") {
        $('#introPortrait')[0].src = "/images/nwmedia290/latinx-woman.jpg"
      } else if (selectedRace == "Asian") {
        $('#introPortrait')[0].src = "/images/nwmedia290/asian-woman.jpg"
      }
    } else if (selectedGender == "Man") {
      if (selectedRace == "Black") {
        $('#introPortrait')[0].src = "/images/nwmedia290/black-man.jpg"
      } else if (selectedRace == "White") {
        $('#introPortrait')[0].src = "/images/nwmedia290/white-man.jpg"
      } else if (selectedRace == "Latinx") {
        $('#introPortrait')[0].src = "/images/nwmedia290/latinx-man.jpg"
      } else if (selectedRace == "Asian") {
        $('#introPortrait')[0].src = "/images/nwmedia290/asian-man.jpg"
      }
    }

    // $('#video1 source')[0].src = video1

  }

loadSpeech = function() {
  $('#faceSelect')[0].style.display = "none"
  $('#speech')[0].style.display = "block"

  var video1 = ""
  var selectedGender = $("#selectGender").val();
  var selectedRace = $("#selectRace").val();

  if (selectedGender == "Woman") {
      if (selectedRace == "Black") {
        video1 = "/images/nwmedia290/videos/black-woman-1.mov"
      }
    }

  var video = document.getElementById('video1');
  var source = document.createElement('source');


  source.setAttribute('src', video1);
  source.setAttribute('type', 'video/mp4');
  video.appendChild(source);

  video.load();

  // $("video1").click(function() {
  //   //console.log(this); 
  //   if (this.paused) {
  //     this.play();
  //   } else {
  //     this.pause();
  //   }
  // });
}

