javascript: !async function(){
    let id;
    if(window.location.href.includes("onlinecourse")){
       id=cvdlit_getVideoID();
    }
    else{
         id=document.getElementById('player').getAttribute('data-kaltura-entryid');
    }
    let data=new URLSearchParams({
        v:id,
        type:"kaltura",
        i:JSON.stringify([...Array(400).keys()]),
        n:400
    });
    for(let i=0;i<2;i++){
        let res = await fetch("?q=cvdlit/ajax/recordbar",{
            method:"POST",
            body: data
        });
        let resJSON = await res.json();
        if(resJSON.status==1){
            alert("success");
            return;
        }
        else if(i==1){
            alert("failed, try again");
        }
    }
    }()