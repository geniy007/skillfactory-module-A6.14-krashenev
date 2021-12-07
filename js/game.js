const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  
  $(".target").text("");
  $(".col").removeClass("target");
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).removeClass("miss");
  $(divSelector).text(hits + 1);
  
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  
  $(".col").addClass("hidden");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
  firstHitTime = 0;
}

function handleClick(event) {
  
  $(".miss").removeClass("miss");

  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    $(".target").text("");
    round();
  }
  else {
    $(event.target).addClass("miss");
    $(".target").text("");
    round();
  }    
        
}

function init() {

  $("#button-start").click(function() {
    $(".row").addClass("visible");
    $("#button-start").addClass("hidden");
    firstHitTime = getTimestamp();
    round();
  });

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
