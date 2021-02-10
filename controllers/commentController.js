const Itinerary = require('../models/Itinerary')

const commentController = {
    addComment: (req, res) => {
        const {id, userName, userPic, content} = req.body
        Itinerary.findOneAndUpdate({_id: id}, {$push:{comments:{userName:userName, userPic:userPic, content:content}} }, {new: true})
        .then(comment => {
          return res.json({success: true, respuesta: comment})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    deleteComment: (req, res) => {
        const {id, idcomment} = req.body
        
        Itinerary.findOneAndUpdate({_id:id}, {$pull:{comments:{_id:idcomment}} }, {new: true})
        .then(comment => {
          return res.json({success: true, respuesta: comment})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    }
    
}


module.exports = commentController