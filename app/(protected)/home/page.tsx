import { getProducts } from '@/actions/products.action';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

interface IProduct {
  productId: string;
  productName: string;
  brand: string;
  items: any;
}

export default async function HomePage() {
  const data = await getProducts();

  return (
    <div className="sx:grid-cols-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
      {data.map((product: IProduct) => {
        return (
          <Card key={product.productId}>
            <CardHeader>{product.productName}</CardHeader>
            <CardContent>
              <p>Marca: {product.brand}</p>
              <Image
                src={product.items[0].images[0].imageUrl}
                alt={product.productName}
                width={250}
                height={250}
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
