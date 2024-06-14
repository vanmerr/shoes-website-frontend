import Images from "@/assets/images";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [
      {
        product_id: "GIA12345",
        name: "Giày Chạy Bộ UltraSpeed Speed Speed Speed Speed Speed Speed Speed Speed Speed Speed Speed Speed Speed Speed Speed Speed UltraSpeed #000 jfsdjf àbbs",
        brand: "SportX",
        category: "Thể thao",
        description:
          "Giày chạy bộ UltraSpeed được thiết kế với công nghệ đệm khí tiên tiến, mang lại sự thoải mái và hỗ trợ tối đa cho đôi chân. Chất liệu thoáng khí giúp giữ chân khô ráo trong suốt quá trình luyện tập.",
        price_old: 190000,
        price_new: 167000,
        options: [
          {
            color: "#000",
            sizes: [
              { size: "38", stock_quantity: 8 },
              { size: "39", stock_quantity: 15 },
              { size: "40", stock_quantity: 20 },
              { size: "41", stock_quantity: 18 },
            ],
            image_url: Images.product,
          },
          {
            color: "#FFFFFF",
            sizes: [
              { size: "41", stock_quantity: 15 },
              { size: "42", stock_quantity: 11 },
              { size: "43", stock_quantity: 9 },
              { size: "44", stock_quantity: 4 },
            ],
            image_url: Images.product,
          },
          {
            color: "#0600ff",
            sizes: [
              { size: "38", stock_quantity: 12 },
              { size: "39", stock_quantity: 18 },
              { size: "40", stock_quantity: 22 },
              { size: "41", stock_quantity: 20 },
              { size: "42", stock_quantity: 16 },
              { size: "43", stock_quantity: 10 },
              { size: "44", stock_quantity: 6 },
            ],
            image_url: Images.product,
          },
          {
            color: "#ff0000",
            sizes: [
              { size: "38", stock_quantity: 7 },
              { size: "39", stock_quantity: 13 },
              { size: "40", stock_quantity: 17 },
              { size: "41", stock_quantity: 14 },
              { size: "42", stock_quantity: 10 },
              { size: "43", stock_quantity: 6 },
              { size: "44", stock_quantity: 3 },
            ],
            image_url: Images.product,
          },
        ],
        features: ["Đệm khí", "Chống trượt", "Thoáng khí", "Trọng lượng nhẹ"],
        ratings: {
          average_rating: 4.7,
          quantity_purchased: 87,
        },
        reviews: [
          {
            review_id: "R001",
            customer_name: "Nguyễn Văn A",
            rating: 5,
            comment:
              "Giày rất nhẹ và êm, mình chạy cả tiếng mà không thấy đau chân.",
          },
          {
            review_id: "R002",
            customer_name: "Trần Thị B",
            rating: 4,
            comment:
              "Chất liệu thoáng khí, không bị hầm chân. Tuy nhiên, dây giày hơi ngắn.",
          },
        ],
      },
    ],
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    resetProducts(state, action) {
      return (state.products = []);
    },
  },
});

export const { addProduct, resetProducts } = productSlice.actions;
export default productSlice.reducer;
