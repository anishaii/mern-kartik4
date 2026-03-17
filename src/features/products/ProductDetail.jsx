import { useParams } from "react-router";
import { useGetProductQuery } from "./productApi.js";
import { Card, CardContent } from "../../components/ui/card.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import { Button } from "../../components/ui/button.jsx";
import { base } from "../../app/mainApi.js";

export default function ProductDetail() {
  const { id } = useParams();

  const { isLoading, data: product, error } = useGetProductQuery(id);

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error.data}</p>

  return (
    <div className=" mx-auto p-6">

      <Card className="grid md:grid-cols-2 gap-6 ">

        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={`${base}/${product.image}`}
            alt={product.title}
            className="rounded-xl w-full max-h-100 object-cover"
          />
        </div>

        {/* Product Info */}
        <CardContent className="flex flex-col gap-4">

          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex gap-2">
            <Badge>{product.category}</Badge>
            <Badge variant="outline">{product.brand}</Badge>
          </div>

          <p className="text-gray-600">
            {product.description}
          </p>

          <div className="text-3xl font-bold text-green-600">
            Rs {product.price}
          </div>

          <div className="text-sm text-gray-500">
            Stock Available: {product.stock}
          </div>

          <div className="text-sm text-yellow-500">
            Rating: ⭐ {product.rating}
          </div>

          <Button className="w-full mt-4">
            Add To Cart
          </Button>

        </CardContent>
      </Card>
    </div>
  )
} 