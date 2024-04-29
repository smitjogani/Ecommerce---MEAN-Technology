const Category = require("../../models/Catagory/category.model");
const Product = require("../../models/Product/product.model");

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountedPersent: reqData.discountedPersent,
    image: reqData.image,
    brand: reqData.brand,
    price: reqData.price,
    // quantity: reqData.quantity,
    category: thirdLevel._id,
    sizes: reqData.sizes,
    fore: reqData.topLevelCategory,
    typeOfCloth: reqData.thirdLevelCategory,
  });

  // console.log(reqData.topLevelCategory);

  const savedProduct = await product.save();

  const findProduct = await Product.findById(savedProduct._id);
  // .populate(
  //   "categories"
  // );

  return findProduct;
}

async function deleteProductID(productId) {
  const product = await Product.findByIdAndDelete(productId);

  Product.findByIdAndDelete(productId);
  return "Product Deleted Successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(productId) {
  const product = await Product.findById(productId)
    // .populate("categories")
    .exec();

  if (!product) {
    throw new Error("Product Not Found With id : ", productId);
  }

  return product;
}

async function getAllProducts(reqQuery) {
  let {
    typeOfCloth,
    fore,
    category,
    // color,
    // sizes,
    // minPrice,
    // maxPrice,
    // minDiscount,
    // sort,
    // stock,
    // pageNo,
    // pageSize,
  } = reqQuery;
  console.log(reqQuery);

  return Product.find({ fore, typeOfCloth });

  // pageSize = pageSize || 10;

  let query = Product.find();
  // .populate("categories");

  if (category) {
    const existCategory = Category.find({ category: category });
    // console.log(category);
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }

  // if (color) {
  //   const colorSet = new Set(
  //     color.split(",").map((color) => color.trim().toLowerCase())
  //   );
  //   const colorRegex =
  //     colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

  //   query = query.where("color").regex(colorRegex);
  // }

  // if (sizes) {
  //   const sizesSet = new Set(sizes);
  //   query = query.where("sizes.name").in([...sizesSet]);
  // }

  // if (minPrice && maxPrice) {
  //   query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  // }

  // if (minDiscount) {
  //   query = query.where("discountedPersent").gt(minDiscount);
  // }

  // if (stock) {
  //   if (stock == "in_stock") {
  //     query = query.where("quantity").gt(0);
  //   } else if (stock == "out_of_stock") {
  //     query = query.where("quantity").gt(1);
  //   }
  // }

  // if (sort) {
  //   const sortDirection = sort === "price_high" ? -1 : 1;
  //   query = query.sort({ discountedPrice: sortDirection });
  // }

  // const totalProduct = await Product.countDocuments(query);

  // const skip = (pageNo - 1) * pageSize;

  // query = query.skip(skip).limit(pageSize);
  // const products = await query.exec();
  // const totalPages = Math.ceil(totalProduct / pageSize);

  return { content: products, currentPage: pageNo, totalPages: totalPages };
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

async function getProduct(para) {
  const product = Product.find(para);
  return product;
}

module.exports = {
  createProduct,
  deleteProductID,
  findProductById,
  updateProduct,
  getAllProducts,
  createMultipleProduct,
  getProduct,
};
