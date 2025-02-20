import express from 'express'
import {createUser, getUsers, getUserById, updateUser, deleteUser } from '../controler/controler.js'

const router=express.Router()

router.post('/create',createUser)
router.get("/show", getUsers);         // Get All Users
router.get("/:id", getUserById);   // Get User by ID
router.put("/:id", updateUser);    // Update User by ID
router.delete("/:id", deleteUser);




export default router