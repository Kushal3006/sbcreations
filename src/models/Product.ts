import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['resin-art', 'gift-hampers', 'custom-gifts']
  },
  isCustomizable: { type: Boolean, default: false },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  sizeInches: "number",
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);