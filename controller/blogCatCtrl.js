const BlogCategory = require("../models/blogCatModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utils/validateMongoDbId');

const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await BlogCategory.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCategory = await BlogCategory.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteCategory = await BlogCategory.findByIdAndDelete(id);
        res.json(deleteCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getCategory = await BlogCategory.findById(id);
        res.json(getCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const getAllCategories = await BlogCategory.find();
        res.json(getAllCategories);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createCategory, updateCategory, deleteCategory, getCategory, getAllCategories }