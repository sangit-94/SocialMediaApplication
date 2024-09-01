# provider.tf
provider "aws" {
  region = var.aws_region
  version = "~> 4.0"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket = "your-terraform-state-bucket"
    key    = "terraform/user-service/terraform.tfstate"
    region = var.aws_region
  }
}
