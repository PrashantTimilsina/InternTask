interface Props {
  params: Promise<{ product: string }>;
}

export default async function ProductDetails({ params }: Props) {
  const { product } = await params;
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product: {product}</p>
    </div>
  );
}
