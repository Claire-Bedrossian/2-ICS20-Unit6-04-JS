// Copyright (c) 2023 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/2-ICS20-Unit6-04-JS/sw.js", {
    scope: "/2-ICS20-Unit6-04-JS/",
  })
}
window.onload = function () {
  // this calculates the volume of the sphere
  const params = new URLSearchParams(document.location.search)

  //input
  const length = parseFloat(params.get("l"))
  const width = parseFloat(params.get("w"))

  //process
  const area = length * width
  const perimeter = length * 2 + width * 2

  //output
  document.getElementById("perimeter").innerHTML =
    "<h6>The perimeter is equal to: " + perimeter + " cm</h6)"
  document.getElementById("area").innerHTML =
    "<h6>The area is equal to: " + area.toFixed(2) + " cm²</h6>"
}
