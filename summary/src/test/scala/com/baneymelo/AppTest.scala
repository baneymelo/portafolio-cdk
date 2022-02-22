package com.baneymelo

import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent
import org.scalatest.funsuite.AnyFunSuite

class AppTest extends AnyFunSuite {
  test("happy path"){
    val expected =
      """{ "name" : "baney" ,"city" : "Medellin" }""".stripMargin
    val body = """{ "name" : "baney" ,"city" : "Medellin" }"""
    val input = APIGatewayV2HTTPEvent.builder().withBody(body).build()
    val actual = input.getBody
    assert(expected === actual)
  }
}
