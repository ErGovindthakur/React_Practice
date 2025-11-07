
export const createProduct = (req,res) => {
     try {
          return res.status(200).json({
               success:true,
               message:"Product created Successfully..."
          })
     } catch (err) {
          return res.status(500).json({
               success:false,
               message:err.message
          })
     }
}

export const getProducts = (req,res) => {
     try {
          return res.status(200).json({
               success:true,
               message:"Here is the list of all the products..."
          })
     } catch (err) {
          return res.status(500).json({
               success:false,
               message:err.message
          })
     }
}
export const updateProduct = (req,res) => {
     try {
          return res.status(200).json({
               success:true,
               message:"product updated successfully..."
          })
     } catch (err) {
          return res.status(500).json({
               success:false,
               message:err.message
          })
     }
}
export const deleteProduct = (req,res) => {
     try {
          return res.status(200).json({
               success:true,
               message:"product deleted successfully..."
          })
     } catch (err) {
          return res.status(500).json({
               success:false,
               message:err.message
          })
     }
}