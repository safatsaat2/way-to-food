import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/model/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionStr);
    }

   
    const data = await restaurantSchema.find();

    
    return NextResponse.json({ result: true, data });

  } catch (error) {
   
    console.error("Error fetching data:", error);
    return NextResponse.json({ result: false, error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(request) {
    try {
      
      const payload = await request.json();
  
      
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(connectionStr);
      }
  
      
      let restaurant = new restaurantSchema(payload);
  
      
      const result = await restaurant.save();
  
      
      return NextResponse.json({ result, success: true });
    } catch (error) {
      
      console.error("Error saving restaurant:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }
