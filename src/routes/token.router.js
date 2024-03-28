"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const token = require('../controllers/token.controller')
// const permissions = require("../middlewares/permissions")

// URL: /tokens
// Token a sadece ve sadece admin erişebilir.

// 1.YOL: Uzun YOL

// router.route('/')
//     .get(permissions.isAdmin, token.list)
//     .post(permissions.isAdmin, token.create)

// router.route('/:id')
//     .get(permissions.isAdmin, token.read)
//     .put(permissions.isAdmin, token.update)
//     .patch(permissions.isAdmin, token.update)
//     .delete(permissions.isAdmin, token.delete)

// 2. YOL: Kısa YOL
// Burada sadece isAdmin kullanılacağı için komple permissions Çağırmaya gerek duymadık.
const { isAdmin } = require("../middlewares/permissions")

// router.use(permissions.isAdmin)
router.use(isAdmin)

router.route('/')
    .get(token.list)
    .post(token.create)

router.route('/:id')
    .get(token.read)
    .put(token.update)
    .patch(token.update)
    .delete(token.delete)

/* ------------------------------------------------------- */
module.exports = router