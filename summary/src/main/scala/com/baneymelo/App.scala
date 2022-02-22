package com.baneymelo

import com.amazonaws.services.lambda.runtime.{Context, RequestHandler}
import com.amazonaws.services.lambda.runtime.events.{APIGatewayV2HTTPEvent, APIGatewayV2HTTPResponse}

object App extends RequestHandler[APIGatewayV2HTTPEvent, APIGatewayV2HTTPResponse]{

   def handleRequest(apiGatewayEvent: APIGatewayV2HTTPEvent, context: Context): APIGatewayV2HTTPResponse = {
    println(s"body = ${apiGatewayEvent.getBody}")
    APIGatewayV2HTTPResponse.builder()
      .withStatusCode(200)
      .withBody("Summary data processed")
      .build()
  }
}