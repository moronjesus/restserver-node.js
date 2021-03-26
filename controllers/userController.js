const response = require('express')

const getUser = (req, res = response) => {

        const query = req.query;
        const { name, lastname = 'Jesus', edad,  } = query;

    res.json({
        msg: 'get API - controles',
        name,
        lastname,
        edad,
    })

}

const postUser = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - controles',
        body,
    })

}

const putUser = (req, res = response) => {

    const params = req.params;
    const { id } = params

    res.json({
        msg: 'put API - controles',
        id
    })

}

const deleteUser = (req, res = response) => {
    res.json({
        msg: 'delete API - controles'
    })

}


module.exports = { getUser, 
                   postUser,
                   putUser,
                   deleteUser }