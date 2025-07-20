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
        'https://e-c.storage.googleapis.com/res/1b6ffe86-061b-4f1d-a033-1329e607f054/480',
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
        'https://e-c.storage.googleapis.com/res/76fe7688-0293-474b-afd7-a1397651eb90/480',
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
        'https://e-c.storage.googleapis.com/res/3a3ef7cf-ce57-4ae4-b99c-dea50f3fabce/480',
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
        'https://e-c.storage.googleapis.com/res/3818ef72-c8ed-4c59-8902-2a283c46bc65/480',
      colors: ['#FFFFFF', '#000000'],
      sizes: [],
    },
  ];
  return new Response(JSON.stringify(mockProducts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
