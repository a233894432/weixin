"use strict";
var express = require('express');
var router = express.Router();

var Z_Util = require("../bin/common.js");
var conn = require("../bin/db/DBHelper");


router.get("/list", (req,res,next) => {
    var uid = 1;

    var sql = `
        select b.*, users.name,users.portrait
        from (select * from
                (select * from user_message where uid = 1 or contact_id = 1 order by ctime DESC) as a group by relevance
        ) as b , users where if((b.uid - 1),b.uid,b.contact_id) = users.id
    `;

    conn(sql, rows => {
        res.json({response_data:rows});
    })

})

module.exports = router;