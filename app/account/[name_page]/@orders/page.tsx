'use client';
import '@/styles/global.css';

import {
  Button,
  Group,
  Loader,
  LoadingOverlay,
  Modal,
  Pagination,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core';
import Nav from './nav';
import Order from './order';
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import UserContext from '@/contexts/UserContext';
import OrderService from '@/services/orderService';
import { useDisclosure } from '@mantine/hooks';
import TableSkeleton from '@/components/Skeleton/tableSkeleton';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const LIMIT_ORDERS = 3;

const OrdersPage = () => {
  const { user } = useContext(UserContext);
  // const router = useRouter();
  const [page, setPage] = useState(1);
  const [orderStatus, setOrderStatus] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [numberPage, setNumberPage] = useState(0);
  // const start = useRef(1);
  const [start, setStart] = useState(1);

  // useEffect(() => {
  //   router.refresh();
  // }, []);

  let temp = 1;
  const numberOfOrder = useQuery({
    queryKey: ['numberOfOrder'],
    queryFn: async () => {
      const orderService = new OrderService(user);
      const res = await orderService.getNumberOfOrderByCustomer();
      setTotalOrders(
        res.pending +
          res.confirmed +
          res.cancelled +
          res.shipping +
          res.shipped +
          res.delivered +
          res.failed
      );
      return res;
    },
    enabled: !!user,
  });
  useLayoutEffect(() => {
    if (page == 1) {
      setStart(1);
    } else {
      setStart((page - 1) * LIMIT_ORDERS + 1);
    }
  }, [page]);
  useEffect(() => {
    if (numberOfOrder.isSuccess) {
      switch (orderStatus) {
        case 0:
          setNumberPage(Math.ceil(totalOrders / LIMIT_ORDERS));
          break;
        case 1:
          setNumberPage(Math.ceil(numberOfOrder.data.pending / LIMIT_ORDERS));
          break;
        case 2:
          setNumberPage(Math.ceil(numberOfOrder.data.confirmed / LIMIT_ORDERS));

          break;
        case 3:
          setNumberPage(
            Math.ceil(
              (numberOfOrder.data.shipping + numberOfOrder.data.shipped) /
                LIMIT_ORDERS
            )
          );

          break;
        case 4:
          setNumberPage(Math.ceil(numberOfOrder.data.delivered / LIMIT_ORDERS));

          break;
        case 5:
          setNumberPage(
            Math.ceil(
              (numberOfOrder.data.cancelled + numberOfOrder.data.failed) /
                LIMIT_ORDERS
            )
          );
          break;
      }
    }
  }, [orderStatus, totalOrders]);

  const orders = useQuery({
    queryKey: ['orders', totalOrders],
    queryFn: () => {
      const orderService = new OrderService(user);
      return orderService.getOrders(1, totalOrders);
    },
    staleTime: 500000,
    enabled: !!user && !!numberOfOrder,
    // placeholderData: keepPreviousData,
  });
  return (
    <Stack
      justify='center'
      align='center'
      mx={100}
      className='mx-[100px] h-full'
    >
      <Nav
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
        setStart={setStart}
        setPage={setPage}
      />
      {orders.isPending || numberOfOrder.isPending ? (
        <Skeleton height={150} />
      ) : (
        <Stack w={'100%'} gap={12}>
          {orders.data?.orders.map((order: any) => {
            if (order.order_products.length > 0) {
              switch (orderStatus) {
                case 0:
                  if (temp >= start && temp < start + LIMIT_ORDERS) {
                    temp++;
                    // console.log(
                    //   temp <= setStart() * LIMIT_ORDERS - 1
                    // );
                    // console.log('temp', temp);

                    return (
                      <Order
                        key={order._id}
                        orderId={order._id}
                        orderStatus={order.order_status}
                        paymentStatus={order.order_payment.status}
                        finalPrice={order.order_checkout.finalPrice}
                        products={order.order_products}
                      />
                    );
                  } else {
                    temp++;
                  }

                  break;
                case 1:
                  if (order.order_status == 'pending') {
                    if (temp >= start && temp < start + LIMIT_ORDERS) {
                      temp++;

                      return (
                        <Order
                          key={order._id}
                          orderId={order._id}
                          orderStatus={order.order_status}
                          paymentStatus={order.order_payment.status}
                          finalPrice={order.order_checkout.finalPrice}
                          products={order.order_products}
                        />
                      );
                    } else {
                      temp++;
                    }
                  }

                  break;
                case 2:
                  if (order.order_status == 'confirmed') {
                    if (temp >= start && temp < start + LIMIT_ORDERS) {
                      temp++;

                      return (
                        <Order
                          key={order._id}
                          orderId={order._id}
                          orderStatus={order.order_status}
                          paymentStatus={order.order_payment.status}
                          finalPrice={order.order_checkout.finalPrice}
                          products={order.order_products}
                        />
                      );
                    } else {
                      temp++;
                    }
                  }

                  break;
                case 3:
                  if (
                    order.order_status == 'shipping' ||
                    order.order_status == 'shipped'
                  ) {
                    if (temp >= start && temp < start + LIMIT_ORDERS) {
                      temp++;

                      return (
                        <Order
                          key={order._id}
                          orderId={order._id}
                          orderStatus={order.order_status}
                          paymentStatus={order.order_payment.status}
                          finalPrice={order.order_checkout.finalPrice}
                          products={order.order_products}
                        />
                      );
                    } else {
                      temp++;
                    }
                  }

                  break;
                case 4:
                  if (order.order_status == 'delivered') {
                    if (temp >= start && temp < start + LIMIT_ORDERS) {
                      temp++;
                      return (
                        <Order
                          key={order._id}
                          orderId={order._id}
                          orderStatus={order.order_status}
                          paymentStatus={order.order_payment.status}
                          finalPrice={order.order_checkout.finalPrice}
                          products={order.order_products}
                        />
                      );
                    } else {
                      temp++;
                    }
                  }

                  break;
                case 5:
                  if (
                    order.order_status == 'cancelled' ||
                    order.order_status == 'failed'
                  ) {
                    if (temp >= start && temp < start + LIMIT_ORDERS) {
                      temp++;

                      return (
                        <Order
                          key={order._id}
                          orderId={order._id}
                          orderStatus={order.order_status}
                          paymentStatus={order.order_payment.status}
                          finalPrice={order.order_checkout.finalPrice}
                          products={order.order_products}
                        />
                      );
                    } else {
                      temp++;
                    }
                  }

                  break;
              }
            }
          })}
        </Stack>
      )}
      <Pagination
        total={numberPage}
        value={page}
        onChange={setPage}
        w={'fit-content'}
      />
    </Stack>
  );
};

export default OrdersPage;
// export default dynamic(() => Promise.resolve(OrdersPage), { ssr: false });
