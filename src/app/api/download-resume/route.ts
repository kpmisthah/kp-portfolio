import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Try to serve the original file
        const filePath = path.join(process.cwd(), 'public', 'resume.pdf');

        if (!fs.existsSync(filePath)) {
            return new NextResponse('File not found', { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath);

        // Using application/octet-stream forces the browser to download it as a "binary blob"
        // instead of trying to be smart and open it as a PDF. 
        // This bypasses PDF viewer corruption issues.
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename="KP_Misthah_Resume.pdf"',
            },
        });
    } catch (error) {
        console.error('Error serving PDF:', error);
        return new NextResponse('Error serving file', { status: 500 });
    }
}
