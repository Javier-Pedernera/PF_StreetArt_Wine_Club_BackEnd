const { User, Review } = require("../db");

const getReviews = async function(id){
  
    const reviews = Review.findAll({
        where: {
            productId: id,	
        },
        //include:{model: User},
        //order:[['id','DESC']]
    })
    return reviews;
}

module.exports = {getReviews}