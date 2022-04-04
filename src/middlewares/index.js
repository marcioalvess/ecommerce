const middlewares = {

    authenticate(req,res,next){

        const { authentication } = req.headers
        const { user_id } = req.params;

        if(!authentication) return res.status(400).json({ mensage:'No token'})
        if(authentication !== user_id) return res.status(400).json({ mensage: 'Not allowed'})

        next()
    }


}

module.exports=middlewares;