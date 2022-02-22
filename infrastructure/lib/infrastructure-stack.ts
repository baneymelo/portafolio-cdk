import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as ag from '@aws-cdk/aws-apigateway';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // :: lambda
    const summaryLambda = new lambda.Function(this, "summary", {
      functionName: "summary-handler",
      handler: "com.baneymelo.App::handleRequest",
      runtime: lambda.Runtime.JAVA_11,
      code: lambda.Code.fromAsset("../summary/target/summary-jar-with-dependencies.jar"),
      memorySize: 512,
      timeout: cdk.Duration.minutes(5),
    })


    // :: api gateway
    const api = new ag.RestApi(this, "gateway", {
      restApiName: "summary-api",
      deploy: true,
      deployOptions: {
        stageName: 'v1',
      },
    })

    // resources
    const data = api.root.addResource('data')

    // methods
    data.addMethod(
        'POST',
        new ag.LambdaIntegration(summaryLambda, {proxy: true})
    )

    // output
    new cdk.CfnOutput(this, 'URL', {value: api.url});
  }
}
