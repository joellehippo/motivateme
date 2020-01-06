function saveToFirebase() {
    console.log("clicked");
    var emailObject = {
        id: '2',
        quoteMessage: "hi"
    };

    firebase.database().ref('quotes').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

