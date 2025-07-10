export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const mockProducts = [
    {
      id: 'p1',
      name: '1016 OVERSIZED BOXY T-SHIRT',
      material: '275 GSM JERSEY',
      price: 32,
      comparePrice: 35,
      discount: '10% OFF',
      image:
        'https://www.houseofblanks.com/cdn/shop/files/1016OversizedBoxyT-Shirt_Black_01.jpg?v=1749667307&width=533',
      colors: ['#000000', '#FFFFFF'],
      sizes: [],
    },
    {
      id: 'p2',
      name: '1016 OVERSIZED BOXY T-SHIRT',
      material: '275 GSM JERSEY',
      price: 32,
      comparePrice: 35,
      discount: '10% OFF',
      image:
        'https://www.houseofblanks.com/cdn/shop/files/1016OversizedBoxyT-Shirt_White_01.jpg?v=1749667530&width=533',
      colors: ['#000000', '#FFFFFF'],
      sizes: [],
    },
    {
      id: 'p3',
      name: '1017 SLUB POCKET T-SHIRT',
      material: '230 GSM JERSEY',
      price: 32,
      comparePrice: 35,
      discount: '',
      image:
        'https://www.houseofblanks.com/cdn/shop/files/1017SlubPocketT-Shirt_Black_01.jpg?v=1749668273&width=533',
      colors: ['#000000', '#FFFFFF'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 'p4',
      name: '1017 SLUB POCKET T-SHIRT',
      material: '230 GSM JERSEY',
      price: 32,
      comparePrice: 35,
      discount: '10% OFF',
      image:
        'https://www.houseofblanks.com/cdn/shop/files/1017SlubPocketT-Shirt_White_01.jpg?v=1749668038&width=533',
      colors: ['#FFFFFF', '#000000'],
      sizes: [],
    },
  ];
  return new Response(JSON.stringify(mockProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
