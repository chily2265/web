'use client';
import '@/styles/global.css';
import NextImage from 'next/image';
import { Flex, Group, Image, Text, Anchor, Menu, rem } from '@mantine/core';
import logo from '@/public/icon.svg';
import Search from '../Search/search';
// import '../../app/global.css';
import LanguagePicker from '../LanguagePicker/languagePicker';
import '@mantine/core/styles.css';
import {
  IconShoppingCart,
  IconUserCircle,
  IconLogout,
  IconUser,
  IconChecklist,
  IconTicket,
} from '@tabler/icons-react';
import classes from './header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useLogin from '@/helpers/useLogin';
import { useQuery } from '@tanstack/react-query';
import CartService from '@/services/cartService';
import { useContext, useEffect, useRef, useState } from 'react';
import queryClient from '@/helpers/client';
import LoggedHeader from './loggedHeader';
import UserContext from '@/contexts/UserContext';

// interface OnClickInterface {
//   [index: string]: Function;
// }

export default function Header() {
  const appName = 'Shoes';
  const { user, setUser } = useContext(UserContext);
  const [link, setLink] = useState('/');
  const setLinkBaseRole = (role: string = 'customer', setLink: any) => {
    switch (role) {
      case 'manager':
        setLink('/manager/dashboard/revenue');
        break;
      case 'staff':
        setLink('/staff/dashboard/revenue');
        break;
      default:
        setLink('/');
        break;
    }
  };
  useEffect(() => {
    setLinkBaseRole(user && user.roles > 0 && user?.roles[0], setLink);
  }, [user]);

  if (!user) return <></>;

  return (
    <Flex
      justify='space-between'
      align='center'
      bg='white'
      pos='fixed'
      top='0'
      left='0'
      right='0'
      className={`z-1000 ${classes.header}`}
      maw='100%'
    >
      
      <Link href={link}>
        {/* //underline='never' */}
        <Group wrap='nowrap'>
          <Image
            component={NextImage}
            src={logo}
            alt='Logo'
            w='10rem'
            h='2.5rem'
            fit='fill'
          ></Image>

          <Text
            size='2rem'
            fw='900'
            c='turquoise.6'
            lh='1.1875rem'
          >
            {appName}
          </Text>
        </Group>
      </Link>
      <Flex gap='2rem' align='center'>
          {/* <LanguagePicker /> */}
          
          <Link
            href={link}
            onClick={() => {
              queryClient.clear();
            }}
          >
            Trang chủ 
          </Link>
          
          <Link
            href='/about'
            onClick={() => {
              queryClient.clear();
            }}
          >
            Giới thiệu
          </Link>
          <Link
            href='#'
            onClick={() => {
              queryClient.clear();
            }}
          >
            Sản phẩm
          </Link>
          <Link
            href='/contact'
            onClick={() => {
              queryClient.clear();
            }}
          >
            Liên hệ
          </Link>
        </Flex>
      {((user.userId &&
        user?.roles[0] != 'manager' &&
        user?.roles[0] != 'staff') ||
        !user.userId) && <Search content='' />}

      {user?.userId ? (
        <LoggedHeader user={user} setUser={setUser} />
      ) : (
        <Flex gap='1rem' align='center'>
          {/* <LanguagePicker /> */}
          
          <Link
            href='/sign-in'
            onClick={() => {
              queryClient.clear();
            }}
          >
            Đăng nhập
          </Link>
          <Link
            href='/sign-up'
            onClick={() => {
              queryClient.clear();
            }}
          >
            Đăng ký
          </Link>
        </Flex>
      )}
    </Flex>
  );
}
