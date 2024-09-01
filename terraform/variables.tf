# variables.tf
variable "aws_region" {
  description = "The AWS region to deploy resources to"
  default     = "us-west-2"
}

variable "instance_type" {
  description = "The type of instance to use"
  default     = "t2.micro"
}

variable "key_name" {
  description = "The name of the SSH key pair"
  default     = "your-key-pair-name"
}

variable "vpc_id" {
  description = "The VPC ID where the instance will be deployed"
  type        = string
}

variable "subnet_id" {
  description = "The Subnet ID where the instance will be deployed"
  type        = string
}
