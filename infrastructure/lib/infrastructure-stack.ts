import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const summaryLambda = new lambda.Function(this, "summary", {
      handler: "com.baneymelo.App::handleRequest",
      runtime: lambda.Runtime.JAVA_11,
      code: lambda.Code.fromAsset("../summary/target/summary-jar-with-dependencies.jar"),
      memorySize: 512,
      timeout: cdk.Duration.minutes(5),
    })
  }
}
