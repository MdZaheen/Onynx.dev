import dbConnect from "@/app/lib/dbconnect";
import ProjectModel from "@/models/projects.model";
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req:NextRequest,res:NextResponse){
    const db = await dbConnect();

    const {title,description,tags,projectLink} = await req.json();
    try {
        if(!title || !description || !projectLink){
            return NextResponse.json(
                { error: 'Title, description, and projectLink are required' },
                { status: 400 }
            );
        }
        const project = await ProjectModel.create({
            title,
            description,
            tags,
            projectLink,
        });
        await project.save();
        console.log('Project created:', project);
        return NextResponse.json(
            { project },
            { status: 201 }
            
        );
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.json(
            { error: 'Failed to create project' },
            { status: 500 }
        );

        
    }


}