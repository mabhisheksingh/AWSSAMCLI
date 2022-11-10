version = 0.1
[y]
[y.deploy]
[y.deploy.parameters]
stack_name = "AbhishekS1"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-szwczjsh2uck"
s3_prefix = "AbhishekS1"
region = "ap-south-1"
capabilities = "CAPABILITY_IAM"
disable_rollback = true
image_repositories = []
confirm_changeset = true
profile = "CPE5"
parameter_overrides = "LambdaName=\"CPE-FIVE-DEV-\" LayerName=\"CPE-FIVE-DEV-UTILS-\" APIKEYNAME=\"AbhishekSAMGateway\""

[default]
[default.deploy]
[default.deploy.parameters]
stack_name = "AbhishekS1"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-szwczjsh2uck"
s3_prefix = "AbhishekS1"
region = "ap-south-1"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
disable_rollback = true
image_repositories = []
profile = "CPE5"
parameter_overrides = "LambdaName=\"CPE-FIVE-DEV-\" LayerName=\"CPE-FIVE-DEV-UTILS-\" APIKEYNAME=\"AbhishekSAMGateway\""
