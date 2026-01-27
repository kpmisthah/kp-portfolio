
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createPdf() {
    try {
        const doc = await PDFDocument.create();

        // Read images
        const img0Path = path.join(__dirname, '../public/resume_pages/img0.png');
        const img1Path = path.join(__dirname, '../public/resume_pages/img1.png');

        // Check if files exist
        if (!fs.existsSync(img0Path) || !fs.existsSync(img1Path)) {
            throw new Error('Images not found in public/resume_pages/');
        }

        const img0Bytes = fs.readFileSync(img0Path);
        const img1Bytes = fs.readFileSync(img1Path);

        const img0 = await doc.embedPng(img0Bytes);
        const img1 = await doc.embedPng(img1Bytes);

        // Use original dimensions (highest quality)
        const images = [img1, img0];

        for (const image of images) {
            const page = doc.addPage([image.width, image.height]);
            page.drawImage(image, {
                x: 0,
                y: 0,
                width: image.width,
                height: image.height,
            });
        }

        const pdfBytes = await doc.save();

        const outputPath = path.join(__dirname, '../public/resume.pdf');
        fs.writeFileSync(outputPath, pdfBytes);

        console.log('PDF created successfully at public/resume.pdf');
    } catch (error) {
        console.error('Error creating PDF:', error);
        process.exit(1);
    }
}

createPdf();
