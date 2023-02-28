const Brand = require('../models/brandModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const createBrand = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Brand.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const updatedCategory = await Brand.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deletedCategory = await Brand.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const getaCategory = await Brand.findById(id);
        res.json(getaCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBrands = asyncHandler(async (req, res) => {
    try {
        const getAllBrands = await Brand.find();
        res.json(getAllBrands);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createBrand, updateBrand, deleteBrand, getBrand, getAllBrands }