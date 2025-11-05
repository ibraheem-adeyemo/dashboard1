export type Purchase = {
  id: string;
  product: string;
  orderId: string;
  date: string;
  customerName: string;
  customerAvatar: string; // path inside /public
  status: string;
  amount: string;
};

export const purchases: Purchase[] = [
  {
    id: "1",
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customerName: "Bessie Cooper",
    customerAvatar: "/images/seller-avatar-1.png",
    status: "Delivered",
    amount: "$400.00",
  },
  {
    id: "2",
    product: "iPhone 11 Pro",
    orderId: "#25414",
    date: "Aug 5th, 2021",
    customerName: "Annette Black",
    customerAvatar: "/images/seller-avatar-2.png",
    status: "Pending",
    amount: "$200.00",
  },
  {
    id: "3",
    product: "Oppo A20",
    orderId: "#25415",
    date: "Aug 5th, 2021",
    customerName: "Erling Halland",
    customerAvatar: "/images/seller-avatar-3.png",
    status: "Delivered",
    amount: "$250.00",
  },
  {
    id: "4",
    product: "Oppo A20",
    orderId: "#25416",
    date: "Aug 5th, 2021",
    customerName: "Kristin Watson",
    customerAvatar: "/images/seller-avatar-4.png",
    status: "Canceled",
    amount: "$400.00",
  },
  {
    id: "5",
    product: "MacBook Pro",
    orderId: "#25417",
    date: "Aug 5th, 2021",
    customerName: "Esther Howard",
    customerAvatar: "/images/seller-avatar-5.png",
    status: "Delivered",
    amount: "$400.00",
  },
  {
    id: "6",
    product: "iPhone 11 Pro",
    orderId: "#25418",
    date: "Aug 5th, 2021",
    customerName: "Jerome Bell",
    customerAvatar: "/images/seller-avatar-2.png",
    status: "Pending",
    amount: "$200.00",
  },
  {
    id: "7",
    product: "Oppo A20",
    orderId: "#25419",
    date: "Aug 5th, 2021",
    customerName: "Brooklyn",
    customerAvatar: "/images/seller-avatar-6.png",
    status: "Canceled",
    amount: "$400.00",
  },
];
