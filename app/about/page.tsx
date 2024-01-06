'use client';
import '@/app/about/about.css';
import NextImage from 'next/image';
import { Text, Alert, Image, } from '@mantine/core';
import logo from '@/public/abc.gif';
import { ProductCards } from '@/components/Product/productCards';
import { CategoryNav } from '@/components/CategoryNav/categoryNav';
import { Grid, Pagination, Flex } from '@mantine/core';
import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from '@tanstack/react-query';
import { categoryService } from '@/services/categoryService';
import { productService } from '@/services/productService';
import {
  LoadingOverlay,
  Anchor,
  Breadcrumbs,
  Container,
  Group,
  Select,
  Divider,
} from '@mantine/core';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';



export default function ProductsPage() {
  

  return (
    <Container >
      <Container fluid mt={120} py={20} className='about'>
      <Text 
      variant="filled"
       size='2rem'
       fw='900'
       >
          Chào mừng bạn đến với cửa hàng giày của chúng mình.
        </Text>
        <Flex
          justify='space-between'
          align='center'
          mt='lg'
          top='10rem'
          left='0'
          right='0'
          maw='100%'
        >
          <Group>
            <section className="about-us">
             <p>
             "Mỗi đôi giày trong cửa hàng của chúng tôi không chỉ thể hiện một sản phẩm - nó còn là một tác phẩm nghệ thuật, thể hiện sự tinh tế và tinh tế. Chúng tôi tự hào là đối tác của những người đánh giá cao thời trang và coi trọng đẳng cấp."
             <Image
            component={NextImage}
            src={logo}
            
            alt='Logo'
            w='50rem'
            h='40rem'
            fit='fill'
          ></Image>
        </p>
      </section>
          </Group>
        </Flex>
      </Container>
    </Container>
  );
  
}
