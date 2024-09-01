# outputs.tf
output "instance_id" {
  value = aws_instance.user_service.id
}

output "public_ip" {
  value = aws_instance.user_service.public_ip
}

output "s3_bucket" {
  value = aws_s3_bucket.user_service_bucket.id
}
