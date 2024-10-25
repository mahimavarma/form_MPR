import { Card, CardContent } from "@/components/ui/card"
import { Truck, Check, ShoppingBag } from "lucide-react"

export default function OrderHistory() {
  const orders = [
    { 
      id: 1, 
      orderNumber: "ORD-001",
      status: "Dispatched", 
      name: "Wireless Headphones", 
      price: 129.99, 
      image: "/placeholder.svg?height=80&width=80",
      deliveryDate: "2023-10-15"
    },
    { 
      id: 2, 
      orderNumber: "ORD-002",
      status: "Delivered", 
      name: "Smartwatch", 
      price: 199.99, 
      image: "/placeholder.svg?height=80&width=80",
      deliveryDate: "2023-10-10"
    },
    { 
      id: 3, 
      orderNumber: "ORD-003",
      status: "Delivered", 
      name: "Portable Charger", 
      price: 49.99, 
      image: "/placeholder.svg?height=80&width=80",
      deliveryDate: "2023-10-08"
    },
    { 
        id: 4, 
        orderNumber: "ORD-003",
        status: "Delivered", 
        name: "Portable Charger", 
        price: 49.99, 
        image: "/placeholder.svg?height=80&width=80",
        deliveryDate: "2023-10-08"
      },
      { 
        id: 5, 
        orderNumber: "ORD-003",
        status: "Delivered", 
        name: "Portable Charger", 
        price: 49.99, 
        image: "/placeholder.svg?height=80&width=80",
        deliveryDate: "2023-10-08"
      },
      { 
        id: 6, 
        orderNumber: "ORD-003",
        status: "Delivered", 
        name: "Portable Charger", 
        price: 49.99, 
        image: "/placeholder.svg?height=80&width=80",
        deliveryDate: "2023-10-08"
      },
  ]

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <ShoppingBag className="text-[#7E8EF1] w-10 h-10 mr-3" />
          <h1 className="text-3xl font-bold text-[#7E8EF1]">Order history</h1>
        </div>
        <p className="text-[#615EF0] mb-6">{orders.length} orders</p>
        
        {orders.map((order) => (
          <Card key={order.id} className="mb-6 bg-[#D1D8C5] border-[#7E8EF1]">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={order.image}
                  alt={`Image for ${order.name}`}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-[#615EF0]">
                      Order {order.orderNumber}
                    </span>
                    <span className="text-sm font-bold text-[#615EF0]">
                      ${order.price.toFixed(2)}
                    </span>
                  </div>
                  <h2 className="font-semibold text-[#615EF0] mb-2">{order.name}</h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {order.status === "Dispatched" ? (
                        <Truck className="text-[#615EF0] mr-2 h-4 w-4" />
                      ) : (
                        <Check className="text-[#615EF0] mr-2 h-4 w-4" />
                      )}
                      <span className="text-sm font-medium text-[#615EF0]">
                        {order.status}
                      </span>
                    </div>
                    <span className="text-sm text-[#615EF0]">
                      {order.status === "Delivered" 
                        ? `Delivered on ${new Date(order.deliveryDate).toLocaleDateString()}`
                        : `Estimated delivery: ${new Date(order.deliveryDate).toLocaleDateString()}`
                      }
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}