# main.tf

# Include all the separate configuration files
module "user_service" {
  source = "./"

  # Pass in any necessary variables
  aws_region   = var.aws_region
  instance_type = var.instance_type
  key_name      = var.key_name
  vpc_id        = var.vpc_id
  subnet_id     = var.subnet_id
}

# Output the public IP of the EC2 instance
output "user_service_public_ip" {
  value = module.user_service.ec2_public_ip
}

# Output the S3 bucket name
output "user_service_s3_bucket" {
  value = module.user_service.s3_bucket_name
}
