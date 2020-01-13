"use strict";
import {
  createClient,
} from "@aerogear/voyager-client";
import gql from "graphql-tag";
angular.module("phoenix.core.rhmi.sync", []).factory("rhmiSync", function() {
  const config = {
    httpUrl: "http://localhost:8004/graphql",
    wsUrl: "ws://localhost:8004/graphql"
  };

  let clientPromise = createClient(config);

  function initClient (config) {
    clientPromise = createClient(config);
  }

  function getClient() {
    return Promise.resolve(clientPromise);
  }

  function initializeQuery(query) {
    return gql(query);
  }
  
  return {
    initClient,
    getClient,
    initializeQuery
  };
});
