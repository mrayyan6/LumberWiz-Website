import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory, allProducts } from "@/data/products";

export default function Index() {
  // Hero uses first product image from each category as preview
  const categoryPreviews = categories.map(cat => {
    const products = getProductsByCategory(cat);
    return { name: cat, image: products[0]?.image, count: products.length };
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold text-primary-foreground md:text-6xl"
          >
            LumberWiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-primary-foreground/80 text-lg"
          >
            Handcrafted pieces that bring warmth, texture, and timeless beauty to your space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to={`/category/${encodeURIComponent(categories[0])}`}
              className="mt-8 inline-block rounded-lg bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition-colors"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold text-foreground">Shop by Category</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryPreviews.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/category/${encodeURIComponent(cat.name)}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                  <h3 className="font-display text-2xl font-bold">{cat.name}</h3>
                  <p className="mt-1 text-sm opacity-80">{cat.count} items</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">All Products</h2>
          <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
