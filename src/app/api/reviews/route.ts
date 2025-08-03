import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbconnect';
import ReviewModel from '@/models/reviews.model';


export async function POST(req:NextRequest){
    const db = await dbConnect();

    const {username,review,rating,} = await req.json();
    try {
        if(!review || !rating){
            return NextResponse.json(
                { error: 'username, review, and rating are required' },
                { status: 400 }
            );
        }
        const newReview = await ReviewModel.create({
            username,
            review,
            rating,
        });
        await newReview.save();
        console.log('Review created:', newReview);
        return NextResponse.json(
            { newReview },
            { status: 201 }
        );
        
    } catch (error) {
    return NextResponse.json(
        { error: 'Failed to create review' },
        { status: 500 }
      );
    }

}