sam build --profile "CPE5" --region ap-south-1
sam validate --profile "CPE5" --region ap-south-1
sam deploy --guided --profile "CPE5" --region ap-south-1

//My personal AWS account cred
[default]
aws_access_key_id = AKIASMEDDWYIICBZCJL6
aws_secret_access_key = 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

//Impetus CPE5 AWS account cred
[CPE5]
aws_access_key_id = AKIASUL66WQOYZADEKHH
aws_secret_access_key = 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