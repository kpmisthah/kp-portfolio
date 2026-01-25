import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'resume_final.pdf');
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return new NextResponse('File not found', { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="KP_Misthah_Resume.pdf"',
            },
        });
    } catch (error) {
        console.error('Error serving PDF:', error);
        return new NextResponse('Error serving file', { status: 500 });
    }
}
