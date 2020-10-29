function refreshPage() {
  window.location.reload();
}

$(document).ready(function() {  
  $("form#generator").submit(function(event) {
    event.preventDefault();
    const favSubject = $("#favSubject :selected").val();
    const favMajor = $("#favMajor :selected").val();
    const favMusic = $("#favMusic :selected").val();
    const favGame = $("#favGame :selected").val();
    const favDance = $("#favDance :selected").val();
    let cplus = 0;
    let ruby = 0;
    let python = 0;
    if (favSubject == 1) {
        cplus +=1;
    } else if (favSubject == 2) {
        ruby += 1;
    } else if (favSubject == 3) {
        python +=1;
    } else if (favMajor == 1) {
        cplus += 1;
    } else if (favMajor == 2) {
        ruby += 1;
    } else if (favMajor == 3) {
        python +=1;
    } else if (favMusic == 1) {
        cplus += 1;
    } else if (favMusic == 2) {
        ruby += 1;
    } else if (favMusic == 3) {
        python +=1;    
    } else if (favGame == 1) {
        cplus += 1;
    } else if (favGame == 2) {
        ruby += 1;
    } else if (favGame == 3) {
        python +=1;  
    } else if (favDance == 1) {
        cplus += 1;
    } else if (favDance == 2) {
        ruby += 1;
    } else if (favDance == 3) {
        python +=1; 
    } 
    if (cplus > ruby && cplus > python) {
      result = ("C+");
    } else if (ruby > python && ruby > cplus) {
        result = ("Ruby");
    } else if (python > ruby && python > cplus) {
        result = ("Python");
    }
    $(".final").append(result)
  });
  $("#submitButton").click(function() {
    $("#finalResult").show();  
  });  
});
