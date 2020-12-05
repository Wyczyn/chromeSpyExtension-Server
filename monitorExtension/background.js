
function xEl(tab) {
    var http = new XMLHttpRequest(); 
    
    try{
        
        http.open("POST", "http://localhost:5000/api/send", true);
        http.setRequestHeader("Content-Type", "application/json");
        let obj = {
            data: tab
        }
        http.send(JSON.stringify(obj.data));

        //DEBUG
        console.log(obj.data);
    } catch(err) {

        http.open("POST", "http://localhost:5000/api/sendErrors", true);
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify(err));

        //DEBUG
        console.log(err);
    }
}


chrome.tabs.onActivated.addListener(VisitItem => {
    chrome.tabs.onUpdated.addListener(async function
        (tabId, changeInfo, tab) {
            if (changeInfo.title) {
                if(changeInfo.status == "complete"){
                    chrome.tabs.getSelected(null,function(tab) {
                        xEl(tab);
                    });

               } 
               else {
                    chrome.tabs.getSelected(null,function(tab) {
                        xEl(tab);
                    });
               }

            }
        }
    );
        
});


