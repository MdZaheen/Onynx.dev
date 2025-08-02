import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbconnect';
import ReviewModel from '@/models/reviews.model';


export async function POST(req:NextRequest,res:NextResponse){
    const db = await dbConnect();

    const {title,description,rating,projectId} = await req.json();
    try {
        if(!title || !description || !rating || !projectId){
            return NextResponse.json(
                { error: 'Title, description, rating, and projectId are required' },
                { status: 400 }
            );
        }
        const review = await ReviewModel.create({
            title,
            description,
            rating,
            projectId,
        });
        await review.save();
        console.log('Review created:', review);
        return NextResponse.json(
            { review },
            { status: 201 }
        );
        
    } catch (error) {
    return NextResponse.json(
        { error: 'Failed to create review' },
        { status: 500 }
      );
    }

}