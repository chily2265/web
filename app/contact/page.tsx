'use client';
import '@/app/contact/contact.css';
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
      <div className="contact-container"  >
        <header>
          <h1>Liên Hệ</h1>
          <p>Hãy liên lạc với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào!</p>
        </header>
        <section className="contact-details">
          <h2>Thông Tin Liên Hệ</h2>
          <p>
            Địa chỉ: 123 Đường Nguyễn Văn B, Quận 1, Thành phố Hồ Chí Minh
            <br />
            Điện thoại: (012) 345-6789
            <br />
            Email: info@gioystore.com
          </p>
        </section>
        <section className="contact-form">
          <h2>Gửi Tin Nhắn</h2>
          <form>
            <label htmlFor="name">Họ và Tên:</label>
            <input type="text" id="name" name="name" required />
  
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
  
            <label htmlFor="message">Tin Nhắn:</label>
            <textarea id="message" name="message" rows={4} required></textarea>
  
            <button className=' bg-teal-600 rounded-xl text-white w-20 h-10 justify-center align-center' type="submit">Gửi</button>
          </form>
        </section>
      </div>
    );
  
}
