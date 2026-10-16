
interface UserProfile {
  id :string,
  fullName:string,
  email:string,
   role: "admin" | "developer" | "customer";
  createdAt: Date;
}

interface Product {
    productId: number;
  title: string;
  price: number;
  tags: string[];
  inStock: boolean;
}


const dashboard = () => {
  const sampleProduct:Product={
   productId:12,
     title: "shoes",
  price: 1234,
  tags: ["leather","cloth"],
  inStock: true
  }
  const developerProfile:UserProfile={
     id:"123",
    fullName:"faraz Shahbaz",
  email:"faraz@gmail.com",
   role: "admin",
  createdAt:new Date("2024-06-15T10:30:00Z") 
  };

  return (
       <div className="p-8 max-w-4xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">TypeScript in Next.js Dashboard</h1>

      {/* User Profile Section */}
      <div className="bg-slate-900 text-white p-4 rounded-lg mb-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">User Profile (Interface Data)</h2>
        <p><strong>Name:</strong> {developerProfile.fullName}</p>
        <p><strong>Email:</strong> {developerProfile.email}</p>
        <p><strong>Role:</strong> {developerProfile.role.toUpperCase()}</p>
      </div>

      {/* Product Section */}
      <div className="bg-slate-100 border p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-slate-800">{sampleProduct.title}</h2>
        <p className="text-lg text-emerald-600 font-bold">PKR {sampleProduct.price}</p>
        <p className="text-sm text-slate-600 my-2">
          Status: {sampleProduct.inStock ? "✅ In Stock" : "❌ Out of Stock"}
        </p>
        
        {/* Tags mapping */}
        <div className="flex gap-2 mt-3">
          {sampleProduct.tags.map((tag, index) => (
            <span key={index} className="bg-slate-800 text-white text-xs px-2.5 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default dashboard