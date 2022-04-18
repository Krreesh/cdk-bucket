// import * as ec2 from "@aws-cdk/aws-ec2";

const s3 = require('aws-cdk-lib/aws-s3');
const cdk = require ('aws-cdk-lib')
// import * as cdk from '@aws-cdk/core';
class BucketStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const mybucket = new s3.Bucket(this, 'MyFirstBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      encryption: s3.BucketEncryption.KMS,
      bucketKeyEnabled: true,
      versioned: true
    });
  }
}
module.exports = { BucketStack }