import { readFileSync, writeFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { PDFDocument } from "pdf-lib";
import { stringify } from "querystring";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const imageURL = path.join(
    process.cwd(),
    "public",
    "accidents",
    Math.floor(Math.random() * 10) + ".jpg"
  );
  const { vehicleNo } = req.query;
  const imageBytes = readFileSync(imageURL);
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  page.drawText(vehicleNo, {
    x: 250,
    y: 600,
    size: 24,
  });
  const image = await pdfDoc.embedJpg(imageBytes);
  const imageSize = image.scale(1.5);
  page.drawImage(image, {
    x: 100,
    y: 250,
    width: imageSize.width,
    height: imageSize.height,
  });
  const pdfBytes = await pdfDoc.save();
  const pdfPath = path.join(process.cwd(), "public", "challan.pdf");
  writeFileSync(pdfPath, pdfBytes);
  res.redirect(302, "/challan.pdf");
};

export default handler;
