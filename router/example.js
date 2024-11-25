const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *    summary: Приклад ендпоінта
 *    description: Отримати приклад даних.
 *     responses:
 *       200:
 *        description: Успішна відповідь.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/example', (req, res) => {
    res.json({ message: 'lab6' });
});

module.exports = router;