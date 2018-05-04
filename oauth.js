window.onload = function() {
  document.querySelector('button').addEventListener('click', function() {

    var clientId = "42db642c10639cbac8ef"; //'11442b0924c8d6a98fb7';

    var redirectUri = chrome.identity.getRedirectURL('github_cb');
    var redirectRe = new RegExp(redirectUri + '[#\?](.*)');

    // https://adacgiggmlkmdbgilhmeniimancnblaa.chromiumapp.org/provider_cb
    console.log("try redirect:",redirectUri);
     //https://adacgiggmlkmdbgilhmeniimancnblaa.chromiumapp.org/provider_cb
    console.log("try redirect2:", encodeURIComponent(redirectUri));

    chrome.identity.launchWebAuthFlow({
      'interactive': true,
      'url': 'https://github.com/login/oauth/authorize' +
             '?client_id=' + clientId
             +'&redirect_uri=' + encodeURIComponent(redirectUri)
             // + "&response_type=code&state=state"
    }, function(redirectUri2) {
      console.log('launchWebAuthFlow completed', chrome.runtime.lastError,
            redirectUri2);

      console.log('launchWebAuthFlow completed2'+
                  redirectUri2);
      //{message: "Authorization page could not be loaded."}
      if (chrome.runtime.lastError) {
        console.log("loign error");
      }
    });




    // chrome.identity.getAuthToken({
    //   interactive: true
    // }, function(token) {
    //   console.log("token" + token);
    //   let init = {
    //     method: 'GET',
    //     async: true,
    //     headers: {
    //       Authorization: 'Bearer ' + token,
    //       'Content-Type': 'application/json'
    //     },
    //     'contentType': 'json'
    //   };
    //   fetch('https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=AIzaSyCf32bkIVyBzk5VOwOXZb-X6VTx88abZoU', init).then((response) => response.json()).then(function(data) {
    //     let photoDiv = document.querySelector('#friendDiv');
    //     let returnedContacts = data.memberResourceNames;
    //     for (let i = 0; i < returnedContacts.length; i++) {
    //       fetch('https://people.googleapis.com/v1/' + returnedContacts[i] + '?personFields=photos&key=AIzaSyCf32bkIVyBzk5VOwOXZb-X6VTx88abZoU', init).then((response) => response.json()).then(function(data) {
    //         let profileImg = document.createElement('img');
    //         profileImg.src = data.photos[0].url;
    //         photoDiv.appendChild(profileImg);
    //       });
    //     };
    //   });
    // });

  });
};
