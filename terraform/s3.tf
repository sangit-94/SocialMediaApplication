# s3.tf
resource "aws_s3_bucket" "user_service_bucket" {
  bucket = "user-service-bucket-${random_id.bucket_id.hex}"

  versioning {
    enabled = true
  }

  tags = {
    Name = "User Service Bucket"
  }
}

resource "random_id" "bucket_id" {
  byte_length = 4
}

output "s3_bucket_name" {
  value = aws_s3_bucket.user_service_bucket.bucket
}
