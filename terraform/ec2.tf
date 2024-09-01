# ec2.tf
resource "aws_instance" "user_service" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI (update with your region's AMI ID)
  instance_type = var.instance_type
  key_name      = var.key_name
  subnet_id     = var.subnet_id

  tags = {
    Name = "User-Service-EC2"
  }

  security_groups = [aws_security_group.user_service_sg.name]

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y git
              curl -sL https://rpm.nodesource.com/setup_16.x | bash -
              yum install -y nodejs
              git clone https://your-repo-url.git /home/ec2-user/user-service
              cd /home/ec2-user/user-service
              npm install
              npm run build
              npm run start
            EOF
}

output "ec2_public_ip" {
  value = aws_instance.user_service.public_ip
}
