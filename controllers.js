//Imports

function serverCheck(req,res){
    console.log("Endpoint hit")
    return res.status(200)
    .json({
        success: true
    })
}

function sendToInstagram(req,res){
    console.log("Post req received")
    return res.status(200)
    .json({
        post: true
    })
}

module.exports = { serverCheck, sendToInstagram }