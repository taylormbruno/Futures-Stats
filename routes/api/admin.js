const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInput = require("../../config/validation/register");
const validateLoginInput = require("../../config/validation/login");

const Admin = require("../../models/admin");