const asyncHandler = require('express-async-handler');

// @desc GET goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get goals' })
});


// @desc SET goals
// @route POST /api/goals/
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field');
    }
    res.status(200).json({ message: 'set goals' })
});




// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
})


// @desc Delete goals
// @route Delete /api/goals
// @access Private
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
});




module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}