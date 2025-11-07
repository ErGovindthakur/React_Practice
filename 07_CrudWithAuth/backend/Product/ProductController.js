import { productModel } from "./ProductModel.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(500).json({
        success: false,
        message: "all fields are required",
      });
    }

    const product = await productModel.create({
      name,
      price,
      description,
    });
    return res.status(201).json({
      success: true,
      message: "Product created Successfully...",
      data: product,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const data = await productModel.find();

    if (data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Here is the list of all the products...",
      product: data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found by this id",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Here is the product id ${id}...`,
      product: product,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  try {
    const data = {};

    if (name !== undefined) data.name = name;
    if (price !== undefined) data.price = price;
    if (description !== undefined) data.description = description;

//     console.log(data);
    const product = await productModel.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Unable to update product",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Here is the updated product id ${id}...`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const deleteProduct = async(req, res) => {
  const { id } = req.params;
  try {

     const product = await productModel.findByIdAndDelete(id);

     if(!product){
          return res.status(404).json({
               success:false,
               message:"Unable to delete product"
          })
     }
    return res.status(200).json({
      success: true,
      message: `Here is the deleted product id ${id}...`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
