import fs from "fs";
import AWS from "aws-sdk";

// configure AWS
AWS.config.update({
  accessKeyId: "YOUR_AWS_ACCESS_KEY",
  secretAccessKey: "YOUR_AWS_SECRET_KEY",
  region: "ap-south-1"
});

const s3 = new AWS.S3();
const fileName = "test.txt"; // put any file in project root

const uploadFile = () => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: "your-bucket-name",
    Key: fileName,
    Body: fileContent
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error("❌ Error uploading:", err);
    } else {
      console.log(`✅ File uploaded at ${data.Location}`);
    }
  });
};
uploadFile();
