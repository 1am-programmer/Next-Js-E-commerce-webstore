import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: 1,
    Number: 1,
    order: "#00789",
    product: ["/images/prod1.jpeg", "Smart watch"],
    Address: "351 Shearwood Forest  Drive",
    Date: "25/03/2024",
    price: "$10.99",
    Status: "Complete",
  },
  {
    id: 2,
    Number: 2,
    order: "#00788",
    product: ["/images/prod2.webp", "Head phones"],
    Address: "6391 Elgin St. Celina",
    Date: "26/03/2024",
    price: "$11.99",
    Status: "Pending",
  },
  {
    id: 3,
    Number: 3,
    order: "#00787",
    product: ["/images/prod3.jpg", "iphone pro"],
    Address: "8502 Oreston Road",
    Date: "27/03/2024",
    price: "$12.99",
    Status: "Failed",
  },
  {
    id: 4,
    Number: 4,
    order: "#00786",
    product: ["/images/prod4.jpg", "Apple Airpods pro"],
    Address: "4517 Washington Ave Manchester",
    Date: "28/03/2024",
    price: "$13.99",
    Status: "pending",
  },
  {
    id: 5,
    Number: 5,
    order: "#00785",
    product: ["/images/prod5.png", "Nike Air Max"],
    Address: "3891 Ranchview Dr. Richarlison",
    Date: "29/03/2024",
    price: "$14.99",
    Status: "Complete",
  },
];

export const Datatable = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead>Order</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.Number}</TableCell>
              <TableCell>{order.order}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={order.product[0]}
                  width="700"
                  height="700"
                  className="h-[20px] w-[20px]"
                />
                {order.product[1]}
              </TableCell>
              <TableCell>{order.Address}</TableCell>
              <TableCell>{order.Date}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};
