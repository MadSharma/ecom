import React from 'react';
import Container from '@/components/ui/Container';
import { Button } from '../components/ui/button'


const HomePage = () => {
  return (
    <Container className=' bg-shop_light_pink'>
      <h2 className='text-xl font-semibold'>Home</h2>
      <p> 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quas, ea est quia voluptatem velit inventore repellat possimus eius, laborum in ex illo assumenda ad consequuntur hic iusto! Suscipit, dicta quas, natus maiores, sequi esse perspiciatis veniam numquam ad dignissimos velit sit? Ratione dolorem voluptatibus porro maxime, odio facilis modi.
      </p>
  <Button size="lg">Check out</Button>
    </Container>

  );
};

export default HomePage;
