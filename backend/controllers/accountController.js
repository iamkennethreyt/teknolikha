const asyncHandler = require('express-async-handler');

const Account = require('../models/accountModel');
const User = require('../models/userModel');

// @desc    Get accounts
// @route   GET /api/accounts
// @access  Private
const getAccounts = asyncHandler(async (req, res) => {
  // const accounts = await Account.find({ user: req.user.id })
  const accounts = await Account.find();

  res.status(200).json(accounts);
});

// @desc    Set account
// @route   POST /api/accounts
// @access  Private
const setAccount = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const account = await Account.create({
    text: req.body.text,
    type: req.body.type,
    user: req.user.id
  });

  res.status(200).json(account);
});

// @desc    Update account
// @route   PUT /api/accounts/:id
// @access  Private
const updateAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);

  if (!account) {
    res.status(400);
    throw new Error('account not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // // Make sure the logged in user matches the goal user
  // if (goal.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error('User not authorized');
  // }

  const updatedAccount = await Account.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  );

  res.status(200).json(updatedAccount);
});

// @desc    Delete account
// @route   DELETE /api/accounts/:id
// @access  Private
const deleteAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);

  if (!account) {
    res.status(400);
    throw new Error('Account not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // // Make sure the logged in user matches the goal user
  // if (account.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error('User not authorized');
  // }

  await account.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAccounts,
  setAccount,
  updateAccount,
  deleteAccount
};
