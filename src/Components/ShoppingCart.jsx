import React, { useState } from "react"
import { Minus, Plus, RefreshCw, Trash2, ShoppingCart } from "lucide-react"
import  Button  from '@/components/ui/button'
import  Input  from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cartItems } from "./data"
export default function ColorSchemeShoppingCart() {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, value))
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-[#EEEEEE] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center text-[#615EFC]">
        <ShoppingCart className="mr-2" />
        Shopping Cart
      </h1>
      <Card className="mb-8 bg-white border-[#D1D8C5]">
        <CardHeader className="bg-[#D1D8C5]">
          <CardTitle className="text-[#615EFC]">Your Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#D1D8C5]">
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={item.image}
                        alt={item.image}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    </TableCell>
                    <TableCell className="font-medium max-w-md">
                      {item.productName}
                    </TableCell>
                    <TableCell>{item.model}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="border-[#7E8EF1] text-[#615EFC] hover:bg-[#7E8EF1] hover:text-white"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, parseInt(e.target.value) || 0)
                          }
                          className="w-16 text-center border-[#7E8EF1]"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="border-[#7E8EF1] text-[#615EFC] hover:bg-[#7E8EF1] hover:text-white"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>₹{item.unitPrice.toLocaleString()}</TableCell>
                    <TableCell>₹{(item.unitPrice * item.quantity).toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" className="border-[#7E8EF1] text-[#615EFC] hover:bg-[#7E8EF1] hover:text-white">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" className="bg-[#615EFC] hover:bg-[#7E8EF1]">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#615EFC]">
            What would you like to do next?
          </h2>
          <p className="text-[#7E8EF1] mb-4">
            Choose if you have a discount code or reward points you want to use or
            would like to estimate your delivery cost.
          </p>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="coupon" className="border border-[#D1D8C5] rounded-lg overflow-hidden">
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 text-[#615EFC] hover:text-[#7E8EF1] hover:bg-[#F5F5F5] transition-all duration-300">
                <span className="text-lg font-semibold text-[#615EFC]">Use Coupon Code</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <div className="flex space-x-2">
                  <Input placeholder="Enter your coupon here" className="border-[#7E8EF1] flex-grow" />
                  <Button className="bg-[#615EFC] hover:bg-[#7E8EF1] text-white">Apply Coupon</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping" className="border border-[#D1D8C5] rounded-lg overflow-hidden">
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 text-[#615EFC] hover:text-[#7E8EF1] hover:bg-[#F5F5F5] transition-all duration-300">
                <span className="text-lg font-semibold text-[#615EFC]">Estimate Shipping & Taxes</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <div className="space-y-4">
                  <Input placeholder="Country" className="border-[#7E8EF1] w-full" />
                  <Input placeholder="State/Province" className="border-[#7E8EF1] w-full" />
                  <Input placeholder="Zip/Postal Code" className="border-[#7E8EF1] w-full" />
                  <Button className="bg-[#615EFC] hover:bg-[#7E8EF1] text-white w-full">Calculate Shipping</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gift" className="border border-[#D1D8C5] rounded-lg overflow-hidden">
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 text-[#615EFC] hover:text-[#7E8EF1] hover:bg-[#F5F5F5] transition-all duration-300">
                <span className="text-lg font-semibold text-[#615EFC] ">Use Gift Certificate</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <div className="flex space-x-2">
                  <Input placeholder="Enter your gift certificate code" className="border-[#7E8EF1] flex-grow" />
                  <Button className="bg-[#615EFC] hover:bg-[#7E8EF1] text-white">Apply Gift Certificate</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Card className="bg-white border-[#D1D8C5]">
          <CardHeader className="bg-[#D1D8C5]">
            <CardTitle className="text-[#615EFC]">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[#7E8EF1]">Subtotal</span>
                <span className="text-[#615EFC]">₹{(6020 * quantity).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7E8EF1]">Shipping</span>
                <span className="text-[#615EFC]">₹0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7E8EF1]">Tax</span>
                <span className="text-[#615EFC]">₹0</span>
              </div>
              <div className="border-t border-[#D1D8C5] pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-[#7E8EF1]">Total</span>
                  <span className="text-[#615EFC]">₹{(6020 * quantity).toLocaleString()}</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-[#615EFC] hover:bg-[#7E8EF1] text-white" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}