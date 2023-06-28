const fetch = require("node-fetch")

// @description Upload file
// @route POST /api/file/upload
// @access public
const uploadFile = (req, res) => {
    fetch(`https://www.filestackapi.com/api/store/S3?key=${process.env.UPLOAD_FILE_API_KEY}`, {
        method: 'post',
	    headers: {'Content-Type': 'image/png'},
	    body: req.files.image.data,
    }).then(r => r.json()).then(r => {
        console.log(r)
        res.status(201).json(r)
    })
};

module.exports = { uploadFile };