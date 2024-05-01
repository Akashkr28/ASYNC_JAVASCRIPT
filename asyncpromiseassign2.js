function downloader(url){
    return new Promise((res, rej) => {
        console.log("Started downloading data", url);
        setTimeout(() => {
            console.log("Download Completed");
            let downloadedData = "Dummy Content";
            res(downloadedData);
        }, 4000);
    })
}

function writeFile(data){
    return new Promise((res, rej) => {
        console.log("start writing data", data)
        setTimeout(() => {
            console.log("Writing completed");
            let fileName = "Dummy.txt"
            res(fileName);
        }, 2000)
    })
}

function uploadFile(fileName, newUrl){
    return new Promise((res, rej) => {
        console.log("Started uploading file", fileName, "on the url", newUrl);
        setTimeout(() => {
            console.log("Upload Completed");
            let uploadResponse = "SUCCESS"
            res(uploadResponse);
        }, 3000)
    })
}

downloader("www.google.com")
.then((downloadedData) => writeFile(downloadedData))
.then((fileName) => uploadFile(fileName, "www.drive.google.com"))
.then((value) => console.log(value))
